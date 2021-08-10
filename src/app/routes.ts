import { Routes } from '@angular/router'
import { UserComponent } from './user/user.component';
import { UsersListComponent } from './users-list/users-list.component';

export const appRoutes: Routes = [
  {
    path: 'users-list', component: UsersListComponent
  },
  {
    path: 'user/:id', component: UserComponent,
  },
  { path: '', redirectTo: '/users-list', pathMatch: 'full' }
];
