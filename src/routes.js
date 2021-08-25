import HomePage from './routes/home';
import AboutPage from './routes/about';
import { dispatch } from './store';

const routes = [
    {
        path: "/",
        exact: true,
        component: HomePage,
    }, 
    {
        path: "/about",
        component: AboutPage,
        initData: () => {
            return dispatch.session.loadUserinfo();
        }
    }

];

export default routes