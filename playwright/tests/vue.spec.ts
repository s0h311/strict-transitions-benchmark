import {expect, test} from '@playwright/test'

test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:3000/vue/')
})

test('should have correct title', async ({page}) => {
  const title = page.getByText('Nice having you here.')

  const isTitleVisible = await title.isVisible()

  expect(isTitleVisible).toBeTruthy()
})
