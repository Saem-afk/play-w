import { test, expect } from '@playwright/test';

// test.use({storageState: 'storageState.json'})

// test('open webpage and find Swag Labs', async({page}) => {

//      await page.goto('https://www.saucedemo.com/');

//      await expect.stringContaining('Swag Labs');

// })

test('open webpage and login', async({page}) => {

    await page.goto('https://www.saucedemo.com/')

    await page.fill('#user-name', 'standard_user')
    await page.fill('#password', 'secret_sauce')

    await page.locator('#login-button').click()

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

    await page.context().storageState({ path: 'storageState.json' });


})