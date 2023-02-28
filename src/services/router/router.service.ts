import Router from 'next/router';

import {Routes, RouteValues} from '~/constants';

const RouterService = {
  back: (): void => Router.back(),
  push: async (route: RouteValues): Promise<boolean> => {
    return await Router.push(route);
  },
  pushError: async (): Promise<boolean> => {
    return await Router.push(Routes.Error as string);
  },
};

export default RouterService;
