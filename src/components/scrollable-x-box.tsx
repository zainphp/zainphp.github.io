import type { ReactNode } from 'react'
import Box from '@mui/material/Box'

export default function ScrollableXBox({ children }: { children: ReactNode }) {
    return (
        <Box
            sx={{
                display: 'flex',
                gap: 3,
                overflowX: 'auto',
            }}>
            {children}
        </Box>
    )
}
