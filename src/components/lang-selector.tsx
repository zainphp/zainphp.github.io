// vendors
import type { ReactNode } from 'react'
// materials
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
//
import type { Locale } from '@/app/[[...lang]]/@types/locale'

export default function LangSelector({ locale }: { locale: Locale }) {
    return (
        <Box
            sx={{
                display: 'flex',
                marginTop: -4,
            }}>
            <LangButton href="/" isActive={locale === 'en'}>
                En
            </LangButton>

            <Divider orientation="vertical" />

            <LangButton href="/ja" isActive={locale === 'ja'}>
                日本語
            </LangButton>
        </Box>
    )
}

function LangButton({
    children,
    href,
    isActive = false,
}: {
    children: ReactNode
    href?: string
    isActive?: boolean
}) {
    return (
        <Button
            sx={{
                fontWeight: isActive ? 'bold' : undefined,
                minWidth: 'unset',
                px: 2,
                color: isActive ? undefined : 'text.disabled',
            }}
            href={href}>
            {children}
        </Button>
    )
}
