import { r as registerInstance, h, g as getAssetPath } from './index-0f76d06c.js';

const myComponentCss = ".header{overflow:hidden;background-color:#F2F2F2;padding:1px 0px}.header a{float:left;color:black;text-align:center;padding:10px;text-decoration:none;text-transform:uppercase;font-size:15px;line-height:20px;border-radius:1px}input[type=text],select{width:100%;padding:6px;border:1px solid  rgb(233, 222, 222);border-radius:4px;resize:vertical}.header a:hover{color:rgba(15, 169, 241, 0.966);background-color:#ebe4e8}.header-right{float:right}@media screen and (max-width: 500px){.header a{float:none;display:block;text-align:left}.header-right{float:none}}";

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        // @Prop() combonm: string;
        this.create = " ";
        this.list = " ";
    }
    render() {
        return [
            h("div", { class: "header" }, h("div", { class: "header-right" }, h("a", { class: "active", href: "#home" }, "Home"), h("a", { href: getAssetPath(`./assets/${this.create}`) }, "Create"), h("a", { href: "#about" }, "Print"), h("a", { href: "#about" }, "Export"), h("a", { href: getAssetPath(`./assets/${this.list}`) }, "List")))
        ];
    }
    static get assetsDirs() { return ["assets"]; }
};
MyComponent.style = myComponentCss;

export { MyComponent as my_subnav };
