import HomePage from './routes/home';
import AboutPage from './routes/about';

const routes = [
    {
        path: "/",
        exact: true,
        component: HomePage,
        initData: () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({ nickname: 'lilonghe' })
                }, 300);
            });
        }
    }, 
    {
        path: "/about",
        component: AboutPage,
        initData: () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({ nickname: 'admin' })
                }, 300);
            });
        }
    }

];

export default routes