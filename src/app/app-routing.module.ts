import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { BodyComponent } from './ABOUT-PAGE/body/body.component';
import { ContactBodyComponent } from './CONTACT-PAGE/contact-body/contact-body.component';
import { ServicesComponent } from './services/services.component';
import { BlogComponent } from './blog/blog.component';



const routes: Routes = [

    { path: 'about', component: BodyComponent },

  {
    component:HomeComponent,
    path:''
  },


  {
    component:ContactBodyComponent,
    path:'contact'
  },
  {
    component:ServicesComponent,
    path:'services'
  },
{
  component:BlogComponent,
  path:'blog'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
