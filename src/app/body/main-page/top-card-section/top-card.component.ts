import { Component, OnInit } from "@angular/core";
import { SignUp } from "./sign-up.model";
import { SignUpService } from "./sign-up.service";

@Component({
    selector: 'app-top-card',
    templateUrl: 'top-card.component.html',
    styleUrls: ['./top-card.component.css']
})
export class TopCardComponent implements OnInit{
    cards: SignUp[] = [];
    

    constructor(private signUpService:SignUpService) {
    }
    ngOnInit(): void {
        console.log("Registering signUp[] as a subscriber");
        this.showSignUpInfo();
    }

    showSignUpInfo() {
        this.signUpService.getUserInfo().subscribe((data: SignUp[]) => {
            var _i = 0;
            for(var item in data) {
                this.cards[_i] = data[item];
                _i++;
            }
        })
    }
}
