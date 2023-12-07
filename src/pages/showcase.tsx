import { useState } from 'react';
import { useDebounce } from '@edge-ui/react';
import { HeadingMeta } from '@/components/heading';
import { CardGrid } from '@/components/layout/CardGrid';
import { Container } from '@/components/layout/Container';
import { ShowcaseResource } from '@/data/showcase';
import {
  Button,
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  Heading,
  Paragraph,
  Input,
} from '@edge-ui/react';
import { ExternalLink, Upload } from 'lucide-react';
import Link from 'next/link';

const resURL =
  'https://github.com/neplextech/sunflower/blob/main/src/data/showcase.ts';

export default function Showcase() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const debouncedSearch = useDebounce(searchTerm, 500);

  const filteredExtractors = ShowcaseResource.filter((project) =>
    project.title.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <Container>
      <HeadingMeta
        title="Showcase | Discord Player"
        description="A curated list of resources like open-source music bots and extractors, built by the Discord Player community."
      />
      <div className="mt-5 mb-10 space-y-5 w-full">
        <div>
          <Heading.H1>Showcase</Heading.H1>
          <Paragraph>
            Projects using Sunflower as their documentation renderer.
          </Paragraph>
          <div className="mt-3">
            <Link href={resURL} target="_blank" rel="noopener noreferrer">
              <Button className="w-full md:w-auto gap-1">
                <Upload className="h-5 w-5" />
                Add your own
              </Button>
            </Link>
          </div>
        </div>

        <div className="py-5 felx justify-center">
          <Input
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-xl"
          />
        </div>

        {filteredExtractors.length > 0 && (
          <div className="space-y-2">
            <Heading.H2>Projects</Heading.H2>
            <CardGrid>
              {filteredExtractors.map((ext) => (
                <Link
                  href={ext.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={ext.title}
                >
                  <Card className="bg-transparent cursor-pointer">
                    <CardHeader>
                      <CardTitle>
                        <span className="flex flex-row gap-1 items-center">
                          {ext.title} <ExternalLink className="h-4 w-4" />
                        </span>
                      </CardTitle>
                      <CardDescription>{ext.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </CardGrid>
          </div>
        )}
      </div>
    </Container>
  );
}
