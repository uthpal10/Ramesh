import AmazonPage from "../pageobjects/AmazonPage.js";
describe('suite', ()=>{
    it('amazon buy demo',async()=>{

        await browser.url('https://www.amazon.in/')
        await browser.pause(2000)
        await AmazonPage.Amazonbuy('iphone')
        
        await browser.pause(2000)
        //await browser.keys(Enter)
        await AmazonPage.searchclick.click()
        await browser.pause(2000)
        //await browser.scroll(iphonelink())
        // await browser.pause(3000)
        // await   browser.execute(()=>{window.scrollY})
        // await browser.scroll(0,4000)
        // await browser.pause(3000)
         await AmazonPage.iphonelink.click()
        await browser.pause(2000)
        await AmazonPage.addtocartbtn.click()
        await browser.pause(2000)
        await AmazonPage.proceedbtn.click()



    })
})