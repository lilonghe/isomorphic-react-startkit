import HomePage from './routes/home';
import AboutPage from './routes/about';

const routes = [
    {
        path: "/",
        exact: true,
        component: HomePage,
    }, 
    {
        path: "/about",
        component: AboutPage,
    }

];

export default routes