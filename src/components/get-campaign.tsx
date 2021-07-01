import { Component, h,Prop } from '@stencil/core';


@Component({
  tag: 'get-campaign',
  styleUrl: 'my-component.css',
  
  shadow: true
})
export class MyComponent {
  @Prop() cccd=sessionStorage.getItem('cccd');
   ComponentWillLoad()
   {
   console.log('Submitted Successfully!');
   const url='http://www.powerbooks.in/PowerAPI/api/PBXMLCampaingn/GetAllPBXMLCampaing?cccD='+this.cccd;
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
            temp +="<td><a href=edit-camp.html?cccd=" +u.cccd+"&CampaignNo=" +u.CampaignNo+   "&mode=edit>" +u.CampaignName+ "</a></td>";
            temp +="<td>"+u.Type+"</td>";
            temp +="<td>"+u.Status+"</td>";
            temp +="<td>"+u.StartDate+"</td>"; 
            temp +="<td>"+u.EndDate+"</td>"; 
            // temp +="<td>"+u.ExpectedRevenue+"</td>"; 
            // temp +="<td>"+u.BudgetCost+"</td>"; 
            // temp +="<td>"+u.ActualCost+"</td>";        
            // temp +="<td>"+u.Description+"</td></tr>";      
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
    
    <center><p><h3><b>CAMPAIGN</b></h3></p></center>
    <div class="container" >
    {/* <table class="table">
    <thead> <tr>
    <th>Campaign Name</th>
     <th>Type</th>
     <th>Status</th>
     <th>Start Date</th>
     <th>End Date</th>
     <th>Expected Revenue</th>
     <th>Budget Cost</th>
     <th>Actual Cost</th>
     <th>Description</th>
    
   </tr></thead>
   <tbody id="data">
  
   </tbody> 
 </table> */}
</div>
  </div>
</div>;
}
}