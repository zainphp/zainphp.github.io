// vendors
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// materials
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
// icons
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons/faBoltLightning'
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons/faPizzaSlice'

export default function Footer() {
    return (
        <Box
            sx={{
                display: 'flex',
                position: 'fixed',
                alignItems: 'center',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: '#007acc',
                zIndex: 1200,
                '& > *': {
                    px: 1,
                    py: 0.3,
                },
            }}>
            <Box
                sx={{
                    backgroundColor: '#16825d',
                }}>
                <FontAwesomeIcon icon={faBoltLightning} width={11} />
            </Box>
            <Box
                sx={{
                    flexFlow: 1,
                }}>
                <FontAwesomeIcon icon={faPizzaSlice} width={14} />
            </Box>

            <Typography variant="caption" component="div">
                made with ❤️ by myself
            </Typography>
        </Box>
    )
}
