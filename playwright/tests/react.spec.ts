import { expect, test } from '@playwright/test'
import { getReportPath } from './utils'

test.describe('React', () => {
  test.beforeEach(async ({ page, browser }) => {
    await page.goto('http://localhost:4000/react/')
  })

  test.afterEach(async ({ browser }) => {
    await browser.stopTracing()
  })

  test('should have all products', async ({ page, browser }) => {
    await browser.startTracing(page, {
      path: getReportPath('react', 'have-all-products'),
    })

    await page.$('article') // wait for products
    const products = page.getByRole('article')
    const count = await products.count()

    expect(count).toBe(194)
  })

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

  searchTestCases.forEach(({ searchQuery, expected }) => {
    test(`should have correct items when searching ${searchQuery}`, async ({ page, browser }) => {
      await browser.startTracing(page, {
        path: getReportPath('react', 'search'),
      })

      const searchInput = page.getByPlaceholder('search', {
        exact: true,
      })
      await searchInput.fill(searchQuery)

      const products = page.getByRole('article')
      const count = await products.count()

      expect(count).toBe(expected)
    })
  })

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

  maxPriceTestCases.forEach(({ maxPrice, expected }) => {
    test(`should have correct items with a maxPrice of ${maxPrice}`, async ({ page, browser }) => {
      await browser.startTracing(page, {
        path: getReportPath('react', 'maxPrice'),
      })

      const maxPriceInput = page.getByPlaceholder('max price', {
        exact: true,
      })
      await maxPriceInput.fill(String(maxPrice))

      const products = page.getByRole('article')
      const count = await products.count()

      expect(count).toBe(expected)
    })
  })

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

  minRatingTestCases.forEach(({ minRating, expected }) => {
    test(`should have correct items with a minRating of ${minRating}`, async ({ page, browser }) => {
      await browser.startTracing(page, {
        path: getReportPath('react', 'minRating'),
      })

      const minRatingInput = page.getByPlaceholder('min rating', {
        exact: true,
      })
      await minRatingInput.fill(String(minRating))

      const products = page.getByRole('article')
      const count = await products.count()

      expect(count).toBe(expected)
    })
  })

  const onlyInStockTestCases = [
    {
      onlyInStock: true,
      expected: 188,
    },
    {
      onlyInStock: false,
      expected: 194,
    },
  ]

  onlyInStockTestCases.forEach(({ onlyInStock, expected }) => {
    test(`should have correct items when onlyInStock is ${onlyInStock}`, async ({ page, browser }) => {
      await browser.startTracing(page, {
        path: getReportPath('react', 'onlyInStock'),
      })

      const onlyInStockCheckbox = page.getByLabel('only in stock', {
        exact: true,
      })

      onlyInStock ? await onlyInStockCheckbox.check() : await onlyInStockCheckbox.uncheck()

      const products = page.getByRole('article')
      const count = await products.count()

      expect(count).toBe(expected)
    })
  })

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

  tagTestCases.forEach(({ tags, expected }) => {
    test(`should have correct items when tags ${String(tags)} are checked`, async ({ page, browser }) => {
      await browser.startTracing(page, {
        path: getReportPath('react', 'tags'),
      })

      for (const tag of tags) {
        const tagCheckbox = page.getByLabel(tag, {
          exact: true,
        })
        await tagCheckbox.check()
      }

      const products = page.getByRole('article')
      const count = await products.count()

      expect(count).toBe(expected)
    })
  })
})
