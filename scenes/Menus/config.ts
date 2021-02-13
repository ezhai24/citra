export enum ModifierOrientation {
  ROW,
  COLUMN,
}

export interface ModifierType {
  name: string;
  price: number;
}

export interface MenuItemType {
  name: string;
  price?: number;
  description?: string;
  flavors?: string;
  modifiers?: ModifierType[];
  modifierOrientation?: ModifierOrientation;
}

export interface AdditionsType {
  name: string;
  price?: number;
  flavors?: string;
  modifiers?: ModifierType[];
  modifierOrientation?: ModifierOrientation;
}

export interface MenuItemsByCategoryType {
  category: string;
  items: MenuItemType[];
  additions?: AdditionsType[];
}

export interface MenuType {
  title: string;
  menuItemsByCategory: MenuItemsByCategoryType[];
}

const drinksMenu: MenuType = {
  title: 'Drinks',
  menuItemsByCategory: [
    {
      category: 'Milk Tea',
      items: [
        {
          name: 'Original',
          price: 5,
          description: `
            A timeless classic, our original milk tea is a well-balanced, 
            sweet, creamy creation. Try it with our fresh-made tapioca!
          `,
        },
        {
          name: 'Flavored',
          price: 5.5,
          flavors: `
            Avocado, Banana, Blueberry, Café Mocha, Coconut, Green Apple, Honey 
            Dew, Kiwi, Lemonade, Lychee, Mango, Oreo, Papaya, Passion Fruit, 
            Peach, Pineapple, Raspberry, Red Bean, Rose, Strawberry, Taro, 
            Vanilla Yogurt, Watermelon
          `,
        },
        {
          name: 'Black',
          price: 5.5,
          flavors: `
            Assam, Caramel, Ceylon Sonata, Chocolate Truffle, Earl Grey 
            Lavender, Earl Grey Moonlight, English Breakfast, Fujian Baroque, 
            Ginger, Irish Breakfast, Pomegranate, Summer Rose, Thai Chai
          `,
        },
        {
          name: 'Decaf Black',
          price: 5.5,
          flavors: 'Ceylon, Earl Grey, Hazelnut Cin Creme, Mango, Vanilla',
        },
        {
          name: 'Green',
          price: 5.5,
          flavors: `
            Apricot, Cherry, Coco Mint, Gun Powder, Jasmin, Kukicha, Mango, 
            Pomegranate, Raspberry
          `,
        },
        {
          name: 'Oolong',
          price: 5.5,
          flavors: `
            Almond, Formosa, Grapefruit, Oolong Vanilla, Peach, RajaOolong Cha
          `,
        },
        {
          name: 'Rooibos',
          price: 5.75,
          flavors: `
            Rooibos, Berry, Berry Blue, Cha Cha, Chamomile, Green Bonita, Honey 
            Boosh, Honey Boosh Chocolate, Hazelnut, Jasmin, Mango, Orange, 
            Passion Fruit Tango, Peppermint, Spearmint, Tumeric Bliss, Vanilla 
            Chai, Watermelon, Wild Strawberry
          `,
        },
      ],
      additions: [
        {
          name: 'Toppings',
          price: 0.75,
          flavors: `
            Tapioca, Coconut Jelly, Lychee Jelly, Pineapple Jelly, Green 
            Apple Jelly, Mango Jelly, Strawberry Jelly, Rainbow Jelly
          `
        },
      ],
    },
    {
      category: 'Smoothies',
      items: [
        {
          name: 'Classic',
          price: 5.5,
          flavors: `
            Avocado, Banana, Blueberry, Café Mocha, Coconut, Green Apple, Honey 
            Dew, Kiwi, Lemonade, Lychee, Mango, Oreo, Papaya, Passion Fruit, 
            Peach, Pineapple, Raspberry, Red Bean, Rose, Strawberry, Taro, 
            Vanilla Yogurt, Watermelon
          `,
        },
        {
          name: 'Specialty',
          price: 7,
          flavors: `
            Captain Crunch, Strawberry Passion, Tropical Paradise, White Berry 
            Crème, Kiwi Milk Berry, Three Berry Splash, Citrus Blast, Hawaiian 
            Breeze, Choco Berry, Urban Fruit, Chai, Thai, Vanilla Rootscicle, 
            Almond Roca, Peach Passion, Blueberry Tart, Strawberry Dream, Orange
            Dream, Melon Dream, Berry Berry, Strawberry Splash, Snickers, Adlay,
            Multigrain
          `,
        },
        {
          name: 'Blended',
          price: 7.95,
          description: `
            Everything you've come to love about smoothies - now blended with 
            our scratch-made froyo!
          `,
          flavors: `
            Peanut Butter & Banana, Mixed Berry, Green Tea Latte, Tropical, 
            Strawberry & Banana, Breakfast
          `,
        },
        {
          name: 'Mystery',
          price: 7,
          description: `
            Five of our delicious classic smoothie flavors blended into one 
            tasty drink. Guess all five flavors correctly when you order in 
            store and get it free of charge!
          `,
        },
      ],
      additions: [
        {
          name: 'Toppings',
          price: 0.75,
          flavors: `
            Tapioca, Coconut Jelly, Lychee Jelly, Pineapple Jelly, Green 
            Apple Jelly, Mango Jelly, Strawberry Jelly, Rainbow Jelly
          `
        },
      ],
    },
    {
      category: 'Tea',
      items: [
        {
          name: 'Black',
          flavors: `
            Assam, Caramel, Ceylon Sonata, Chocolate Truffle, Earl Grey 
            Lavender, Earl Grey Moonlight, English Breakfast, Fujian Baroque, 
            Ginger, Irish Breakfast, Pomegranate, Summer Rose, Thai Chai
          `,
          modifiers: [
            { name: '12oz', price: 3.05 },
            { name: '16oz', price: 3.55 },
            { name: '20oz', price: 4.05 },
          ],
        },
        {
          name: 'Decaf Black',
          flavors: 'Ceylon, Earl Grey, Hazelnut Cin Creme, Mango, Vanilla',
          modifiers: [
            { name: '12oz', price: 3.05 },
            { name: '16oz', price: 3.55 },
            { name: '20oz', price: 4.05 },
          ],
        },
        {
          name: 'Green',
          flavors: `
            Apricot, Cherry, Coco Mint, Gun Powder, Jasmin, Kukicha, Mango, 
            Pomegranate, Raspberry
          `,
          modifiers: [
            { name: '12oz', price: 3.05 },
            { name: '16oz', price: 3.55 },
            { name: '20oz', price: 4.05 },
          ],
        },
        {
          name: 'Oolong',
          flavors: `
            Almond, Formosa, Grapefruit, Oolong Vanilla, Peach, RajaOolong Cha
          `,
          modifiers: [
            { name: '12oz', price: 3.05 },
            { name: '16oz', price: 3.55 },
            { name: '20oz', price: 4.05 },
          ],
        },
        {
          name: 'Rooibos',
          flavors: `
            Rooibos, Berry, Berry Blue, Cha Cha, Chamomile, Green Bonita, Honey 
            Boosh, Honey Boosh Chocolate, Hazelnut, Jasmin, Mango, Orange, 
            Passion Fruit Tango, Peppermint, Spearmint, Tumeric Bliss, Vanilla 
            Chai, Watermelon, Wild Strawberry
          `,
          modifiers: [
            { name: '12oz', price: 3.35 },
            { name: '16oz', price: 3.85 },
            { name: '20oz', price: 4.35 },
          ],
        },
      ],
    },
    {
      category: 'Coffee',
      items: [
        {
          name: 'Drip Ice',
          modifiers: [
            { name: '8oz', price: 2.8 },
            { name: '12oz', price: 3.2 },
            { name: '16oz', price: 3.6 },
          ],
        },
        {
          name: 'Americano',
          modifiers: [
            { name: '8oz', price: 3.3 },
            { name: '12oz', price: 3.8 },
            { name: '16oz', price: 4.3 },
            { name: '20oz', price: 4.8 },
          ],
        },
        {
          name: 'Latte',
          modifiers: [
            { name: '8oz', price: 4.3 },
            { name: '12oz', price: 4.8 },
            { name: '16oz', price: 5.3 },
            { name: '20oz', price: 5.8 },
          ],
        },
        {
          name: 'Ginseng Latte',
          modifiers: [
            { name: '8oz', price: 5.5 },
            { name: '12oz', price: 6 },
            { name: '16oz', price: 6.5 },
            { name: '20oz', price: 7 },
          ],
        },
        {
          name: 'Adlay Latte',
          modifiers: [
            { name: '8oz', price: 4.5 },
            { name: '12oz', price: 5 },
            { name: '16oz', price: 5.5 },
            { name: '20oz', price: 6 },
          ],
        },
        {
          name: 'Chai Latte',
          modifiers: [
            { name: '8oz', price: 4.5 },
            { name: '12oz', price: 5 },
            { name: '16oz', price: 5.5 },
            { name: '20oz', price: 6 },
          ],
        },
        {
          name: 'Green Tea Latte',
          modifiers: [
            { name: '8oz', price: 4.5 },
            { name: '12oz', price: 5 },
            { name: '16oz', price: 5.5 },
            { name: '20oz', price: 6 },
          ],
        },
        {
          name: 'Multigrain Latte',
          modifiers: [
            { name: '8oz', price: 4.3 },
            { name: '12oz', price: 4.8 },
            { name: '16oz', price: 5.3 },
            { name: '20oz', price: 5.8 },
          ],
        },
        {
          name: 'Cappuccino',
          modifiers: [
            { name: '8oz', price: 4.3 },
            { name: '12oz', price: 4.8 },
            { name: '16oz', price: 5.3 },
            { name: '20oz', price: 5.8 },
          ],
        },
        {
          name: 'Café Mocha',
          modifiers: [
            { name: '8oz', price: 4.85 },
            { name: '12oz', price: 5.35 },
            { name: '16oz', price: 5.85 },
            { name: '20oz', price: 6.35 },
          ],
        },
        {
          name: 'White Mocha',
          modifiers: [
            { name: '8oz', price: 5.1 },
            { name: '12oz', price: 5.6 },
            { name: '16oz', price: 6.1 },
            { name: '20oz', price: 6.6 },
          ],
        },
        {
          name: 'Caramel Macchiato',
          modifiers: [
            { name: '8oz', price: 5.15 },
            { name: '12oz', price: 5.6 },
            { name: '16oz', price: 6.1 },
            { name: '20oz', price: 6.6 },
          ],
        },
        {
          name: 'Blended Coffee',
          price: 7.75,
        },
        {
          name: 'Espresso',
          price: 3.2,
        },
        {
          name: 'Macchiato',
          price: 3.7,
        },
        {
          name: 'Hot Chocolate',
          modifiers: [
            { name: '8oz', price: 3.5 },
            { name: '12oz', price: 4 },
            { name: '16oz', price: 4.5 },
            { name: '20oz', price: 5 },
          ],
        },
        {
          name: 'White Chocolate',
          modifiers: [
            { name: '8oz', price: 3.65 },
            { name: '12oz', price: 4.05 },
            { name: '16oz', price: 4.65 },
            { name: '20oz', price: 5.05 },
          ],
        },
      ],
      additions: [
        {
          name: 'Additions',
          modifiers: [
            { name: 'Espresso Shot', price: 1 },
            { name: 'Almond Milk', price: 0.8 },
            { name: 'Breve', price: 0.8 },
            { name: 'Coconut Milk', price: 0.8 },
            { name: 'Soy Milk', price: 0.8 },
            { name: 'Oat Milk', price: 1.25 },
            { name: 'Syrup', price: 0.5 },
          ],
          modifierOrientation: ModifierOrientation.COLUMN,
        },
      ],
    },
    {
      category: 'Other',
      items: [
        {
          name: 'Lemonade Iced Tea',
          modifiers: [
            { name: '12oz', price: 4.50 },
            { name: '16oz', price: 5 },
            { name: '20oz', price: 5.50 },
          ],
        },
        {
          name: 'Italian Soda',
          modifiers: [
            { name: '12oz', price: 4.25 },
            { name: '16oz', price: 4.75 },
            { name: '20oz', price: 5.25 },
          ],
        }
      ],
    },
  ],
};

const snackMenu = {
  title: 'Snacks',
  menuItemsByCategory: [
    {
      category: 'Frozen Yogurt',
      items: [
        {
          name: 'Original',
          price: 4,
          description: `
            Creamy, sweet, and just the right amount of tangy. Everything you
            love about yogurt now in a frozen dessert.
          `,
        },
        {
          name: 'Flavored',
          price: 4.55,
          flavors: 'Soy, Taro, Green Tea',
        },
      ],
      additions: [
        {
          name: 'Toppings',
          flavors: `
            Strawberry, Kiwi, Blueberry, Peach, Mochi, Coconut, Gummi Bears, 
            Marshmallow, Toffee, Chocolate Chips, M&M, Fruity Pebbles, Froot 
            Loops, Oreo, Granola, Graham Cracker, Strawberry Boba, Lychee Boba, 
            Passionfruit Boba, Mango Boba, Coffee Jelly, Rainbow Jelly
          `,
          modifiers: [
            { name: '1st', price: 1 },
            { name: 'Add.', price: 0.75 },
          ],
        },
      ],
    },
    {
      category: 'Waffles',
      items: [
        {
          name: 'House Waffles',
          description: `
            Thick, warm, and fluffy. Comes topped with fruit, whipped cream, 
            and dusted with cinnamon.
          `,
          modifiers: [
            { name: 'Half', price: 8.5 },
            { name: 'Whole', price: 12 },
          ],
        },
        {
          name: 'Half Waffle & Drip Coffee Combo',
          price: 10.5,
        },
        {
          name: 'Half Waffle & Tea Combo',
          price: 10.5,
        },
      ],
      additions: [
        {
          name: 'Toppings',
          flavors: `
            Banana, Strawberry, Kiwi, Cinnamon Sugar, Maple Syrup, Whipped Cream
          `,
        },
        {
          name: 'Extra Fruit/Nuts/Syrup',
          price: 0.65,
        },
      ],
    },
    {
      category: 'Specialty Desserts',
      items: [
        {
          name: 'Parfait',
          price: 7.75,
          description: `
            Crunchy granola layered between your choice of frozen yogurt
          `,
          flavors: 'Original, Soy, Taro, Green Tea',
        },
        {
          name: 'Cup Snow Ice',
          price: 7,
          description: `
            Your choice of frozen yogurt topped with multigrain, red bean, and 
            condensed milk
          `,
          flavors: 'Original, Soy, Taro, Green Tea',
        },
        {
          name: 'Patbingsu',
          description: `
            A traditional Korean shaved ice dessert topped with froyo
          `,
          price: 13,
          flavors: 'Fruit, Taro, Coffee, Green Tea',
        },
      ],
    },
  ],
};

export default [
  drinksMenu,
  snackMenu,
];
