import Loadable from '@loadable/component'

interface IRoutesConfig {
  [props: string]: any
}

const routes: Array<IRoutesConfig> = [
  {
    exact: true,
    path: '/',
    component: Loadable(() => import('@/pages/Home'))
  },
  {
    path: '/page:id',
    component: Loadable(() => import('@/pages/Home'))
  },
  {
    path: '/article-detail:id',
    component: Loadable(() => import(/* webpackPrefetch: true */ '@/pages/ArticleDetails'))
  },
  {
    path: '/search',
    component: Loadable(() => import('@/pages/Search'))
  },
  {
    path: '/category/:navId(\\d+)',
    component: Loadable(() => import('@/pages/Category'))
  },
];

export default routes;
