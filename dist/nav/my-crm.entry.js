import { r as registerInstance, h, g as getAssetPath } from './index-0f76d06c.js';

const myComponentCss = "#name{position:absolute;top:30px;right:16px;font-size:15px}nav{width:100%;height:45px;background-color:rgba(245, 102, 59, 0.877);line-height:35px}#l1{color:black;font-size:15px}#l2{font-size:15px;color:blue}#l3{color:black;font-size:11px;font-style:bold;font-family:'Times New Roman', Times, serif}nav ul li{list-style-type:none;display:inline-block;transition:0.8s all;background-color:rgb(10, 10, 10)}nav ul li:hover{color:rgba(85, 83, 83, 0.952);background-color:#66566B;}nav ul li a{text-decoration:none;color:rgba(85, 83, 83, 0);padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px;font-size:11.5px;font-family:Arial, Helvetica, sans-serif;}#menu ul{margin:0;padding:0}#menu .main-menu{display:none}#tm:checked+.main-menu{display:block}#menu input[type=\"checkbox\"],#menu ul span.drop-icon{display:none}#menu li,#toggle-menu,#menu .sub-menu{border-style:solid;border-color:rgba(0, 0, 0, 0.557);text-transform:uppercase}#menu li,#toggle-menu{border-width:0 0 1px}#menu .sub-menu{background-color:rgba(2, 2, 2, 0.932);border-width:3px 3px 0;margin:0 2em}#menu .sub-menu li:last-child{border-width:0}#menu li,#toggle-menu,#menu a{position:relative;display:block;color:rgb(212, 203, 203);text-shadow:1px 1px 0 rgba(245, 20, 151, 0.125)}#menu,#toggle-menu{background-color:rgb(8, 8, 8)}#toggle-menu,#menu a{padding:0.2em 1.5em}#menu a{transition:all .125s ease-in-out;-webkit-transition:all .125s ease-in-out}#menu a:hover{background-color:rgb(238, 225, 225);color:#09c}#menu .sub-menu{display:none}#menu input[type=\"checkbox\"]:checked+.sub-menu{display:block}#menu .sub-menu a:hover{color:rgb(10, 10, 10);background-color:rgb(247, 239, 239)}#toggle-menu .drop-icon,#menu li label.drop-icon{position:absolute;right:1.5em;top:1.25em}#menu label.drop-icon,#toggle-menu span.drop-icon{border-radius:50%;width:1em;height:1em;text-align:center;background-color:rgba(0, 0, 0, .125);text-shadow:0 0 0 transparent;color:rgba(13, 13, 14, 0.75)}#menu .drop-icon{line-height:1}@media only screen and (max-width: 64em) and (min-width: 52.01em){#menu li{width:33.333%}#menu .sub-menu li{width:auto}}@media only screen and (min-width: 52em){#menu .main-menu{display:block}#toggle-menu,#menu label.drop-icon{display:none}#menu ul span.drop-icon{display:inline-block}#menu li{float:left;border-width:0 1px 0 0}#menu .sub-menu li{float:none}#menu .sub-menu{border-width:0;margin:0;position:absolute;top:100%;left:0;width:14em;z-index:3000}#menu .sub-menu,#menu input[type=\"checkbox\"]:checked+.sub-menu{display:none}#menu .sub-menu li{border-width:0 0 1px}#menu .sub-menu .sub-menu{top:0;left:100%}#menu li:hover>input[type=\"checkbox\"]+.sub-menu{display:block}}";

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.logo = "Powersuite.png";
        this.cccd = sessionStorage.getItem('cccd');
        this.user = sessionStorage.getItem('uname');
        this.erp = "main.html";
        // <------------------Acivities---------->
        this.ga = "get-activities.html";
        this.asc = "schedule-call.html";
        this.ast = "schedule-task.html";
        this.ase = "schedule-event.html";
        this.ia = "imp-act.html";
        // <------------------Contact---------->
        this.co = "get-contact.html";
        this.cc = "create-contact.html";
        this.ic = "imp-contact.html";
        // <------------------Account---------->
        this.acc = "get-account.html";
        this.ccust = "create-cust.html";
        this.c = "custo-mer.html";
        this.s = "supp-lier.html";
        this.ba = "buis-acc.html";
        // <------------------Lead---------->
        this.lead = "get-lead.html";
        this.clead = "create-lead.html";
        this.ilead = "imp-lead.html";
        // <------------------Campaign---------->
        this.camp = "get-campaign.html";
        this.ccamp = "create-camp.html";
        this.ctemp = "create-temp.html";
        this.gm = "gen-mailer.html";
        this.icamp = "imp-camp.html";
        this.cpc = "create-pro-cust.html";
        this.ipc = "imp-pro-cust.html";
        // <------------------Opportunities---------->
        this.opp = "get-opportunity.html";
        this.copp = "create-oppo.html";
        this.iopp = "imp-oppo.html";
        // <------------------Parameters---------->
        this.pr = "create-para.html";
        this.ipr = "imp-para.html";
        // <------------------Product---------->
        this.pro = "get-product.html";
        this.aig = "additem-grp.html";
        // <------------------Social Network---------->
        this.soc = "social.html";
        // <------------------Users---------->
        this.cu = "create-user.html";
        // <------------------cases---------->
        this.ca = "get-cases.html";
        this.cca = "create-case.html";
        this.ica = "imp-case.html";
        // <------------------Potentials---------->
        this.po = "get-potential.html";
        this.cpo = "create-pote.html";
        this.ipo = "imp-pote.html";
    }
    companyname() {
        console.log('Submitted Successfully!');
        const url = "http://www.powerbooks.in/PowerAPI/api/PBXCompany/GetPBXCompany?cccd=" + this.cccd;
        fetch(url)
            .then(res => {
            return res.json();
        }).then(data => {
            console.log(data);
            if (data.length > 0) {
                var temp = "";
                data.forEach((u) => {
                    temp += "<tr>";
                    temp += "<td>" + u.CCNM + "(" + u.FinancialYrFrom + ")</td>";
                    // temp +="<td>("+u.FinancialYrFrom+")</td>";
                });
                document.getElementById("name").innerHTML = temp;
            }
        })
            .catch(err => {
            console.log(err);
        });
    }
    render() {
        return [
            h("div", null, h("div", { id: "main" }, h("center", null, h("label", { id: "l1", htmlFor: "welcome" }, "Welcome"), "      ", h("label", { id: "l2", htmlFor: "user" }, this.user), " ", h("label", { id: "l3" }, h("a", { href: "http://localhost:3333" }, "[ Logout ]"))), h("img", { src: getAssetPath(`./assets/${this.logo}`), height: "50", width: "200" }), this.companyname()), h("nav", { id: "menu" }, h("label", { htmlFor: "tm", id: "toggle-menu" }, "Navigation ", h("span", { class: "drop-icon" }, "\u25BE")), h("input", { type: "checkbox", id: "tm" }), h("ul", { class: "main-menu cf" }, h("li", null, h("a", { href: "#" }, "Home")), h("li", null, h("a", { href: getAssetPath(`./assets/${this.ga}`) }, "Activities", h("span", { class: "drop-icon" }, "\u25BE"), h("label", { title: "Toggle Drop-down", class: "drop-icon", htmlFor: "sm0" }, "\u25BE")), h("input", { type: "checkbox", id: "sm0" }), h("ul", { class: "sub-menu" }, h("li", null, h("a", { href: getAssetPath(`./assets/${this.asc}`) }, "Schedule call"), " "), h("li", null, h("a", { href: getAssetPath(`./assets/${this.ast}`) }, "Schedule Task "), " "), h("li", null, h("a", { href: getAssetPath(`./assets/${this.ase}`) }, "Schedule Event")), h("li", null, h("a", { href: getAssetPath(`./assets/${this.ia}`) }, "Import Activities")))), h("li", null, h("a", { href: getAssetPath(`./assets/${this.co}`) }, "Contacts", h("span", { class: "drop-icon" }, "\u25BE"), h("label", { title: "Toggle Drop-down", class: "drop-icon", htmlFor: "sm1" }, "\u25BE")), h("input", { type: "checkbox", id: "sm1" }), h("ul", { class: "sub-menu" }, h("li", null, h("a", { href: getAssetPath(`./assets/${this.cc}`) }, "Create Contacts"), " "), h("li", null, h("a", { href: getAssetPath(`./assets/${this.ic}`) }, "Import Contacts "), " "))), h("li", null, h("a", { href: getAssetPath(`./assets/${this.acc}`) }, "Accounts", h("span", { class: "drop-icon" }, "\u25BE"), h("label", { title: "Toggle Drop-down", class: "drop-icon", htmlFor: "sm2" }, "\u25BE")), h("input", { type: "checkbox", id: "sm2" }), h("ul", { class: "sub-menu" }, h("li", null, h("a", { href: getAssetPath(`./assets/${this.ccust}`) }, "Create Customer"), " "), h("li", null, h("a", { href: getAssetPath(`./assets/${this.c}`) }, "Customers "), " "), h("li", null, h("a", { href: getAssetPath(`./assets/${this.s}`) }, "Suppliers")), h("li", null, h("a", { href: getAssetPath(`./assets/${this.ba}`) }, "Business Accounts")))), h("li", null, h("a", { href: getAssetPath(`./assets/${this.camp}`) }, "Campaigns", h("span", { class: "drop-icon" }, "\u25BE"), h("label", { title: "Toggle Drop-down", class: "drop-icon", htmlFor: "sm3" }, "\u25BE")), h("input", { type: "checkbox", id: "sm3" }), h("ul", { class: "sub-menu" }, h("li", null, h("a", { href: getAssetPath(`./assets/${this.ccamp}`) }, "Create Campaigns"), " "), h("li", null, h("a", { href: getAssetPath(`./assets/${this.ctemp}`) }, "Create Template "), " "), h("li", null, h("a", { href: getAssetPath(`./assets/${this.gm}`) }, "Generate Mailer")), h("li", null, h("a", { href: "#" }, "Prospect Customers", h("span", { class: "drop-icon" }, "\u25BE"), h("label", { title: "Toggle Drop-down", class: "drop-icon", htmlFor: "sm3.1" }, "\u25BE")), h("input", { type: "checkbox", id: "sm3.1" }), h("ul", { class: "sub-menu" }, h("li", null, h("a", { href: getAssetPath(`./assets/${this.cpc}`) }, "Create Prospect Customer"), " "), h("li", null, h("a", { href: getAssetPath(`./assets/${this.ipc}`) }, "Import Prospect Customer "), " "))), h("li", null, h("a", { href: getAssetPath(`./assets/${this.icamp}`) }, "Import Campaigns")))), h("li", null, h("a", { href: getAssetPath(`./assets/${this.lead}`) }, "Leads", h("span", { class: "drop-icon" }, "\u25BE"), h("label", { title: "Toggle Drop-down", class: "drop-icon", htmlFor: "sm4" }, "\u25BE")), h("input", { type: "checkbox", id: "sm4" }), h("ul", { class: "sub-menu" }, h("li", null, h("a", { href: getAssetPath(`./assets/${this.clead}`) }, "Create lead"), " "), h("li", null, h("a", { href: getAssetPath(`./assets/${this.ilead}`) }, "Import leads"), " "))), h("li", null, h("a", { href: getAssetPath(`./assets/${this.opp}`) }, "Opportunities", h("span", { class: "drop-icon" }, "\u25BE"), h("label", { title: "Toggle Drop-down", class: "drop-icon", htmlFor: "sm5" }, "\u25BE")), h("input", { type: "checkbox", id: "sm5" }), h("ul", { class: "sub-menu" }, h("li", null, h("a", { href: getAssetPath(`./assets/${this.copp}`) }, "Create Opportunity"), " "), h("li", null, h("a", { href: getAssetPath(`./assets/${this.iopp}`) }, "Import Opportunities "), " "))), h("li", null, h("a", { href: getAssetPath(`./assets/${this.pro}`) }, "Products", h("span", { class: "drop-icon" }, "\u25BE"), h("label", { title: "Toggle Drop-down", class: "drop-icon", htmlFor: "sm6" }, "\u25BE")), h("input", { type: "checkbox", id: "sm6" }), h("ul", { class: "sub-menu" }, h("li", null, h("a", { href: getAssetPath(`./assets/${this.aig}`) }, "Add Item Group"), " "), h("li", null, h("a", { href: "#" }, "Item Groups", h("span", { class: "drop-icon" }, "\u25BE"), h("label", { title: "Toggle Drop-down", class: "drop-icon", htmlFor: "sm6.1" }, "\u25BE")), h("input", { type: "checkbox", id: "sm6.1" }), h("ul", { class: "sub-menu" }, h("li", null, h("a", { href: "#" }, "Computer")), h("li", null, h("a", { href: "#" }, "Purchased")))))), h("li", null, h("a", { href: "#" }, "Users", h("span", { class: "drop-icon" }, "\u25BE"), h("label", { title: "Toggle Drop-down", class: "drop-icon", htmlFor: "sm7" }, "\u25BE")), h("input", { type: "checkbox", id: "sm7" }), h("ul", { class: "sub-menu" }, h("li", null, h("a", { href: getAssetPath(`./assets/${this.cu}`) }, "Create User"), " "))), h("li", null, h("a", { href: getAssetPath(`./assets/${this.soc}`) }, "SocialNetwork")), h("li", null, h("a", { href: "#" }, "Parameters", h("span", { class: "drop-icon" }, "\u25BE"), h("label", { title: "Toggle Drop-down", class: "drop-icon", htmlFor: "sm9" }, "\u25BE")), h("input", { type: "checkbox", id: "sm9" }), h("ul", { class: "sub-menu" }, h("li", null, h("a", { href: getAssetPath(`./assets/${this.pr}`) }, "Create Parameters"), " "), h("li", null, h("a", { href: "#" }, "Import Parameters "), " "))), h("li", null, h("a", { href: getAssetPath(`./assets/${this.ca}`) }, "Cases", h("span", { class: "drop-icon" }, "\u25BE"), h("label", { title: "Toggle Drop-down", class: "drop-icon", htmlFor: "sm10" }, "\u25BE")), h("input", { type: "checkbox", id: "sm10" }), h("ul", { class: "sub-menu" }, h("li", null, h("a", { href: getAssetPath(`./assets/${this.cca}`) }, "Create Cases"), " "), h("li", null, h("a", { href: getAssetPath(`./assets/${this.ica}`) }, "Import Cases"), " "))), h("li", null, h("a", { href: getAssetPath(`./assets/${this.po}`) }, "Potentials", h("span", { class: "drop-icon" }, "\u25BE"), h("label", { title: "Toggle Drop-down", class: "drop-icon", htmlFor: "sm11" }, "\u25BE")), h("input", { type: "checkbox", id: "sm11" }), h("ul", { class: "sub-menu" }, h("li", null, h("a", { href: getAssetPath(`./assets/${this.cpo}`) }, "Create Potentials"), " "), h("li", null, h("a", { href: getAssetPath(`./assets/${this.ipo}`) }, "Import Potentials")))), h("li", null, h("a", { href: getAssetPath(`./assets/${this.erp}`) }, "ERP(Exit)")))))
        ];
    }
    static get assetsDirs() { return ["assets"]; }
};
MyComponent.style = myComponentCss;

export { MyComponent as my_crm };
