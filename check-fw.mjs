// 花火の確認（2026-08-26）。上がるか・邪魔しないか・期限で止まるか
import { chromium } from 'playwright-core';
const chrome='C:/Program Files/Google/Chrome/Application/chrome.exe';
const b = await chromium.launch({ executablePath: chrome });
const ok=(n,v)=>console.log(`  ${v?'OK  ':'NG  '} ${n}`);

for (const [ラベル, 日付] of [['期間中（8/26 12:00）','2026-08-26T12:00:00+09:00'],
                              ['期限後（8/27 00:30）','2026-08-27T00:30:00+09:00']]) {
  const ctx = await b.newContext({ viewport:{width:411,height:875}, deviceScaleFactor:2, isMobile:true, hasTouch:true });
  const page = await ctx.newPage();
  const errs=[]; page.on('pageerror', e=>errs.push(e.message.slice(0,80)));
  await page.addInitScript(`{
    const 本物 = Date;
    const ずらす = new 本物('${日付}').getTime() - 本物.now();
    Date = class extends 本物 {
      constructor(...a){ if(!a.length) super(本物.now()+ずらす); else super(...a); }
      static now(){ return 本物.now()+ずらす; }
    };
  }`);
  await page.goto('http://localhost:5460/', { waitUntil:'domcontentloaded' });
  await page.waitForTimeout(2500);
  console.log(`\n=== ${ラベル} ===`);
  const cv = await page.locator('canvas').count();
  if (日付.includes('08-26')) {
    ok('canvas が置かれる', cv === 1);
    // 何か描かれているか（3秒のあいだに中身が変わるか）
    const 動く = await page.evaluate(async () => {
      const c=document.querySelector('canvas'); if(!c) return false;
      const g=c.getContext('2d');
      const 取る=()=>{const d=g.getImageData(0,0,c.width,Math.min(300,c.height)).data;
        let s=0; for(let i=0;i<d.length;i+=1997) s+=d[i]; return s;};
      let 前=取る(), 変わった=false;
      for(let i=0;i<40;i++){ await new Promise(r=>setTimeout(r,120));
        const 今=取る(); if(今!==前){変わった=true;break;} 前=今; }
      return 変わった;
    });
    ok('花火が動いている', 動く);
    // 指を素通しするか
    const 素通し = await page.evaluate(() => {
      const c=document.querySelector('canvas');
      return getComputedStyle(c).pointerEvents==='none';
    });
    ok('指を素通しする（邪魔しない）', 素通し);
    // 実際にボタンが押せるか
    const 押せる = await page.evaluate(() => {
      const btn=document.querySelector('.buy-btn'); if(!btn) return false;
      const r=btn.getBoundingClientRect();
      const t=document.elementFromPoint(r.x+r.width/2, r.y+r.height/2);
      return !!(t && (t===btn || btn.contains(t)));
    });
    ok('ダウンロードのボタンが押せる', 押せる);
    await page.screenshot({ path: 'fw.png' });
  } else {
    ok('期限後は canvas を置かない', cv === 0);
    const 押せる = await page.evaluate(() => {
      const btn=document.querySelector('.buy-btn'); if(!btn) return false;
      const r=btn.getBoundingClientRect();
      const t=document.elementFromPoint(r.x+r.width/2, r.y+r.height/2);
      return !!(t && (t===btn || btn.contains(t)));
    });
    ok('ボタンは変わらず押せる', 押せる);
  }
  console.log('   エラー:', errs.length?errs:'なし');
  await ctx.close();
}
await b.close();
