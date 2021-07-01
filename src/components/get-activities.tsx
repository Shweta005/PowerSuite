import { Component, h,Prop } from '@stencil/core';


@Component({
  tag: 'get-activities',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  @Prop() cccd=sessionStorage.getItem('cccd');
 //  onFetchData(event :Event)
 ComponentWillLoad()
 {
   
 
 console.log('Submitted Successfully!');
 const url='http://www.powerbooks.in/powerapi/api/PBXMLActivities/GetAllPBXMLActivities?cccD='+this.cccd;
 fetch(url)
 .then(res => {
 
   return res.json();
 }).then(data=>{
  
     console.log(data);
     if(data.length > 0){
       var temp = "";
      
       data.forEach((u)=>{
        temp +="<tr>";
  
        temp +="<td><a href=edit-schedulecall.html?cccd=" +u.Cccd+"&ActivityNo=" +u.ActivityNo+ "&mode=edit>" +u.Subject+ "</a></td>";
        temp +="<td>"+u.ActivityType+"</td>";
        temp +="<td>"+u.ContactName+"</td>";
        // temp +="<td>"+u.Description+"</td>";        
        // temp +="<td>"+u.CreatedDate+"</td></tr>"; 
       }
       )
       
 
       document.getElementById("data").innerHTML=temp;
     }
 })
 
 .catch(err =>  {
   console.log(err);
 });
 
 }



 render() {

   return ([
     // <ion-content class="ion-padding">
     <div> <div>
     <div>{this.ComponentWillLoad()}</div> 
          {/* <center id="abcd"><p><h2><b>ACTIVITY</b></h2></p></center> */}
          <div class="container">
          
       {/*  <table id="table">
 
 
    <tr id="abc">
      <th>Subject</th>
      <th>Activity Type</th>
      <th>Contact Name</th> 
      <th>Description</th>
      <th>Created Date</th>
    </tr>
   
  <tbody id="data">
  </tbody> 
  
 </table> */}
   </div> 
   </div>
  
   </div>
   // </ion-content>
   ]
   );
 }
}
