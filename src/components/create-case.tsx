import { Component,h } from '@stencil/core';


@Component({
  tag: 'create-case',
  styleUrl: 'add-form.css',
  // assetsDirs:['assets'],
  shadow: true
})
export class MyComponent {
  // @Prop() grp="groups.jpg";

 

  render() {
    return[
      <div class="container">
      <div class="wrapper">
        <div class="title">CREATE CASE</div>
        <div class="form">
        <div class="inputfield">
        <label>Case owner</label>
        <input type="text" class="input" placeholder="Case owner"/>
     </div> 

     <div class="inputfield">
        <label>Product name</label>
        <div class="custom_select">
          <select>
          <option>--Select--</option>
        <option value="Building Material">Building Material</option>
        <option value="Purchased">Purchased</option>
        </select>
        </div>
     </div>  

     <div class="inputfield">
        <label>Type</label>
        <div class="custom_select">
          <select>
          <option>--Select--</option>
        <option value="Feature request">Feature request</option>
        <option value="Problem">Problem</option>
        <option value="Question">Question</option>
        </select>
        </div>
     </div> 

     <div class="inputfield">
        <label>Status</label>
        <div class="custom_select">
          <select>
          <option>--Select--</option>
        <option value="Closed">Closed</option>
        <option value="Escalated">Escalated</option>
        <option value="New">New</option>
        <option value="On Hold">On Hold</option>
        </select>
        </div>
     </div> 

     <div class="inputfield">
        <label>Case Origin</label>
        <div class="custom_select">
          <select>
          <option>--Select--</option>
        <option value="Email">Email</option>
        <option value="Phone">Phone</option>
        <option value="Web">Web</option>
         </select>
        </div>
     </div> 

     <div class="inputfield">
        <label>Priority</label>
        <div class="custom_select">
          <select>
          <option>--Select--</option>
        <option value="High">High</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
         </select>
        </div>
     </div> 

     <div class="inputfield">
        <label>Account Name</label>
        <div class="custom_select">
          <select>
          <option>--Select--</option>
        <option value="B Labs">B Labs</option>
        <option value="FF">FF</option>
        <option value="Manpower">Manpower</option>
        <option value="SWATI CO">SWATI CO</option>
        <option value="Swati Traders">Swati Traders</option>
         </select>
        </div>
     </div> 

     <div class="inputfield">
        <label>Case Reason</label>
        <div class="custom_select">
          <select>
          <option>--Select--</option>
        <option value="Complex Functionality">Complex Functionality</option>
        <option value="Existing Problem">Existing Problem</option>
        <option value="Instructions not clear">Instructions not clear</option>
        <option value="New Problem">New Problem</option>
        <option value="User did not attend any training">User did not attend any training</option>
         </select>
        </div>
     </div> 


     <div class="inputfield">
        <label>Reported By</label>
        <input type="text" class="input" placeholder="Reported By"/>
     </div> 
     

     <div class="inputfield">
        <label>Related to</label>
        <div class="custom_select">
          <select>
          <option>--Select--</option>
        <option value="Priya naidu">Priya naidu</option>
        <option value="PRIYA NAIDU">PRIYA NAIDU</option>
        <option value="PRIYA NAIDU">PRIYA NAIDU</option>
         </select>
        </div>
     </div> 

     <div class="inputfield">
        <label>Phone</label>
        <input type="text" class="input" placeholder="Phone"/>
     </div> 

     <div class="inputfield">
        <label>Opportunity Name</label>
        <div class="custom_select">
          <select>
          <option>--Select--</option>
        <option value="abcd">abcd</option>
        <option value="Priya">Priya</option>
        <option value="abc">abc</option>
        <option value="bala">bala</option>
         </select>
        </div>
     </div> 

     <div class="inputfield">
        <label>Email</label>
        <input type="text" class="input" placeholder="Email"/>
     </div> 

     <div class="inputfield">
        <label>Description</label>
        <input type="text" class="input" placeholder="Description"/>
        
     </div> 

     <div class="inputfield">
        <label>Internal Comments</label>
        <input type="text" class="input" placeholder="Internal Comments"/>
     </div> 

     <div class="inputfield">
      <input type="submit" value="Save" class="btn"/>
      <input type="submit" value="Cancel" class="btn"/>
      <input type="submit" value="Delete" class="btn"/>
      <input type="submit" value="OK" class="btn"/>
    </div>
    



          </div>
      </div>
    </div>
  ];
}
}
