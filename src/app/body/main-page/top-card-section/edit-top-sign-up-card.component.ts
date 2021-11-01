import { Component } from "@angular/core";
import { DatabaseService } from "../../database.service";
import { SignUp } from "./sign-up.model";
import { SignUpService } from "./sign-up.service";

@Component({
    selector: 'app-edit-top-sign-up-card',
    templateUrl: 'edit-top-sign-up-card.component.html'
})
export class EditTopSignUpCardComponent {

    constructor(private signUpService: SignUpService, private dbService:DatabaseService) {
        dbService.showData();
    }

    onUpdateTopCard(data: SignUp) {
        this.signUpService.modifySignUpCard(data).subscribe(data => {
            console.log("Updated information sent to backend");
        });
    }
}