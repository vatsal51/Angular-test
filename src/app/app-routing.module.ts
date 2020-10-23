import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ThankyouComponent } from './thankyou/thankyou.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes:Routes =[
{
  path: '' , redirectTo: '/welcome', pathMatch: 'full' 
  //default :welcome page
  //eg: http://localhost:4200/ will open welcome page
},
{
  path: 'thankyou' , component: ThankyouComponent 
   //eg http://localhost:4200/thankyou will take you to thankyou page 
},
{
  path:'welcome',component: LandingpageComponent
  //eg http://localhost:4200/welcome will take you to welcome page
},
{
  path:'login', component: LoginPageComponent
  //eg localhost:4200/login will take you to login page
},
{
  path: '**', component: PageNotFoundComponent 
  // any other keywords entered after main url will return to pagenotfound page
  //eg: http://localhost:4200/asd will return pagenotfound page
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
