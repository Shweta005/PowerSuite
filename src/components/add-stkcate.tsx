import { Component,  h } from '@stencil/core';


@Component({
  tag: 'add-stkcat',
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
     ADD CATEGORY
    </div>
    <div class="form">
       <div class="inputfield">
          <label>Name:</label>
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
     </select>
          </div>
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


 