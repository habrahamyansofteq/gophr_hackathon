import type {NextPage} from 'next';

import {SeoLayout} from '~/components';
import {HomeMetaSettings} from '~/constants';
import {HomeContainer} from '~/containers';

const HomePage: NextPage = () => (
  <SeoLayout title={HomeMetaSettings.title} metaDescription={HomeMetaSettings.description}>
    <HomeContainer />
  </SeoLayout>
);

export default HomePage;
