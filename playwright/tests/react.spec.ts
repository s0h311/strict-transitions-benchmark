import { expect, test } from '@playwright/test'
import { getReportPath } from './utils'

test('React', async ({ page, browser }) => {
  await page.goto('http://localhost:4000/react/')

  await browser.startTracing(page, {
    path: getReportPath('react-strict-transitions'),
  })

  // CASE: should have all products
  await page.$('article') // wait for products

  expect(await page.getByRole('article').count()).toBe(194)
  // CASE END

  // CASE: search
  const searchTestCases = [
    {
      searchQuery: 'red',
      expected: 9,
    },
    {
      searchQuery: 'dog',
      expected: 1,
    },
    {
      searchQuery: 'plant',
      expected: 2,
    },
    {
      searchQuery: 'bed',
      expected: 2,
    },
  ]

  for (const { searchQuery, expected } of searchTestCases) {
    const searchInput = page.getByPlaceholder('search', {
      exact: true,
    })
    await searchInput.fill(searchQuery)

    const products = page.getByRole('article')
    const count = await products.count()

    expect(count).toBe(expected)

    await searchInput.fill('')
  }
  // CASE END

  // CASE: maxPrice
  const maxPriceTestCases = [
    {
      maxPrice: 1,
      expected: 3,
    },
    {
      maxPrice: 10,
      expected: 46,
    },
    {
      maxPrice: 11,
      expected: 48,
    },
    {
      maxPrice: 100,
      expected: 133,
    },
    {
      maxPrice: 10000,
      expected: 183,
    },
  ]

  for (const { maxPrice, expected } of maxPriceTestCases) {
    const maxPriceInput = page.getByPlaceholder('max price', {
      exact: true,
    })
    await maxPriceInput.fill(String(maxPrice))

    const products = page.getByRole('article')
    const count = await products.count()

    expect(count).toBe(expected)

    await maxPriceInput.fill('')
  }
  // CASE END

  // CASE: minRating
  const minRatingTestCases = [
    {
      minRating: 4.9,
      expected: 10,
    },
    {
      minRating: 5,
      expected: 0,
    },
    {
      minRating: 3,
      expected: 144,
    },
    {
      minRating: 4,
      expected: 75,
    },
    {
      minRating: 2.9,
      expected: 163,
    },
  ]

  for (const { minRating, expected } of minRatingTestCases) {
    const minRatingInput = page.getByPlaceholder('min rating', {
      exact: true,
    })
    await minRatingInput.fill(String(minRating))

    const products = page.getByRole('article')
    const count = await products.count()

    expect(count).toBe(expected)

    await minRatingInput.fill('')
  }
  // CASE END

  // CASE: onlyInStock
  const onlyInStockCheckbox = page.getByLabel('only in stock', {
    exact: true,
  })

  await onlyInStockCheckbox.check()

  expect(await page.getByRole('article').count()).toBe(188)

  await onlyInStockCheckbox.uncheck()
  // CASE END

  // CASE: tags
  const tagTestCases = [
    {
      tags: ['beauty'],
      expected: 5,
    },
    {
      tags: ['furniture'],
      expected: 5,
    },
    {
      tags: ['meat'],
      expected: 2,
    },
    {
      tags: ['swing'],
      expected: 1,
    },
    {
      tags: ['kitchen tools'],
      expected: 19,
    },
    {
      tags: ['personal care'],
      expected: 3,
    },
    {
      tags: [
        'beauty',
        'mascara',
        'eyeshadow',
        'face powder',
        'lipstick',
        'nail polish',
        'fragrances',
        'perfumes',
        'furniture',
        'beds',
        'sofas',
        'bedside tables',
        'office chairs',
        'bathroom',
        'fruits',
        'meat',
        'pet supplies',
        'cat food',
        'cooking essentials',
        'vegetables',
        'dog food',
        'dairy',
        'seafood',
        'condiments',
        'desserts',
        'beverages',
        'coffee',
        'health supplements',
        'grains',
        'household essentials',
        'home decor',
        'swing',
        'photo frame',
        'artificial plants',
        'plant accessories',
        'lighting',
        'kitchen tools',
        'utensils',
        'drinkware',
        'cups',
        'kitchen appliances',
        'blenders',
        'cookware',
        'woks',
        'cutting boards',
        'juicers',
        'slicers',
        'cooktops',
        'strainers',
        'glasses',
        'graters',
        'ice cube trays',
        'cutlery',
        'storage',
        'microwaves',
        'organization',
        'pans',
        'dinnerware',
        'plates',
        'tongs',
        'pots',
        'turners',
        'serveware',
        'trays',
        'baking',
        'peelers',
        'laptops',
        'apple',
        'clothing',
        "men's shirts",
        "men's t-shirts",
        'footwear',
        'athletic shoes',
        'sports cleats',
        'casual shoes',
        'watches',
        'leather watches',
        'luxury watches',
        'electronics',
        'smart speakers',
        'wireless earphones',
        'over-ear headphones',
        'wireless chargers',
        'chargers',
        'power banks',
        'smartwatches',
        'phone accessories',
        'camera accessories',
        'selfie accessories',
        'motorcycles',
        'sportbikes',
        'scooters',
        'personal care',
        'hand soap',
        'body wash',
        'body lotion',
        'smartphones',
        'oppo',
        'realme',
        'samsung galaxy',
        'vivo',
        'sports equipment',
        'american football',
        'baseball',
        'basketball',
        'cricket',
        'badminton',
        'football',
        'golf',
        'tennis',
        'volleyball',
        'eyewear',
        'sunglasses',
        'party glasses',
        'tablets',
        'dresses',
        "girls' dresses",
        'sedans',
        'vehicles',
        'sports cars',
        'hatchbacks',
        'compact cars',
        'suvs',
        'minivans',
        'fashion accessories',
        'handbags',
        'leather bags',
        'designer bags',
        'backpacks',
        'gowns',
        'corsets',
        'skirts',
        'suits',
        'earrings',
        'slippers',
        'heel shoes',
        "women's shoes",
        "women's watches",
      ],
      expected: 194,
    },
  ]

  for (const { tags, expected } of tagTestCases) {
    for (const tag of tags) {
      const tagCheckbox = page.getByLabel(tag, {
        exact: true,
      })
      await tagCheckbox.check()
    }

    const products = page.getByRole('article')
    const count = await products.count()

    expect(count).toBe(expected)

    for (const tag of tags) {
      const tagCheckbox = page.getByLabel(tag, {
        exact: true,
      })
      await tagCheckbox.uncheck()
    }
  }
  // CASE END

  await browser.stopTracing()
})
