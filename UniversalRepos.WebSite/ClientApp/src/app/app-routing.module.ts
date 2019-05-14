import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { environment } from 'src/environments/environment';
import {RepositoryTypesComponent} from "./administration/repository-types/repository-types.component";

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', data: { title: 'Bienvenue'} },
  { path: 'counter', component: CounterComponent, data: { title: 'Compteurs'} },
  { path: 'fetch-data', component: FetchDataComponent, data: { title: 'Données'}},
  {
    path: 'administration',
    // component: RepositoryTypesComponent
    loadChildren: 'src/app/administration/administration.module#AdministrationModule'
  },
  {
    path: 'repos',
    loadChildren: 'src/app/repository/repository.module#RepositoryModule'
  },
];

@NgModule({
  imports: [
    environment.production ?
    RouterModule.forRoot(routes, {
      paramsInheritanceStrategy: 'always',
      useHash: true,
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules,
      onSameUrlNavigation: 'reload'
    }) : RouterModule.forRoot(routes, {
      paramsInheritanceStrategy: 'always',
      useHash: true,
      scrollPositionRestoration: 'enabled',
      onSameUrlNavigation: 'reload'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
