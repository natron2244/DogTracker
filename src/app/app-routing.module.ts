import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DgDashboardComponent } from './dg-dashboard/dg-dashboard.component';
import { DgAddDogComponent } from './forms/dg-add-dog/dg-add-dog.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DgDashboardComponent },
  { path: 'addDog', component: DgAddDogComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
