import { r as registerInstance, h } from './index-0f76d06c.js';

const myComponentCss = "h3{margin-top:-10px}";

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.cccd = sessionStorage.getItem('cccd');
    }
    ComponentWillLoad() {
        console.log('Submitted Successfully!');
        const url = 'http://www.powerbooks.in/powerapi/api/PBXMLLead/GetAllPBXMLLead?cccd=' + this.cccd;
        fetch(url)
            .then(res => {
            return res.json();
        }).then(data => {
            console.log(data);
            if (data.length > 0) {
                var temp = "";
                data.forEach((u) => {
                    temp += "<tr>";
                    // temp +="<td><a href=edit-grp.html?cccd=" +u.cccd+"&AccNo=" +u.AccNo+   "&mode=edit>" +u.GROUP+ "</a></td>";
                    temp += "<td><a href=edit-lead.html?cccd=" + u.cccd + "&leadno=" + u.LeadNo + "&mode=edit>" + u.FirstName + u.LastName + "</a></td>";
                    temp += "<td>" + u.Company + "</td>";
                    // temp +="<td>"+u.Email+"</td>";
                    //  temp +="<td>"+u.Mobile+"</td>";
                    //  temp +="<td>"+u.LeadStatusSpecified+"</td>";
                    temp += "<td>" + u.CreatedDateSpecified + "</td></tr>";
                });
                document.getElementById("data").innerHTML = temp;
            }
        })
            .catch(err => {
            console.log(err);
        });
    }
    render() {
        return h("div", null, " ", h("div", null, h("div", null, this.ComponentWillLoad()), h("center", null, h("p", null, h("h3", null, h("b", null, "LEAD")))), h("div", { class: "container" })));
    }
};
MyComponent.style = myComponentCss;

export { MyComponent as get_lead };
