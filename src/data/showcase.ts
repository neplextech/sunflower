interface IShowcase {
  title: string;
  description: string;
  link: string;
}

export const ShowcaseResource: IShowcase[] = [
  {
    title: 'Sunflower',
    description:
      'Quickly get your documentation up and running with Sunflower 🌻.',
    link: 'https://github.com/neplextech/sunflower',
  },
  {
    title: 'Canvacord',
    description:
      'Canvacord allows you to easily generate custom images using React and tailwindcss-like syntax.',
    link: 'https://canvacord.js.org',
  },
  {
    title: 'Discord Player',
    description:
      'A robust framework for building Discord music bots in JavaScript/TypeScript.',
    link: 'https://discord-player.js.org',
  },
];
