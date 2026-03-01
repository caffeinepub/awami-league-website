import { RouterProvider, createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import History from './pages/History';
import Ideology from './pages/Ideology';
import Organisation from './pages/Organisation';
import ChhatraLeague from './pages/ChhatraLeague';
import Contact from './pages/Contact';
import MembersArea from './pages/MembersArea';
import News from './pages/News';
import Resources from './pages/Resources';

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const historyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/history',
  component: History,
});

const ideologyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/ideology',
  component: Ideology,
});

const organisationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/organisation',
  component: Organisation,
});

const chhatraLeagueRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/chhatra-league',
  component: ChhatraLeague,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: Contact,
});

const membersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/members',
  component: MembersArea,
});

const newsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/news',
  component: News,
});

const resourcesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/resources',
  component: Resources,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  historyRoute,
  ideologyRoute,
  organisationRoute,
  chhatraLeagueRoute,
  contactRoute,
  membersRoute,
  newsRoute,
  resourcesRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
