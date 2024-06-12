import Divina from "../../Assets/CardImages/Divina.webp";
import Eurodam from "../../Assets/CardImages/Eurodam.jpg";
import Costapacifica from "../../Assets/CardImages/Costapacifica.jpg";
import Koningsdam from "../../Assets/CardImages/Koningsdam.jpg";
import spectrum from "../../Assets/CardImages/spectrum.webp";
import Celestyal from "../../Assets/CardImages/celestyal.jpg";
import Celebrity from "../../Assets/CardImages/Celebrity.jpg";
import Carnival from "../../Assets/CardImages/carnival.jpg";
import Princess from "../../Assets/CardImages/Princes.jpg";
import {
  FaWeightHanging,
  FaUsers,
  FaRuler,
  FaShip,
  FaUserFriends,
  FaCalendarAlt,
  FaTools,
} from "react-icons/fa";
import { GiSpeedometer } from "react-icons/gi";

const fleetList = [
  {
    id: 9,
    title: "Royal Caribbean Cruise Line • Spectrum of the Seas",
    description:
      "Spectrum of the Seas is the first ship belonging to the Quantum Ultra class. From the incredibly realistic atmosphere found at the Sky Pad trampoline to the robots at the Bionic Bar where you can create your favorite drinks, and to the revolutionary Suite Club accommodations with exclusive facilities such as private dining rooms, lounges, and the Solarium area, everything is at your disposal.",
    details: [
      { icon: <FaWeightHanging />, text: "Weight: 168,667 tons" },
      { icon: <FaUsers />, text: "Capacity: 5,622 passengers" },
      { icon: <FaRuler />, text: "Length: 347 meters" },
      { icon: <FaShip />, text: "Width: 41 meters" },
      { icon: <FaCalendarAlt />, text: "Year built: May 20, 2019" },
      { icon: <FaUserFriends />, text: "Crew: 1,501 people" },
      { icon: <FaTools />, text: "Builder: Meyer Werft, Papenburg, Germany" },
      { icon: <GiSpeedometer />, text: "Speed: 22 knots" },
    ],
    img: spectrum,
  },
  {
    id: 1,
    title: "MSC Cruises • MSC Divina",
    description:
      "MSC Divina, the 11th ship in the MSC Cruises fleet, was christened by Sophia Loren in Marseille in May 2012. Modeled after its two sister ships, MSC Splendida and MSC Fantasia, Divina boasts some remarkable enhancements. Onboard the ship, you will find modern comfort, a variety of sports and recreational activities, entertainment, and even kids' and teens' clubs. Built with style, luxury, and attention to detail, passengers aboard MSC Divina can experience gambling at the Veneziano Casino or enjoy music and entertainment shows at the Pantheon Theater. For a glamorous experience, passengers will discover elegant staircases adorned with Swarovski crystals. MSC Divina also offers its passengers the MSC Yacht Club experience, where they will benefit from additional facilities and even the service of a butler and access to a private restaurant. A wide range of professional massages and wellness treatments can be experienced at the MSC Aurea Spa, as well as a private area exclusively for adults on deck 18.",
    details: [
      { icon: <FaWeightHanging />, text: "Weight: 139,072 tons" },
      { icon: <FaUsers />, text: "Capacity: 4,345 passengers" },
      { icon: <FaRuler />, text: "Length: 333.30 meters" },
      { icon: <FaShip />, text: "Width: 37.92 meters" },
      { icon: <FaCalendarAlt />, text: "Year built: 2012" },
      { icon: <FaUserFriends />, text: "Crew: 1,388 people" },
      { icon: <FaTools />, text: "Builder: STX France, Panama" },
      { icon: <GiSpeedometer />, text: "Speed: 23.75 knots" },
    ],
    img: Divina,
  },
  {
    id: 2,
    title: "Holland America Line •  Eurodam",
    description:
      "Eurodam, marking the Holland America Line as the first ship in the Signature class, promotes the evolution of smaller yet highly sophisticated cruise ships. It stands out with a new Asian restaurant, a salon surrounded by magnificent panoramic views, a new Italian restaurant adjacent to the Lido deck, a luxurious and elegant jewelry shop, a new bar in the atrium area, a new photographic and imaging center, and many other services and amenities that will make your vacation much more enjoyable. Following the tradition of the Holland America Line, aboard the Eurodam, you will encounter a true and astonishing art collection based on the glory days of the Netherlands, an inexhaustible culture. Additionally, aboard the Eurodam, passengers will have the opportunity to 'tell and see' their vacation memories through the Digital Workshop from Windows, where in free workshops, they will learn how to send their vacation memories to friends and family in digital format, even before arriving home.",
    details: [
      { icon: <FaWeightHanging />, text: "Weight: 86,273 tons" },
      { icon: <FaUsers />, text: "Capacity: 2,104 passengers" },
      { icon: <FaRuler />, text: "Length: 285 meters" },
      { icon: <FaShip />, text: "Width: 32.2 meters" },
      { icon: <FaCalendarAlt />, text: "Year built: 2008" },
      { icon: <FaUserFriends />, text: "Crew: 929 people" },
      { icon: <FaTools />, text: "Builder: Fincantieri, Netherlands" },
      { icon: <GiSpeedometer />, text: "Speed: 44.3 knots" },
    ],

    img: Eurodam,
  },
  {
    id: 3,
    title: "Costa Cruises • Costa Pacifica",
    description:
      "The cruise ship Costa Pacifica holds a Guinness Book of Records record as it was christened in Genoa. The ship's motto is 'The Sea in Music' because the names of the decks are all related to the world of music. Each cabin is decorated with images of composers, operas, and musical instruments. Maestro Mauro Pagani also wrote thirty exclusive pieces for this cruise ship. This is the 'ship of music'.",
    details: [
      { icon: <FaWeightHanging />, text: "Weight: 114,500 tons" },
      { icon: <FaUsers />, text: "Capacity: 3,012 passengers" },
      { icon: <FaRuler />, text: "Length: 290 meters" },
      { icon: <FaShip />, text: "Width: 35.5 meters" },
      { icon: <FaCalendarAlt />, text: "Year built: 2009" },
      { icon: <FaUserFriends />, text: "Crew: 1,110 people" },
      { icon: <FaTools />, text: "Builder: Fincantieri, Italy" },
      { icon: <GiSpeedometer />, text: "Speed: 23 knots" },
    ],

    img: Costapacifica,
  },
  {
    id: 4,
    title: "Princess Cruises • Diamond Princess",
    description:
      "Being one of the two vessels in the fleet built in Japan, it's not surprising that this ship can be found sailing towards the world's most intriguing destinations. Tasty cuisines can be found all over the ship, including the renowned Italian restaurant Sabatini's, where fresh pasta is prepared to delight its patrons. In the elegant main dining rooms, sommeliers are ready to help you enhance your meals with selected wines. By the poolside, freshly made pizza is ready to be served straight from the oven. Additionally, this ship has added both The Sanctuary, an exclusive paradise for adults, and Movies Under the Stars, a giant outdoor cinema.",
    details: [
      { icon: <FaWeightHanging />, text: "Weight: 116,000 tons" },
      { icon: <FaUsers />, text: "Capacity: 3,114 passengers" },
      { icon: <FaRuler />, text: "Length: 290 meters" },
      { icon: <FaShip />, text: "Width: 36 meters" },
      { icon: <FaCalendarAlt />, text: "Year built: 2006" },
      { icon: <FaUserFriends />, text: "Crew: 1,163 people" },
      { icon: <FaTools />, text: "Builder: Fincantieri, Italy, Bermuda" },
      { icon: <GiSpeedometer />, text: "Speed: 22 knots" },
    ],

    img: Princess,
  },
  {
    id: 5,
    title: "Celestyal Cruises • Celestyal Discovery",
    description:
      "Celestyal the award-winning, number one choice for cruise travelers to the Greek islands and beyond, is delighted to confirm the acquisition of a second new vessel this year. The Celestyal Discovery, follows the recent arrival of the Celestyal Journey, signaling a fleet refresh and further commitment to significant investment into the customer proposition. The Celestyal Discovery will now join her fleet mate in Athens, where they will both undergo multimillion-euro winter refurbishment programs ahead of the new season, which commences in March 2024. The ship’s name symbolizes the company ethos of creating unmissable moments of discovery through connecting people, places, and self. She embodies the Celestyal confident spirit, sense of exploration and wonder. Built in 2003 for the Carnival Corporation, she has been sailing under the AIDA Cruise brand throughout her career to date.",
    details: [
      { icon: <FaWeightHanging />, text: "Weight: 77,366 tons" },
      { icon: <FaUsers />, text: "Capacity: 1,046 passengers" },
      { icon: <FaRuler />, text: "Length: 185.2 meters" },
      { icon: <FaShip />, text: "Width: 27.8 meters" },
      { icon: <FaCalendarAlt />, text: "Year built: 2014" },
      { icon: <FaUserFriends />, text: "Crew: 1,070 people" },
      { icon: <FaTools />, text: "Builder: Ephesus / Kusadasi, Turkey" },
      { icon: <GiSpeedometer />, text: "Speed: 22 knots" },
    ],

    img: Celestyal,
  },
  {
    id: 6,
    title: " Celebrity Cruises • Celebrity Reflection",
    description:
      "The Celebrity Reflection ship was inaugurated in October 2012. Onboard this vessel, you will, of course, find the Aqua Suites. The Celebrity Reflection is larger by one deck compared to other ships in this class, with 72 additional cabins and more space in the main restaurant or specialty restaurants and at the theater. In the Michael's Club, you will find over 50 varieties of beer. Additionally, you can enjoy an outdoor barbecue at the famous Lawn Club Grill restaurant. Moments spent aboard the Celebrity Reflection ship will truly be unique and unforgettable.",
    details: [
      { icon: <FaWeightHanging />, text: "Weight: 125,366 tons" },
      { icon: <FaUsers />, text: "Capacity: 3,046 passengers" },
      { icon: <FaRuler />, text: "Length: 319.2 meters" },
      { icon: <FaShip />, text: "Width: 36.8 meters" },
      { icon: <FaCalendarAlt />, text: "Year built: 2012" },
      { icon: <FaUserFriends />, text: "Crew: 1,271 people" },
      { icon: <FaTools />, text: "Builder: Meyer Werft (Germany), Malta" },
      { icon: <GiSpeedometer />, text: "Speed: 24 knots" },
    ],
    img: Celebrity,
  },
  {
    id: 7,
    title: "Holland America Line • Koningsdam",
    description:
      "The Koningsdam ship, the first in the Pinnacle class, will be a true highlight for the Holland America Line cruise line from the moment of its launch. At the same time, it will continue the tradition and signature of Holland America Line: elegance and impeccable services. The name of this ship is a combination of classic and modern: 'Koning' in Dutch means king - representing the salute to the first king of the Netherlands in over 100 years, Willem-Alexander. This ship promises passengers that they will feel the grandeur and welcoming atmosphere from the first steps aboard the Koningsdam ship.",
    details: [
      { icon: <FaWeightHanging />, text: "Weight: 99,500 tons" },
      { icon: <FaUsers />, text: "Capacity: 2,650 passengers" },
      { icon: <FaRuler />, text: "Length: 299.8 meters" },
      { icon: <FaShip />, text: "Width: 35 meters" },
      { icon: <FaCalendarAlt />, text: "Year built: 2016" },
      { icon: <FaUserFriends />, text: "Crew: 1,025 people" },
      { icon: <FaTools />, text: "Builder: Marghera, Netherlands" },
      { icon: <GiSpeedometer />, text: "Speed: 24 knots" },
    ],

    img: Koningsdam,
  },
  {
    id: 8,
    title: "Carnival Cruise Line • Carnival Conques",
    description:
      "You don't need to know the difference between Monet and Renoir to appreciate the Carnival Conquest ship, inspired by the impressionist works of the 19th century, such as those of Degas, Toulouse-Lautrec, Gauguin, Cézanne, and others. Sailing on the Carnival Conquest takes fun to another level. Onboard the ship, you'll rediscover famous Carnival Cruise Lines venues like Guy's Burger Joint, RedFrog Rum Bar, and the EA SPORTS Bar. All you need is a camera and a lot of good vibes when you embark on the Carnival Conquest.",
    details: [
      { icon: <FaWeightHanging />, text: "Weight: 110,239 tons" },
      { icon: <FaUsers />, text: "Capacity: 2,974 passengers" },
      { icon: <FaRuler />, text: "Length: 290 meters" },
      { icon: <FaShip />, text: "Width: 35.5 meters" },
      { icon: <FaCalendarAlt />, text: "Year built: 2002" },
      { icon: <FaUserFriends />, text: "Crew: 1,160 people" },
      { icon: <FaTools />, text: "Builder: Fincantieri, Panama" },
      { icon: <GiSpeedometer />, text: "Speed: 22.5 knots" },
    ],

    img: Carnival,
  },
];

export default fleetList;
