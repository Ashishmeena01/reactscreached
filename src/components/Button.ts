import { Component } from "@/core/Component.js"


export class Button extends Component {
    render(): string {
        return `<button class="Button">Click me</button>`;
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
}
