import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="PT-br">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon-32x32.png" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Rafael Santos" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
