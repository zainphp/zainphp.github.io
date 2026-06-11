// materials
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
// components
import CodeTag from '@/components/code-tag'
// sub-components
import type { Locale } from '@/app/[[...lang]]/@types/locale'
import ContactButtons from '../_components/social-buttons'
import ProfileImage from './profile-image'
import DICTIONARIES from '@/constants/dictionaries'

export default function HeroSection({ locale }: { locale: Locale }) {
    return (
        <Grid
            id="summary"
            component="section"
            container
            spacing={4}
            sx={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: {
                    xs: 'column-reverse',
                    sm: 'row',
                },
            }}>
            <Grid
                size={{
                    xs: 12,
                    sm: 4,
                }}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                <ProfileImage />
            </Grid>
            <Grid
                size={{
                    xs: 12,
                    sm: 8,
                }}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                }}>
                <Typography
                    variant="h3"
                    component="h1"
                    sx={{
                        fontWeight: 'bold',
                        lineHeight: 1,
                    }}>
                    Adam <CodeTag>Zain</CodeTag> Akbar
                </Typography>

                <Typography color="info">
                    {DICTIONARIES.roleTitle2[locale]}
                </Typography>

                <ContactButtons />
            </Grid>
        </Grid>
    )
}
