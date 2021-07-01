import { r as registerInstance, h, g as getAssetPath } from './index-0f76d06c.js';

const myComponentCss = "body{margin:0px;padding:0px;font-family:sans-serif}.ig{size:initial;height:\"660px\";width:\"1200px\"}.loginBox{position:fixed;top:60%;left:50%;transform:translate(-50%, -50%);width:350px;height:420px;padding:80px 40px;box-sizing:border-box;background:rgba(0,0,0,0.5)}.main p{position:margin-bottom;margin:0px;padding:0 0 10px;}h2{margin:0;padding:0 0 20px;color:#1E90FF;text-align:center}.loginBox p{padding:0;margin:0;font-weight:bold;color:#fff}.loginBox input{width:100%;margin-bottom:20px}.loginBox input[type=\"text\"],.loginBox input[type=\"password\"]{border:none;border-bottom:1px solid #fff;background:transparent;outline:none;height:40px;color:#fff;font-size:16px}.loginBox input[type=\"submit\"]{border:none;outline:none;height:40px;color:#fff;font-size:16px;background:rgb(255,38,126);cursor:pointer;border-radius:20px}.loginBox input[type=\"submit\"]:hover{background:#efed40;color:#262626}.log{position:margin-top;margin:20px;padding:50px;size:100}.loginBox a{color:#fff;font-size:14px;font-weight:bold}::placeholder{color:rgba(255,255,255,0.5)}.user{width:100px;height:100px;overflow:hidden;position:absolute;top:calc(-100px/2);left:calc(50% - 50px);border-radius:50%}";

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.nav = "main.html";
        this.logo = "bc.jpg";
        this.user = "p.jpeg";
    }
    render() {
        return [
            h("div", null, h("p", null, h("center", null, h("img", { src: getAssetPath(`./assets/${this.logo}`), id: "ig" }))), h("div", { class: "loginBox" }, h("img", { src: getAssetPath(`./assets/${this.user}`), class: "user" }), h("form", { id: "login-form", action: getAssetPath(`./assets/${this.nav}`) }, h("p", null, "Username"), h("input", { type: "text", name: "username", id: "username-field", placeholder: "Enter Username" }), h("p", null, "Password"), h("input", { type: "password", name: "password", id: "password-field", placeholder: "Enter Password" }), h("p", null, "Company Name"), h("select", { id: "dropdown", class: "company", name: "Company" }), h("input", { type: "submit", name: "", id: "login-form-submit", value: "Login" })), "  "))
        ];
    }
    static get assetsDirs() { return ["assets"]; }
};
MyComponent.style = myComponentCss;

export { MyComponent as p_login };
