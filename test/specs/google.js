import { expect } from "chai";
import { Key } from 'webdriverio';

describe('suite', () =>
{
    it('SearchTextfield', async () =>
    {
      await browser.url('https://www.google.com/');
      await browser.maximizeWindow();
      await browser.pause(1000);
      await browser.$('#APjFqb').setValue('javascript');
      await browser.pause(1000);
      let title = await browser.getTitle();
      console.log(title);
      expect(title).to.equal("Google");
      await browser.keys(Key.Enter);
      await browser.pause(3000);
    })
})