import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  adminAcces = false;

  constructor() { }

  setToken(token: string){
    localStorage.setItem("token", token);
  }

  getToken(): string | null {
    return localStorage.getItem("token");
  }

  isLoggedIn(): boolean{
    let token = localStorage.getItem("token");
    if(token && this.notExpired(token)){
      return true;
    }
    return false;
  }
  private notExpired(token: string): boolean{
    let tokenDecoded = jwtDecode<any>(token);
    return (tokenDecoded.exp * 1000) > new Date().getTime();
  }

  public setAdminAcces(adminAcces: boolean){
    return this.adminAcces = adminAcces;
  }

  public getAdminAcces(): boolean{
    return this.adminAcces;
  }
}
