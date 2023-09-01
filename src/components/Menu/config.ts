import { MenuEntry } from '@pantherswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://mumuswap.finance/',
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://mumuswap.finance/#/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://mumuswap.finance/#/craters',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Referrals',
    icon: 'GroupsIcon',
    href: 'https://mumuswap.finance/#/referrals',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://mumuswap.finance/#/lottery',
  },
  {
    label: 'Features',
    icon: 'FeatureIcon',
    items: [
      {
        label: 'Automatic LP',
        href: 'https://docs.mumuswap.finance/',
      },
      {
        label: 'Automatic Burning',
        href: 'https://docs.mumuswap.finance/automatic-burning',
      },
      {
        label: 'Referral Program',
        href: 'https://docs.mumuswap.finance/referral-program',
      },
      {
        label: 'Anti Whale',
        href: 'https://docs.mumuswap.finance/anti-whale',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/mumuswap/',
      },
      {
        label: 'Docs',
        href: 'https://docs.mumuswap.finance/',
      },
      {
        label: 'Roadmap',
        href: 'https://docs.mumuswap.finance/roadmap',
      },
      {
        label: 'Blog',
        href: 'https://mumuswap.medium.com',
      },
    ],
  },
]

export default config
