import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component'



const route: Routes = [
    { path: 'sign-up', component: SignUpComponent},
    { path: 'user-profile', component:  UserProfileComponent},
];

export {route};