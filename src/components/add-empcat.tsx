import { Component,h } from '@stencil/core';


@Component({
  tag: 'add-empcat',
  styleUrl: 'add-form.css',
  // assetsDirs:['assets'],
  shadow: true
})
export class MyComponent {
  // @Prop() grp="groups.jpg";

  save(){
 alert("Data Saved");
}

  render() {
    return[
      <div class="container">
      <div class="wrapper">
       <div class="title">
       {/* <div id="main">
         <img src={getAssetPath(`./assets/${this.grp}`) } height="50" width="50"/> 
        </div> */}
     ADD EMPLOYEE CATEGORY
    </div>
    <div class="form">
       <div class="inputfield">
          <label>Name:</label>
          <input type="text" class="input" placeholder="Name"/>
       </div>  
       
       
      <div class="inputfield">
          <label>Allocate Revenue Items:</label>
          <fieldset class="input">
           <label >Yes<input type="radio" value="value1" name="group1"/>
    <span class="checkmark"></span>
    </label>
     <label >No<input type="radio" value="value2" name="group1"/>
     </label>
     </fieldset>
 </div>
 <div class="inputfield">
          <label>Allocate Non-Revenue Items:</label>
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
        <input type="submit" value="Configure" class="btn"/>
      </div>
      </div>
</div>
</div>   
 ] ;
  }
}


 