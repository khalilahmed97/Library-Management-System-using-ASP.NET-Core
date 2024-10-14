import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found-component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BookStoreComponent } from './books/book-store/book-store.component';
export const routes: Routes = [
   
    {path:"", component:LoginComponent},
    {path:"register", component:RegisterComponent},
    {path:"view-books", component:BookStoreComponent},
    

    //Wild Card Route
    {path:"**", component:PageNotFoundComponent},
    
]
