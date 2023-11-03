import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <title>Rafael Santos</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/src/assets/logo.png" />
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
