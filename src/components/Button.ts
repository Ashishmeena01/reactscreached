import { Component } from "@/core/Component.js"
import { useState } from "@/core/hook.js";

export class Button extends Component {
    private _count = useState(0,this) ;


    render(): string {
        return `<button class="Button">${this._count.get()}</button>`;
    }

    style(): string {
        return `.Button {
            background-color: blue;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            &:hover {
                background-color: red;
            }
        }`;
    }

    onMount(){
        console.log("Button mounted");
    }
}


/*

Button -> val


*/