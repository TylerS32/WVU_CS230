import { Component } from "@angular/core";
import { mock_sign_up } from "./mock-sign-up";
import { SignUp } from "./sign-up.model";

@Component({
    selector: 'app-top-card',
    templateUrl: 'top-card.component.html',
    styleUrls: ['./top-card.component.css']
})
export class TopCardComponent {
    cards:SignUp[] =[];

    constructor() {
        for (var signUpCard of mock_sign_up) {
            this.cards.push(new SignUp(signUpCard));
        }
    }
}