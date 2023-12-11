import agil from '../../assets/images/projects/agilportfolio.jpg'
import calc from '../../assets/images/projects/calculator.jpg'
import certi from '../../assets/images/projects/findcerti.jpg'
import pbo from '../../assets/images/projects/guigame.jpg'
import dapchall from '../../assets/images/projects/praktikum.jpg'
import gokers from '../../assets/images/projects/gokers2.jpg'
import soschat from '../../assets/images/projects/soschat2.jpg'
import farewell from '../../assets/images/projects/farewell.jpg'
import natal from '../../assets/images/projects/natal.jpg'
import kbmdsi from '../../assets/images/projects/kbmdsi.jpg'

export const categories = ['Website', 'API', 'All', 'Java App', 'Design']

export interface Portfolio {
  name: string;
  category: string;
  desc: string;
  src: string;
  link: string;
}

export const portfolios: Portfolio[] = [
  {
    name: "Hamdalla Agil's Portfolio",
    category: categories[0],
    desc: (
      `
      Hamdalla Agil's Portfolio is a web profile i developed as the final project for User Interface Design class.
      All thanks to my team project for the design brief, UI kit, wireframe, and full design.
      `
    ),
    src: agil,
    link: 'https://hamdallaagil.vercel.app/'
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
    src: certi,
    link: 'https://devanfer02.github.io/find_your_rabraw22_certi/'
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
    src: pbo,
    link: 'https://github.com/devanfer02/DDM-Game'
  },
  {
    name: "DAP Challenge",
    category: categories[0],
    desc: (
      `
      DAP Challenge is a challenge from lab assistant of User Interface Design class.
      `
    ),
    src: dapchall,
    link: 'https://devanfer02.github.io/dap-praktikum-challenge/'
  },
  {
    name: "Calculator",
    category: categories[0],
    desc: (
      `
      I made this calculator as a lab assignment of User Interface Design class to implement data structure and algorithm, 
      spesifically stack data structure to convert infix expression to postfix and evaluate it.
      `
    ),
    src: calc,
    link: 'https://devanfer02.github.io/calculator-app/'
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
    src: gokers,
    link: 'https://github.com/devanfer02/gokers/'
  },
  {
    name: 'Soschat',
    category: categories[1],
    desc: (
      `
      Soschat is an social media API made with expressjs, sequelize, and mysql as database.
      `
    ),
    src: soschat,
    link: 'https://github.com/devanfer02/soschat-be/'
  },
  {
    name: 'KBMDSI FILKOM Website',
    category: categories[0],
    desc: (
      `
      As a backend developer, i partake in developing backend API and CMS using tech stack
      laravel and mysql.
      `
    ),
    src: kbmdsi,
    link: 'https://kbmdsi.ub.ac.id/'
  },
  {
    name: 'Farewell Poster',
    category: categories[4],
    desc: (
      `
      Farewell poster is an poster design made for farewell party Rohkris SMAN 14 Bekasi.
      `
    ),
    src: farewell,
    link: ''
  },
  {
    name: 'Christmas Poster',
    category: categories[4],
    desc: (
      `
      Christmas poster is an poster design made for christmas event Rohkris SMAN 14 Bekasi.
      `
    ),
    src: natal,
    link: ''
  }, 
]