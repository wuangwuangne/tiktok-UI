//layout
import { HeaderOnly } from '~/components/Layout';

// Pages
import Following from '~/pages/Following';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';

//Public routes
const publicRoutes = [
{ path: '/', component: Home },
{ path: '/profile', component: Profile },
{ path: '/search', component: Search, layout: null },
{ path: '/upload', component: Upload, layout : HeaderOnly },
{ path: '/following', component: Following }
];

const privateRoutes = [];

export {publicRoutes, privateRoutes}