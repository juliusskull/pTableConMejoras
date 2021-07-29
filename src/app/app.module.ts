import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PrincipalComponent } from './components/principal/principal.component';
import { AppRoutes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { GespTableComponent } from './components/gesp-table/gesp-table.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { DescripcionSummaryComponent } from './components/descripcion-summary/descripcion-summary.component';
@NgModule({
  declarations: [
    AppComponent
    ,PrincipalComponent
    ,GespTableComponent
    ,DescripcionSummaryComponent
    
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
    /*AppRoutingModule*/
    AppRoutes
    ,DialogModule
    ,TableModule
    ,InputTextModule
    ,ButtonModule
    ,DropdownModule
    ,OverlayPanelModule
    ,PaginatorModule
    ,PanelModule
    ,PanelMenuModule
    ,ScrollPanelModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
