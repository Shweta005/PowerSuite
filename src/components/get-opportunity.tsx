import { Component, h,Prop } from '@stencil/core';


@Component({
  tag: 'get-opportunity',
  styleUrl: 'my-component.css',
  
  shadow: true
})
export class MyComponent {
  @Prop() cccd=sessionStorage.getItem('cccd');
   ComponentWillLoad()
   {
   console.log('Submitted Successfully!');
   const url='http://www.powerbooks.in/powerapi/api/PBXMLOpportunity/GetAllPBXMLOpportunity?cccD='+this.cccd;
  fetch(url)
   .then(res => {
     return res.json();
   }).then(data=>{
       console.log(data);
      if(data.length > 0){
      var temp = "";
         data.forEach((u)=>{
            temp +="<tr>";
            // temp +="<td><a href=edit-grp.html?cccd=" +u.cccd+"&AccNo=" +u.AccNo+   "&mode=edit>" +u.GROUP+ "</a></td>";
          temp +="<td><a href=edit-opp.html?cccd=" +u.cccd+"&OppNo=" +u.OppNo+   "&mode=edit>"+u.OppName+"</a></td>";
          temp +="<td>"+u.AccountName+"</td>";
          temp +="<td>"+u.Amount+"</td>";
          temp +="<td>"+u.ExpCloseDate+"</td>";        
          // temp +="<td>"+u.SalesStage+"</td>";  
          // temp+="<td>"+u.Status+"</td></tr>";      
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
    
    <center><p><h3><b>OPPORTUNITY</b></h3></p></center>
    <div class="container" >
    {/* <table class="table">
    <thead> <tr>
    <th>OppName</th>
     <th>AccountName</th>
     <th>Amount</th>
     <th>Exp Close Date</th>
     <th>Sales Stage</th>
     <th>Status</th>
   </tr></thead>
   <tbody id="data">
  
   </tbody> 
 </table> */}
</div>
  </div>
</div>;
}
}