declare global {
    interface Window {
        TagCanvas: TagCanvas
    }
}
// vendors
import { useEffect, useState } from 'react'
import Image from 'next/image'
// materials
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
// assets
import '@/assets/js/vendor/TagCanvas.js'
// data
import skills, { type Skill } from '@/constants/data/skills'

export default function SkillsSectionContent({
    searchText,
}: {
    searchText: string
}) {
    const [isClient, setIsClient] = useState(false)
    const [isShowAdvancedSkills, setIsShowAdvancedSkills] = useState(false)
    const [isShowIntermediateSkills, setIsShowIntermediateSkills] =
        useState(false)
    const [isShowBeginnerSkills, setIsShowBeginnerSkills] = useState(false)

    const [skillsToShow, setSkillsToShow] = useState(skills)

    useEffect(() => {
        let filteredSkills = [...skills]

        if (
            isShowAdvancedSkills ||
            isShowIntermediateSkills ||
            isShowBeginnerSkills
        ) {
            filteredSkills = filteredSkills.filter(skill => {
                if (isShowAdvancedSkills && skill.level === 'advanced') {
                    return true
                }

                if (
                    isShowIntermediateSkills &&
                    skill.level === 'intermediate'
                ) {
                    return true
                }

                if (isShowBeginnerSkills && skill.level === 'beginner') {
                    return true
                }

                return false
            })
        }

        if (searchText) {
            filteredSkills = filteredSkills.filter(({ title }) =>
                title.toLowerCase().includes(searchText.toLowerCase()),
            )
        }

        setSkillsToShow(filteredSkills)
    }, [
        searchText,
        isShowAdvancedSkills,
        isShowIntermediateSkills,
        isShowBeginnerSkills,
    ])

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
            <Box minHeight="400px" minWidth="400px">
                {isClient && <SkillCanvas skills={skillsToShow} />}
            </Box>

            <Box display="flex" gap={1} mt={6} mb={1}>
                <Button
                    onClick={() => {
                        setIsShowBeginnerSkills(prev => !prev)
                    }}
                    variant={isShowBeginnerSkills ? 'contained' : 'outlined'}
                    color="success">
                    Beginner
                </Button>

                <Button
                    onClick={() => {
                        setIsShowIntermediateSkills(prev => !prev)
                    }}
                    variant={
                        isShowIntermediateSkills ? 'contained' : 'outlined'
                    }
                    color="info">
                    Intermediate
                </Button>

                <Button
                    onClick={() => {
                        setIsShowAdvancedSkills(prev => !prev)
                    }}
                    variant={isShowAdvancedSkills ? 'contained' : 'outlined'}
                    color="error">
                    Advanced
                </Button>
            </Box>

            <Typography
                variant="body2"
                component="div"
                color="text.secondary"
                fontFamily="monospace">
                click to apply filter(s)
            </Typography>
        </Box>
    )
}

const SkillCanvas = ({ skills }: { skills: Skill[] }) => {
    useEffect(() => {
        if (!window.TagCanvas.started) {
            window.TagCanvas.Start('skills-tagcanvas', 'taglist', {
                activeAudio: false,
                minSpeed: 0.01,
                freezeActive: true,
                shuffleTags: true,
                shape: 'sphere',
                weight: true,
                textColour: null,
                weightFrom: 'data-weight',
                weightSize: 10,
                imageMode: 'both',
                imagePadding: 10,
                pinchZoom: true,
                wheelZoom: false,
                clickToFront: 600,
                fadeIn: 1000,
                initial: [0.3, -0.1],
            })
        } else {
            window.TagCanvas.Reload('skills-tagcanvas')
        }
    })

    return (
        <>
            <canvas
                id="skills-tagcanvas"
                width={400}
                height={400}
                style={{
                    maxWidth: '100%',
                    zIndex: '99',
                    position: 'relative',
                    margin: '0 auto',
                }}
                className="to-fade-in fast-anim"></canvas>
            <div id="taglist" style={{ display: 'none' }}>
                <ul>
                    {skills.map(skill => (
                        <SkillLi key={skill.title} data={skill} />
                    ))}
                </ul>
            </div>
        </>
    )
}

function SkillLi({
    data: { title, logo, href = '#', level },
}: {
    data: Skill
}) {
    const { color, weight, sizePx } = getStylesByLevel(level)

    return (
        <li key={title}>
            <Box
                data-weight={weight}
                sx={{
                    color: color,
                }}
                href={href}
                onClick={e => {
                    e.preventDefault()
                }}
                component="a">
                {title}
                <Image
                    loading="lazy"
                    src={logo}
                    alt={title}
                    height={sizePx}
                    width={sizePx}
                />
            </Box>
        </li>
    )
}

function getStylesByLevel(level: Skill['level']) {
    if (level === 'beginner') {
        return {
            color: 'success.main',
            weight: 1,
            sizePx: 26,
        }
    }

    if (level === 'intermediate') {
        return {
            color: 'info.main',
            weight: 2,
            sizePx: 29,
        }
    }

    // default is advanced
    return {
        color: 'error.main',
        weight: 3,
        sizePx: 32,
    }
}
