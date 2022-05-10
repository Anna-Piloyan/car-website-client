import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { TopComponent } from './components/top/top.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { CarAddFormComponent } from './components/car-add-form/car-add-form.component';
import { CarEditFormComponent } from './components/car-edit-form/car-edit-form.component';
import { CarDetailsFormComponent } from './components/car-details-form/car-details-form.component';
import { SearchPipe } from './search.pipe';
import { FileUploadModule } from 'ng2-file-upload';
import { CarComponent } from './components/car/car.component';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    MaintenanceComponent,
    TopComponent,
    LoginPageComponent,
    RegisterPageComponent,
    AuthPageComponent,
    NotFoundPageComponent,
    LoginFormComponent,
    RegisterFormComponent,
    CarAddFormComponent,
    CarEditFormComponent,
    CarDetailsFormComponent,
    SearchPipe,
    CarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
