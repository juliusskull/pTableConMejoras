import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';

const routes: Routes = [
  { 
     path: '', component: PrincipalComponent,
   },
];
export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'});
// tslint:disable-next-line:one-variable-per-declaration
/* export const App.routeRoutes = RouterModule.forChild(routes); */
