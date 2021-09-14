import { Component } from "@angular/core";

@Component({
    selector: 'app-top-features',
    templateUrl: 'top-features.component.html',
    styleUrls: ['./top-features.component.css']
})
export class TopFeaturesComponent {
    backgroundStyle = "background-image: url('https://g.espncdn.com/lm-static/images/blue_eplus_bg.jpg'); height: 372px; width: auto;"
    containerSize = "padding-top: 24px; padding-left: 0px; padding-right: 0px; margin: 0 auto; height: 372px; width: 960px;"
    headerSize = "width: 960px; height: 78px;"
    buttonStyle = "min-width: 265px; min-height: 40px; border-radius: 50px; font-size: 16px; margin-left: 197.781px; margin-right: 100px; margin-top: 20px; padding-right: 18px; padding-left: 18px; padding-top: 0px; padding-bottom: 0px; float: right;"
    horizontalLine = "background: #f9b300; display: block; height: 2px; width: 60px; content: '';"
    verticalLine = "background: #fff; content: ''; display: block; height: 206px; width: 2px; margin-left: -1px; left: 50%; position: absolute;"
}