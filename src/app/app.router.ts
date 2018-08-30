import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
export const router: Routes = [

    { path: '',  component: LandingPageComponent },
    { path: 'landing', component: LandingPageComponent }
    
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);