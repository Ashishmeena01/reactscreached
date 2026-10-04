class Component {
    constructor(states) {
        this.states = states;
    }

    render(){ 

        this.mount();
        return `<div>
            <div>Hello from the screached react ${this.states.count?this.states.count:0}</div>
            <button onclick="upd()">Add</button>
        </div>` 
    }

    mount() {
        console.log("this component is mounted")
    }

}


let state = {
    count:0,
}

const body = document.getElementById("main");
const main = new Component(state);


const child = [main];

function upd(fn) {
    state.count++;
    golbalRender()    
}

function golbalRender() {
    if(!child ) return;
    let content = "";
    child.forEach(element => {
        content += element.render();
    });
    body.innerHTML = "";
    body.innerHTML = content;
}

golbalRender();