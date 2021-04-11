import { RouteProps } from 'react-router-dom';
import App from '@poker/presentation/app/App';

const routes: RouteProps[] = [
  {
    path: '/',
    exact: false,
    children: App,
  },
];

export default routes;
