import type { Locale } from '@/app/[[...lang]]/@types/locale'

const DICTIONARIES: {
    roleTitle1: Record<Locale, string>
    roleTitle2: Record<Locale, string>
} = {
    roleTitle1: {
        en: 'Coder to the bone',
        ja: 'コーダーとなる',
    },

    roleTitle2: {
        en: 'Full-time learner, mostly a web developer.',
        ja: 'フルタイム学習者、主にウェブ開発者。',
    },
}

export default DICTIONARIES
