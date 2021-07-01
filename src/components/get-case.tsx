import { Component, h ,Prop} from '@stencil/core';


@Component({
  tag: 'get-cases',
  styleUrl: 'my-component.css',
  
  shadow: true
})
export class MyComponent {
  @Prop() cccd=sessionStorage.getItem('cccd');
   ComponentWillLoad()
   {
   console.log('Submitted Successfully!');
   const url ='http://www.powerbooks.in/powerapi/api/PBXMLCase/GetAllPBXMLCase?cccd='+this.cccd;
  fetch(url)
   .then(res => {
     return res.json();
   }).then(data=>{
       console.log(data);
      if(data.length > 0){
      var temp = "";
         data.forEach((u)=>{
            temp +="<tr>"
        
            temp +="<td><a href='index.html'>"+u.ProductName+"</a></td>";
            temp +="<td>"+u.Status+"</td>";
            temp +="<td>"+u.Phone+"</td>";
            temp +="<td>"+u.Priority+"</td>";
            // temp +="<td>"+u.RelatedTo+"</td>";
            temp +="<td>"+u.Subject+"</td></tr>";       
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
    
    <center><p><h3><b>CASES</b></h3></p></center>
    <div class="container" >
    {/* <table class="table">
    <thead> <tr>
    <th>Product name</th>
            <th>Status</th>
            <th>Case Origin</th>
            <th>Priority</th>
            <th>Related to</th>
            <th>Subject</th>
   </tr></thead>
   <tbody id="data">
  
   </tbody> 
 </table> */}
</div>
  </div>
</div>;
}
}