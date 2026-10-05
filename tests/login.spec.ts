import { test, expect } from '@playwright/test';

test('login válido redireciona para inventário', async ({ page }) => {
await page.goto('/');

await page.fill('#user-name', 'standard_user');
await page.fill('#password', 'secret_sauce');
await page.click('#login-button');

await expect(page).toHaveURL(/inventory/);
await expect(page.locator('.inventory_list')).toBeVisible();

});
test('login inválido mostra mensagem de erro', async ({ page }) => {
await page.goto('/');

await page.fill('#user-name', 'usuario_errado');
await page.fill('#password', 'senha_errada');
await page.click('#login-button');
}); 