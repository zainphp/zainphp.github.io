// vendors
import type { Viewport } from 'next'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { Roboto } from 'next/font/google'
// sub
import type Params from './@types/params'
import type { Locale } from './@types/locale'
import ThemeProvider from './@layout/theme-provider'
import PageLayout from './@layout/page-layout'
// utils
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export { default as metadata } from './@layout/metadata'
export { default as generateMetadata } from './@layout/utils/generate-metadata'

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto',
})

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#333333',
}

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: Promise<Params>
}) {
    const { lang = ['en'] } = await params
    const locale = lang[0] as Locale

    const personJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Adam Zain Akbar',
        url: 'https://zainphp.github.io',
        jobTitle: 'Web Developer',
        description:
            'Adam Zain Akbar is a full time learner, mostly a web developer.',
        sameAs: [
            'https://github.com/zainphp',
            'https://www.linkedin.com/in/-zain-adam/',
            'https://scholar.google.com/citations?user=N9MoW0EAAAAJ',
        ],
    }

    const websiteJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Adam Zain Akbar Web Profile',
        url: 'https://zainphp.github.io',
        publisher: {
            '@type': 'Person',
            name: 'Adam Zain Akbar',
        },
    }

    return (
        <html lang={locale}>
            <head>
                <script
                    type="application/ld+json"
                    // biome-ignore lint/security/noDangerouslySetInnerHtml: needed
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(personJsonLd),
                    }}
                />
                <script
                    type="application/ld+json"
                    // biome-ignore lint/security/noDangerouslySetInnerHtml: needed
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(websiteJsonLd),
                    }}
                />
            </head>
            <body className={roboto.variable}>
                <InitFirebase />
                <AppRouterCacheProvider>
                    <ThemeProvider>
                        <PageLayout locale={lang[0]}>{children}</PageLayout>
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    )
}

export function generateStaticParams() {
    return [{ lang: ['ja'] }, { lang: [''] }]
}
