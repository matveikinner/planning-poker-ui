import { RouteProps } from 'react-router-dom';
import Landing from '../pages/landing/Landing';
import Create from '../pages/create/Create';

const routes: RouteProps[] = [
  {
    path: '/',
    exact: true,
    component: Landing,
  },
  {
    path: '/start',
    exact: true,
    component: Create,
  },
];

export default routes;
