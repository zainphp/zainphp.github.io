'use client'

import { useEffect, useRef } from 'react'
import style from './star-background.module.css'

type Star = {
    x: number
    y: number
    z: number
    previousZ: number
    size: number
    alpha: number
}

const STAR_DEPTH = 900
const MIN_STARS = 420
const MAX_STARS = 980
const STAR_DENSITY = 0.00046
const SPEED = 0.38

function randomBetween(min: number, max: number) {
    return min + Math.random() * (max - min)
}

function createStar(
    width: number,
    height: number,
    z = randomBetween(1, STAR_DEPTH),
) {
    const spreadX = width * 0.75
    const spreadY = height * 0.75

    return {
        x: randomBetween(-spreadX, spreadX),
        y: randomBetween(-spreadY, spreadY),
        z,
        previousZ: z,
        size: randomBetween(2.45, 3.45),
        alpha: randomBetween(0.62, 1),
    } satisfies Star
}

function getStarCount(width: number, height: number) {
    return Math.min(
        MAX_STARS,
        Math.max(MIN_STARS, Math.floor(width * height * STAR_DENSITY)),
    )
}

export default function StarBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current

        if (!canvas) {
            return
        }

        const context = canvas.getContext('2d', { alpha: true })

        if (!context) {
            return
        }

        const reducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)',
        )
        const stars: Star[] = []
        let animationFrameId = 0
        let width = 0
        let height = 0
        let centerX = 0
        let centerY = 0
        let pixelRatio = 1
        let previousTime = performance.now()

        const resize = () => {
            const nextWidth = window.innerWidth
            const nextHeight = window.innerHeight

            width = nextWidth
            height = nextHeight
            centerX = width / 2
            centerY = height / 2
            pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
            canvas.width = Math.floor(width * pixelRatio)
            canvas.height = Math.floor(height * pixelRatio)
            canvas.style.width = `${width}px`
            canvas.style.height = `${height}px`
            context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)

            const starCount = getStarCount(width, height)

            if (stars.length > starCount) {
                stars.length = starCount
            }

            while (stars.length < starCount) {
                stars.push(createStar(width, height))
            }
        }

        const resetStar = (star: Star) => {
            const nextStar = createStar(width, height, STAR_DEPTH)
            star.x = nextStar.x
            star.y = nextStar.y
            star.z = nextStar.z
            star.previousZ = nextStar.previousZ
            star.size = nextStar.size
            star.alpha = nextStar.alpha
        }

        const draw = (time: number) => {
            const delta = Math.min(time - previousTime, 34)
            previousTime = time

            context.clearRect(0, 0, width, height)

            for (const star of stars) {
                star.previousZ = star.z

                if (!reducedMotion.matches) {
                    star.z -= delta * SPEED
                }

                if (star.z <= 1) {
                    resetStar(star)
                }

                const scale = STAR_DEPTH / star.z
                const x = centerX + star.x * scale
                const y = centerY + star.y * scale

                if (x < -80 || x > width + 80 || y < -80 || y > height + 80) {
                    resetStar(star)
                    continue
                }

                const previousScale = STAR_DEPTH / star.previousZ
                const previousX = centerX + star.x * previousScale
                const previousY = centerY + star.y * previousScale
                const radius = Math.min(3, star.size * scale * 0.064)
                const brightness = Math.min(1, (1 - star.z / STAR_DEPTH) * 1.25)
                const alpha = Math.max(0.16, brightness * star.alpha)

                context.beginPath()
                context.fillStyle = `rgba(226, 238, 255, ${alpha})`
                context.arc(x, y, radius, 0, Math.PI * 2)
                context.fill()

                if (!reducedMotion.matches && star.z < STAR_DEPTH * 0.45) {
                    context.beginPath()
                    context.strokeStyle = `rgba(154, 202, 255, ${alpha * 0.36})`
                    context.lineWidth = Math.max(0.35, radius * 0.55)
                    context.moveTo(previousX, previousY)
                    context.lineTo(x, y)
                    context.stroke()
                }
            }

            if (!reducedMotion.matches) {
                animationFrameId = window.requestAnimationFrame(draw)
            }
        }

        const handleVisibilityChange = () => {
            if (document.hidden) {
                window.cancelAnimationFrame(animationFrameId)
                return
            }

            previousTime = performance.now()
            animationFrameId = window.requestAnimationFrame(draw)
        }

        resize()
        animationFrameId = window.requestAnimationFrame(draw)
        window.addEventListener('resize', resize)
        document.addEventListener('visibilitychange', handleVisibilityChange)

        return () => {
            window.cancelAnimationFrame(animationFrameId)
            window.removeEventListener('resize', resize)
            document.removeEventListener(
                'visibilitychange',
                handleVisibilityChange,
            )
        }
    }, [])

    return <canvas className={style.starField} ref={canvasRef} />
}
