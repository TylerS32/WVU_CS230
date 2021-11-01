import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { Observable } from "rxjs";
import { SignUp } from "./main-page/top-card-section/sign-up.model";
@Injectable({
    providedIn: 'root'
})
export class DatabaseService {
    items: Observable<SignUp []>
    constructor(private db:AngularFireDatabase) {
        console.log("Setting up Firebase communication");
        this.items = this.db.list<SignUp>('sign-up').valueChanges();
    }

    public showData() {
        this.items.subscribe((data: SignUp []) => {
            console.log("Data recieved");
            for (let item of data) {
                console.log(item);
            }
        })
    }
}