import { provideRouter, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }, // Ruta por defecto
  { path: '**', redirectTo: '/about' } // Ruta de comodín para rutas no encontradas
];

export const appRoutes = provideRouter(routes);
