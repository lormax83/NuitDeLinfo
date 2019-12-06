import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecretComponent } from './secret/secret.component';
import { ErrorComponent } from './error/error.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'secret', component: SecretComponent},
  {path: '**', component: ErrorComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
