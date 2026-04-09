// vendors
import 'dayjs/locale/en'
import 'dayjs/locale/ja'

import dayjs from 'dayjs'
import Flag from 'react-flagkit'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
// materials
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Link from '@mui/material/Link'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
// icons
import OpenInNew from '@mui/icons-material/OpenInNew'
// types
import type { Locale } from '@/app/[[...lang]]/@types/locale'
import type Writing from '@/types/writings'

dayjs.extend(LocalizedFormat)

const DICTIONARIES: {
    readOn: Record<Locale, string>
    writingType: {
        blog: Record<Locale, string>
        paper: Record<Locale, string>
        book: Record<Locale, string>
    }
} = {
    readOn: {
        en: 'Read on $1',
        ja: '続きは$1で',
    },

    writingType: {
        blog: {
            en: 'Blog',
            ja: 'ブログ',
        },
        paper: {
            en: 'Paper',
            ja: '論文',
        },
        book: {
            en: 'Book',
            ja: '書籍',
        },
    },
}

export default function WritingCardItem({
    data: { date, lang, link, platform, previewText, title, type },
    locale,
}: {
    data: Writing
    locale: Locale
}) {
    return (
        <Card
            elevation={4}
            sx={{
                borderRadius: 4,
                minWidth: 300,
            }}>
            <CardContent sx={{ position: 'relative', height: '100%' }}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        justifyContent: 'space-between',
                    }}>
                    <Chip
                        label={DICTIONARIES.writingType[type][locale]}
                        variant="outlined"
                        color="info"
                    />

                    <LangFlag lang={lang} />
                </Box>

                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        mt: 3,
                    }}>
                    {title[locale]}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    <Link href={link} target="_blank">
                        {platform}
                    </Link>{' '}
                    • {dayjs(date).locale(locale).format('LL')}
                </Typography>

                <Typography
                    variant="body2"
                    sx={{
                        mt: 3,
                        mb: 6,
                    }}>
                    {previewText[locale]}
                </Typography>

                <Button
                    href={link}
                    target="_blank"
                    size="small"
                    sx={{
                        position: 'absolute',
                        bottom: 8,
                        transform: 'translateX(-4px)',
                    }}>
                    {DICTIONARIES.readOn[locale].replace('$1', platform)}
                    <OpenInNew
                        fontSize="inherit"
                        sx={{ ml: 1, verticalAlign: 'middle' }}
                    />
                </Button>
            </CardContent>
        </Card>
    )
}

function LangFlag({ lang }: { lang: Writing['lang'] }) {
    return (
        <Tooltip
            title={lang === 'id' ? 'Bahasa Indonesia' : 'English'}
            arrow
            placement="left">
            <Box sx={{ mr: 0.5 }}>
                <Flag country={lang === 'id' ? 'ID' : 'GB'} />
            </Box>
        </Tooltip>
    )
}
