
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Book, User } from '../../models';
import { UserType } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURL: string = "http://localhost:5270/api/";
  userStatus: Subject<string> = new Subject(); 
  constructor(private httpClient: HttpClient, private jwt: JwtHelperService) {

   }

  register(user: any){
    return this.httpClient.post(this.baseURL+"library/register",user)
   }

   login(user: any){
    let params = new HttpParams().append("email", user.email).append("password", user.password)

    return this.httpClient.get(this.baseURL+"library/login", {params:params, responseType:"text"})
   }


   isUserLoggedIn(): boolean{
    if(localStorage.getItem("access_token") !== null && !this.jwt.isTokenExpired()){
      return true
    }

    return false
   }

   getUserInfo(): User | null {
   
    if(!this.isUserLoggedIn()) return null;
    else{
      
      var decodedToken = this.jwt.decodeToken();
      var user: User = {
        id:decodedToken.id,
        firstName:decodedToken.firstName,
        lastName: decodedToken.lastName,
        phoneNumber: decodedToken.phoneNumber,
        email: decodedToken.email,
        userType: UserType[decodedToken.userType as keyof typeof UserType],
        accountStatus: decodedToken.accountStatus,
        createdOn: decodedToken.createdOn,
        password: '',
      }
     
      return user;
    }
   
   }

   getAllBooks() {

    return this.httpClient.get<Book[]>(this.baseURL+"library/getAllBooks");
   }

   logout(){
    localStorage.removeItem("access_token")
    this.userStatus.next("loggedOff")
   }

}
