class ReactComponent{
    constructor(htmlEleType,props,children,state){
        this.htmlEleType =htmlEleType;
        this.props = props;
        this.state = state;
        this.children = children;
        this.ele = document.createElement(this.htmlEleType);
        this.elea
        this.ele.addEventListener("click",(e)=>{this.state.count += 1;this.render()})
    }

    render(){
        let count = this.state.count;
        this.ele.innerHTML = `this is chilren children ${count}`;
        return this.ele;    
    }
}


class Div extends ReactComponent{
    constructor(...props){
        console.log(props)
        super(...props)
    }
}

const div = new Div("Button","h","chalo door kahin",{count:10})

function render(comp){
    const ele = document.getElementById("root");
    ele.appendChild(comp.render());
}


const comp = new ReactComponent("div","hello","i am here to rule",{count:0});


render(div);