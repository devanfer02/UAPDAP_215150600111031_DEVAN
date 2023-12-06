import agil from '../../assets/images/projects/agilportfolio.png'
import calc from '../../assets/images/projects/calculator.png'
import certi from '../../assets/images/projects/findcerti.png'
import pbo from '../../assets/images/projects/guigame.png'
import dapchall from '../../assets/images/projects/praktikum.png'
import gokers from '../../assets/images/projects/gokers2.png'
import soschat from '../../assets/images/projects/soschat2.png'
import farewell from '../../assets/images/projects/farewell.png'
import natal from '../../assets/images/projects/natal.png'
import kbmdsi from '../../assets/images/projects/kbmdsi.png'

// SLOW LOADING AHH
import agilsmall from '../../assets/images/projects/small/agilportfolio-small.jpg'
import calcsmall from '../../assets/images/projects/small/calculator-small.jpg'
import certismall from '../../assets/images/projects/small/findcerti-small.jpg'
import pbosmall from '../../assets/images/projects/small/guigame-small.jpg'
import dapchallsmall from '../../assets/images/projects/small/praktikum-small.jpg'
import gokerssmall from '../../assets/images/projects/small/gokers2-small.jpg'
import soschatsmall from '../../assets/images/projects/small/soschat2-small.jpg'
import farewellsmall from '../../assets/images/projects/small/farewell-small.jpg'
import natalsmall from '../../assets/images/projects/small/natal-small.jpg'

export const categories = ['Website', 'API', 'All', 'Java App', 'Design']

export interface Portfolio {
  name: string;
  category: string;
  desc: string;
  src: string;
  link: string;
  small: string;
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
    link: 'https://hamdallaagil.vercel.app/',
    small: agilsmall
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
    link: 'https://devanfer02.github.io/find_your_rabraw22_certi/',
    small: certismall
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
    link: 'https://github.com/devanfer02/DDM-Game',
    small: pbosmall
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
    link: 'https://devanfer02.github.io/dap-praktikum-challenge/',
    small: dapchallsmall
  },
  {
    name: "Calculator",
    category: categories[0],
    desc: (
      `
      I made this calculator as a lab assignment of User Interface Design class to implement data structure and algorithm, 
      spesifically stack data structure to convert infix expression to postfix and evalute it.
      `
    ),
    src: calc,
    link: 'https://devanfer02.github.io/calculator-app/',
    small: calcsmall
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
    link: 'https://github.com/devanfer02/gokers/',
    small: gokerssmall
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
    link: 'https://github.com/devanfer02/soschat-be/',
    small: soschatsmall
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
    link: 'https://kbmdsi.ub.ac.id/',
    small: soschatsmall
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
    link: '',
    small: farewellsmall
  },
  {
    name: 'Christmas Poster',
    category: categories[4],
    desc: (
      `
      Farewell poster is an poster design made for christmas event Rohkris SMAN 14 Bekasi.
      `
    ),
    src: natal,
    link: '',
    small: natalsmall
  }, 
]