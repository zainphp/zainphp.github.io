import Typography, { type TypographyProps } from '@mui/material/Typography'

export default function CodeTag({
    children,
    component = 'span',
    fontSize = 'inherit',
}: {
    children: React.ReactNode
    component?: TypographyProps['component']
    fontSize?: React.CSSProperties['fontSize']
}) {
    return (
        <Typography
            component={component}
            sx={{
                color: 'info.main',
                fontSize: fontSize,
                fontFamily: 'monospace',
                fontWeight: 'bold',
                lineHeight: 1,
                '&:after': {
                    content: '">"',
                    color: 'text.secondary',
                },
                '&:before': {
                    content: "'<'",
                    color: 'text.secondary',
                },
            }}>
            {children}
        </Typography>
    )
}
