import { r as registerInstance, h } from './index-0f76d06c.js';

const myComponentCss = "h3{margin-top:-10px}";

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.cccd = sessionStorage.getItem('cccd');
    }
    ComponentWillLoad() {
        console.log('Submitted Successfully!');
        const url = 'http://powerbooks.in/powerapi/api/PBXMLUnit/GetAllPBXMLUnit?cccd=' + this.cccd;
        fetch(url)
            .then(res => {
            return res.json();
        }).then(data => {
            console.log(data);
            if (data.length > 0) {
                var temp = "";
                data.forEach((u) => {
                    temp += "<tr>";
                    temp += "<td><a href=addmunits.html>" + u.NAME + "</a></td>";
                    temp += "<td>" + u.UNIT + "</td>";
                    temp += "<td>" + u.ORIGINALNAME + "</td>";
                    //  temp +="<td>"+u.DECIMALPLACES+"</td>";
                    temp += "</tr>";
                });
                document.getElementById("data").innerHTML = temp;
            }
        })
            .catch(err => {
            console.log(err);
        });
    }
    render() {
        return h("div", null, " ", h("div", null, h("div", null, this.ComponentWillLoad()), h("center", null, h("p", null, h("h3", null, h("b", null, " MEASURE OF UNITS ")))), h("div", { class: "container" })));
    }
};
MyComponent.style = myComponentCss;

export { MyComponent as get_units };
