import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './shared/cart/cart.component';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', redirectTo:'', pathMatch:'full'},
  {path:'cart', component:CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
