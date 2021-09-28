import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-sign-up-card',
    templateUrl: 'sign-up-card.component.html'
})
export class SignUpCardComponent {
    @Input()
    button! :string;
    @Input()
    info! :string;
    @Input()
    color! :string;
    @Input()
    routing! :string;
}