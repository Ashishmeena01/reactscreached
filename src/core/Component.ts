

export abstract class Component {
    protected _elementHtml: HTMLElement | null = null;
    protected _elementCss: CSSStyleSheet | null = null;

    abstract render(): string;
    abstract style(): string;

    mount(root: HTMLElement | null): void{
        if(root){
            this._injectCss();
            const template = document.createElement("template");
            template.innerHTML = this.render();
            root.appendChild(template.content);
            this._elementHtml = template.content.firstElementChild as HTMLElement;
        }

        this.onMount();
    }

    onMount(){}
    onUnmount(){}

    rerender(){
        console.log("rerendering");
        this.onUnmount();
        this.unmount();
        this.mount(this._elementHtml?.parentElement || null);
    }

    unmount(): void {
        this._elementHtml?.remove();
        this._elementHtml = null;
    }


    _injectCss(): void {
        const key = this.constructor.name;
        console.log(key);
        if (document.head.dataset["id"] === key) {
            return;
        }
        const style = this.style();
        const head = document.head || document.getElementsByTagName('head')[0];
        const styleElement = document.createElement('style');
        styleElement.dataset["id"] = this.constructor.name;
        styleElement.appendChild(document.createTextNode(style));
        this._elementCss = styleElement.sheet;
        head.appendChild(styleElement);
    }
}
