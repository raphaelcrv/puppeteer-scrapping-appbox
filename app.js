const puppeteer = require('puppeteer');

console.log('hellow');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
      width: 1232,
      height: 1424,
      deviceScaleFactor :2
  });
  await page.goto('https://app.box.com/s/lvv6t9l9pylwy36e67llb4oiqcqclzx5');
  await page.waitForSelector('#page1',{timeout : 150000});
  await page.waitForTimeout(2000);


  for (let index = 0; index < 1; index++) {
    await page.click("[data-bp-vs-row-index='"+9+"'] .bp-thumbnail-nav")
    await page.waitForTimeout(1000);
    await page.screenshot({ path: './print/example'+index+'.png', clip : {x : 240, y: 90, width:980, height: 1250} });

  }

  //await page.screenshot({ path: 'example.png' });

  /*
  const data = await page.evaluate(() => {
   let b64 = document.querySelector('#page1');
   console.log(b64);
  });
  */

  
  
  
  // let el = await page.$$("#page1").toDataUrl();
  /*let el = await page.$$("#page1").toDataUrl();
  console.log(el);*/


  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();