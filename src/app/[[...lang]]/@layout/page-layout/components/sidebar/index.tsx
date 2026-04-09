// materials
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import Tooltip from '@mui/material/Tooltip'
//
import type { Locale } from '@/app/[[...lang]]/@types/locale'
import MENUS from './_constants/menus'
import SIDEBAR_WIDTH from '@/constants/themes/sidebar-width'

export default function Sidebar({ locale }: { locale: Locale }) {
    return (
        <Box
            sx={{
                minWidth: SIDEBAR_WIDTH,
                backgroundColor: '#333',
                zIndex: 1200,
            }}>
            <List
                sx={{
                    position: 'sticky',
                    top: 0,
                }}>
                {MENUS.map(menu => (
                    <ListItem key={menu.href} disablePadding sx={{ my: 2.75 }}>
                        <Tooltip
                            title={menu.text[locale]}
                            placement="right"
                            arrow>
                            <ListItemButton
                                disableRipple
                                sx={{
                                    p: 0,
                                    justifyContent: 'center',
                                    color: 'text.secondary',
                                    '&:hover': {
                                        color: 'text.primary',
                                        backgroundColor: 'unset',
                                    },
                                }}
                                href={menu.href}>
                                <ListItemIcon
                                    sx={{
                                        minWidth: 'unset',
                                        maxWidth: 'unset',
                                        color: 'unset',
                                    }}>
                                    <menu.Icon
                                        sx={{
                                            fontSize: '1.75em',
                                        }}
                                    />
                                </ListItemIcon>
                            </ListItemButton>
                        </Tooltip>
                    </ListItem>
                ))}
            </List>

            {/* <List
                sx={{
                    mb: 4,
                }}>
                <ListItem disablePadding sx={{ display: 'block', my: 1 }}>
                    <Tooltip
                        title={
                            (showBackground ? 'Disable' : 'Enable') +
                            ' Background'
                        }
                        placement="right">
                        <ListItemButton
                            disableRipple
                            sx={theme => ({
                                justifyContent: 'center',
                                fontSize: '2rem',
                                color: showBackground
                                    ? theme.palette.info.main
                                    : theme.palette.text.secondary,
                                '&:hover': {
                                    color: showBackground
                                        ? theme.palette.info.dark
                                        : theme.palette.text.primary,
                                    backgroundColor: 'unset',
                                },
                            })}
                            onClick={() => {
                                setShowBackground(prev => !prev)
                            }}>
                            <ListItemIcon
                                sx={{
                                    minWidth: 'unset',
                                    justifyContent: 'center',
                                    color: 'unset',
                                }}>
                                <WallpaperIcon />
                            </ListItemIcon>
                        </ListItemButton>
                    </Tooltip>
                </ListItem>
            </List> */}
        </Box>
    )
}
