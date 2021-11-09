import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";
import { AuthenticationService } from "./authentication.service";
import { AuthenticationResponse } from "./authenticationResponse";

@Component({
    selector: "app-auth",
    templateUrl: "authentication.component.html"
})
export class AuthenticationComponent {
    public buttonClicked!:string;
    private authObservable!: Observable<AuthenticationResponse>;

    constructor(private authenticationService:AuthenticationService) {

    }
    public onSubmit(data: NgForm) {
        console.log("Button Clicked = " + this.buttonClicked);
        console.log(data.value);

        if(this.buttonClicked == 'SignUp') {
            this.authObservable = this.authenticationService.signup(data.value.email, data.value.password);
        }
        if(this.buttonClicked == 'Login') {
            this.authObservable = this.authenticationService.login(data.value.email, data.value.password);
        }
        
        this.authObservable.subscribe(
            (data:AuthenticationResponse) => {
                console.log(data);
            },
            error => {
                console.log(error.error);
            }
        );

        data.resetForm();
    }
}