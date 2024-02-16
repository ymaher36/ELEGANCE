import { Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AboutMeComponent } from './core/about-me/about-me.component';
import { DesigningComponent } from './core/designing/designing.component';
import { ContactUsComponent } from './core/contact-us/contact-us.component';

export const routes: Routes = [
    {
        path: 'home',
        children: [
            { path: '', component: HomeComponent },
            // { path: '', component: HomeComponent },
            // { path: '', component: HomeComponent },
            // { path: '', component: HomeComponent },
            // { path: '', component: HomeComponent }
        ]
    },
    {
        path: 'about-me',
        children: [
            { path: '', component: AboutMeComponent },
            // { path: '', component: HomeComponent },
            // { path: '', component: HomeComponent },
            // { path: '', component: HomeComponent },
            // { path: '', component: HomeComponent }
        ]
    },
    {
        path: 'design',
        children: [
            { path: '', component: DesigningComponent },
            // { path: '', component: HomeComponent },
            // { path: '', component: HomeComponent },
            // { path: '', component: HomeComponent },
            // { path: '', component: HomeComponent }
        ]
    },
    { path: 'contact-us', component: ContactUsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
