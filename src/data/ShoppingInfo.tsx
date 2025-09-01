import Google9a from "../assets/Google pixel 9a 128gb.png";
import Google10Pro from "../assets/Google pixel 10 pro 256 gb.png";
import Iphon16Max from "../assets/Iphone 16 Pro Max 256 gb.png";
import Iphone16e from "../assets/Iphone 16e 128 gb.png";
import SamsungA17 from "../assets/Samsung galaxy A17 128gb.png";
import SamsungA56 from "../assets/Samsung galaxy A56 128gb.png";
import SamsungS25 from "../assets/Samsung galaxy S25 128gb.png";
import Xiaomi14C from "../assets/Xiamo Redmi 14C 256gb.png";

function GetColor() {
  const smartphoneColors: string[] = [
    "#000000", // Black
    "#C0C0C0", // Silver
    "#FFD700", // Gold
    "#A52A2A", // Brown / Copper
    "#1E90FF", // Blue
    "#32CD32", // Green
    "#FF4500", // Orange / Coral
    "#800080", // Purple
    "#FF69B4", // Pink
  ];

  // Create a copy so we can shuffle without modifying original array
  const colorsCopy = [...smartphoneColors];

  // Shuffle using Fisher–Yates algorithm
  for (let i = colorsCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [colorsCopy[i], colorsCopy[j]] = [colorsCopy[j], colorsCopy[i]];
  }

  // Return the first 4 colors from the shuffled array
  return colorsCopy.slice(0, 4);
}

function GetRating() {
  return Math.floor(Math.random() * 5);
}

function ShoppingList() {
  const items = [
    {
      imageLänk: Google9a,
      info: [
        "Google Pixel 9A",
        "128",
        '6,3" OLED-skärm',
        "Över 24 timmar batteritid",
        "Innovativa kamerafunktioner",
      ],
      stars: GetRating(),
      colors: GetColor(),
      price: 6590,
    },
    {
      imageLänk: Google10Pro,
      info: [
        "Google Pixel 10 PRO",
        "256",
        '6,3" Super Actua-skärm',
        "16 GB RAM",
        "Fotar som i en studio",
      ],
      stars: GetRating(),
      colors: GetColor(),
      price: 13790,
    },
    {
      imageLänk: Iphon16Max,
      info: [
        "Iphone 16 PRO MAX",
        "256",
        "6,9-tums Super Retina XDR-skärm",
        "Full kontroll med kamerareglage",
        "Uppdaterad batteritid",
      ],
      stars: GetRating(),
      colors: GetColor(),
      price: 14590,
    },
    {
      imageLänk: Iphone16e,
      info: [
        "Iphone 16e",
        "128",
        "Upp till 26 timmars videospelning",
        "2-i-1-kamerasystem",
        "Anpassningsbar snabbknapp",
      ],
      stars: GetRating(),
      colors: GetColor(),
      price: 6988,
    },
    {
      imageLänk: SamsungA17,
      info: [
        "Samsung Galaxy A17 5G",
        "128",
        '6,7" FHD+ Super AMOLED-skärm',
        "Kraftfullt 5000 mAh-batteri",
        "Huvudkamera på 50 MP",
      ],
      stars: GetRating(),
      colors: GetColor(),
      price: 2790,
    },
    {
      imageLänk: SamsungA56,
      info: [
        "Samsung Galaxy A56",
        "128",
        "Skarp kamera & AI-redigering",
        "Ö120 Hz uppdateringsfrekvens",
        "Upp till 29 timmars visningstid",
      ],
      stars: GetRating(),
      colors: GetColor(),
      price: 3990,
    },
    {
      imageLänk: SamsungS25,
      info: [
        "Samsung Galaxy S25",
        "128",
        "6,2” FHD+-display",
        "12 GB RAM",
        "50 MP trippelkamerasystem med AI",
      ],
      stars: GetRating(),
      colors: GetColor(),
      price: 9990,
    },
    {
      imageLänk: Xiaomi14C,
      info: [
        "Xiamo Redmi 14C",
        "256",
        '6,88" HD+-skärm',
        "50 MP-kamera",
        "3,5 mm hörlursutgång",
      ],
      stars: GetRating(),
      colors: GetColor(),
      price: 1990,
    },
  ];
  return items;
}

export default ShoppingList;
