// materials
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'
// icons
import InfoIcon from '@mui/icons-material/InfoOutlined'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
// styles
import SIDEBAR_WIDTH from '@/constants/themes/sidebar-width'

export default function Header() {
    return (
        <AppBar
            position="fixed"
            sx={{
                pl: `${SIDEBAR_WIDTH.toString()}px`,
            }}>
            <Box>
                <Box
                    sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        backgroundColor: 'background.default',
                        flexGrow: 0,
                        p: 1,
                        pl: 2,
                        pt: 1.2,
                    }}>
                    <InfoIcon color="info" fontSize="small" />
                    <Typography
                        sx={{
                            mx: 1,
                        }}>
                        README.md
                    </Typography>
                </Box>
            </Box>

            <Box>
                <Breadcrumbs
                    separator={<NavigateNextIcon />}
                    aria-label="breadcrumb"
                    sx={{
                        backgroundColor: 'background.default',
                        px: 2,
                        py: 0.2,
                        '& .MuiBreadcrumbs-separator': {
                            color: 'text.secondary',
                            m: 0,
                        },
                    }}>
                    <Typography>src</Typography>,
                    <Typography
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}>
                        <InfoIcon
                            color="info"
                            sx={{ mr: 1, fontSize: '1em' }}
                        />
                        README.md
                    </Typography>
                </Breadcrumbs>
            </Box>
        </AppBar>
    )
}
