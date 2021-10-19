import { Component, OnInit } from "@angular/core";
import { UserInfoService } from "./top-navbar/user-info.service";
import { UserInfo } from "./user-info.model";

@Component({
    selector: "fantasy-football-user-info",
    templateUrl: "user-info.component.html"
})

export class UserInfoComponent implements OnInit {
    myInfo: UserInfo |  undefined;
    
    constructor(private userInfoService:UserInfoService) {
    }
    ngOnInit(): void {
        console.log("Registering showUserInfo as a subscriber");
        this.showUserInfo();
    }

    showUserInfo() {
        this.userInfoService.getUserInfo().subscribe((data: UserInfo) => {
            console.log(data);
            this.myInfo = data;
        })
    }
}