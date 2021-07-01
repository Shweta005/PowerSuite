import { Component, h,Prop } from '@stencil/core';


@Component({
  tag: 'get-contact',
  styleUrl: 'my-component.css',
  
  shadow: true
})
export class MyComponent {
  @Prop() cccd=sessionStorage.getItem('cccd');
   ComponentWillLoad()
   {
   console.log('Submitted Successfully!');
   const url ='http://www.powerbooks.in/powerapi/api/PBXMLContacts/GetAllPBXMLContacts?cccD='+this.cccd;
  fetch(url)
   .then(res => {
     return res.json();
   }).then(data=>{
       console.log(data);
      if(data.length > 0){
      var temp = "";
         data.forEach((u)=>{
            temp +="<tr>";
          temp +="<td><a href=#>" +u.FirstName+u.LastName+ "</a></td>";
          temp +="<td>"+u.Email+"</td>";
          temp +="<td>"+u.Mobile+"</td>";        
          // temp +="<td>"+u.Department+"</td></tr>";       
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
    
    <center><p><h3><b>CONTACT</b></h3></p></center>
    <div class="container" >
    {/* <table class="table"> */}
    {/* <thead> <tr>
   <th>Name</th>
     <th>Email</th>
     <th>Phone</th>
     <th>Department</th>
   </tr></thead> */}
   {/* <tbody id="data"> */}
  
   {/* </tbody>  */}
 {/* </table> */}
</div>
  </div>
</div>;
}
}