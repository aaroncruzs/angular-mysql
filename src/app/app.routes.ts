import { RouterModule,Routes }  from '@angular/router';
import { HomeComponent }        from './component/home/home.component';
import { AboutComponent }       from './component/about/about.component';
import { DetailComponent }      from './component/detail/detail.component';
import { BrowseComponent }      from './component/browse/browse.component';

const APP_ROUTES: Routes=[
    { path: 'home'          , component: HomeComponent },
    { path: 'detail/:id'    , component: DetailComponent },
    { path: 'browse/:key'   , component: BrowseComponent },
    { path: 'about'         , component: AboutComponent },
    { path:'**', pathMatch:'full', redirectTo:'home' }
];

export const APP_ROUTING=RouterModule.forRoot(APP_ROUTES);