import { Component,h } from '@stencil/core';


@Component({
  tag: 'schedule-task',
  styleUrl: 'add-form.css',
  shadow: true
})
export class MyComponent {
  

 
	// @Prop() a2="get-activities.html";

 

  render() {
    return[
      <div class="container">
      <div class="wrapper">
       <div class="title">  ADD TASK </div>
       
    <div class="form">
        <div class="inputfield">
          <label>Task Owner</label>
          <input type="text" class="input" placeholder="Task Owner"/>
       </div>  
       <div class="inputfield">
          <label>*Subject</label>
          <input type="text" class="input" placeholder="Subject"/>
       </div>  
       <div class="inputfield">
           <label htmlFor="Due Date">Due Date</label>
 			 <input type="date"class="input"></input>
            </div>
        <div class="inputfield">
        <div class="custom_select1">
            <select >
				<option value="Contact">Contact</option>
				<option value="Lead">Lead</option>
			</select>&nbsp;&nbsp;</div>&nbsp;&nbsp;
          <div class="custom_select">
            <select>
            <option value="Select">Select</option>
              <option value="priya  naidu">priya  naidu</option>
              <option value="PRIYA  Naidu">PRIYA  Naidu</option>
              <option value="PRIYA  Naidu">PRIYA  Naidu</option>
            </select>
          </div>
          </div> 
          <div class="inputfield">
          <label>Related To</label>
          <div class="custom_select">
            <select>
              <option value="Select">Select</option>
              <option value="Account">Account</option>
              <option value="Campaign">Campaign</option>
              <option value="Case">Case</option>
              <option value="Contact">Contact</option>
			        <option value="Lead">Lead</option>
			        <option value="Opportunity">Opportunity</option>
			        <option value="Potential">Potential</option>
			        <option value="Product">Product</option>
            </select>
          </div>
          <div class="custom_select">
           <select>
           <option value="Select">Select</option>
          <option value="B Labs">B Labs</option>
          <option value="FF">FF</option>
          <option value="Manpower">Manpower</option>
          <option value="SWATI  CO.">SWATI  CO.</option>
          <option value="Swati Traders">Swati Traders</option>
     </select>
          </div>
       </div> 
       <div class="inputfield">
          <label>Status</label>
          <div class="custom_select">
            <select>
            <option value="Select">Select</option>
            <option value="Active">Active</option>
            <option value="Deactive">Deactive</option>
            </select>
          </div>
       </div>  
       <div class="inputfield">
          <label>Priority</label>
          <div class="custom_select">
            <select>
            <option value="Select">Select</option>
            <option value="High">High</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            </select>
          </div>
       </div>  
       <div class="inputfield">
          <label>Recurring Activity</label>
          <input type="checkbox"/>
       </div>
       <div class="inputfield">
          <label>Send Notification Email</label>
          <input type="checkbox"/>
       </div>
      <div class="inputfield">
          <label>Description</label>
          <textarea class="input"></textarea>
       </div> 
       <div class="inputfield">
        <input type="submit" value="Save" class="btn"/>
        <input type="submit" value="Cancel" class="btn"/>
       
      </div>
      {/* <div><a href={getAssetPath(`./assets/${this.a2}`)}>back</a></div> */}
       
    </div>
</div>
</div>   
 ] ;
  }
}