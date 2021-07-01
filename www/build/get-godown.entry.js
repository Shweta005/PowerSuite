import { r as registerInstance, h } from './index-0f76d06c.js';

const myComponentCss = "h3{margin-top:-10px}";

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.cccd = sessionStorage.getItem('cccd');
    }
    ComponentWillLoad() {
        console.log('Submitted Successfully!');
        fetch('http://powerbooks.in/powerapi/api/PBXMLGoDown/GetAllPBXMLGoDown?cccd=FIT00000')
            .then(res => {
            return res.json();
        }).then(data => {
            console.log(data);
            if (data.length > 0) {
                var temp = "";
                data.forEach((u) => {
                    temp += "<tr>";
                    temp += "<td><a href=#>" + u.GODOWN + "</a></td>";
                    //  temp +="<td>"+u.EXCISEREGISTRATIONTYPE+"</td>";
                    //  temp +="<td>"+u.EXCISERANGEADDRESS+"</td>";
                    //  temp +="<td>"+u.PINCODE+"</td>";  
                    //  temp +="<td>"+u.PHONENUMBER+"</td>";
                    temp += "<td>" + u.ISINTERNAL + "</td>";
                    temp += "<td>" + u.ISEXTERNAL + "</td></tr>";
                });
                document.getElementById("data").innerHTML = temp;
            }
        })
            .catch(err => {
            console.log(err);
        });
    }
    render() {
        return h("div", null, " ", h("div", null, h("div", null, this.ComponentWillLoad()), h("center", null, h("p", null, h("h3", null, h("b", null, "GODOWN ")))), h("div", { class: "container" })));
    }
};
MyComponent.style = myComponentCss;

export { MyComponent as get_godown };
