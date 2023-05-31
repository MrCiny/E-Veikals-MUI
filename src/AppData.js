const categoryData = [
  { id: 0, name: "Visi" },
  { id: 1, name: "Apģērbi" },
  { id: 2, name: "Apavi" },
  { id: 3, name: "Sports" },
  { id: 4, name: "Aksesuāri" },
  { id: 5, name: "Grāmatas" },
  { id: 6, name: "Izklaide" }
];

const sizeData = [
  { id: 1, name: "XXS" },
  { id: 2, name: "XS" },
  { id: 3, name: "S" },
  { id: 4, name: "M" },
  { id: 5, name: "L" },
  { id: 6, name: "XL" }
];

const brandData = [
  { id: 1, name: "Nike" },
  { id: 2, name: "Adidas" },
  { id: 3, name: "Reebook" },
  { id: 4, name: "Gucci" },
  { id: 5, name: "Sony" },
  { id: 6, name: "Levi" },
  { id: 7, name: "Apple" },
  { id: 8, name: "Samsung" },
  { id: 9, name: "Canon" },
  { id: 10, name: "LG" },
  { id: 11, name: "Fitbit" },
  { id: 12, name: "Dell" },
  { id: 13, name: "Casio" },
  { id: 14, name: "Bose" },
  { id: 15, name: "Nintendo" },
  { id: 16, name: "GoPro" },
  { id: 17, name: "Vans" },
  { id: 18, name: "Amazon" },
  { id: 19, name: "Ray-Ban" },
  { id: 20, name: "Herchel" }
];

const colorData = [
  { id: 1, name: "Sarkans" },
  { id: 2, name: "Oranžs" },
  { id: 3, name: "Dzeltens" },
  { id: 4, name: "Zaļš" },
  { id: 5, name: "Zils" },
  { id: 6, name: "Melns" }
];

const cartData = {
  totalPrice: 166.5,
  totalQuantity: 13,
  items: [
    {
      prodId: 1,
      price: 20.5,
      quantity: 3
    },
    {
      prodId: 2,
      price: 10.5,
      quantity: 10
    }
  ]
};

const productData = [
  {
    id: 1,
    name: "Pludmales jaka",
    price: 20.5,
    categoryId: [1],
    sizeId: [3, 4, 5, 6],
    brandId: 1,
    colorId: [1],
    isFreeShipping: true,
    description: "Forsha pludmales jaka ziemai :D",
    image: "images/bilde1.jpg"
  },
  {
    id: 2,
    name: "Pludmales čības",
    price: 10.5,
    categoryId: [2],
    sizeId: [3, 6],
    brandId: 4,
    colorId: [3, 4],
    isFreeShipping: true,
    description: "Forshas pludmales čības ziemai :D",
    image: "images/bilde2.png"
  },
  {
    id: 3,
    name: "Botas",
    price: 39.9,
    categoryId: [2, 3],
    sizeId: [4, 5],
    brandId: 3,
    colorId: [2, 4],
    isFreeShipping: false,
    description: "Botes peldēšanai :D",
    image: "images/bilde3.jpg"
  },
  {
    id: 4,
    name: "Monster Energy",
    price: 1.5,
    categoryId: [4, 3],
    sizeId: [5],
    brandId: 1,
    colorId: [2],
    isFreeShipping: false,
    description: "You are not yourself when you are thirsty :D",
    image: "images/bilde4.jpg"
  },
  {
    id: 5,
    name: "Final Fantasy XVI",
    price: 80,
    categoryId: [6],
    sizeId: [],
    brandId: 1,
    colorId: [1],
    isFreeShipping: false,
    description: "Console: PS5 (Not included)",
    image: "images/bilde5.webp"
  },
  {
    id: 6,
    name: "Gucci Mobile Phone",
    price: 100,
    categoryId: [4, 6],
    sizeId: [],
    brandId: 4,
    colorId: [1, 3],
    isFreeShipping: false,
    description: "Very Gucci",
    image: "images/bilde6.jpg"
  },
  {
    id: 7,
    name: "Nike Air Max 270",
    price: 120,
    categoryId: [2, 3],
    sizeId: [],
    brandId: 1,
    colorId: [1, 2, 3],
    isFreeShipping: true,
    description: "Comfortable and stylish Nike sneakers.",
    image: "images/bilde7.webp"
  },
  {
    id: 8,
    name: "Levi's 501 Jeans",
    price: 75,
    categoryId: [1],
    sizeId: [3, 4],
    brandId: 6,
    colorId: [5],
    isFreeShipping: true,
    description: "Classic Levi's jeans for everyday wear.",
    image: "images/bilde8.jpg"
  },
  {
    id: 9,
    name: "Apple AirPods Pro",
    price: 249,
    categoryId: [4, 6],
    sizeId: [],
    brandId: 7,
    colorId: [2, 3],
    isFreeShipping: true,
    description: "Wireless earbuds with active noise cancellation.",
    image: "images/bilde9.jpg"
  },
  {
    id: 10,
    name: "Samsung 65-inch 4K Smart TV",
    price: 899,
    categoryId: [6],
    sizeId: [6],
    brandId: 8,
    colorId: [5],
    isFreeShipping: false,
    description: "Immerse yourself in stunning 4K visuals.",
    image: "images/bilde10.webp"
  },
  {
    id: 11,
    name: "Canon EOS 80D DSLR Camera",
    price: 999,
    categoryId: [6],
    sizeId: [],
    brandId: 9,
    colorId: [6],
    isFreeShipping: false,
    description: "Capture high-quality photos and videos with ease.",
    image: "images/bilde11.jpg"
  },
  {
    id: 12,
    name: "Adidas Ultra Boost",
    price: 180,
    categoryId: [2, 3],
    sizeId: [],
    brandId: 2,
    colorId: [6],
    isFreeShipping: true,
    description: "Premium running shoes for maximum comfort.",
    image: "images/bilde12.webp"
  },
  {
    id: 13,
    name: "Sony PlayStation 5",
    price: 499,
    categoryId: [6],
    sizeId: [],
    brandId: 5,
    colorId: [6],
    isFreeShipping: false,
    description: "Next-generation gaming console for immersive gameplay.",
    image: "images/bilde13.webp"
  },
  {
    id: 14,
    name: "LG 55-inch OLED TV",
    price: 1499,
    categoryId: [6],
    sizeId: [],
    brandId: 10,
    colorId: [5],
    isFreeShipping: false,
    description:
      "Experience vivid colors and deep blacks with OLED technology.",
    image: "images/bilde14.jpg"
  },
  {
    id: 15,
    name: "Fitbit Charge 4 Fitness Tracker",
    price: 149.99,
    categoryId: [4, 3],
    sizeId: [],
    brandId: 11,
    colorId: [2, 6],
    isFreeShipping: true,
    description: "Track your workouts and monitor your health.",
    image: "images/bilde15.jpg"
  },
  {
    id: 16,
    name: "Dell XPS 15 Laptop",
    price: 1899,
    categoryId: [6],
    sizeId: [],
    brandId: 11,
    colorId: [6],
    isFreeShipping: true,
    description: "Powerful laptop for productivity and multimedia tasks.",
    image: "images/bilde16.jpg"
  },
  {
    id: 17,
    name: "Casio G-Shock Watch",
    price: 99.99,
    categoryId: [3, 4],
    sizeId: [],
    brandId: 13,
    colorId: [4, 5],
    isFreeShipping: true,
    description: "Durable and stylish watch for outdoor activities.",
    image: "images/bilde17.avif"
  },
  {
    id: 18,
    name: "Bose QuietComfort 35 II Headphones",
    price: 299,
    categoryId: [3, 4],
    sizeId: [],
    brandId: 14,
    colorId: [2, 4, 6],
    isFreeShipping: true,
    description:
      "Noise-cancelling headphones for a peaceful listening experience.",
    image: "images/bilde18.jpg"
  },
  {
    id: 19,
    name: "Nintendo Switch Console",
    price: 299,
    categoryId: [6],
    sizeId: [],
    brandId: 15,
    colorId: [1, 5, 6],
    isFreeShipping: true,
    description: "Hybrid gaming console for at-home and on-the-go gaming.",
    image: "images/bilde19.png"
  },
  {
    id: 20,
    name: "GoPro Hero 9 Black",
    price: 449,
    categoryId: [6],
    sizeId: [],
    brandId: 16,
    colorId: [6],
    isFreeShipping: true,
    description: "Capture your adventures in stunning 5K resolution.",
    image: "images/bilde20.jpg"
  },
  {
    id: 21,
    name: "Vans Old Skool Sneakers",
    price: 60,
    categoryId: [2, 3],
    sizeId: [4],
    brandId: 17,
    colorId: [1, 4, 5, 6],
    isFreeShipping: true,
    description: "Classic skate shoes with timeless style.",
    image: "images/bilde21.webp"
  },
  {
    id: 22,
    name: "Amazon Echo Dot (4th Gen)",
    price: 49.99,
    categoryId: [4],
    sizeId: [],
    brandId: 18,
    colorId: [6],
    isFreeShipping: true,
    description: "Smart speaker with Alexa voice assistant.",
    image: "images/bilde22.jpg"
  },
  {
    id: 23,
    name: "Ray-Ban Wayfarer Sunglasses",
    price: 150,
    categoryId: [1, 4],
    sizeId: [],
    brandId: 19,
    colorId: [6],
    isFreeShipping: true,
    description: "Iconic sunglasses that never go out of style.",
    image: "images/bilde23.avif"
  },
  {
    id: 24,
    name: "Samsung Galaxy S21",
    price: 799,
    categoryId: [4, 6],
    sizeId: [],
    brandId: 8,
    colorId: [1, 5, 6],
    isFreeShipping: true,
    description: "High-end smartphone with top-of-the-line features.",
    image: "images/bilde24.jpg"
  },
  {
    id: 25,
    name: "Herschel Supply Co. Backpack",
    price: 80,
    categoryId: [4],
    sizeId: [],
    brandId: 20,
    colorId: [1, 3, 4, 5, 6],
    isFreeShipping: true,
    description: "Stylish and functional backpack for everyday use.",
    image: "images/bilde25.jpg"
  }
];

export default {
  categoryData,
  productData,
  sizeData,
  brandData,
  colorData,
  cartData
};
