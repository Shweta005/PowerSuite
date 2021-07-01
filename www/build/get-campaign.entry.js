import { r as registerInstance, h } from './index-0f76d06c.js';

const myComponentCss = "h3{margin-top:-10px}";

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.cccd = sessionStorage.getItem('cccd');
    }
    ComponentWillLoad() {
        console.log('Submitted Successfully!');
        const url = 'http://www.powerbooks.in/PowerAPI/api/PBXMLCampaingn/GetAllPBXMLCampaing?cccD=' + this.cccd;
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
                    temp += "<td><a href=edit-camp.html?cccd=" + u.cccd + "&CampaignNo=" + u.CampaignNo + "&mode=edit>" + u.CampaignName + "</a></td>";
                    temp += "<td>" + u.Type + "</td>";
                    temp += "<td>" + u.Status + "</td>";
                    temp += "<td>" + u.StartDate + "</td>";
                    temp += "<td>" + u.EndDate + "</td>";
                    // temp +="<td>"+u.ExpectedRevenue+"</td>"; 
                    // temp +="<td>"+u.BudgetCost+"</td>"; 
                    // temp +="<td>"+u.ActualCost+"</td>";        
                    // temp +="<td>"+u.Description+"</td></tr>";      
                });
                document.getElementById("data").innerHTML = temp;
            }
        })
            .catch(err => {
            console.log(err);
        });
    }
    render() {
        return h("div", null, " ", h("div", null, h("div", null, this.ComponentWillLoad()), h("center", null, h("p", null, h("h3", null, h("b", null, "CAMPAIGN")))), h("div", { class: "container" })));
    }
};
MyComponent.style = myComponentCss;

export { MyComponent as get_campaign };
