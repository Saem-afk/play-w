import { test, expect } from '@playwright/test';

test.use({storageState: 'storageState.json'})

test('login and select a product', async({page}) => {
    
    await page.goto('https://www.saucedemo.com/inventory.html')

    const productNames = ['Sauce Labs Onesie', 'Sauce Labs Fleece Jacket']

    for(const name of productNames){
        const productSelected = page.locator('.inventory_item').filter({ hasText: name })
        await productSelected.locator('button:has-text("Add to cart")').click()
    }

    await page.locator('.shopping_cart_container').click()

    await page.locator('#checkout').click()

    await page.fill('#first-name', 'Sam')
    await page.fill('#last-name', 'Sam')
    await page.fill('#postal-code', '0000')

    await page.locator('#continue').click()

    await page.locator('[data-test="finish"]').click()


    //await page.pause()


})