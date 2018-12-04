import { NgModule } from '@angular/core'; '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
