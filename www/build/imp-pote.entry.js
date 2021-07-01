import { r as registerInstance, h } from './index-0f76d06c.js';

const importCss = "@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');*{margin:0;padding:50;box-sizing:border-box;font-family:'Montserrat', sans-serif}.container{background-color:#d4af37;padding-top:25px;padding-bottom:25px;background-repeat:no-repeat;height:100%;background-position:center;background-size:cover}body{background:#21a7d2;padding:0 10px}.wrapper{max-width:550px;width:250%;background:#d1b26f;margin:20px auto;box-shadow:2px 2px 4px rgba(0,0,0,0.125);padding:20px}.abcd{color:white}.wrapper .title{font-size:25px;font-weight:600;margin-bottom:25px;color:white;text-transform:uppercase;text-align:center}.wrapper .form{width:100%;}.wrapper .form .inputfield{margin-bottom:15px;display:flex;align-items:center}.wrapper .form .inputfield label{width:200px;color:white;margin-right:15px;font-size:16px}.wrapper .form .inputfield .input,.wrapper .form .inputfield .textarea{width:100%;outline:none;border:1px solid #d5dbd9;font-size:15px;padding:8px 10px;border-radius:3px;transition:all 0.3s ease}.wrapper .form .inputfield textarea{width:370px;height:70px}.wrapper .form .inputfield .custom_select{position:relative;width:100%;height:37px}.wrapper .form .inputfield .custom_select1{position:relative;width:200px;height:37px}.wrapper .form .inputfield .custom_select:before{content:\"\";position:absolute;top:12px;right:10px;border:8px solid;border-color:#d5dbd9 transparent transparent transparent;pointer-events:none}.wrapper .form .inputfield .custom_select select{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;width:100%;height:100%;border:0px;padding:8px 10px;font-size:15px;border:1px solid #d5dbd9;border-radius:3px}.wrapper .form .inputfield .input:focus,.wrapper .form .inputfield .textarea:focus,.wrapper .form .inputfield .custom_select select:focus{border:1px solid #fec107}.wrapper .form .inputfield p{font-size:14px;color:#757575}.wrapper .form .inputfield .check{width:15px;height:15px;position:relative;display:block;cursor:pointer}.wrapper .form .inputfield .check input[type=\"checkbox\"]{position:absolute;top:0;left:0;opacity:0}.wrapper .form .inputfield .check .checkmark{width:15px;height:15px;border:1px solid #fec107;display:block;position:relative}.wrapper .form .inputfield .check .checkmark:before{content:\"\";position:absolute;top:1px;left:2px;width:5px;height:2px;border:2px solid;border-color:transparent transparent #fff #fff;transform:rotate(-45deg);display:none}.wrapper .form .inputfield .check input[type=\"checkbox\"]:checked~.checkmark{background:#fec107}.wrapper .form .inputfield .check input[type=\"checkbox\"]:checked~.checkmark:before{display:block}.wrapper .form .inputfield .btn{width:100%;padding:8px 10px;font-size:15px;border:0px;background:rgba(95, 124, 238, 0.411);color:rgb(243, 239, 239);font-style:bold;cursor:pointer;border-radius:3px;outline:none}.wrapper .form .inputfield .btn:hover{background:#d4af37}.wrapper .form .inputfield:last-child{margin-bottom:0}@media (max-width:420px){.wrapper .form .inputfield{flex-direction:column;align-items:flex-start}.wrapper .form .inputfield label{margin-bottom:5px}.wrapper .form .inputfield.terms{flex-direction:row}}";

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return [
            h("div", { class: "container" }, h("div", { class: "wrapper" }, h("div", { class: "title" }, " Import ", this.Name, " "), h("div", { class: "form" }, h("table", null, h("tr", null, h("td", null, h("table", null, h("tr", null, h("td", null, h("div", { class: "inputfield" }, h("label", null, "Select a file to upload")), h("div", { class: "inputfield" }, h("input", { type: "file", class: "input", name: "FileUpload1", id: "FileUpload1" })), h("div", { class: "inputfield" }, h("label", null, "[only .XLS and .XLSX format is supported]")))))), h("td", null, h("div", null, h("h3", { class: "abcd" }, "Important things needs to consider while importing .XSL or .XLSX file\u2026"), h("br", null), h("ul", null, h("li", null, "Excel file must contain 1", h("sup", null, "st"), " row as Column Header and these column headers must resemble to Column Headers."), h("li", null, "Excel file size should not exceed more than 4mb."), " ")), h("br", null)))), h("div", { class: "inputfield" }, h("input", { type: "submit", value: "Import", class: "btn" }), h("input", { type: "submit", value: "Export", class: "btn" }), h("input", { type: "submit", value: "Cancel", class: "btn" })))))
        ];
    }
};
MyComponent.style = importCss;

export { MyComponent as imp_pote };