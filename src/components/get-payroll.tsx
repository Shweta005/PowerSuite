import { Component, h} from '@stencil/core';


@Component({
  tag: 'get-payroll',
  styleUrl: 'my-component.css',
  
  shadow: true
})
export class MyComponent {
 
   ComponentWillLoad()
   {
   console.log('Submitted Successfully!');
  fetch('http://www.powerbooks.in/powerapi/api/PBXMLVPayroll/GetAllPBXMLPayroll?cccd=hbansode2018&trtype=PY&trcode=01')
   .then(res => {
     return res.json();
   }).then(data=>{
       console.log(data);
      if(data.length > 0){
      var temp = "";
         data.forEach((u)=>{
           temp +="<tr>";
           temp +="<td><a href=# >" +u.PaidTo+ "</a></td>";
           temp +="<td>"+u.VOUCHERTYPENAME+"</td>";
           temp +="<td>"+u.VOUCHERNUMBER+"</td>";
          //  temp +="<td>"+u.DrAmt+"</td>";
          //  temp +="<td>"+u.CrAmt+"</tr>";        
         })
         document.getElementById("data").innerHTML=temp;
       }
  })
   .catch(err =>  {
     console.log(err);
  });
  
   }
  
  render() {
    return <div> <div>
     <div>{this.ComponentWillLoad()}</div> 
    
    <center><p><h3><b> PAYROLL</b></h3></p></center>
    <div class="container" >
 {/* <table class="table">

    <tr>
      <th>PARTICULAR</th>
      <th>VCHTYPE</th>
      <th>VOUCHER_NO.</th>
      <th>DEBIT_AMT</th>
      <th>CREDIT_AMT</th>
    </tr>
  <tbody id="data">
  </tbody> 
</table>  */}
</div>
  </div>
</div>;
}
}