// create pages under the pages directory

import loadable, { OptionsWithoutResolver } from '@loadable/component';
import type { RouteProps } from 'react-router-dom';

export type Page<P = {}> = React.FC<P>;

type Route = Omit<RouteProps, 'component'> & {
  component: ReturnType<typeof importPage>;
};

const importPage = (path: string = '', opts: OptionsWithoutResolver<unknown> = {}) => {
  return loadable(() => import(`@/pages/${path}`).then((mod) => mod.default), opts);
};

const routes: Route[] = [
  {
    path: '/',
    exact: true,
    component: importPage('index'),
  },
  {
    path: '/profile',
    component: importPage('profile'),
  },
  {
    path: '/404',
    component: importPage('404'),
  },
];

export default routes;
