// vendors
import type { ReactNode } from 'react'
// materials
import Box from '@mui/material/Box'
import CodeTag from '@/components/code-tag'

export default function Section({
    id,
    title,
    children,
    endTitle,
}: {
    id: string
    title: string
    children: ReactNode
    endTitle?: ReactNode
}) {
    return (
        <Box id={id} component="section">
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: {
                        xs: 'space-between',
                        sm: 'flex-start',
                    },
                    alignItems: 'center',
                    gap: 1,
                    mb: 4,
                }}>
                <CodeTag component="h2" fontSize="2em">
                    {title}
                </CodeTag>

                {endTitle}
            </Box>

            {children}
        </Box>
    )
}
