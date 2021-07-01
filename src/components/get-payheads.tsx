import { Component,Prop, h} from '@stencil/core';


@Component({
  tag: 'get-payheads',
  styleUrl: 'my-component.css',

  shadow: true
})
export class MyComponent {
  @Prop() cccd=sessionStorage.getItem('cccd');
   ComponentWillLoad()
   {
   console.log('Submitted Successfully! Getall Groups');

   const url='http://www.powerbooks.in/powerapi/api/PBXMLPayHead/GetAllPBXMLPayHead?cccD='+this.cccd;
  fetch(url)
   .then(res => {
     return res.json();
   }).then(data=>{
       console.log(data);
      if(data.length > 0){
      var temp = "";
         data.forEach((u)=>{
           temp +="<tr>";
          //  replacement line <a href='GroupCreate1.aspx?cccd=" + group.cccd + "&GROUP=" + group.GROUP + "&mode=edit"+"'> " + group.GROUP + "</a>
         //  temp +="<td><a href=edit-grp.html?cccd=" +u.cccd+"&AccNo=" +u.AccNo+   "&mode=edit>" +u.GROUP+ "</a></td>";
           temp +="<td><a href=edit-payheads.html?cccd=" +u.cccd+"&PayHeadId=" +u.PayHeadId+ "&mode=edit>" +u.NAME+ "</a></td>";

           temp +="<td>"+u.PAYTYPE+"</td>";
           temp +="<td>"+u.CALCULATIONTYPE+"</td>";
           temp +="<td>"+u.CALCULATIONPERIOD+"</td>";
           temp +="<td>"+u.PARENT+"</td></tr>";        
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
    
    <center><p><h3><b> PAY HEADS</b></h3></p></center>
    <div class="container" >
{/* <table class="table">

   
<tr>
      <th>Name</th>
      <th>PayHead</th>
      <th>CalType</th>
     <th>	CalPeriod</th>
     <th>Under</th>
    </tr>
  <tbody id="data">
  </tbody> 
</table> */}
</div>
  </div>
</div>;
}
}