import { Component,  h } from '@stencil/core';


@Component({
  tag: 'add-empgrp',
  styleUrl: 'add-form.css',
  shadow: true
})
export class MyComponent {
save(){
 alert("Data Saved");
}

  render() {
    return[
      <div class="wrapper">
       <div class="title">
     ADD EMPLOYEE GROUP
    </div>
    <div class="form">
        
        <div class="inputfield">
          <label>Category:</label>
          <div class="custom_select">
            <select>
            <option value="Select">Select</option>
              <option value="Asset">Assets</option>
              <option value="Expenses">Expenses</option>
              <option value="Income">Income</option>
              <option value="Liabilities">Liabilities</option>
     </select>
          </div>
       </div>  
       <div class="inputfield">
          <label>Group Name:</label>
          <input type="text" class="input" placeholder="Group Name"/>
       </div> 
       <div class="inputfield">
          <label>Under:</label>
          <div class="custom_select">
            <select>
            <option value="Select">Select</option>
              <option value="Asset">Assets</option>
              <option value="Expenses">Expenses</option>
              <option value="Income">Income</option>
              <option value="Liabilities">Liabilities</option>
            </select>
          </div>
       </div>  
      <div class="inputfield">
          <label>Define Salary Details</label>
          <fieldset class="input">
           <label >Yes<input type="radio" value="value1" name="group1"/>
    <span class="checkmark"></span>
    </label>
     <label >No<input type="radio" value="value2" name="group1"/>
     </label>
     </fieldset>
       </div> 
        
     
      <div class="inputfield">
        <input type="submit" value="Save" class="btn"/>
        <input type="submit" value="Cancel" class="btn"/>
      </div>
     
       
    </div>
</div>
    
 ] ;
  }
}


 