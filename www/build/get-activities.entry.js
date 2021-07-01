import { r as registerInstance, h } from './index-0f76d06c.js';

const myComponentCss = "h3{margin-top:-10px}";

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.cccd = sessionStorage.getItem('cccd');
    }
    //  onFetchData(event :Event)
    ComponentWillLoad() {
        console.log('Submitted Successfully!');
        const url = 'http://www.powerbooks.in/powerapi/api/PBXMLActivities/GetAllPBXMLActivities?cccD=' + this.cccd;
        fetch(url)
            .then(res => {
            return res.json();
        }).then(data => {
            console.log(data);
            if (data.length > 0) {
                var temp = "";
                data.forEach((u) => {
                    temp += "<tr>";
                    temp += "<td><a href=edit-schedulecall.html?cccd=" + u.Cccd + "&ActivityNo=" + u.ActivityNo + "&mode=edit>" + u.Subject + "</a></td>";
                    temp += "<td>" + u.ActivityType + "</td>";
                    temp += "<td>" + u.ContactName + "</td>";
                    // temp +="<td>"+u.Description+"</td>";        
                    // temp +="<td>"+u.CreatedDate+"</td></tr>"; 
                });
                document.getElementById("data").innerHTML = temp;
            }
        })
            .catch(err => {
            console.log(err);
        });
    }
    render() {
        return ([
            // <ion-content class="ion-padding">
            h("div", null, " ", h("div", null, h("div", null, this.ComponentWillLoad()), h("div", { class: "container" })))
            // </ion-content>
        ]);
    }
};
MyComponent.style = myComponentCss;

export { MyComponent as get_activities };
