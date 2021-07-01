import { r as registerInstance, h } from './index-0f76d06c.js';

const addFormCss = "*{margin:0;padding:0;box-sizing:border-box;font-family:'Times New Roman', sans-serif}#l1{color:black;font-size:15px}#l2{font-size:15px;color:blue}#l3{color:black;font-size:11px;font-style:bold;font-family:'Times New Roman', Times, serif}body{background:white;padding:0 10px}.wrapper{max-width:500px;width:100%;background:#cccbcb;margin:50px auto;box-shadow:2px 2px 4px rgba(0,0,0,0.125);padding:30px}.wrapper .title{font-size:24px;font-weight:700;margin-bottom:25px;color:#0a0a09;text-transform:uppercase;text-align:center}.wrapper .form{width:100%}.wrapper .form .inputfield{margin-bottom:15px;display:flex;align-items:center}.wrapper .form .inputfield label{width:200px;color:#0a0a0a;margin-right:10px;font-size:14px}.wrapper .form .inputfield .input,.wrapper .form .inputfield .textarea{width:100%;outline:none;border:1px solid #d5dbd9;font-size:15px;padding:8px 10px;border-radius:3px;transition:all 0.3s ease}.wrapper .form .inputfield .textarea{width:100%;height:125px;resize:none}.wrapper .form .inputfield .custom_select{position:relative;width:100%;height:37px}.wrapper .form .inputfield .custom_select:before{content:\"\";position:absolute;top:12px;right:10px;border:8px solid;border-color:#d5dbd9 transparent transparent transparent;pointer-events:none}.wrapper .form .inputfield .custom_select select{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;width:100%;height:100%;border:0px;padding:8px 10px;font-size:15px;border:1px solid #d5dbd9;border-radius:3px}.wrapper .form .inputfield .input:focus,.wrapper .form .inputfield .textarea:focus,.wrapper .form .inputfield .custom_select select:focus{border:1px solid #fec107}.wrapper .form .inputfield p{font-size:14px;color:#757575}.wrapper .form .inputfield .check{width:15px;height:15px;position:relative;display:block;cursor:pointer}.wrapper .form .inputfield .check input[type=\"checkbox\"]{position:absolute;top:0;left:0;opacity:0}.wrapper .form .inputfield .check .checkmark{width:15px;height:15px;border:1px solid #fec107;display:block;position:relative}.wrapper .form .inputfield .check .checkmark:before{content:\"\";position:absolute;top:1px;left:2px;width:5px;height:2px;border:2px solid;border-color:transparent transparent #fff #fff;transform:rotate(-45deg);display:none}.wrapper .form .inputfield .check input[type=\"checkbox\"]:checked~.checkmark{background:#fec107}.wrapper .form .inputfield .check input[type=\"checkbox\"]:checked~.checkmark:before{display:block}.wrapper .form .inputfield .btn{width:100%;padding:8px 10px;font-size:15px;border:0px;background:rgba(95, 124, 238, 0.411);color:rgb(243, 239, 239);font-style:bold;cursor:pointer;border-radius:3px;outline:none}.wrapper .form .inputfield .btn:hover{background:#111110a4}.wrapper .form .inputfield:last-child{margin-bottom:0}@media (max-width:420px){.wrapper .form .inputfield{flex-direction:column;align-items:flex-start}.wrapper .form .inputfield label{margin-bottom:5px}.wrapper .form .inputfield.terms{flex-direction:row}}";

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return [
            h("div", { class: "container" }, h("div", { class: "wrapper" }, h("div", { class: "title" }, " ADD USER"), h("div", { class: "form" }, h("div", { class: "inputfield" }, h("label", null, "USERNAME:"), h("input", { type: "text", class: "input", placeholder: "username:" })), h("div", { class: "inputfield" }, h("label", null, "Password:"), h("input", { type: "text", class: "input", placeholder: "password:" })), h("div", { class: "inputfield" }, h("label", null, "User FullName:"), h("input", { type: "text", class: "input", placeholder: "user fullname:" })), h("div", null, h("div", { class: "inputfield" }, h("label", null, "UserRole:"), h("div", { class: "custom_select" }, h("select", null, h("option", { value: "primary" }, "Administrator"), h("option", { value: "Bank OS A/c" }, "Area Sales Manager"), h("option", { value: "Branch/divisions" }, "Customer"), h("option", { value: "Bank OS A/c" }, "Product Manager"), h("option", { value: "Branch/divisions" }, "Supplier"), h("option", { value: "Bank OS A/c" }, "Zonal Sales Manager")))), h("div", { class: "inputfield" }, h("label", null, "User EmailId:"), h("input", { type: "text", class: "input", placeholder: "User EmailId:" })), h("div", { class: "inputfield" }, h("label", null, "Company Provided:"), h("input", { type: "text", class: "input", placeholder: "Company Provided:" })), h("div", { class: "inputfield" }, h("label", null, "User Address1:"), h("input", { type: "text", class: "input", placeholder: "User Address1:" })), h("div", { class: "inputfield" }, h("label", null, "User Address2:"), h("input", { type: "text", class: "input", placeholder: "User Address2:" })), h("div", { class: "inputfield" }, h("label", null, "Head Quarter:"), h("div", { class: "custom_select" }, h("select", null, h("option", { value: "primary" }, "Nashik"), h("option", { value: "Bank OS A/c" }, "Panvel"), h("option", { value: "Branch/divisions" }, "Pune"), h("option", { value: "Bank OS A/c" }, "Thane")))), h("div", { class: "inputfield" }, h("label", null, "Area:"), h("div", { class: "custom_select" }, h("select", null, h("option", { value: "primary" }, "Pune")))), h("div", { class: "inputfield" }, h("label", null, "Region:"), h("div", { class: "custom_select" }, h("select", null, h("option", { value: "primary" }, "Navi Mumbai")))), h("div", { class: "inputfield" }, h("label", null, "Zone:"), h("div", { class: "custom_select" }, h("select", null, h("option", { value: "primary" }, "Central Zone")))), h("div", { class: "inputfield" }, h("label", null, "City:"), h("div", { class: "custom_select" }, h("select", null, h("option", { value: "primary" }, "Mumbai")))), h("div", { class: "inputfield" }, h("label", null, "District:"), h("div", { class: "custom_select" }, h("select", null, h("option", { value: "primary" }, "Kolhapur"), h("option", { value: "Bank OS A/c" }, "Mumbai City"), h("option", { value: "Branch/divisions" }, "Nagpur")))), h("div", { class: "inputfield" }, h("label", null, "State:"), h("div", { class: "custom_select" }, h("select", null, h("option", { value: "primary" }, "Gujrat"), h("option", { value: "Bank OS A/c" }, "Kerala"), h("option", { value: "Branch/divisions" }, "Maharashtra"), h("option", { value: "Bank OS A/c" }, "Maharashtra"), h("option", { value: "Branch/divisions" }, "Punjab"), h("option", { value: "Bank OS A/c" }, "Rajasthan")))), h("div", { class: "inputfield" }, h("label", null, "Country:"), h("div", { class: "custom_select" }, h("select", null, h("option", { value: "primary" }, "Australia"), h("option", { value: "Bank OS A/c" }, "Belgium"), h("option", { value: "Branch/divisions" }, "Bhutan"), h("option", { value: "Bank OS A/c" }, "India"), h("option", { value: "Branch/divisions" }, "India"), h("option", { value: "Bank OS A/c" }, "Israel"), h("option", { value: "Bank OS A/c" }, "Singapore"), h("option", { value: "Branch/divisions" }, "United Kingdom"), h("option", { value: "Bank OS A/c" }, "United State of America")))), h("div", { class: "inputfield" }, h("label", null, "Status:"), h("div", { class: "custom_select" }, h("select", null, h("option", { value: "primary" }, "Select"), h("option", { value: "Bank OS A/c" }, "Active"), h("option", { value: "Branch/divisions" }, "Deactive")))), h("div", { class: "inputfield" }, h("fieldset", { class: "input" }, h("div", { class: "title" }, " ADDITIONAL INFORMATION"), h("div", { class: "form" }, h("div", { class: "inputfield" }, h("label", null, "Mobile1:"), h("input", { type: "text", class: "input", placeholder: "Mobile1:" })), h("div", { class: "inputfield" }, h("label", null, "Mobile2:"), h("input", { type: "text", class: "input", placeholder: "Mobile2:" })), h("div", { class: "inputfield" }, h("label", null, "Telephone1:"), h("input", { type: "text", class: "input", placeholder: "Telephone1:" })), h("div", { class: "inputfield" }, h("label", null, "Telephone2:"), h("input", { type: "text", class: "input", placeholder: "Telephone2:" }))))), h("div", { class: "inputfield" }, h("input", { type: "submit", value: "Save", class: "btn" }), h("input", { type: "submit", value: "Cancel", class: "btn" }))))))
        ];
    }
};
MyComponent.style = addFormCss;

export { MyComponent as add_user };
