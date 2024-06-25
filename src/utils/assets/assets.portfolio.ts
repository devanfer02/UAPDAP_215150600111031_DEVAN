import agil from '../../assets/images/projects/agilportfolio.jpg'
import certi from '../../assets/images/projects/findcerti.jpg'
import pbo from '../../assets/images/projects/guigame.jpg'
import dapchall from '../../assets/images/projects/praktikum.jpg'
import gokers from '../../assets/images/projects/gokers2.jpg'
import soschat from '../../assets/images/projects/soschat2.jpg'
import kbmdsi from '../../assets/images/projects/kbmdsi.jpg'
import psdfinal from '../../assets/images/projects/facerecon.png'
import brun from '../../assets/images/projects/brunbites.png'
import litecartes from '../../assets/images/projects/litecartes.png'
import nosudes from '../../assets/images/projects/nosudes.png'
import ubmager from '../../assets/images/projects/ubmager.png'
import tels from '../../assets/images/projects/tels.png'

export const categories = ['Website', 'API', 'All', 'Software']

export interface Portfolio {
  name: string;
  category: string;
  desc: string;
  img: string;
  link: string;
  techstacks: string[];
}

export const portfolios: Portfolio[] = [
  {
    name: "Hamdalla Agil's Portfolio",
    category: categories[0],
    desc: (
      `
      Hamdalla Agil's Portfolio is a web portfolio i developed as the final project for User Interface Design class.
      All thanks to my team project for the design brief, UI kit, wireframe, and hifi design.
      `
    ),
    img: agil,
    link: 'https://hamdallaagil.vercel.app/',
    techstacks: ['skill-icons:react-light', 'skill-icons:bootstrap', 'skill-icons:javascript', 'skill-icons:css']
  },
  {
    name: "Litecartes",
    category: categories[3],
    desc: (
      `
      Litecartes is a mobile application aimed to improve literacy, reading interest and critical thinking of future generations. 
      It use gamification aspects to attract users to read literacy text. As a backend developer, i developed the server side part using golang, gin, created 
      content management system with react and deploy it to AWS EC2
      `
    ),
    img: litecartes,
    link: 'https://github.com/devanfer02/litecartes-be/',
    techstacks: ['skill-icons:golang', 'devicon:firebase', 'skill-icons:mysql-light', 'logos:gin', 'logos:aws-ec2', 'skill-icons:react-light' , 'skill-icons:tailwindcss-light' ]
  },
  {
    name: "TELS E-Course",
    category: categories[0],
    desc: (
      `
      TELS is a fullstack e-course platform project made as a final project Manajemen Pembelajaran dan Sumber Belajar class. 
      As a fullstack developer, I designed the application database, developed the application with user dashboard and admin dashboard, and deployed to a hosting service 
      `
    ),
    img: tels,
    link: 'https://github.com/devanfer02/tels-e-course',
    techstacks: ['skill-icons:laravel-light', 'skill-icons:mysql-light', 'skill-icons:php-light', 'skill-icons:tailwindcss-light', 'skill-icons:bootstrap', 'devicon:firebase']
  },
  {
    name: "Find Your Rabraw22 Certificate",
    category: categories[0],
    desc: (
      `
      Find Your Rabraw22 Certificate is a website i created to assist students from Universitas Brawijaya, Class of 2022
      to get their rabraw certificate since for some reason, rabraw committee thought its a good idea to distribute all the certificates in one Google Drive.
      `
    ),
    img: certi,
    link: 'https://devanfer02.github.io/find_your_rabraw22_certi/',
    techstacks: ['skill-icons:html', 'skill-icons:javascript', 'skill-icons:bootstrap']
  },
  {
    name: "DDLR Face Recon",
    category: categories[0],
    desc: (
      `
      DDLR Face Recon is a final project from Data Science Introduction class. It's a web application to recognize my face and my team member's face
      using face_recognition library, opencv and others from a given image or live cam.
      `
    ),
    img: psdfinal,
    link: 'https://github.com/devanfer02/DDLR-FaceRecon/',
    techstacks: ['skill-icons:python-light', 'skill-icons:flask-light', 'skill-icons:tailwindcss-light']
  },
  {
    name: 'UB Mager Apps',
    category: categories[0],
    desc: (
      `
      UB Mager is a web application based on ub mager community in whatsapp group. Its a form of digitalisation
      where now, instead of divided multiple whatsapp groups, student can login to web app using their SIAM credentials
      and asked others for help or errands in one web application
      `
    ),
    img: ubmager,
    link: 'https://github.com/devanfer02/ubmager',
    techstacks: ['skill-icons:laravel-light', 'skill-icons:mysql-light', 'skill-icons:php-light', 'skill-icons:tailwindcss-light', 'skill-icons:bootstrap']
  },
  {
    name: 'KBMDSI FILKOM Website',
    category: categories[0],
    desc: (
      `
      KBMDSI FILKOM Website is a website containing about latest information about events in FILKOM UB.
      As a backend developer, i partake in developing backend API and CMS using tech stack
      laravel and mysql.
      `
    ),
    img: kbmdsi,
    link: 'https://kbmdsi.ub.ac.id/',
    techstacks: ['skill-icons:laravel-light', 'skill-icons:mysql-light', 'skill-icons:php-light', 'skill-icons:bootstrap']
  },
  {
    name: 'Nosudes',
    category: categories[0],
    desc: (
      `Nosudes is a website that contains information about tourist attractions and events in North Sumatra.
      Nosudes was created to support the development of tourism in the North Sumatra region and show the beauty of Indonesia.
      As a backend developer, i created the backend of the website using golang and gin`
    ),
    img: nosudes,
    link: 'https://no-su-des.vercel.app/',
    techstacks: ['skill-icons:golang', 'devicon:firebase', 'skill-icons:mysql-light', 'logos:gin', 'logos:aws-ec2']
  },
  {
    name: "DDM Game",
    category: categories[3],
    desc: (
      `
      DDM Game is a java gui game using javax swing library i created as a final project of Object Orriented Programming class.
      It's a turn based game that utilizes the concept of object orriented paradigm. I also made it so it can play some background music too!
      `
    ),
    img: pbo,
    link: 'https://github.com/devanfer02/DDM-Game',
    techstacks: ['skill-icons:java-light']
  },
  {
    name: 'Brun Bites',
    category: categories[0],
    desc: (
      `
      Brun bites is a website i developed to showcase a food business called BRUN.
      `
    ),
    img: brun,
    link: 'https://brun-bites.vercel.app/',
    techstacks: ['skill-icons:html', 'skill-icons:tailwindcss-light', 'skill-icons:javascript']
  },
  {
    name: "DAP Challenge",
    category: categories[0],
    desc: (
      `
      DAP Challenge is a challenge from lab assistant of User Interface Design class.
      `
    ),
    img: dapchall,
    link: 'https://devanfer02.github.io/dap-praktikum-challenge/',
    techstacks: ['skill-icons:react-light', 'skill-icons:css', 'skill-icons:bootstrap']
  },
  {
    name: "Gokers",
    category: categories[1],
    desc: (
      `
      Gokers is an API made with golang, gin, gorm and mysql as database. Inspired by Universitas Brawijaya's study plan card system.
      I learned that database design is very important through the process of developing this API.
      `
    ),
    img: gokers,
    link: 'https://github.com/dvnf10cpp/gokers/',
    techstacks: ['skill-icons:golang', 'skill-icons:mysql-light', 'logos:gin']
  },
  {
    name: 'Soschat',
    category: categories[1],
    desc: (
      `
      Soschat is an social media API made with expressjs, sequelize, and mysql as database.
      `
    ),
    img: soschat,
    link: 'https://github.com/devanfer02/soschat-be/',
    techstacks: ['skill-icons:typescript', 'skill-icons:expressjs-light', 'skill-icons:sequelize-light']
  },
]