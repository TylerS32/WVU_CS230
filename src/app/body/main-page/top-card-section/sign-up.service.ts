import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SignUp } from "./sign-up.model";


@Injectable({providedIn: 'root'})
export class SignUpService {
    private baseUrl:string = 'https://fantasy-football-app-99410-default-rtdb.firebaseio.com/';
    private signUpMidpoint:string = 'sign-up';
    private signUpEndCardOne:string = '/FirstCard';
    private signUpJson:string = '.json';
    constructor(private http: HttpClient) {

    }

    getUserInfo() {
        console.log(this.baseUrl + this.signUpMidpoint + this.signUpJson);
        return this.http.get<SignUp[]>(this.baseUrl + this.signUpMidpoint + this.signUpJson)
    }  
    
    modifySignUpCard(data: SignUp) {
        return this.http.put(this.baseUrl + this.signUpMidpoint + this.signUpEndCardOne + this.signUpJson, data);
        
    }
}

