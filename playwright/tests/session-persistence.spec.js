const { test, expect } = require('@playwright/test');

test('should persist user session between page reloads', async ({ page }) => {

  //loging proces
  await page.goto('http://localhost:3000/');
  await page.fill('[type="email"]', 'user_name@gamil.com');
  await page.fill('[type="password"]', 'pasword');
  await page.click('button');
  await expect(page).toHaveURL(/\/user-panel/);
  await expect(page.locator('#user-panel')).toBeVisible();

  // reload the page and ensure the app keeps the user logged in

  await page.screenshot({ path: 'C:/Users/1/Documents/js pruebas/my-react-app/my-react-app/playwright/img/user-dashboard-before-reload.png' });

  await page.reload();
  await expect(page.locator('#user-panel')).toBeVisible();
  await expect(page).toHaveURL(/\/user-panel/);

  await page.screenshot({ path: 'C:/Users/1/Documents/js pruebas/my-react-app/my-react-app/playwright/img/user-dashboard-after-reload.png' });
});
