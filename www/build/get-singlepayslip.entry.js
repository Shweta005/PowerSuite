import { r as registerInstance, h } from './index-0f76d06c.js';

const myComponentCss = "h3{margin-top:-10px}";

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    ComponentWillLoad() {
        console.log('Submitted Successfully!');
        fetch('http://powerbooks.in/powerapi/api/PBXMLVPayroll/GetAllSinglePaySlipEarnings?cccd=hbansode2018&empno=3')
            .then(res => {
            return res.json();
        }).then(data => {
            console.log(data);
            if (data.length > 0) {
                var temp = "";
                data.forEach((u) => {
                    temp += "<tr>";
                    temp += "<td><a href=# >" + u.cccd + "</a></td>";
                    temp += "<td>" + u.EmpNo + "</td>";
                    temp += "<td>" + u.PAYHEADNAME + "</td>";
                    // temp +="<td>"+u.PAYHEADAMOUNTt+"</td>";       
                });
                document.getElementById("data").innerHTML = temp;
            }
        })
            .catch(err => {
            console.log(err);
        });
    }
    render() {
        return h("div", null, " ", h("div", null, h("div", null, this.ComponentWillLoad()), h("center", null, h("p", null, h("h3", null, h("b", null, " SINGLE PAY SLIP")))), h("div", { class: "container" })));
    }
};
MyComponent.style = myComponentCss;

export { MyComponent as get_singlepayslip };
