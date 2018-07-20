import {Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';

export const ROUTES: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'app', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent}
];
