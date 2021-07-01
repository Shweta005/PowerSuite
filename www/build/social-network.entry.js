import { r as registerInstance, h, g as getAssetPath } from './index-0f76d06c.js';

const myComponentCss = "div{float:left;width:25%;box-sizing:border-box}div a{display:block;text-decoration:none;text-align:center;padding:10px 0;color:white}.twitter{background-color:#00aced}.facebook{background-color:#3b5998}.FacebookMessage{background-color:blue}.WhatsAppMessenger{background-color:green}";

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.image1 = "twitter.png";
        this.image2 = "facebook.png";
        this.image3 = "messenger.png";
        this.image = "whatsapp.png";
    }
    render() {
        return [
            h("div", { class: "twitter" }, h("a", { href: "https://www.twitter.com/" }, h("img", { src: getAssetPath(`./assets/${this.image1}`), width: "24", height: "20" }), "  Blue Bird")),
            h("div", { class: "facebook" }, h("a", { href: "https://www.facebook.com/" }, h("img", { src: getAssetPath(`./assets/${this.image2}`), width: "21", height: "20" }), "  Facebook")),
            h("div", { class: "FacebookMessage" }, h("a", { href: "https://www.messenger.com/" }, h("img", { src: getAssetPath(`./assets/${this.image3}`), width: "21", height: "20" }), "  Facebook Message")),
            h("div", { class: "WhatsAppMessenger" }, h("a", { href: "https://www.whatsapp.com/" }, h("img", { src: getAssetPath(`./assets/${this.image}`), width: "21", height: "20" }), "  WhatsApp Messenger"))
        ];
    }
    static get assetsDirs() { return ["assets"]; }
};
MyComponent.style = myComponentCss;

export { MyComponent as social_network };
