import { r as registerInstance, h } from './index-0f76d06c.js';

const myComponentCss = "h3{margin-top:-10px}";

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.cccd = sessionStorage.getItem('cccd');
    }
    ComponentWillLoad() {
        console.log('Submitted Successfully!');
        const url = 'http://www.powerbooks.in/powerapi/api/PBXMLVoucherType/GetAllPBXMLVoucherType?cccD=' + this.cccd;
        fetch(url)
            .then(res => {
            return res.json();
        }).then(data => {
            console.log(data);
            if (data.length > 0) {
                var temp = "";
                data.forEach((u) => {
                    temp += "<td><a href='index1.html'>" + u.PARENT + "</a></td>";
                    temp += "<td>" + u.RESERVEDNAME + "</td>";
                    temp += "<td>" + u.PREVENTDUPLICATES + "</td>";
                    temp += "<td>" + u.ALLOWCONSUMPTION + "</td></tr>";
                });
                document.getElementById("data").innerHTML = temp;
            }
        })
            .catch(err => {
            console.log(err);
        });
    }
    render() {
        return [
            h("div", null, h("div", null, this.ComponentWillLoad()), h("div", { class: "container" }, h("center", null, h("p", null, h("h3", null, h("b", null, " VOUCHER TYPES ")))))),
        ];
    }
};
MyComponent.style = myComponentCss;

export { MyComponent as get_voucher };
