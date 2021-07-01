import { Component, h ,Prop} from '@stencil/core';


@Component({
  tag: 'get-emp',
  styleUrl: 'my-component.css',
  
  shadow: true
})
export class MyComponent {
  @Prop() cccd=sessionStorage.getItem('cccd');
   ComponentWillLoad()
   {
   console.log('Submitted Successfully!');
   const url='http://powerbooks.in/powerapi/api/PBXMLEmployee/GetAllPBXMLEmployee?cccd='+this.cccd;
  fetch(url)
   .then(res => {
     return res.json();
   }).then(data=>{
       console.log(data);
      if(data.length > 0){
      var temp = "";
         data.forEach((u)=>{
           temp +="<tr>";
           temp +="<td><a href=#>"+u.NAME+"</a></td>";
           temp +="<td>"+u.PARENT+"</td>";
        
           temp +="<td>"+u.DESIGNATION+"</td>";
         
           temp +="</tr>";      
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
    
    <center><p><h3><b>EMPLOYEE </b></h3></p>
   
   
    </center>
    <div class="container" >

</div>
  </div>
</div>;
}
}