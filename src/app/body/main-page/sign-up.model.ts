export class SignUp {
    button: string;
    color: string;
    info: string;
    routing: string;

    constructor({button, color, info, routing} :
        {button:string, color:string, info:string, routing:string}) {
            this.button = button;
            this.color = color;
            this.info = info;
            this.routing = routing;
    }
}