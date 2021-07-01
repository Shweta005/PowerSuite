import { Component, h,Prop} from '@stencil/core';


@Component({
  tag: 'get-pemail',
  styleUrl: 'my-component.css',
  
  shadow: true
})
export class MyComponent {
  @Prop() cccd=sessionStorage.getItem('cccd');
   ComponentWillLoad()
   {
   console.log('Submitted Successfully!');
   const url='http://www.powerbooks.in/powerapi/api/PBXMLVPayroll/GetAllEmailId?cccd='+this.cccd;
  fetch(url)
   .then(res => {
     return res.json();
   }).then(data=>{
       console.log(data);
      if(data.length > 0){
      var temp = "";
         data.forEach((u)=>{
           temp +="<tr>";
           temp +="<td><a href=# >" +u.NAME+ "</a></td>";
          //  temp +="<td>"+u.NAME+"</td>";
           temp +="<td>"+u.EMAILID+"</td>";
           temp +="<td>"+u.CONTACTNUMBERS+"</td>";       
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
    
    <center><p><h3><b> EMAIL Ds</b></h3></p></center>
    <div class="container" >
 {/* <table class="table">

    <tr>
      <th>PARENT</th>
      <th>PARTICULARS</th>
      <th>EMAIL_ID</th>
      <th>CONTACT</th>
     
    </tr>
  <tbody id="data">
  </tbody> 
</table>  */}
</div>
  </div>
</div>;
}
}