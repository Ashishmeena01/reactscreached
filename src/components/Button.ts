import { Component } from "@/core/Component.js"
import { useState } from "@/core/hook.js";

export class Button extends Component {
    private _count = useState(0,this);


    render(): string {
        return `<button id='btn' class="bg-black text-white text-2xl rounded-sm px-10">${this._count.get()}</button>`;
    }

    style(): string {
        return ``;
    }

    onMount(){
        document.getElementById("btn")?.addEventListener("click",()=>{
            this._count.set((val : number | undefined) => (val || 0) + 1);
        });

    }
}

