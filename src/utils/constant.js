export const FEATURED = "featured";
export const PRICE_ASC = "price-asc";
export const PRICE_DESC = "price-desc";
export const LIST_TYPE = [
  "Trend cases",
  "Ult protection cases",
  "Ink cartridges",
  "Business cases",
  "Connectivity",
];

export const LIST_BRAND = [
  "Insignia™",
  "Samsung",
  "Metra",
  "HP",
  "Apple",
  "Swann",
  "Kwikset",
  "Night Owl",
  "Amazon",
  "Defender",
];

export const LIST_CATEGORY = [
  {
    categoryName: "Appliances",
    subCategories: [
      {
        categoryName: "Vacuum Belts",
        subCategories: [],
      },
      {
        categoryName: "Vacuum Bags",
        subCategories: [],
      },
      {
        categoryName: "Air Purifiers",
        subCategories: [],
      },
      {
        categoryName: "Dishwashers",
        subCategories: [],
      },
      {
        categoryName: "Ranges, Cooktops Ovens",
        subCategories: [
          { categoryName: "Cooktops" },
          { categoryName: "Range Hoods" },
          { categoryName: "Ranges" },
          { categoryName: "Wall Ovens" },
        ],
      },
      {
        categoryName: "Refrigerators",
        subCategories: [{ categoryName: "All Refrigerators" }],
      },
      {
        categoryName: "Small Kitchen Appliances",
        subCategories: [
          { categoryName: "Blenders Juicers" },
          { categoryName: "Coffee, Tea Espresso" },
          { categoryName: "Cookware" },
          { categoryName: "Deep Fryers" },
          { categoryName: "Food Processors" },
          { categoryName: "Kitchen Gadgets" },
          { categoryName: "Specialty Appliances" },
          { categoryName: "Toaster Pizza Ovens" },
          { categoryName: "Toasters" },
        ],
      },
      {
        categoryName: "Washers Dryers",
        subCategories: [
          { categoryName: "Dryers" },
          { categoryName: "Pedestals Organization" },
          { categoryName: "Stacked Units" },
          { categoryName: "Stacking Kits" },
          { categoryName: "Washer Dryer Combos" },
          { categoryName: "Washing Machines" },
        ],
      },
    ],
  },
  {
    categoryName: "Audio",
    subCategories: [
      {
        categoryName: "Auxiliary Input Cables",
        subCategories: [],
      },
      {
        categoryName: "Cables Chargers",
        subCategories: [{ categoryName: "MP3 Player Cables" }],
      },
      {
        categoryName: "Cases Armbands",
        subCategories: [{ categoryName: "All Cases Armbands" }],
      },
      {
        categoryName: "Headphones",
        subCategories: [
          { categoryName: "All Headphones" },
          { categoryName: "Earbud In-Ear Headphones" },
          { categoryName: "Headphone Accessories" },
          { categoryName: "On-Ear Headphones" },
          { categoryName: "Over-Ear Headphones" },
          { categoryName: "Studio Headphones" },
          { categoryName: "Wireless Headphones" },
        ],
      },
      {
        categoryName: "Home Audio",
        subCategories: [
          { categoryName: "CD Players Turntables" },
          { categoryName: "Home Theater Systems" },
          { categoryName: "Receivers Amplifiers" },
          { categoryName: "Retro Audio" },
          { categoryName: "Speakers" },
          { categoryName: "Stereo Shelf Systems" },
          { categoryName: "Wireless Multiroom Au" },
        ],
      },
      {
        categoryName: "Home Audio Accessories",
        subCategories: [{ categoryName: "Speaker Accessories" }],
      },
      {
        categoryName: "iPod MP3 Players",
        subCategories: [
          { categoryName: "MP3 Players" },
          { categoryName: "iPods" },
        ],
      },
    ],
  },
  {
    categoryName: "Cameras Camcorders",
    subCategories: [],
  },
  {
    categoryName: "Car Electronics GPS",
    subCategories: [],
  },
  {
    categoryName: "Cell Phones",
    subCategories: [],
  },
  {
    categoryName: "Computers Tablets",
    subCategories: [],
  },
  {
    categoryName: "Health, Fitness Beauty",
    subCategories: [],
  },
  {
    categoryName: "Toys, Games  Drones",
    subCategories: [],
  },
  {
    categoryName: "TV Home Theater",
    subCategories: [],
  },
  {
    categoryName: "Video Games",
    subCategories: [],
  },
];

export const LIST_PRICE_RANGE = [
  { lte: 1 },
  { gte: 1, lte: 80 },
  { gte: 80, lte: 160 },
  { gte: 160, lte: 240 },
  { gte: 240, lte: 1820 },
  { gte: 1820, lte: 3400 },
  { gte: 3400, lte: 4980 },
  { gte: 4980 },
];
