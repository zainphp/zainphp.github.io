// icons
import GitHubIcon from '@mui/icons-material/GitHub'
import WebIcon from '@mui/icons-material/Language'
//
import type { Locale } from '@/app/[[...lang]]/@types/locale'
import type Project from '@/types/project'

const SOURCE_CODE_BUTTON_TEXT: Record<Locale, string> = {
    en: 'Source Code',
    ja: 'ソースコード',
}

const VISIT_BUTTON_TEXT: Record<Locale, string> = {
    en: 'Visit',
    ja: '見る',
}

const PACKAGIST_BUTTON_TEXT: Record<Locale, string> = {
    en: 'Packagist',
    ja: 'Packagist',
}

const projects: Project[] = [
    // {
    //     name: 'Sensasi Logistic',
    //     year: 2023,
    //     description: {
    //         en: 'Sensasi Logistic is an application designed for stock management of raw materials and finished products in production processes. The application allows users to efficiently track inventory, optimize supply chains, and eliminate production delays.',
    //         ja: 'Sensasi Logisticは、生産プロセスにおける原材料や完成品の在庫管理のために設計されたシステムです。本システムにより、ユーザーは効率的な在庫追跡、サプライチェーンの最適化、および生産遅延の解消が可能になります。',
    //     },
    //     stacks: ['laravel', 'alpinejs', 'bootstrap'],
    //     buttons: [
    //         {
    //             text: SOURCE_CODE_BUTTON_TEXT,
    //             Icon: GitHubIcon,
    //             url: 'https://github.com/sensasi-apps/sensasi-logistic',
    //         },
    //         // {
    //         //     text: 'Demo',
    //         //     url: 'https://demo-senlog.cu.ma/',
    //         // },
    //     ],
    // },
    // {
    //     name: 'Simulasi Grading Kelapa Sawit',
    //     year: 2022,
    //     description: {
    //         en: 'Application that designed to help palm oil farmers in East Kalimantan estimate their potential income based on the regulations set by palm oil companies.',
    //         ja: '東カリマンタンのパーム農家向けに、パーム油企業の規定に基づいた収入見込みを推定するアプリケーション',
    //     },
    //     stacks: ['react', 'material-ui'],
    //     buttons: [
    //         {
    //             text: SOURCE_CODE_BUTTON_TEXT,
    //             Icon: GitHubIcon,
    //             url: 'https://github.com/sensasi-apps/simulasi-grading-kelapa-sawit',
    //         },
    //         {
    //             text: VISIT_BUTTON_TEXT,
    //             Icon: WebIcon,
    //             url: 'https://simulasi-grading-sawit.web.app/',
    //         },
    //     ],
    // },
    // {
    //     name: 'Chicken Slaughterhouse Blockchain Network',
    //     year: 2022,
    //     description: {
    //         en: 'This project is a part of my final project for my master degree. This project is built using Hyperledger Fabric and Docker.',
    //         ja: 'このプロジェクトは修士課程の最終課題の一部として実施されました。ハイパーレジャーファブリックとDockerを活用して構築されています。',
    //     },
    //     stacks: ['hyperledger', 'docker'],
    //     buttons: [
    //         {
    //             text: SOURCE_CODE_BUTTON_TEXT,
    //             Icon: GitHubIcon,
    //             url: 'https://github.com/sensasi-apps/sensasi-logistic',
    //         },
    //     ],
    // },
    {
        name: 'Material Blade',
        year: 2022,
        description: {
            en: 'Material Blade is a simple package that provides the beautifulness of Google Material Design components as Laravel Blade components. Material Blade aims to make UI/UX development of your Laravel app faster, inspired by Material UI.',
            ja: 'Material Bladeは、Googleマテリアルデザインの美しいコンポーネントをLaravelブレードコンポーネントとして提供するシンプルなパッケージです。Material UIにインスパイアされたこのツールは、LaravelアプリケーションのUI/UX開発を効率化することを目的としています。',
        },
        stacks: ['laravel'],
        buttons: [
            {
                text: PACKAGIST_BUTTON_TEXT,
                url: 'https://packagist.org/packages/sensasi-delight/material-blade',
            },
        ],
    },
    // {
    //     name: 'Sensasi Navbar',
    //     year: 2023,
    //     description: {
    //         en: 'Sensasi Navbar is a Chrome extension designed to enhance navigation within the browser, particularly when Chrome is in full-screen mode (F11). It provides a navigation bar that assists in navigating through tabs, offering convenience and ease of use.',
    //         ja: 'Sensasi Navbarは、ブラウザ内のナビゲーションを強化するChrome拡張機能です。特に全画面モード（F11）時に効果を発揮し、タブ操作を支援するナビゲーションバーを提供します。ユーザーの利便性と操作性向上を実現することを目的としています。',
    //     },
    //     stacks: ['react', 'material-ui', 'typescript'],
    //     buttons: [
    //         {
    //             text: SOURCE_CODE_BUTTON_TEXT,
    //             Icon: GitHubIcon,
    //             url: 'https://github.com/zainphp/sensasi-navbar-crx',
    //         },
    //     ],
    // },

    // {
    //     name: 'Sensasi POS',
    //     year: 2024,
    //     description: {
    //         en: 'A simple Point of Sale application designed to help record sales of goods at stalls / shops / UMKM / stands / outlets / supermarkets.',
    //         ja: '露店・店舗・中小企業・スタンド・アウトレット・スーパーマーケット向けに、商品販売記録を支援するシンプルなPOSアプリケーション',
    //     },
    //     stacks: ['nextjs', 'hero-ui'],
    //     buttons: [
    //         {
    //             text: SOURCE_CODE_BUTTON_TEXT,
    //             Icon: GitHubIcon,
    //             url: 'https://github.com/sensasi-apps/sensasi-pos',
    //         },
    //     ],
    // },

    {
        name: 'MUI DataTable Delight',
        year: 2025,
        description: {
            en: 'A responsive DataTable component built with MUI for React-based project.',
            ja: 'Reactプロジェクト向けMUI製のレスポンシブデータテーブルコンポーネント',
        },
        stacks: ['react', 'material-ui'],
        buttons: [
            {
                text: VISIT_BUTTON_TEXT,
                Icon: WebIcon,
                url: 'https://mui-datatable-delight.vercel.app',
            },
        ],
    },

    // {
    //     name: 'Reformat Delight',
    //     year: 2025,
    //     description: {
    //         en: 'Free and open source tool that is a web app that allows you to reformat/convert your file(s).',
    //         ja: 'ファイルの再フォーマット/変換が可能な無料オープンソースウェブアプリツール',
    //     },
    //     stacks: ['remix', 'material-ui'],
    //     buttons: [
    //         // {
    //         //     text: VISIT_BUTTON_TEXT,
    //         //     Icon: WebIcon,
    //         //     url: 'https://reformat-delight.vercel.app',
    //         // },
    //         {
    //             text: SOURCE_CODE_BUTTON_TEXT,
    //             Icon: GitHubIcon,
    //             url: 'https://github.com/zainphp/reformat-delight',
    //         },
    //     ],
    // },
    {
        name: 'Terloquent ID',
        year: 2025,
        description: {
            en: '🌏 Eloquent models for Indonesian administrative regions — no database required.',
            ja: '🌏 インドネシアの行政地域向けの Eloquent モデル — データベースは必要ありません。',
        },
        stacks: ['php', 'laravel'],
        buttons: [
            {
                text: VISIT_BUTTON_TEXT,
                Icon: GitHubIcon,
                url: 'https://github.com/zainphp/terloquent-id',
            },
        ],
    },
    {
        name: 'Vertical Tabs',
        year: 2025,
        description: {
            en: 'A chrome extension that provides vertical tabs for easier tab management and keep full navigation access even in fullscreen mode.',
            ja: 'タブ管理を容易にし、全画面モードでも完全なナビゲーションアクセスを維持するための垂直タブを提供するChrome拡張機能。',
        },
        stacks: ['typescript', 'react'],
        buttons: [
            {
                text: VISIT_BUTTON_TEXT,
                Icon: WebIcon,
                url: 'https://chromewebstore.google.com/detail/vertical-tabs-by-sensasi/cgocnaphmglbfjcdhkmpakgildijpgkf',
            },
            {
                text: SOURCE_CODE_BUTTON_TEXT,
                Icon: GitHubIcon,
                url: 'https://github.com/zainphp/vertical-tabs-crx',
            },
        ],
    },
]

export default projects.sort((a, b) => b.year - (a.year + 1))
