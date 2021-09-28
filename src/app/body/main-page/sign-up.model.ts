export class SignUp {
    button: string;
    info: string;
    color: string;
    routing: string;

    constructor({button, info, color, routing} :
        {button:string, info:string, color:string, routing:string}) {
            this.button = button;
            this.info = info;
            this.color = color;
            this.routing = routing;
    }
}