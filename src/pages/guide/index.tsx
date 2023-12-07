import { Container } from '@/components/layout/Container';
import { Loader } from '@edge-ui/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { pages } from './[topic]/_data';

export default function GuideEntryPoint() {
  const router = useRouter();

  useEffect(() => {
    const firstPage = pages[0];
    const firstPageName = firstPage?.pages[0]?.name;
    if (firstPageName) router.push(`/guide/${firstPage.name}/${firstPageName}`);
  }, [router]);

  return (
    <Container>
      <div className="grid place-items-center h-[80vh]">
        <Loader variant="bubble" className="h-16 w-16" />
      </div>
    </Container>
  );
}
