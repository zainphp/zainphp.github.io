// materials
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
//
import type { Locale } from '@/app/[[...lang]]/@types/locale'
import type Project from '@/types/project'
import BrandIconImg from './brand-icon-img'

export default function ProjectItemCard({
    data,
    locale,
}: {
    data: Project
    locale: Locale
}) {
    const { name, year, description, stacks, buttons } = data

    return (
        <Card
            elevation={4}
            sx={{
                borderRadius: 4,
                minWidth: 300,
            }}>
            <CardContent sx={{ position: 'relative', height: '100%' }}>
                <Typography
                    variant="body2"
                    sx={{
                        mb: 1,
                        color: 'text.secondary',
                    }}>
                    Stacks:
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        gap: 2,
                        alignItems: 'center',
                        mb: 4,
                    }}>
                    {stacks.map(stack => (
                        <BrandIconImg key={stack} brand={stack} />
                    ))}
                </Box>

                <Typography variant="h5" component="div">
                    {name}
                </Typography>

                <Typography
                    variant="body2"
                    sx={{
                        mb: 2,
                        color: 'text.secondary',
                    }}>
                    {year}
                </Typography>

                <Typography
                    variant="body2"
                    sx={{
                        mb: 8,
                    }}>
                    {description[locale]}
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        gap: 1,
                        mt: 2,
                        position: 'absolute',
                        bottom: 16,
                    }}>
                    {buttons.map(button => (
                        <Button
                            color="info"
                            href={button.url}
                            key={button.url}
                            size="small"
                            variant="outlined"
                            startIcon={button.Icon ? <button.Icon /> : null}
                            target="_blank">
                            {button.text[locale]}
                        </Button>
                    ))}
                </Box>
            </CardContent>
        </Card>
    )
}
