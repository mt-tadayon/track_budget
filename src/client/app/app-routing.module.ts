import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { WizardPageComponent } from './wizard-page/wizard-page.component';
import { MainviewPageComponent } from './mainview-page/mainview-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'register-page', component: RegisterPageComponent },
  { path: 'wizard-page', component: WizardPageComponent },
  { path: 'mainview-page', component: MainviewPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
