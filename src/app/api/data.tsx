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
        image: getImgPath('/images/portfolio/shop management/1.jpeg'),
        alt: 'Shop Management System',
        title: 'Shop Management System',
        slug: 'https://github.com/python1139141-alt/Vyapar-app',
        info: 'Flutter - Copy of Vyapar App',
        Class: 'md:mt-0',
        hasGallery: true,
        galleryPath: '/images/portfolio/shop management/'
    },
    {
        image: getImgPath('/images/portfolio/clinic appointment system/1.jpeg'),
        alt: 'Clinic Appointment System',
        title: 'Clinic Appointment System',
        slug: 'https://github.com/python1139141-alt/Clinic_apppointment',
        info: 'Flutter Mobile App with Firebase',
        Class: 'md:mt-24',
        hasGallery: true,
        galleryPath: '/images/portfolio/clinic appointment system/'
    },
    {
        image: getImgPath('/images/portfolio/mz super store/1.png'),
        alt: 'MZ Super Store Software',
        title: 'MZ Super Store Software',
        slug: '#',
        info: 'Python Desktop Application (Client Project)',
        Class: 'md:mt-0',
        hasGallery: true,
        galleryPath: '/images/portfolio/mz super store/'
    },
    {
        image: getImgPath('/images/portfolio/hostle management/1.png'),
        alt: 'Hostel Management System',
        title: 'Hostel Management System',
        slug: 'https://github.com/python1139141-alt/hostel-management',
        info: 'Flutter App for Hostel Administration',
        Class: 'md:mt-24',
        hasGallery: true,
        hasVideo: true,
        galleryPath: '/images/portfolio/hostle management/',
        videoPath: '/images/portfolio/hostle management/Recording 2026-02-01 113209.mp4'
    },
];