import { r as registerInstance, h } from './index-0f76d06c.js';

const myComponentCss = "h3{margin-top:-10px}";

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.cccd = sessionStorage.getItem('cccd');
    }
    ComponentWillLoad() {
        console.log('Submitted Successfully!');
        const url = 'http://www.powerbooks.in/powerapi/api/PBXMLOpportunity/GetAllPBXMLOpportunity?cccD=' + this.cccd;
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
                    temp += "<td><a href=edit-opp.html?cccd=" + u.cccd + "&OppNo=" + u.OppNo + "&mode=edit>" + u.OppName + "</a></td>";
                    temp += "<td>" + u.AccountName + "</td>";
                    temp += "<td>" + u.Amount + "</td>";
                    temp += "<td>" + u.ExpCloseDate + "</td>";
                    // temp +="<td>"+u.SalesStage+"</td>";  
                    // temp+="<td>"+u.Status+"</td></tr>";      
                });
                document.getElementById("data").innerHTML = temp;
            }
        })
            .catch(err => {
            console.log(err);
        });
    }
    render() {
        return h("div", null, " ", h("div", null, h("div", null, this.ComponentWillLoad()), h("center", null, h("p", null, h("h3", null, h("b", null, "OPPORTUNITY")))), h("div", { class: "container" })));
    }
};
MyComponent.style = myComponentCss;

export { MyComponent as get_opportunity };
