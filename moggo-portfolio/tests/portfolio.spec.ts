import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('personal site is readable and navigable without JavaScript', async ({
  browser,
}, testInfo) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: testInfo.project.use.viewport,
  });
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:4399/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    "Hi, I'm Moggo 👋",
  );
  await expect(
    page.getByRole('link', { name: 'amoghagarwal.dev@gmail.com' }),
  ).toHaveAttribute('href', 'mailto:amoghagarwal.dev@gmail.com');
  await expect(
    page.locator('#contact').getByRole('link', { name: 'LinkedIn' }),
  ).toHaveAttribute('href', 'https://www.linkedin.com/in/amogh-agarwal/');
  await expect(page.locator('.experience-item')).toHaveCount(6);
  const logos = page.locator('.company-logo img');
  await expect(logos).toHaveCount(6);
  for (const logo of await logos.all()) {
    await logo.scrollIntoViewIfNeeded();
    await expect
      .poll(() =>
        logo.evaluate(
          (image: HTMLImageElement) => image.complete && image.naturalWidth > 0,
        ),
      )
      .toBe(true);
  }
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  await page.screenshot({
    path: testInfo.outputPath('home.png'),
    fullPage: true,
  });
  await page
    .locator('#projects')
    .getByRole('link', { name: 'About this project →', exact: true })
    .click();
  await expect(page).toHaveURL('http://127.0.0.1:4399/work/moggo-dev/');
  await page.getByRole('link', { name: 'Back to projects' }).click();
  await expect(page).toHaveURL('http://127.0.0.1:4399/#projects');
  const response = await page.goto('http://127.0.0.1:4399/missing-page/');
  expect(response?.status()).toBe(404);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'Page not found',
  );
  await page.getByRole('link', { name: 'Back to home' }).click();
  await expect(page).toHaveURL('http://127.0.0.1:4399/');
  await context.close();
});

test('pages pass automated accessibility checks', async ({ page }) => {
  for (const path of ['/', '/work/moggo-dev/', '/missing-page/']) {
    await page.goto(path);
    expect(
      (
        await new AxeBuilder({ page })
          .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
          .analyze()
      ).violations,
    ).toEqual([]);
  }
  await page.goto('http://127.0.0.1:4399/');
  await page.keyboard.press('Tab');
  await expect(
    page.getByRole('link', { name: 'Skip to content' }),
  ).toBeFocused();
  await page.setViewportSize({ width: 320, height: 800 });
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
});
