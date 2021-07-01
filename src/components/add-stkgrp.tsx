import { Component,  h } from '@stencil/core';


@Component({
  tag: 'add-stkgrp',
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
     ADD ITEM
    </div>
    <div class="form">
       <div class="inputfield">
          <label> Item Group </label>
          <input type="text" class="input" placeholder="Group Name"/>
       </div>  
        <div class="inputfield">
          <label>Under</label>
          <div class="custom_select">
            <select>
            <option value="primary">Primary</option>
          <option value="Bank OS A/c">Bank OD A/c</option>
          <option value="Branch/divisions">Branch/Divisions</option>
          <option value="Capital Account">Capital Account</option>
          
     </select>
          </div>
       </div>  
       
      <div class="inputfield">
          <label>Should Quantities of Item be Added</label>
          <fieldset class="input">
           <label >Yes<input type="radio" value="value1" name="group1"/>
    <span class="checkmark"></span>
    </label>
     <label >No<input type="radio" value="value2" name="group1"/>
     </label>
     </fieldset>
 

       </div> 
        <div class="inputfield">
          <label>Set/Alter GST Details</label>
          <fieldset class="input">
           <label >Yes<input type="radio" value="value1" name="group2"/>
    <span class="checkmark"></span>
    </label>
     <label >No<input type="radio" value="value2" name="group2"/>
     </label>
     </fieldset>
            </div>      
       <div class="inputfield">
          <label>Set/Alter TDS Details</label>
          <fieldset class="input">
           <label >Yes<input type="radio" value="value1" name="group3"/>
    <span class="checkmark"></span>
    </label>
     <label >No<input type="radio" value="value2" name="group3"/>
     </label>
     </fieldset>
       </div> 
       <div class="inputfield">
          <label>Set/Alter TCS Details</label>
          <fieldset class="input">
           <label >Yes<input type="radio" value="value1" name="group4"/>
    <span class="checkmark"></span>
    </label>
     <label >No<input type="radio" value="value2" name="group4"/>
     </label>
     </fieldset>
       </div> 
       <div class="inputfield">
          <label>Set/Alter VAT Details</label>
          <fieldset class="input">
           <label >Yes<input type="radio" value="value1" name="group5"/>
    <span class="checkmark"></span>
    </label>
     <label >No<input type="radio" value="value2" name="group5"/>
     </label>
     </fieldset>
       </div> 
      <div class="inputfield">
        <input type="submit" value="Save" class="btn"/>
        <input type="submit" value="Cancel" class="btn"/>
        <input type="submit" value="Delete" class="btn"/>
        <input type="submit" value="Configure" class="btn"/>
      </div>
     
       
    </div>
</div>
    
 ] ;
  }
}


 