const categories = [
  {
    name: 'Desk',
    items: [
      {
        title: 'Asus TUF F15 (15", 2021)',
        description: 'The TUF is just amazing. Plus, 16 GB RAM and 2TB SSD.',
        url: 'https://amzn.to/40dTJV0',
      },
      {
        title: 'Logitech G502 HERO',
        description: 'Customizable weights, multiple programmable buttons, continuous scrolling.',
        url: 'https://amzn.to/49dbtEL',
      },
      {
        title: 'Logitech G402',
        description: 'Best mouse ever, with multiple programmable buttons',
        url: 'https://amzn.to/3SiLCob',
      },
      {
        title: 'Samsung 27 Inch Monitor ',
        description: 'Actually size matters.',
        url: 'https://amzn.to/3FzfVzy',
      },
      {
        title: 'Logitech G512 Blue Mechanical Keyboard',
        description:
          'Nothing fancy over here, just a table that fits my office.',
        url: 'https://amzn.to/47aqRzy',
      },
      {
        title: 'Cosmic Byte CB-GK-16 Blue Mechanical Keyboard',
        description: 'This is my backup mechanical keyboard.',
        url: 'https://amzn.to/40fPcl6',
      },
      {
        title: 'Ergonomic  Chair',
        description: 'I sit all day, so I might as well get a good chair.',
        url: '#',
      },
      {
        title: 'Tukzer Large Mouse Pad',
        description: 'Smooth tasks with smooth flows.',
        url: 'https://amzn.to/45T0QDw',
      },
      {
        title: 'Echo Dot',
        description: 'I love to listening music.',
        url: 'https://amzn.to/3tOO7EF',
      },
    ],
  },
  {
    name: 'Coding',
    items: [
      {
        title: 'VSCode',
        description:
          'After using Sublime for many years, I moved to VSCode like everybody else.',
        url: 'https://code.visualstudio.com',
      },
      {
        title: 'Vitesse Theme',
        description:
          'This is the theme I created, maintain, and proudly use everywhere.',
        url: 'https://marketplace.visualstudio.com/items?itemName=antfu.theme-vitesse',
      },
      {
        title: 'Fira Code',
        description:
          'I absolutely love this monospaced font because of all the ligatures.',
        url: 'https://github.com/tonsky/FiraCode',
      },
    ],
  },
  {
    name: 'Terminal',
    items: [
      {
        title: 'Hyper',
        description:
          "Performance could be better, but I enjoy using this since it's made with JavaScript.",
        url: 'https://hyper.is',
      },
      {
        title: 'NuShell',
        description: 'A new type of shell',
        url: 'https://www.nushell.sh/',
      },
      {
        title: 'Oh My ZSH',
        description:
          "A collection of ZSH plugins that you install once and you're ready to go.",
        url: 'https://ohmyz.sh',
      },
      {
        title: 'Termius',
        description: 'SSH | SFTP | Port Forwarding | with a lot of features',
        url: 'https://termius.com/',
      },
    ],
  },
  {
    name: 'Apps',
    items: [
      {
        title: '1Password',
        description: 'The first thing I install on any new device.',
        url: 'https://1password.com',
      },
      {
        title: 'KeePassXC',
        description: 'Best Open Source Password Manager.',
        url: 'https://keepassxc.org',
      },
      {
        title: 'ShareX',
        description:
          'This is what I use whenever I need to share and/or highlight screenshots.',
        url: 'https://getsharex.com',
      },
      {
        title: 'Directory Opus',
        description: 'Kills frustration of Windows Explorer limitations.',
        url: 'https://www.gpsoft.com.au/',
      },
      {
        title: 'PowerToys',
        description: 'Extra cheese on WinOS',
        url: 'https://github.com/microsoft/PowerToys',
      },
      {
        title: 'Figma',
        description:
          'I never thought something would replace the Adobe suite for me. Figma did.',
        url: 'https://figma.com',
      },
      {
        title: 'Grammarly',
        description:
          'A must-have tool for non-native English speakers like me.',
        url: 'https://grammarly.com/',
      },
      {
        title: 'Matrix & mautrix bridges',
        description: 'Open Network decentralised communication.',
        url: 'https://matrix.org/',
      },
      {
        title: 'Element',
        description: 'Best matrix client.',
        url: 'https://matrix.org/',
      },
      {
        title: 'Mattermost',
        description: 'The secure collaboration hub for technical teams.',
        url: 'https://mattermost.com/',
      },
      {
        title: 'Notion',
        description: 'My personal OS with all the notes from all my projects.',
        url: 'https://www.notion.so/',
      },
      {
        title: 'DevKinsta',
        description: 'Local Wordpress inside Docker Container',
        url: 'https://paw.cloud',
      },
      {
        title: 'Obsidian',
        description: 'My current choice for to-do lists and organizing notes.',
        url: 'https://culturedcode.com/things/',
      },
      {
        title: '1.1.1.1',
        description: 'Fast. Free. Private. Proxy/VPN.',
        url: 'https://1.1.1.1/',
      },
      {
        title: 'Rambox',
        description: 'Workspace simplifier.',
        url: 'https://ferdium.org/',
      },
      {
        title: 'Arc Browser',
        description: 'Best browser for developers.',
        url: 'https://arc.net/',
      },
      {
        title: 'WSL',
        description: 'Windows Subsystem for Linux.',
        url: 'https://docs.microsoft.com/en-us/windows/wsl/install',
      },
      {
        title: 'Spotify',
        description: 'I love music.',
        url: 'https://spotify.com',
      },
      {
        title: 'Voicemeeter',
        description: 'Audio mixer, but I use it to get multiple audio outputs.',
        url: 'https://voicemeeter.com/',
      },
      {
        title: 'Espanso',
        description: 'Spell check and auto-correct.',
        url: 'https://espanso.org/',
      },
      {
        title: 'Balena Etcher',
        description: 'Flash OS images to SD cards & USB drives, safely and easily.',
        url: 'https://www.balena.io/etcher/',
      },
      {
        title: 'WebTorrent',
        description: 'Streaming torrent client.',
        url: 'https://webtorrent.io/',
      },
      {
        title: 'Self-hosted Wireguard',
        description: 'VPN over the internet.',
        url: 'https://www.wireguard.com/',
      },
    ],
  },
  {
    name: 'Services',
    items: [
      {
        title: 'Cloudflare',
        description:
          'The DNS service I use with all my domains. Amazing product.',
        url: 'https://www.cloudflare.com',
      },
      {
        title: 'Firebase',
        description:
          'A no-brainer database and auth solution for side projects.',
        url: 'https://firebase.google.com',
      },
      {
        title: 'Namecheap Domains',
        description: 'I buy and renew all my domains here.',
        url: 'https://namecheap.com/',
      },
      {
        title: 'Infisical',
        description: 'An open-source secrets manager for developers.',
        url: 'https://infisical.com',
      },
      {
        title: 'YesbhautikX Cloud',
        description: 'Here is where I host all my websites.',
        url: 'https://yesbhautikx.co.in/',
      },
            {
        title: 'Amazon Web Services - AWS',
        url: 'https://aws.amazon.com/',
      },
      {
        title: 'Microsoft Azure & AI Studio',
        url: 'https://azure.microsoft.com/',
      },
      {
        title: 'Oracle Cloud',
        url: 'https://www.oracle.com/cloud/',
      },
      {
        title: 'OpenAI APIs',
        url: 'https://openai.com/api/',
      }
    ],
  },
  {
    name: 'Screen Share | Record | Design | Edit',
    items: [
      {
        title: 'OBS',
        description:
          'Free and open source software for video recording and live streaming.',
        url: 'https://obsproject.com/',
      },
      {
        title: 'AnyDESK',
        description: 'Accessing screen of colleagues and helping out.',
        url: 'https://anydesk.com/',
      },
      {
        title: 'RustDesk',
        description: 'Open source virtual KVM software.',
        url: 'https://rustdesk.com/',
      },
      {
        title: 'Filmora',
        description: 'Quick and easy video editor.',
        url: 'https://filmora.wondershare.com/',
      },
      {
        title: 'Canva',
        description: 'Create stunning designs.',
        url: 'https://canva.com/',
      },
      {
        title: 'Adobe Suite',
        description: 'I use Adobe Illustrator, after effects, premiere pro, and photoshop.',
        url: 'https://adobe.com/',
      },
    ],
  },
  {
    name: 'Audio',
    items: [
      {
        title: 'OnePlus Buds 2',
        description:
          'By far the best headphones I ever had. Premium quality, solid build.',
        url: 'https://amzn.to/49cXFJS',
      },
      {
        title: 'Redgear Cosmo 7.1 Surround Sound',
        description: 'All rounder rough and tough headset.',
        url: 'https://amzn.to/4gdr2yl',
      },
    ],
  },
  {
    name: 'Finance',
    items: [
      {
        title: 'Mint',
        description:
          'All my accounts are connected in one place, so I can see a big picture of everything.',
        url: 'https://mint.com',
      },
      {
        title: 'Binance',
        description:
          "I'm not obsessed with crypto, but I still have some small investments there. My portfolio is made of ETH, BTC, SOL, DOGE, and SHIB.",
        url: 'https://binance.com',
      },
      {
        title: 'pump.fun',
        url: 'https://pump.fun/',
      }
    ],
  },
]

export default categories
