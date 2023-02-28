import {Head, Html, Main, NextScript} from 'next/document';
import React from 'react';

const BoilerplateDocument: React.FC = () => (
  <Html lang="en">
    <Head>
      <meta name="author" content="Boilerplate" />
      <meta name="theme-color" content="#bf9425" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="application-name" content="Boilerplate" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Boilerplate" />
      <meta name="msapplication-navbutton-color" content="#bf9425" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      <link rel="manifest" href="/manifest.json" />
      {/* TODO: make meta image for your application/website */}
      <link rel="apple-touch-icon" sizes="320x320" href="/favicon/metaImg.png" />
      <link
        as="font"
        rel="preload"
        type="font/woff2"
        crossOrigin="anonymous"
        href="/fonts/Roboto-Regular.ttf"
      />
      <link
        as="font"
        rel="preload"
        type="font/woff2"
        crossOrigin="anonymous"
        href="/fonts/Roboto-Medium.ttf"
      />
      <link
        as="font"
        rel="preload"
        type="font/woff2"
        crossOrigin="anonymous"
        href="/fonts/Roboto-Bold.ttf"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default BoilerplateDocument;
