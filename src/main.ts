import { Button } from "@/components/Button.js";

const root = document.getElementById("root");

function execute() {
    const button = new Button();
    
    if(root){
        button.mount(root);
        button.mount(root);
        button.mount(root);
    }

}


execute();
