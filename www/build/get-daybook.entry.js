import { r as registerInstance, h } from './index-0f76d06c.js';

const myComponentCss = "h3{margin-top:-10px}";

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    ComponentWillLoad() {
        console.log('Submitted Successfully!');
        fetch('http://www.powerbooks.in/powerapi/api/PBXMLVDaybook/GetAllPBXMLDayBook?cccd=FIT000002007&&from=20070401&&to=20080331&&trtype=-1&&trcode=-1')
            .then(res => {
            return res.json();
        }).then(data => {
            console.log(data);
            if (data.length > 0) {
                var temp = "";
                data.forEach((u) => {
                    temp += "<tr>";
                    temp += "<td><a href=# >" + u.DATE + "</a></td>";
                    temp += "<td>" + u.PaidTo + "</td>";
                    temp += "<td>" + u.VOUCHERTYPENAME + "</td>";
                    temp += "<td>" + u.VOUCHERNUMBER + "</td>";
                    temp += "<td>" + u.DrAmt + "</td>";
                    temp += "<td>" + u.CrAmt + "</td></tr>";
                });
                document.getElementById("data").innerHTML = temp;
            }
        })
            .catch(err => {
            console.log(err);
        });
    }
    render() {
        return h("div", null, " ", h("div", null, h("div", null, this.ComponentWillLoad()), h("center", null, h("p", null, h("h3", null, h("b", null, "DAY BOOK")))), h("div", { class: "container" })));
    }
};
MyComponent.style = myComponentCss;

export { MyComponent as get_daybook };
