import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SignUp } from "./sign-up.model";


@Injectable({providedIn: 'root'})
export class SignUpService {
    private baseUrl:string = 'https://fantasy-football-app-99410-default-rtdb.firebaseio.com/';
    private signUpMidpoint:string = 'sign-up.json';
    //private signUpEndpoint:string[] = ['first-card.json', 'second-card.json', 'third-card.json'];
    constructor(private http: HttpClient) {

    }

    getUserInfo() {
        console.log(this.baseUrl + this.signUpMidpoint);
        return this.http.get<SignUp[]>(this.baseUrl + this.signUpMidpoint);
    }  
}

