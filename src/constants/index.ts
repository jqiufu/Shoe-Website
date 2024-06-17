import bigShoe1 from "../assets/images/big-shoe1.png";
import bigShoe2 from "../assets/images/big-shoe2.png";
import bigShoe3 from "../assets/images/big-shoe3.png";
import customer1 from "../assets/images/customer1.jpg";
import customer2 from "../assets/images/customer2.jpg";
import shoe4 from "../assets/images/shoe4.png";
import shoe5 from "../assets/images/shoe5.png";
import shoe6 from "../assets/images/shoe6.png";
import shoe7 from "../assets/images/shoe7.png";
import thumbnailShoe1 from "../assets/images/shoe1.png";
import thumbnailShoe2 from "../assets/images/shoe2.png";
import thumbnailShoe3 from "../assets/images/shoe3.png";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#about-us", label: "About Us" },
  { href: "#contact-us", label: "Contact Us" },
];

export type Shoe = {
  thumbnail: string;
  bigShoe: string;
};

export const shoes: Array<Shoe> = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    imgUrl: shoe4,
    name: "Nike 01",
    price: "$200.20",
  },
  {
    imgUrl: shoe5,
    name: "Nike 02",
    price: "$210.20",
  },
  {
    imgUrl: shoe6,
    name: "Puma 01",
    price: "$220.20",
  },
  {
    imgUrl: shoe7,
    name: "New Balance 01",
    price: "$230.20",
  },
];

export const reviews = [
  {
    imgUrl: customer1,
    customerName: "Rocco Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgUrl: customer2,
    customerName: "April Willis",
    rating: 4.5,
    feedback: "Great prodiuct. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Jordan 1", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@allshoes.com", link: "mailto:customer@allshoes.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: instagram, alt: "instagram logo" },
];
