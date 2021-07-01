import { Component, h ,Prop} from '@stencil/core';


@Component({
  tag: 'get-lead',
  styleUrl: 'my-component.css',
  
  shadow: true
})
export class MyComponent {
  @Prop() cccd=sessionStorage.getItem('cccd');
   ComponentWillLoad()
   {
   console.log('Submitted Successfully!');
   const url ='http://www.powerbooks.in/powerapi/api/PBXMLLead/GetAllPBXMLLead?cccd='+this.cccd;
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
           temp +="<td><a href=edit-lead.html?cccd="+u.cccd+"&leadno=" +u.LeadNo+   "&mode=edit>"  +u.FirstName+u.LastName+ "</a></td>";
           temp +="<td>"+u.Company+"</td>";
          // temp +="<td>"+u.Email+"</td>";
          //  temp +="<td>"+u.Mobile+"</td>";
          //  temp +="<td>"+u.LeadStatusSpecified+"</td>";
           temp +="<td>"+u.CreatedDateSpecified+"</td></tr>";        
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
    
    <center><p><h3><b>LEAD</b></h3></p></center>
    <div class="container" >
{/* <table class="table">

    <tr>


      <th>LEAD NAME</th>
      <th>COMPANY</th>
      <th>EMAIL</th>
      <th>MOBILE</th>
       <th>LEAD STATUS</th>
         <th>DATE</th>
    </tr>
  <tbody id="data">
  </tbody> 
</table> */}
</div>
  </div>
</div>;
}
}