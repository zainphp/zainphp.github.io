import Paper from '@mui/material/Paper'
import avatarImage from './avatar.png'
import Image from 'next/image'

export default function ProfileImage() {
    return (
        <Paper
            elevation={3}
            sx={{
                borderRadius: 100,
                width: 200,
                height: 200,
                overflow: 'hidden',
                position: 'relative',
            }}>
            <Image
                src={avatarImage}
                alt="Adam Zain Akbar Avatar Photo"
                fill
                sizes="200px"
                priority
                style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                }}
                placeholder="blur"
            />
        </Paper>
    )
}
