import { chromium } from 'file:///C:/Users/priya/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
const output='output/website-qa';
await mkdir(output,{recursive:true});
const browser=await chromium.launch({channel:'msedge',headless:true});
const failures=[];const checks=[];
try {
 const page=await browser.newPage({viewport:{width:1440,height:1000}});
 page.on('pageerror',error=>failures.push(error.message));
 page.on('response',response=>{if(response.status()>=400)failures.push(`${response.status()} ${response.url()}`)});
 await page.goto('http://127.0.0.1:4182',{waitUntil:'networkidle'});
 await page.screenshot({path:`${output}/hero.png`});
 const phone=page.locator('.lunar-phone-front');const initial=await phone.evaluate(e=>getComputedStyle(e).transform);await page.waitForTimeout(450);assert.notEqual(await phone.evaluate(e=>getComputedStyle(e).transform),initial,'Hero should animate');
 await page.getByRole('button',{name:'Pause hero animation'}).click();const paused=await phone.evaluate(e=>getComputedStyle(e).transform);await page.waitForTimeout(200);assert.equal(await phone.evaluate(e=>getComputedStyle(e).transform),paused,'Pause should hold the frame');checks.push('Hero animation advances and pause holds frame');
 for(const name of ['Computer','Cloud','Phone']){await page.getByRole('button',{name,exact:true}).click();await page.waitForTimeout(600);assert.equal(await page.getByRole('button',{name,exact:true}).getAttribute('aria-pressed'),'true');}
 checks.push('All inference modes selectable');
 for(const name of ['LM Studio','Remote setup','Phone models','AI providers','Appearance','Your space']){await page.getByRole('button',{name,exact:false}).filter({has:page.locator('svg')}).first().click();await page.waitForTimeout(600);assert(await page.locator('#app-screen-preview img').evaluate(e=>e.complete&&e.naturalWidth>0));}
 checks.push('All six gallery images load');
 for(const name of ['Glass Night','Paper','Mono','Midnight','Glass']){await page.getByRole('button',{name,exact:true}).click();await page.waitForTimeout(100);await page.locator('#theme-preview img').evaluate(e=>e.decode());}
 checks.push('All five theme images load');
 for(const width of [375,768,1024,1440]){await page.setViewportSize({width,height:900});await page.goto('http://127.0.0.1:4182',{waitUntil:'networkidle'});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`Overflow at ${width}`);await page.locator('img').evaluateAll(images=>Promise.all(images.map(image=>{image.loading='eager';return image.decode();})));if(width===1440){await page.evaluate(()=>scrollTo(0,0));await page.screenshot({path:`${output}/desktop.png`,fullPage:true});}if(width===375){await page.evaluate(()=>scrollTo(0,0));await page.getByRole('button',{name:'Open menu'}).click();await page.getByRole('navigation',{name:'Mobile navigation'}).getByRole('link',{name:'Privacy'}).click();await page.waitForURL('**/privacy');await page.goto('http://127.0.0.1:4182',{waitUntil:'networkidle'});await page.locator('img').evaluateAll(images=>Promise.all(images.map(image=>{image.loading='eager';return image.decode();})));await page.screenshot({path:`${output}/mobile-hero.png`});await page.screenshot({path:`${output}/mobile.png`,fullPage:true});}checks.push(`No horizontal overflow at ${width}px`);}
 for(const route of ['features','how-it-works','privacy','delete-account','download','support','terms']){await page.goto(`http://127.0.0.1:4182/${route}`,{waitUntil:'networkidle'});assert.equal(await page.locator('h1').count(),1);await page.setViewportSize({width:375,height:900});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`Overflow ${route}`);}
 checks.push('All seven supporting routes render, with no mobile overflow');
 await page.emulateMedia({reducedMotion:'reduce'});await page.goto('http://127.0.0.1:4182',{waitUntil:'networkidle'});assert.equal(await page.locator('.lunar-phone-front').evaluate(e=>getComputedStyle(e).animationName),'none');checks.push('Reduced motion disables hero animation');
 assert.deepEqual(failures,[]);checks.push('No browser runtime or HTTP errors');
 await writeFile(`${output}/results.json`,JSON.stringify({checks,failures},null,2));console.log(JSON.stringify({checks,failures},null,2));
}finally{await browser.close();}
