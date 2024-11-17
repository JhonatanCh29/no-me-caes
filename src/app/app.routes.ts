import { Routes } from '@angular/router';
import { EstadisticosComponent } from './estadisticos/estadisticos.component';
import { GestionarComponent } from './gestionar/gestionar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RedireccionamientoComponent } from './redireccionamiento/redireccionamiento.component';

export const routes: Routes = [
    {
        path: '',
        component: EstadisticosComponent,
        title: 'Estadisticos'
    },
    {
        path: 'redireccionamiento',
        component:  RedireccionamientoComponent,
        title: 'Componente de redireccionamiento'
    }
    ,
    {
        path: 'sidebar',
        component: SidebarComponent,
        title: 'Sidebar'
    }
    ,
    {
        path: '**',
        redirectTo :''
    }
];