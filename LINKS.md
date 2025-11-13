# Product Links Configuration

This file explains where to add your product links in the codebase.

## Where to Add Product Links

### Navigation Dropdown Menu

**File:** `src/components/Navbar.tsx`

**Location:** Lines 12-45 (products array)

Update the `link` property for each product:

```typescript
const products: Product[] = [
  {
    name: 'Cal Coach',
    description: 'Smart calorie tracking & nutrition guide',
    link: '#', // 👈 REPLACE THIS
    icon: '...',
    gradient: 'gradient-green',
    status: 'Live',
  },
  {
    name: 'Evo-TFX',
    description: 'AI-powered API testing platform',
    link: '#', // 👈 REPLACE THIS
    icon: '...',
    gradient: 'gradient-blue',
    status: 'Live',
  },
  {
    name: 'NextPost',
    description: 'Social media management suite',
    link: '#', // 👈 REPLACE THIS
    icon: '...',
    gradient: 'gradient-purple',
    status: 'Live',
  },
  {
    name: 'DarkPearl',
    description: 'Natural language to code converter',
    link: '#', // 👈 REPLACE THIS
    icon: '...',
    gradient: 'gradient-blue',
    status: 'Beta',
  },
];
```

## Link Examples

### Internal Links (Within Website)
```typescript
link: '#products'  // Scrolls to products section
link: '#contact'   // Scrolls to contact section
```

### External Links (To Product Websites)
```typescript
link: 'https://calcoach.example.com'
link: 'https://evotfx.example.com'
link: 'https://nextpost.example.com'
link: 'https://darkpearl.example.com'
```

### Relative Links (If hosted on same domain)
```typescript
link: '/calcoach'
link: '/evotfx'
link: '/nextpost'
link: '/darkpearl'
```

## Product Information Structure

Each product has the following properties:

### Required Fields
- **name** (string) - Product name displayed in menu
- **description** (string) - Short description (under 50 chars recommended)
- **link** (string) - URL where users will be directed on click
- **icon** (string) - SVG path data for the icon
- **gradient** (string) - CSS class for icon gradient color
- **status** (string) - Product status: 'Live', 'Beta', or 'Coming Soon'

## Adding a New Product

To add a new product to the dropdown:

1. Open `src/components/Navbar.tsx`
2. Find the `products` array (around line 12)
3. Add a new object:

```typescript
{
  name: 'Your Product Name',
  description: 'Short description here',
  link: 'https://your-product-url.com',
  icon: 'SVG_PATH_HERE', // Get from Heroicons or similar
  gradient: 'gradient-blue', // Options: gradient-blue, gradient-green, gradient-purple, gradient-orange
  status: 'Live', // Options: 'Live', 'Beta', 'Coming Soon'
},
```

## Icon Options

The gradient classes available:

- `gradient-blue` - Blue to indigo gradient
- `gradient-green` - Green to teal gradient
- `gradient-purple` - Purple to pink gradient
- `gradient-orange` - Orange to red gradient

## Status Badges

Status options and their meanings:

- **'Live'** - Product is fully available and ready to use (Green badge)
- **'Beta'** - Product is in beta testing phase (Blue badge)
- **'Coming Soon'** - Product is under development (Orange badge)

## Mobile Menu

The same `products` array is used for the mobile menu, so updating the links in one place updates them everywhere!

## Testing Your Links

After updating the links:

1. Save the file
2. The dev server will auto-reload
3. Hover over "Products" in the navigation
4. Click on any product to test the link

## Need Help?

If you need to:
- Change product order - Rearrange items in the array
- Remove a product - Delete its object from the array
- Update descriptions - Edit the `description` field
- Change status - Update the `status` field

All changes are made in `src/components/Navbar.tsx` in the `products` array!

---

**Last Updated:** [Add your date here]
**Maintained By:** Evolune EdgeTech Team
