import { Component, h } from '@stencil/core';


@Component({
  tag: 'add-item',
  styleUrl: 'add-form.css',
  shadow: true
})
export class MyComponent {
  

  render() {
    return[
      <div class="container">
      <div class="wrapper">
       <div class="title"> ADD ITEM GROUP</div>
       <div class="form">
       <div class="inputfield">
          <label>Item Group</label>
          <input type="text" class="input" placeholder="Item Group"/>
       </div>
       <div class="inputfield">
        <input type="submit" value="Save" class="btn"/>
        <input type="submit" value="Cancel" class="btn"/>
        </div>
        </div>
        </div>
        </div>
      
      
      
      
      
      
    ];
  }
}
