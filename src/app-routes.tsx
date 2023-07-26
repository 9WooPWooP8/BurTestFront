import { TelemetryPage, WellsPage } from './pages';
import { withNavigationWatcher } from './contexts/navigation';

const routes = [
    {
        path: '/wells',
        element: WellsPage
    },
    {
        path: '/home',
        element: TelemetryPage
    }
];

export default routes.map(route => {
    return {
        ...route,
        element: withNavigationWatcher(route.element, route.path)
    };
});
