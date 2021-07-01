import { r as registerInstance, h } from './index-0f76d06c.js';

const myComponentCss = "h3{margin-top:-10px}";

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.cccd = sessionStorage.getItem('cccd');
    }
    ComponentWillLoad() {
        console.log('Submitted Successfully!');
        const url = 'http://www.powerbooks.in/powerapi/api/PBXMLCurrency/GetAllPBXMLCurrency?cccd=' + this.cccd;
        fetch(url)
            .then(res => {
            return res.json();
        }).then(data => {
            console.log(data);
            if (data.length > 0) {
                var temp = "";
                data.forEach((u) => {
                    temp += "<tr>";
                    temp += "<td><a href=addcurr.html>" + u.NAME + "</a></td>";
                    temp += "<td>" + u.ORIGINALNAME + "</td>";
                    temp += "<td>" + u.EXPANDEDSYMBOL + "</td>";
                    temp += "<td>" + u.ISSUFFIX + "</td>";
                    //  temp +="<td>"+u.HASSPACE+"</td></tr>";        
                });
                document.getElementById("data").innerHTML = temp;
            }
        })
            .catch(err => {
            console.log(err);
        });
    }
    render() {
        return h("div", null, " ", h("div", null, h("div", null, this.ComponentWillLoad()), h("center", null, h("p", null, h("h3", null, h("b", null, "CURRENCIES ")))), h("div", { class: "container" })));
    }
};
MyComponent.style = myComponentCss;

export { MyComponent as get_currencies };
