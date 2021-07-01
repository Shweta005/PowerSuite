import { Component, h} from '@stencil/core';


@Component({
  tag: 'get-singlepayslip',
  styleUrl: 'my-component.css',
  
  shadow: true
})
export class MyComponent {
 
   ComponentWillLoad()
   {
   console.log('Submitted Successfully!');
  fetch('http://powerbooks.in/powerapi/api/PBXMLVPayroll/GetAllSinglePaySlipEarnings?cccd=hbansode2018&empno=3')
   .then(res => {
     return res.json();
   }).then(data=>{
       console.log(data);
      if(data.length > 0){
      var temp = "";
         data.forEach((u)=>{
           temp +="<tr>";
           temp +="<td><a href=# >" +u.cccd+ "</a></td>";
           temp +="<td>"+u.EmpNo+"</td>";
           temp +="<td>"+u.PAYHEADNAME+"</td>";
          // temp +="<td>"+u.PAYHEADAMOUNTt+"</td>";       
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
    
    <center><p><h3><b> SINGLE PAY SLIP</b></h3></p></center>
    <div class="container" >
 {/* <table class="table">

    <tr>
      <th>PARENT</th>
      <th>EMP_NO.</th>
      <th>LIST_OF_PAYHEAD</th>
      <th>PAYHEAD_AMT</th>
     
    </tr>
  <tbody id="data">
  </tbody> 
</table>  */}
</div>
  </div>
</div>;
}
}