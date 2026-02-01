import { getImgPath } from "@/utils/image";

export const count = [
    {
        icon: getImgPath('/images/counter/bag.svg'),
        value: '1+',
        description: 'Year of Experience in Flutter Development'
    },
    {
        icon: getImgPath('/images/counter/admin.svg'),
        value: '2.5+',
        description: 'Year of Experience in Python & Django'
    },
];

export const Progress = [
    { title: 'Flutter Development', Progress: 95 },
    { title: 'Python Development', Progress: 90 },
    { title: 'Firebase & REST APIs', Progress: 85 },
    { title: 'Django Framework', Progress: 88 },
    { title: 'NumPy & Pandas', Progress: 85 }
];

export const Servicebox = [
    {
        icon: getImgPath('/images/services/ux-design-product_1.svg'),
        title: 'Flutter Mobile Development',
        description: 'Cross-platform mobile apps with Firebase, REST APIs, modern state management, and clean UI/UX. Building business applications with offline storage, charts, and PDF generation.',
    },
    {
        icon: getImgPath('/images/services/perfomance-optimization.svg'),
        title: 'Python Development',
        description: 'Desktop applications and backend systems using Django, Tkinter, and SQLite. Expertise in inventory management, data processing, and optimized modular backend logic.',
    },
    {
        icon: getImgPath('/images/services/ux-design-product_2.svg'),
        title: 'Web Development',
        description: 'Full-stack web applications using HTML/CSS/JavaScript and Django framework. Responsive UI design with clean MVT architecture and Django ORM database integration.',
    },
];

export const portfolioinfo = [
    {
        image: getImgPath('/images/portfolio/cozycasa.png'),
        alt: 'Shop Management System',
        title: 'Shop Management System',
        slug: 'https://github.com/python1139141-alt/Vyapar-app',
        info: 'Flutter - Copy of Vyapar App',
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/humans.png'),
        alt: 'Clinic Appointment System',
        title: 'Clinic Appointment System',
        slug: 'https://github.com/python1139141-alt/Clinic_apppointment',
        info: 'Flutter Mobile App with Firebase',
        Class: 'md:mt-24'
    },
    {
        image: getImgPath('/images/portfolio/mars.png'),
        alt: 'MZ Super Store Software',
        title: 'MZ Super Store Software',
        slug: '#',
        info: 'Python Desktop Application (Client Project)',
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/diary_app.webp'),
        alt: 'Diary App',
        title: 'Diary App with Firebase',
        slug: 'https://github.com/python1139141-alt/Dairy-App-TODO-with-firebase-authentications',
        info: 'Flutter TODO App with Firebase Auth',
        Class: 'md:mt-24'
    },
    {
        image: getImgPath('/images/portfolio/web_scraping.webp'),
        alt: 'Web Scraping Project',
        title: 'Web Scraping',
        slug: 'https://github.com/python1139141-alt/Web-Scraping',
        info: 'Python Web Scraping Tools',
        Class: 'md:mt-0'
    },
];