import { getImgPath } from "@/utils/image";

export const count = [
    {
        icon: getImgPath('/images/counter/bag.svg'),
        value: '2+',
        description: 'Years of Experience in Flutter Development'
    },
    {
        icon: getImgPath('/images/counter/admin.svg'),
        value: '3+',
        description: 'Years of Experience in Python & Django'
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
        info: 'Shop management system built with Flutter and Dart.',
        Class: 'md:mt-0',
        hasGallery: true,
        galleryPath: '/images/portfolio/shop management/',
        hasVideo: false,
        tags: ['Flutter', 'Dart']
    },
    {
        image: getImgPath('/images/portfolio/clinic appointment system/1.jpeg'),
        alt: 'Clinic Appointment System',
        title: 'Clinic Appointment System',
        slug: 'https://github.com/python1139141-alt/Clinic_apppointment',
        info: 'Clinic Appointment System built with Flutter, Dart, and Firebase.',
        Class: 'md:mt-24',
        hasGallery: true,
        galleryPath: '/images/portfolio/clinic appointment system/',
        hasVideo: false,
        tags: ['Flutter', 'Dart', 'Firebase']
    },
    {
        image: getImgPath('/images/portfolio/mz super store/1.png'),
        alt: 'MZ Super Store Software',
        title: 'MZ Super Store Software',
        slug: '#',
        info: 'Python Desktop Application (Client Project). Inventory and Sales Management.',
        Class: 'md:mt-0',
        hasGallery: true,
        hasVideo: true,
        videoPath: '/images/portfolio/mz super store/Recording 2026-02-01 120722.mp4',
        galleryPath: '/images/portfolio/mz super store/',
        tags: ['Python', 'Desktop']
    },
    {
        image: getImgPath('/images/portfolio/hostle management/1.png'),
        alt: 'Hostel Management System',
        title: 'Hostel Management System',
        slug: 'https://github.com/python1139141-alt/hostel-management',
        info: 'Flutter App for Hostel Administration.',
        Class: 'md:mt-24',
        hasGallery: true,
        hasVideo: true,
        galleryPath: '/images/portfolio/hostle management/',
        videoPath: '/videos/VID-20260721-WA0006.mp4',
        tags: ['Flutter', 'Dart']
    },
    {
        image: 'https://images.unsplash.com/photo-1584308666744-24d5e4a81f33?q=80&w=1000&auto=format&fit=crop', 
        alt: 'Medicine Reminder App',
        title: 'Medicine Reminder App',
        slug: '#',
        info: 'Private Client Project: Medicine Reminder App (Android). Features intelligent scheduling and alerts.',
        Class: 'md:mt-0',
        hasGallery: false,
        hasVideo: true,
        videoPath: '/videos/Medicine Reminder.mp4',
        tags: ['Python', 'FastAPI', 'MySQL']
    },
    {
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop', 
        alt: 'Bzar 360',
        title: 'Bzar 360',
        slug: '#',
        info: 'Devnox working project. Private source code. Focuses on robust multi-vendor marketplace functionality.',
        Class: 'md:mt-24',
        hasGallery: false,
        hasVideo: true,
        videoPath: '/videos/Bazar 360.mp4',
        tags: ['Flutter', 'Dart']
    },
    {
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop', 
        alt: 'Video to Audio Converter',
        title: 'Video to Audio Converter',
        slug: 'https://github.com/python1139141-alt/video_to_audio-',
        info: 'Utility tool to convert video files to audio effortlessly.',
        Class: 'md:mt-0',
        hasGallery: false,
        hasVideo: true,
        videoPath: '/videos/Video to Audio Converter.mp4',
        tags: ['Python', 'Kotlin']
    },
    {
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop', 
        alt: 'MMC Transport International',
        title: 'MMC Transport International',
        slug: '#',
        info: 'Client project featuring role-based applications for transport and logistics management.',
        Class: 'md:mt-24',
        hasGallery: false,
        hasVideo: true,
        videoPath: '/videos/MMC Transport.mp4',
        tags: ['Flutter', 'React', 'Firebase', 'REST APIs']
    }
];