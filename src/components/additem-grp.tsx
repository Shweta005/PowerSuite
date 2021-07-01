import { Component,h } from '@stencil/core';


@Component({
  tag: 'additem-grp',
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
       <div class="title">  ADD ITEM </div>
       
    <div class="form">
        <div class="inputfield">
          <label>Item Group</label>
          <input type="text" class="input" placeholder="Event Owner"/>
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
 ] ;
  }
}