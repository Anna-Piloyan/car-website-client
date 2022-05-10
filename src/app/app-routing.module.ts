import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarAddFormComponent } from './components/car-add-form/car-add-form.component';
import { CarDetailsFormComponent } from './components/car-details-form/car-details-form.component';
import { CarEditFormComponent } from './components/car-edit-form/car-edit-form.component';
import { HomeComponent } from './components/home/home.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { TopComponent } from './components/top/top.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'auth', component: AuthPageComponent, canActivate:[AuthGuard], children: [
    {
      path: '', canActivateChild: [AuthGuard], children:[
        {path: 'home', component: HomeComponent},
        {path: 'maintenance', component: MaintenanceComponent},
        {path: 'top', component: TopComponent},
        {path: 'add', component: CarAddFormComponent},
        {path: 'edit/:id', component: CarEditFormComponent},
        {path: 'details/:id', component: CarDetailsFormComponent}
      ]
    }

  ]},
  {path: '**', component: NotFoundPageComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
