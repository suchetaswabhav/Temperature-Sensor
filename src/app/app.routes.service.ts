
import { BasicTableComponent } from './views/tables/basic-table/basic-table.component';
import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NotFoundComponent } from './views/errors/not-found/not-found.component';
import { Dashboard1Component } from './views/dashboards/dashboard1/dashboard1.component';


const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboards/v1' },
  { path: 'dashboards', children:
    [
      { path: 'v1', component: Dashboard1Component },
    ]
  },
  { path: 'tables', children:
    [
      { path: 'table1', component: BasicTableComponent },
    ]
  },

  { path: '**', component: NotFoundComponent },

];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
