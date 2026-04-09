// vendors
import { useState } from 'react'
import { useParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'
// materials
import Box from '@mui/material/Box'
import Grow from '@mui/material/Grow'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
// icons
import CloseIcon from '@mui/icons-material/Close'
import SearchIcon from '@mui/icons-material/Search'

export default function SearchBar({
    onChangeDebounce,
}: {
    onChangeDebounce: (value: string) => void
}) {
    const { lang = ['en'] } = useParams()
    const locale = lang[0]

    const [isOpen, setIsOpen] = useState(false)
    const [searchText, setSearchText] = useState('')

    const debounced = useDebouncedCallback(onChangeDebounce, 500)

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
            }}>
            <Grow in={!isOpen} exit={false} unmountOnExit>
                <IconButton
                    size="small"
                    onClick={() => {
                        setIsOpen(prev => !prev)
                    }}>
                    <SearchIcon />
                </IconButton>
            </Grow>

            <Grow in={isOpen} exit={false} unmountOnExit>
                <TextField
                    onChange={({ target: { value } }) => {
                        setSearchText(value)
                        debounced(value)
                    }}
                    value={searchText}
                    label={locale === 'ja' ? '検索' : 'Search'}
                    size="small"
                    variant="standard"
                    margin="none"
                    inputRef={(ref: HTMLInputElement | null) => {
                        ref?.focus()
                    }}
                    slotProps={{
                        input: {
                            sx: {
                                pr: 0.5,
                            },
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        size="small"
                                        onClick={() => {
                                            setIsOpen(false)
                                            setSearchText('')
                                            debounced('')
                                        }}>
                                        <CloseIcon fontSize="small" />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        },
                    }}
                />
            </Grow>
        </Box>
    )
}
