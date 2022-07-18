import { HeaderOnly } from '@/Componts/Layout';

//pages
import Home from '@/pages/Home';
import Following from '@/pages/Following';
import Profile from '@/pages/Profile';
import Upload from '@/pages/Upload';
import Search from '@/pages/Search';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/Following', component: Following },
    { path: '/@:nickName', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null }
]

const privateRoutes = []

export { publicRoutes, privateRoutes }