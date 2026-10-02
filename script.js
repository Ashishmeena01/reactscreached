class Component {
    constructor(states) {
        this.count = 0;
    }

    render(){
        const fn = this.upDateState.bind(this);

        return `<div>
            <div>Hello from the screached react ${this.count}</div>
            <button onclick="upd()">Add</button>
        </div>`
    }



    upDateState(){
        this.count++;
        console.log(this.count);
        golbalRender();
    }

}



const body = document.getElementById("main");
const main = new Component(0);
const child = [main];
function upd(cn) {
    child[0].upDateState();    
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