import '~/styles/index.scss';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import React from 'react';
import {Provider} from 'react-redux';

import {useSystemTheme} from '~/hooks';
import store from '~/redux/store';
interface AppPropsMadeUp extends AppProps {
  Component: React.FC;
}

const queryClient = new QueryClient();

const Boilerplate: React.FC<AppPropsMadeUp> = ({Component, pageProps}) => {
  const systemTheme = useSystemTheme();
  // TODO: create an icon in public/favicon to change the icon of the project when the device is in dark or light mode
  const faviconHref = `/favicon/favicon-${systemTheme}.ico`;

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Head>
          <title>Here should be your title for meta</title>
          <link rel="shortcut icon" href={faviconHref} />
        </Head>
        <Component {...pageProps} />
      </Provider>
    </QueryClientProvider>
  );
};

export default Boilerplate;
