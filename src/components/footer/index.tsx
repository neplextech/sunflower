import Link from 'next/link';
import { cn } from '@edge-ui/react';

export default function Footer() {
  return (
    <footer className="border-t py-4 lg:px-16">
      <div className="flex flex-col lg:flex-row items-center justify-around">
        <div className="flex flex-col items-center">
          <h2 className={cn('text-lg font-bold select-none')}>🌻 Sunflower</h2>
        </div>
        <div className="grid grid-cols-3 gap-2 md:gap-8">
          <div className="flex items-start flex-col text-sm">
            <h3 className="font-semibold">Links</h3>
            <Link href="/docs" className="text-blue-500">
              Documentation
            </Link>
            <Link href="/guide" className="text-blue-500">
              Guides
            </Link>
            <Link href="/showcase" className="text-blue-500">
              Showcase
            </Link>
          </div>
          <div className="flex items-start flex-col text-sm">
            <h3 className="font-semibold">Social</h3>
            <Link
              href="https://github.com/neplextech"
              className="text-blue-500"
            >
              GitHub
            </Link>
            <Link
              href="https://neplextech.com/discord"
              className="text-blue-500"
            >
              Discord
            </Link>
          </div>
          <div className="flex items-start flex-col text-sm">
            <h3 className="font-semibold">About</h3>
            <Link
              href="https://github.com/neplextech/Sunflower/blob/main/CODE_OF_CONDUCT.md"
              className="text-blue-500"
            >
              Code of Conduct
            </Link>
            <Link
              href="https://github.com/neplextech/Sunflower/blob/main/LICENSE"
              className="text-blue-500"
            >
              LICENSE
            </Link>
            <Link
              href="https://github.com/neplextech/Sunflower/blob/main/CONTRIBUTING.md"
              className="text-blue-500"
            >
              Contributing
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-6">
        <span className="text-sm text-muted font-medium">
          Made with ❤️ by{' '}
          <Link href="https://github.com/twlite" className="text-blue-500">
            twlite
          </Link>
        </span>
        <span className="text-sm text-muted">
          © {new Date().getFullYear()}{' '}
          <Link href="https://github.com/neplextech" className="text-blue-500">
            Neplex
          </Link>{' '}
        </span>
      </div>
    </footer>
  );
}
