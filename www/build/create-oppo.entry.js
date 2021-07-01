import { r as registerInstance, h } from './index-0f76d06c.js';

const addFormCss = "*{margin:0;padding:0;box-sizing:border-box;font-family:'Times New Roman', sans-serif}#l1{color:black;font-size:15px}#l2{font-size:15px;color:blue}#l3{color:black;font-size:11px;font-style:bold;font-family:'Times New Roman', Times, serif}body{background:white;padding:0 10px}.wrapper{max-width:500px;width:100%;background:#cccbcb;margin:50px auto;box-shadow:2px 2px 4px rgba(0,0,0,0.125);padding:30px}.wrapper .title{font-size:24px;font-weight:700;margin-bottom:25px;color:#0a0a09;text-transform:uppercase;text-align:center}.wrapper .form{width:100%}.wrapper .form .inputfield{margin-bottom:15px;display:flex;align-items:center}.wrapper .form .inputfield label{width:200px;color:#0a0a0a;margin-right:10px;font-size:14px}.wrapper .form .inputfield .input,.wrapper .form .inputfield .textarea{width:100%;outline:none;border:1px solid #d5dbd9;font-size:15px;padding:8px 10px;border-radius:3px;transition:all 0.3s ease}.wrapper .form .inputfield .textarea{width:100%;height:125px;resize:none}.wrapper .form .inputfield .custom_select{position:relative;width:100%;height:37px}.wrapper .form .inputfield .custom_select:before{content:\"\";position:absolute;top:12px;right:10px;border:8px solid;border-color:#d5dbd9 transparent transparent transparent;pointer-events:none}.wrapper .form .inputfield .custom_select select{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;width:100%;height:100%;border:0px;padding:8px 10px;font-size:15px;border:1px solid #d5dbd9;border-radius:3px}.wrapper .form .inputfield .input:focus,.wrapper .form .inputfield .textarea:focus,.wrapper .form .inputfield .custom_select select:focus{border:1px solid #fec107}.wrapper .form .inputfield p{font-size:14px;color:#757575}.wrapper .form .inputfield .check{width:15px;height:15px;position:relative;display:block;cursor:pointer}.wrapper .form .inputfield .check input[type=\"checkbox\"]{position:absolute;top:0;left:0;opacity:0}.wrapper .form .inputfield .check .checkmark{width:15px;height:15px;border:1px solid #fec107;display:block;position:relative}.wrapper .form .inputfield .check .checkmark:before{content:\"\";position:absolute;top:1px;left:2px;width:5px;height:2px;border:2px solid;border-color:transparent transparent #fff #fff;transform:rotate(-45deg);display:none}.wrapper .form .inputfield .check input[type=\"checkbox\"]:checked~.checkmark{background:#fec107}.wrapper .form .inputfield .check input[type=\"checkbox\"]:checked~.checkmark:before{display:block}.wrapper .form .inputfield .btn{width:100%;padding:8px 10px;font-size:15px;border:0px;background:rgba(95, 124, 238, 0.411);color:rgb(243, 239, 239);font-style:bold;cursor:pointer;border-radius:3px;outline:none}.wrapper .form .inputfield .btn:hover{background:#111110a4}.wrapper .form .inputfield:last-child{margin-bottom:0}@media (max-width:420px){.wrapper .form .inputfield{flex-direction:column;align-items:flex-start}.wrapper .form .inputfield label{margin-bottom:5px}.wrapper .form .inputfield.terms{flex-direction:row}}";

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    // @Prop() grp="groups.jpg";
    render() {
        return [
            h("div", { class: "container" }, h("div", { class: "wrapper" }, h("div", { class: "title" }, " CREATE OPPORTUNITY "), h("div", { class: "form" }, h("div", { class: "inputfield" }, h("label", null, "*Name"), h("input", { type: "text", class: "input", placeholder: "Name" })), h("div", { class: "inputfield" }, h("label", null, "Currency"), h("div", { class: "custom_select" }, h("select", null, h("option", { value: "Indian Rupees : Rs" }, "Indian Rupees : Rs")))), h("div", { class: "inputfield" }, h("label", null, "Type"), h("div", { class: "custom_select" }, h("select", null, h("option", { value: "0" }, "Select"), h("option", { value: "5375" }, "Existing Business"), h("option", { value: "5376" }, "New Business")))), h("div", { class: "inputfield" }, h("label", null, "*Account Name"), h("div", { class: "custom_select" }, h("select", null, h("option", { value: "Select" }, "Select"), h("option", { value: "B Labs" }, "B Labs"), h("option", { value: "FF" }, "FF"), h("option", { value: "Manpower" }, "Manpower"), h("option", { value: "SWATI  CO." }, "SWATI  CO."), h("option", { value: "Swati Traders" }, "Swati Traders")))), h("div", { class: "inputfield" }, h("label", null, "*Amount"), h("input", { type: "text", class: "input", placeholder: "Amount" })), h("div", { class: "inputfield" }, h("label", { htmlFor: "Expected Close Date" }, "*Expected Close Date"), h("input", { type: "date", class: "input" })), h("div", { class: "inputfield" }, h("label", null, "Assigned To"), h("div", { class: "custom_select" }, h("select", null, h("option", { value: "0" }, "Select"), h("option", { value: "17" }, "priya  naidu"), h("option", { value: "117" }, "PRIYA  Naidu"), h("option", { value: "118" }, "PRIYA  Naidu")))), h("div", { class: "inputfield" }, h("label", null, "Campaign"), h("div", { class: "custom_select" }, h("select", null, h("option", { value: "0" }, "Select"), h("option", { value: "4" }, "bala"), h("option", { value: "6" }, "COMMTEX"), h("option", { value: "7" }, "Naresh"), h("option", { value: "7" }, "Naresh")))), h("div", { class: "inputfield" }, h("label", null, "*Status"), h("div", { class: "custom_select" }, h("select", null, h("option", { value: "0" }, "Select"), h("option", { value: "5323" }, "Active"), h("option", { value: "5324" }, "Deactive")))), h("div", { class: "inputfield" }, h("label", null, "Lead Source"), h("div", { class: "custom_select" }, h("select", null, h("option", { value: "0" }, "Select"), h("option", { value: "5265" }, "Advertizement"), h("option", { value: "5266" }, "Cold Calls"), h("option", { value: "5267" }, "Employee Referral"), h("option", { value: "5268" }, "External Referral"), h("option", { value: "5269" }, "Online Store"), h("option", { value: "5270" }, "Partner"), h("option", { value: "5271" }, "Public Relations"), h("option", { value: "5272" }, "Trade Show"), h("option", { value: "5273" }, "Web Download"), h("option", { value: "5274" }, "Web Research")))), h("div", { class: "inputfield" }, h("label", null, "*Sales Stage"), h("div", { class: "custom_select" }, h("select", null, h("option", { value: "0" }, "Select"), h("option", { value: "5359" }, "Closed Lost"), h("option", { value: "5358" }, "Closed Won"), h("option", { value: "5354" }, "Id. Decesion Makers"), h("option", { value: "5352" }, "Need Analysis"), h("option", { value: "5357" }, "Negotiation/Review"), h("option", { value: "5355" }, "Perception Analysis"), h("option", { value: "5356" }, "Proposal/Price Quote"), h("option", { value: "5351" }, "Qualification"), h("option", { value: "5353" }, "Value Proposition")))), h("div", { class: "inputfield" }, h("label", null, "Probability (%)"), h("input", { type: "text", class: "input", placeholder: "Probability" })), h("div", { class: "inputfield" }, h("label", null, "Next Step"), h("input", { type: "text", class: "input", placeholder: "Next Step" })), h("div", { class: "inputfield" }, h("label", null, "Description"), h("textarea", { class: "input" })), h("div", { class: "inputfield" }, h("input", { type: "submit", value: "Save", class: "btn" }), h("input", { type: "submit", value: "Cancel", class: "btn" }), h("input", { type: "submit", value: "Delete", class: "btn" })))))
        ];
    }
};
MyComponent.style = addFormCss;

export { MyComponent as create_oppo };