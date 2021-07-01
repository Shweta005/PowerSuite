import { Component, h,Prop } from '@stencil/core';


@Component({
  tag: 'get-godown',
  styleUrl: 'my-component.css',
  
  shadow: true
})
export class MyComponent {
  @Prop() cccd=sessionStorage.getItem('cccd');
   ComponentWillLoad()
   {
   console.log('Submitted Successfully!');
  fetch('http://powerbooks.in/powerapi/api/PBXMLGoDown/GetAllPBXMLGoDown?cccd=FIT00000')
   .then(res => {
     return res.json();
   }).then(data=>{
       console.log(data);
      if(data.length > 0){
      var temp = "";
         data.forEach((u)=>{
           temp +="<tr>";
           temp +="<td><a href=#>"+u.GODOWN+"</a></td>";
          //  temp +="<td>"+u.EXCISEREGISTRATIONTYPE+"</td>";
          //  temp +="<td>"+u.EXCISERANGEADDRESS+"</td>";
          //  temp +="<td>"+u.PINCODE+"</td>";  
          //  temp +="<td>"+u.PHONENUMBER+"</td>";
           temp +="<td>"+u.ISINTERNAL+"</td>";
           temp +="<td>"+u.ISEXTERNAL+"</td></tr>";      
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
    
    <center><p><h3><b>GODOWN </b></h3></p>
   
   
    </center>
    <div class="container" >

</div>
  </div>
</div>;
}
}