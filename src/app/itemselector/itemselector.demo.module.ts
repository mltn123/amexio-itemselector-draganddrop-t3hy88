import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AmexioWidgetModule} from "amexio-ng-extensions";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

import {ItemselectorDemoComponent} from "./itemselector.demo.component";

@NgModule({
  declarations: [ItemselectorDemoComponent],
  imports: [CommonModule, FormsModule, HttpModule,AmexioWidgetModule, RouterModule.forChild([{
    path: '', component: ItemselectorDemoComponent, pathMatch: 'full'
  }])],
  providers: []
})
export class ItemselectorDemoModule {

}
