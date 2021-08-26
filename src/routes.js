import HomePage from './routes/home';
import AboutPage from './routes/about';

const routes = [
    {
        path: "/",
        exact: true,
        component: HomePage,
        initData: (dispatch) => {
            return dispatch.message.loadMessageList();
        }
    }, 
    {
        path: "/about",
        component: AboutPage,
        initData: (dispatch) => {
            return dispatch.session.loadUserinfo();
        }
    }

];

export default routes