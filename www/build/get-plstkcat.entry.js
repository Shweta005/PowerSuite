import { r as registerInstance, h } from './index-0f76d06c.js';

const myComponentCss = "h3{margin-top:-10px}";

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.cccd = sessionStorage.getItem('cccd');
    }
    ComponentWillLoad() {
        console.log('Submitted Successfully! Getall Groups');
        const url = 'http://www.powerbooks.in/powerapi/api/PBXMLVPriceListStockCat/GetAllPriceListStockCat?cccD=' + this.cccd;
        fetch(url)
            .then(res => {
            return res.json();
        }).then(data => {
            console.log(data);
            if (data.length > 0) {
                var temp = "";
                data.forEach((u) => {
                    temp += "<tr>";
                    //  replacement line <a href='GroupCreate1.aspx?cccd=" + group.cccd + "&GROUP=" + group.GROUP + "&mode=edit"+"'> " + group.GROUP + "</a>
                    //  temp +="<td><a href=edit-grp.html?cccd=" +u.cccd+"&AccNo=" +u.AccNo+   "&mode=edit>" +u.GROUP+ "</a></td>";
                    temp += "<td><a href=edit-plstkcat.html?cccd=" + u.cccd + "&PriceListSrl=" + u.PriceListSrl + "&mode=edit>" + u.Name + "</a></td>";
                    temp += "<td>" + u.PriceLevel + "</td>";
                    temp += "<td>" + u.Date + "</td></tr>";
                });
                document.getElementById("data").innerHTML = temp;
            }
        })
            .catch(err => {
            console.log(err);
        });
    }
    render() {
        return h("div", null, " ", h("div", null, h("div", null, this.ComponentWillLoad()), h("center", null, h("p", null, h("h3", null, h("b", null, " PRICE LIST STOCK CATEGORY")))), h("div", { class: "container" })));
    }
};
MyComponent.style = myComponentCss;

export { MyComponent as get_plstkcat };
