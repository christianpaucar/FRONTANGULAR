/* importar modulos del router de angular */
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


/* iportar componentes a los cuales les quiero hacer una pagina
exclusiva */
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { ErrorComponent } from './components/error/error.component';


/* array de rutas que quiero crear */

const appRoutes: Routes = [
    {path: 'home', component : HomeComponent},
    {path: 'blog', component : BlogComponent},
    {path: 'formulario' , component : FormularioComponent},
    {path: 'peliculas' , component : PeliculasComponent},
    {path: 'pagina-de-prueba/:nombre/:apellido' , component : PaginaComponent},
    {path: 'pagina-de-prueba/:nombre' , component : PaginaComponent},
    {path: 'pagina-de-prueba' , component : PaginaComponent},
    /* cuidar que la ruta de error siempre este de ultima */
    {path: '**' , component : ErrorComponent}

];
/* exporto modulo de rutas */
export const appRoutingProviders: any[] = [];
/* agregar el argumento any en angular 10 */
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
