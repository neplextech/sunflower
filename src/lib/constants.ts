import { JetBrains_Mono, Inter, Orbitron } from 'next/font/google';

interface IFeature {
  title: string;
  description: string;
}

interface ITools extends IFeature {
  link: string;
}

export const features: IFeature[] = [
  {
    title: 'User-Friendly interface',
    description: 'A simple and easy to use interface for all users.',
  },
  {
    title: 'Open Source',
    description: 'Sunflower is open source and free to use.',
  },
  {
    title: 'Powered by Next.js',
    description:
      'Sunflower is powered by Next.js, allowing you to quickly modify and deploy as needed.',
  },
  {
    title: 'Markdown Support',
    description:
      'Sunflower supports markdown out-of-the-box, allowing you to easily format your documentation.',
  },
  {
    title: 'Search Functionality',
    description:
      'Sunflower has a built-in fuzzy search to allow users to quickly find what they need.',
  },
  {
    title: 'Responsive Design',
    description:
      'Sunflower is responsive, allowing users to view your documentation on any device.',
  },
];

export const tools: ITools[] = [
  {
    title: 'next.js',
    link: 'https://github.com/vercel/next.js',
    description: 'The React Framework for Production.',
  },
  {
    title: 'shadcn-ui',
    link: 'https://ui.shadcn.com',
    description:
      'Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.',
  },
  {
    title: 'micro-docgen',
    link: 'https://github.com/neplextech/micro-docgen',
    description:
      'A lightweight documentation generator built on top of typedoc.',
  },
];

export const orbitron = Orbitron({
  subsets: ['latin'],
});

export const jbMono = JetBrains_Mono({
  subsets: ['latin'],
});

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const DISCORD_INVITE = 'https://neplextech.com/discord';
export const DISCORD_ICON = 'https://github.com/neplextech.png';
