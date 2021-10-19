import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserInfo } from "../user-info.model";

@Injectable({providedIn: 'root'})
export class UserInfoService {
    private baseUrl:string = 'https://fantasy-football-app-99410-default-rtdb.firebaseio.com/';
    private myInfoEndpoint = 'my-info.json';
    constructor(private http: HttpClient) {

    }

    getUserInfo() {
        console.log(this.baseUrl + this.myInfoEndpoint);
        return this.http.get<UserInfo>(this.baseUrl + this.myInfoEndpoint);
    }
}


