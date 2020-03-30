import {Routes} from '@angular/router';

export const APP_ROUTE: Routes = [
  {
    path: 'itemselector-demo', redirectTo: 'itemselector-demo', pathMatch: 'full'
  },
  {
path: '', loadChildren: './itemselector/itemselector.demo.module#ItemselectorDemoModule'
  }
];