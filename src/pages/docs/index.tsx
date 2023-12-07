import { Container } from '@/components/layout/Container';
import { docs } from '@/lib/docs';
import { Loader } from '@edge-ui/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function DocumentationEntryPoint() {
  const router = useRouter();

  useEffect(() => {
    const mod = docs.modules?.[Object.keys(docs.modules)[0]];
    const firstClass = mod?.classes[0]?.data?.name;
    console.log(docs, mod, firstClass);
    if (firstClass) router.push(`/docs/${mod.name}/class/${firstClass}`);
  }, []);

  return (
    <Container>
      <div className="grid place-items-center h-[80vh]">
        <Loader variant="bubble" className="h-16 w-16" />
      </div>
    </Container>
  );
}
