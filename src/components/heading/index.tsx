import Head from 'next/head';

interface IProps {
  title?: string;
  description?: string;
}

const DEFAULT_TITLE = 'Sunflower';
const DEFAULT_DESC =
  'Quickly get your documentation up and running with Sunflower.';

export function HeadingMeta(props: IProps) {
  const { title = DEFAULT_TITLE, description = DEFAULT_DESC } = props;

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <link rel="icon" href="/icon.png" type="image/png" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="api,documentation,docs,typescript,neplex,jsdoc,micro-docgen,doc-renderer"
      />
      <meta name="theme-color" content="#facc15" />
    </Head>
  );
}
