import { r as registerInstance, h, g as getAssetPath } from './index-0f76d06c.js';

const myComponentCss = "#img{height:520px;width:auto;background-repeat:no-repeat;background-color:#FCFCFC;margin-top:-15px;}";

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.img = " ";
    }
    render() {
        return [
            h("div", { id: "img" }, h("p", null, h("center", null, h("img", { src: getAssetPath(`./assets/${this.img}`), width: "1420", height: "562" }))))
        ];
    }
    static get assetsDirs() { return ["assets"]; }
};
MyComponent.style = myComponentCss;

export { MyComponent as wel_come };
