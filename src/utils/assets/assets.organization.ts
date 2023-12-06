import bcc from '../../assets/images/organization/bcc3.jpeg'
import kbm from '../../assets/images/organization/kbmdsi.png'
import rohkris from '../../assets/images/organization/rohkris.png'

export const organization = [
  {
    name: 'BCC FILKOM UB',
    src: bcc,
    position: 'Staff of Competitive Programming Division',
    desc: (
      `
      As a staff of competitive programming division, i teach some concepts about data structure,
      made competitive programming problems for annual event called CodEx, 
      went into competitive programming competition (and got nice try) and organize the CodEx's event flow as a
      Vice Head of Event Division
      `
    )
  },
  {
    name: 'KBMDSI FILKOM UB',
    src: kbm,
    position: 'Staff of Informatics Division',
    desc: (
      `
      As a staff of informatics division, my job is to create CMS to insert new content to the website,
      organize intern staff recruitment and create backend API so the frontend can use the backend using API endpoints.
      Since informatics division is in medkominfo department, i was a staff of event division for an medkominfo work program
      called Studi Banding, the first one.
      `
    )
  },
  {
    name: 'Rohkris SMAN 14 Bekasi',
    src: rohkris,
    position: 'Lead of Documentation Division',
    desc: (
      `
      As a lead of documentation division, my job is to coordinate instagram feed design
      so it follows the event theme, coordinate and organize to make short film for specific events
      and also design poster for annual event like new year, christmas and others. 
      You can find the short movies through this link :
      <a 
        href="${'https://www.youtube.com/@devanferrel9605/videos'}"
        className="text-blue-500"
      >
      https://www.youtube.com/@devanferrel9605/videos
      </a>
      `
    )
  }
]