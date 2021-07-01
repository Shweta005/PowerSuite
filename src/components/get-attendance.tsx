import { Component, h ,Prop} from '@stencil/core';


@Component({
  tag: 'get-attendance',
  styleUrl: 'my-component.css',
  
  shadow: true
})
export class MyComponent {
  @Prop() cccd=sessionStorage.getItem('cccd');
   ComponentWillLoad()
   {
   console.log('Submitted Successfully!');
   const url='http://powerbooks.in/powerapi/api/PBXMLAttendence/GetAllPBXMLAttendence?cccd=HBANSODE'+this.cccd;
  fetch(url)
   .then(res => {
     return res.json();
   }).then(data=>{
       console.log(data);
      if(data.length > 0){
      var temp = "";
         data.forEach((u)=>{
           temp +="<tr>";
           temp +="<td><a href=#>"+u.ATTENDANCETYPE+"</a></td>";
          //  temp +="<td>"+u.PARENT+"</td>";
        
           temp +="<td>"+u.ATTENDANCEPRODUCTIONTYPE+"</td>";
          //  temp +="<td>"+u.ATTENDANCEPERIOD+"</td>";
          //  temp +="<td>"+u.BASEUNITS+"</td>";
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
    
    <center><p><h3><b>ATTENDANCE/PRODUCTION  </b></h3></p>
   
   
    </center>
    <div class="container" >

</div>
  </div>
</div>;
}
}