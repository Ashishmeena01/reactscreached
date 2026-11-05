

export abstract class Component {
    protected _elementHtml: HTMLElement | null = null;
    protected _elementCss: CSSStyleSheet | null = null;

    abstract render(): string;
    abstract style(): string;

    mount(root: HTMLElement | null): void {
        if (root) {
            this._injectCss();
            const template = document.createElement("template");
            template.innerHTML = this.render();
            this._elementHtml = template.content.firstElementChild as HTMLElement;
            root.appendChild(template.content.firstElementChild as HTMLElement);
            
        }

        this.onMount();
    }

    onMount() {
    }

    onUnmount() {
        console.log("onUnmount called");
    }

    rerender() {
        this.onUnmount();

        const partent = this._elementHtml?.parentElement;

        if (partent) {
            this.unmount();
            this.mount(partent);
        }
    }

    unmount(): void {
        this._elementHtml?.remove();
        this._elementHtml = null;
    }


    _injectCss(): void {
        const key = this.constructor.name;
        if (document.head.dataset["id"] === key) {
            return;
        }
        const style = this.style();
        const head = document.head || document.getElementsByTagName('head')[0];
        const styleElement = document.createElement('style');
        styleElement.dataset["id"] = this.constructor.name;
        styleElement.appendChild(document.createTextNode(style));
        head.appendChild(styleElement);
        console.log(styleElement.sheet instanceof CSSStyleSheet);
        this._elementCss = styleElement.sheet instanceof CSSStyleSheet ? styleElement.sheet : null;
    }
}
