import { useEffect, useRef, useState } from 'react';

/**
 * お祝いの花火（2026-08-26、ヒマワリからの手紙）。
 *
 * **App Store の審査が通った。174か国に並んだ。** そのお祝いに、
 * 今日いっぱいだけ HP に花火を上げる（伊波さんの提案）。
 *
 * ■ 消しかた
 *
 * ⚠️ **期限が来れば自分で止まる**ので、急いで消す必要はない。
 *    完全に消すときは App.tsx から <Fireworks /> の1行を外して、
 *    このファイルを消すだけ。**ほかのどこにも手を入れていない。**
 *
 * ■ 気をつけたこと
 *
 * ⚠️ **読む邪魔をしないこと**（ヒマワリからの指定）。
 *    `pointer-events: none` で指を素通しさせ、押せなくなる場所を作らない。
 *
 * ⚠️ **外のライブラリを使わない。** canvas-confetti などは読み込みが増え、
 *    お祝いのために表示が遅くなっては本末転倒。自分で書けば 5KB で済む。
 *
 * ⚠️ **止めるのではなく休ませる。** requestAnimationFrame は回したまま、
 *    描くものが無ければ何もしない。止めると次に上げるとき動き出さない
 *    （tinyCUBE の描画ループで踏んだのと同じ話）。
 */

/** いつまで上げるか。日本時間の 2026-08-27 00:00（＝8/26 いっぱい） */
const UNTIL = new Date('2026-08-26T23:59:59.999+09:00').getTime();

/** ひと粒。上がる玉と、開いたあとの火の粉の両方に使う */
type Spark = {
  x: number; y: number;
  vx: number; vy: number;
  /** 残りの寿命（ミリ秒）。0 で消える */
  life: number; max: number;
  hue: number;
  /** 打ち上げ中の玉か。true なら、消えるときに開く */
  rising: boolean;
  /** 開いたときの大きさ */
  power: number;
};

export default function Fireworks() {
  const ref = useRef<HTMLCanvasElement>(null);
  // 期限が過ぎていたら、そもそも何も置かない
  const [on] = useState(() => Date.now() < UNTIL);

  useEffect(() => {
    if (!on) return;
    const cv = ref.current;
    if (!cv) return;
    const g = cv.getContext('2d');
    if (!g) return;

    let W = 0, H = 0;
    const fit = () => {
      // 見た目の大きさと中身の大きさを合わせる。
      // 端末の細かさ（devicePixelRatio）は 2 で頭打ちにする。
      // 3 以上だと粒が増えたときに重くなるわりに、見た目は変わらない
      const r = Math.min(window.devicePixelRatio || 1, 2);
      W = cv.width = Math.floor(innerWidth * r);
      H = cv.height = Math.floor(innerHeight * r);
      cv.style.width = innerWidth + 'px';
      cv.style.height = innerHeight + 'px';
      g.scale(1, 1);
    };
    fit();
    window.addEventListener('resize', fit);

    const sparks: Spark[] = [];

    /** 玉を1つ打ち上げる */
    const launch = () => {
      const r = Math.min(window.devicePixelRatio || 1, 2);
      sparks.push({
        // 端に寄りすぎると開いたときに片側が切れる
        x: W * (0.15 + Math.random() * 0.7),
        y: H,
        vx: (Math.random() - 0.5) * 0.06 * r,
        // 上がる速さ。画面の高さで決めるので、縦長でも横長でも同じ高さまで上がる
        vy: -(H / 1000) * (0.9 + Math.random() * 0.45),
        life: 700 + Math.random() * 500,
        max: 1200,
        hue: Math.random() * 360,
        rising: true,
        power: (0.10 + Math.random() * 0.10) * Math.min(W, H),
      });
    };

    /** 玉が開く。火の粉を丸く散らす */
    const burst = (s: Spark) => {
      const n = 34 + Math.floor(Math.random() * 22);
      for (let i = 0; i < n; i++) {
        // きれいな円ではなく、少し散らす。揃いすぎると作り物に見える
        const a = (i / n) * Math.PI * 2 + Math.random() * 0.2;
        const sp = (0.35 + Math.random() * 0.65) * s.power / 260;
        sparks.push({
          x: s.x, y: s.y,
          vx: Math.cos(a) * sp, vy: Math.sin(a) * sp,
          life: 800 + Math.random() * 900,
          max: 1700,
          // 同じ玉から出た火の粉は色を近くする。1発が1色に見える
          hue: s.hue + (Math.random() - 0.5) * 40,
          rising: false,
          power: 0,
        });
      }
    };

    let last = 0;
    let 次 = 0;
    let alive = true;

    const draw = (now: number) => {
      if (!alive) return;
      requestAnimationFrame(draw);
      const dt = last ? Math.min(now - last, 60) : 16;
      last = now;

      // ⚠️ **期限が来たら描くのをやめる。** ループは回したままにして、
      //    canvas を1度だけ消す。止めると消し残る
      if (Date.now() >= UNTIL) {
        if (sparks.length) { sparks.length = 0; g.clearRect(0, 0, W, H); }
        return;
      }

      // 次の玉。間隔をばらつかせる。等間隔だと機械が上げているように見える
      if (now > 次) {
        launch();
        // ときどき続けて上げる。連発があると本物らしい
        if (Math.random() < 0.35) setTimeout(launch, 120 + Math.random() * 180);
        次 = now + 700 + Math.random() * 1400;
      }

      // 前のコマを薄く残して、尾を引かせる。
      // ⚠️ clearRect にすると尾が消えて、点が飛んでいるだけに見える
      g.globalCompositeOperation = 'source-over';
      g.fillStyle = 'rgba(5, 7, 17, 0.22)';
      g.fillRect(0, 0, W, H);

      // 光を足して重ねる。暗い背景で色が沈まない
      g.globalCompositeOperation = 'lighter';
      const 重力 = (H / 1000) * 0.0016;

      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.life -= dt;
        if (s.life <= 0) {
          if (s.rising) burst(s);
          sparks.splice(i, 1);
          continue;
        }
        s.x += s.vx * dt;
        s.y += s.vy * dt;
        s.vy += 重力 * dt;
        if (!s.rising) {
          // 火の粉は空気に押されて、だんだん遅くなる
          s.vx *= 0.985; s.vy *= 0.985;
        }

        const t = s.life / s.max;
        const r = s.rising ? 2.2 : 1.6 + t * 1.6;
        g.globalAlpha = Math.max(0, Math.min(1, t * 1.2));
        g.fillStyle = `hsl(${s.hue}, 100%, ${s.rising ? 78 : 62 + t * 30}%)`;
        g.beginPath();
        g.arc(s.x, s.y, r, 0, Math.PI * 2);
        g.fill();
      }
      g.globalAlpha = 1;
    };
    requestAnimationFrame(draw);

    return () => {
      alive = false;
      window.removeEventListener('resize', fit);
    };
  }, [on]);

  if (!on) return null;
  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      style={{
        position: 'fixed', inset: 0,
        // ⚠️ **指を素通しさせること**（ヒマワリからの指定）。
        //    これが無いと、画面全体が押せなくなる
        pointerEvents: 'none',
        // 本文より前、けれど固定ヘッダー（z-index:100）よりは後ろ
        zIndex: 60,
      }}
    />
  );
}
