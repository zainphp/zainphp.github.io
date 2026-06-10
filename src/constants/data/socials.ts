// fa
import type { IconDefinition } from '@fortawesome/fontawesome-common-types'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
// import { faMediumM } from '@fortawesome/free-brands-svg-icons/faMediumM'
// material-icons
// import Instagram from '@mui/icons-material/Instagram'
import Mail from '@mui/icons-material/Mail'
import School from '@mui/icons-material/School'

export interface Social {
    name: string
    icon:
        | {
              vendor: 'mui'
              value: typeof Mail
          }
        | {
              vendor: 'fa'
              value: IconDefinition
          }
    link: string
}

const socials: Social[] = [
    {
        name: 'GitHub',
        icon: {
            vendor: 'fa',
            value: faGithub,
        },
        link: 'https://github.com/zainphp',
    },
    {
        name: 'LinkedIn',
        icon: {
            vendor: 'fa',
            value: faLinkedin,
        },
        link: 'https://www.linkedin.com/in/-zain-adam/',
    },
    {
        name: 'Google Scholar',
        icon: {
            vendor: 'mui',
            value: School,
        },
        link: 'https://scholar.google.com/citations?user=N9MoW0EAAAAJ&hl=en',
    },
    {
        name: 'Email',
        icon: {
            vendor: 'mui',
            value: Mail,
        },
        link: 'mailto:zainadam.id@gmail.com?subject=Hi%20Zain&body=Hi%20Zain%2C%0A%0AI%20am%20interested%20in%20your%20profile%20and%20would%20like%20to%20know%20more.%20Could%20you%20please%20send%20me%20your%20resume%20or%20contact%20me%20at%20your%20earliest%20convenience.%20I%20would%20appreciate%20a%20response%20at%20your%20earliest%20convenience.%20Thank%20you%20for%20your%20time%20and%20consideration.%20I%20look%20forward%20to%20hearing%20from%20you.%20%0A%0ABest%20regards%2C%0A',
    },
]

export default socials
