import { Component,  h } from '@stencil/core';


@Component({
  tag: 'create-para',
  styleUrl: 'add-form.css',
  shadow: true
})
export class MyComponent {
  

  render() {
    return [
      <div class="container">
      <div class="wrapper">
       <div class="title"> ADD PARAMETER</div>
       <div class="form">
       <div class="inputfield">
          <label>Code:</label>
          <input type="text" class="input" placeholder="Code:"/>
       </div>
       <div class="inputfield">
          <label>Description:</label>
          <input type="text" class="input" placeholder="Description:"/>
       </div>
       <div>
       <div class="inputfield">
          <label>Status:</label>
          <div class="custom_select">
          <select>
            <option value="primary">Select</option>
          <option value="Bank OS A/c">Active</option>
          <option value="Branch/divisions">Deactive</option>
          </select>
          </div>
          </div>
          <div class="inputfield">
        <input type="submit" value=" Insert Save" class="btn"/>
        <input type="submit" value="Cancel" class="btn"/>
        </div>
          </div>

       </div>
       </div>
       </div>
    ];
  }
}
