// vendors
import type { ReactNode } from 'react'
// materials
import Typography from '@mui/material/Typography'
// sub-components
import Section from './_components/layout'
// components
import type { Locale } from '../@types/locale'
import CodeTag from '@/components/code-tag'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'

const content: Record<Locale, ReactNode[]> = {
    en: [
        <>
            Proud member of{' '}
            <Link href="https://lara-army.github.io/">
                <CodeTag>Laravel Indonesia</CodeTag>
            </Link>
        </>,
        <>
            Hello, World!, my name is <CodeTag>Adam Akbar</CodeTag> but everyone
            calls me <CodeTag>Zain</CodeTag>!, I'm a highly skilled{' '}
            <CodeTag>developer</CodeTag> with a proven track record in{' '}
            <CodeTag>PHP</CodeTag> development spanning over{' '}
            <CodeTag>{new Date().getFullYear() - 2016}</CodeTag> years. I take
            pride in my ability to deliver high-quality solutions that meet and
            exceed client expectations.
        </>,
        <>
            On top of my impressive coding skills, I hold a{' '}
            <CodeTag>Master's</CodeTag> degree in Computer Science, where I
            focused on building a cutting-edge <CodeTag>blockchain</CodeTag>{' '}
            network using Hyperledger Fabric. This has given me a unique
            perspective on the intersection of web development and blockchain
            technology, and I'm <CodeTag>excited</CodeTag> to bring my expertise
            to the table on any project I'm involved in.
        </>,
    ],

    ja: [
        <>
            <Link href="https://lara-army.github.io/">Laravel Indonesia</Link>
            の誇り高きメンバー
        </>,
        <>
            こんにちは、世界！私の名前は <CodeTag>Adam Akbar</CodeTag> ですが、
            みんなからは <CodeTag>Zain</CodeTag> と呼ばれています！
            私は優れたスキルを持つ <CodeTag>デベロッパー</CodeTag> であり、
            <CodeTag>PHP</CodeTag> 開発の分野で
            <CodeTag>{new Date().getFullYear() - 2016}</CodeTag>{' '}
            年以上の実績があります。
            クライアントの期待を満たすだけでなく、それを超える高品質なソリューションを
            提供することに誇りを持っています。
        </>,
        <>
            優れたコーディングスキルに加えて、 私は{' '}
            <CodeTag>コンピュータサイエンスの修士号</CodeTag> を取得しています。
            その研究では、<CodeTag>Hyperledger Fabric</CodeTag> を使用して
            最先端の <CodeTag>ブロックチェーン</CodeTag>{' '}
            ネットワークを構築することに 重点を置きました。
            この経験により、ウェブ開発とブロックチェーン技術の交差点における
            独自の視点を得ることができました。 どのプロジェクトにおいても、
            自分の専門知識を活かせることに <CodeTag>ワクワク</CodeTag>{' '}
            しています。
        </>,
    ],
}

const sectionTitle: Record<Locale, string> = {
    en: 'About Me',
    ja: '私について',
}

export default function AboutSection({ locale }: { locale: Locale }) {
    return (
        <Section id="about" title={sectionTitle[locale]}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                }}>
                {content[locale].map((item, index) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: no id
                    <Typography align="justify" key={index}>
                        {item}
                    </Typography>
                ))}
            </Box>
        </Section>
    )
}
