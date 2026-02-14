import { test, expect } from '@playwright/test';

test('learn pw on website formy project - autocomplete page', async ({ page }) => {
  
    await page.goto('https://formy-project.herokuapp.com/')

    // validasi locator
   await page.getByRole('link', { name: 'Autocomplete' }).click()
   await page.waitForTimeout(2000)

    // validasi auto complete page
    await expect(page).toHaveURL('https://formy-project.herokuapp.com/autocomplete')

    // menggunakan locator dari playwright ui
    await page.getByPlaceholder('Enter address').fill('ceger raya')

});