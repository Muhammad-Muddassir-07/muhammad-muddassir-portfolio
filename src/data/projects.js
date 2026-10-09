import xorsolImage from "../assets/images/xorsol.png";
import pakgaariImage from "../assets/images/pakgaari.png";
import shahRugsImage from "../assets/images/shahrugs.png";

const projects = [
    {
        title: "XORSOL",
        image: xorsolImage,
        category: "Digital Agency Website",
        description:
            "A digital agency website presenting web development, design and digital services through a modern responsive interface.",
        technologies: ["WordPress", "Elementor", "PHP"],
        link: "https://xorsol.wuaze.com/",
    },

    {
        title: "PakGaari",
        image: pakgaariImage,
        category: "Automotive Marketplace",
        description:
            "A vehicle marketplace platform designed around buying, selling and renting vehicles with a practical marketplace experience.",
        technologies: ["WordPress", "PHP", "Custom Development"],
        link: "https://pakgaari.com/",
    },

    {
        title: "Shah Rugs",
        image: shahRugsImage,
        category: "E-Commerce",
        description:
            "An e-commerce experience for a rugs and home decor business, focused on presenting products through a clean and premium interface.",
        technologies: ["WordPress", "WooCommerce"],
        link: "https://www.shahrugs.pk/",
    }
];

export default projects;