import { Component, h} from '@stencil/core';


@Component({
  tag: 'get-salesorder',
  styleUrl: 'my-component.css',
  
  shadow: true
})
export class MyComponent {
 
   ComponentWillLoad()
   {
   console.log('Submitted Successfully!');
  fetch('http://powerbooks.in/PowerAPI/api/PBXMLVInvoice/GetAllPBXMLInvoice?cccd=fit000002007&trtype=SO&trcode=01')
   .then(res => {
     return res.json();
   }).then(data=>{
       console.log(data);
      if(data.length > 0){
      var temp = "";
         data.forEach((u)=>{
           temp +="<tr>";
           temp +="<td><a href=# >" +u.DATE+ "</a></td>";
           temp +="<td>"+u.PaidTo+"</td>";
           temp +="<td>"+u.VOUCHERTYPENAME+"</td>";
           temp +="<td>"+u.VOUCHERNUMBER+"</td>";
           temp +="<td>"+u.DrAmt+"</td>";     
          //  temp +="<td>"+u.CrAmt+"</td></tr>";   
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
    
    <center><p><h3><b>VOUCHER</b></h3></p></center>
    <div class="container" >
{/* <table class="table">

    <tr>


      <th>GROUP</th>
      <th>PARENT</th>
      <th>ISADDABLE</th>
      <th>ISSUBLEDGER</th>
    </tr>
  <tbody id="data">
  </tbody> 
</table> */}
</div>
  </div>
</div>;
}
}