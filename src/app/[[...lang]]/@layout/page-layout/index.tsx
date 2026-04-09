import type { ReactNode } from 'react'
// materials
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
// sub-components
import type { Locale } from '../../@types/locale'
import Footer from './components/footer'
import Header from './components/top-bar'
import NumberBar from './components/number-bar'
import Sidebar from './components/sidebar'
import StarBackground from './components/star-background'
import SIDEBAR_WIDTH from '@/constants/themes/sidebar-width'

export default function PageLayout({
    children,
    locale,
}: {
    children: ReactNode
    locale: Locale
}) {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                }}>
                <Sidebar locale={locale} />

                <Box
                    sx={{
                        flexGrow: 1,
                        maxWidth: `calc(100% - ${SIDEBAR_WIDTH.toString()}px)`,
                    }}>
                    <Header />

                    <Box
                        sx={{
                            display: 'flex',
                            flexGrow: 1,
                            mt: 11,
                            mb: 6,
                        }}>
                        <NumberBar />

                        <Container
                            maxWidth="md"
                            disableGutters
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 8,
                                mt: 4,
                                px: 4,
                                '& > section': {
                                    scrollMarginTop: 100,
                                },
                            }}
                            component="main">
                            {children}
                        </Container>
                    </Box>
                </Box>
            </Box>
            <Footer />

            <StarBackground />
        </>
    )
}
