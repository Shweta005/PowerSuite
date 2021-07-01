import { Component,  h } from '@stencil/core';


@Component({
  tag: 'add-user',
  styleUrl: 'add-form.css',
  shadow: true
})
export class MyComponent {
  

  render() {
    return [
      <div class="container">
      <div class="wrapper">
       <div class="title"> ADD USER</div>
       <div class="form">
       <div class="inputfield">
          <label>USERNAME:</label>
          <input type="text" class="input" placeholder="username:"/>
       </div>
       <div class="inputfield">
          <label>Password:</label>
          <input type="text" class="input" placeholder="password:"/>
       </div>
       <div class="inputfield">
          <label>User FullName:</label>
          <input type="text" class="input" placeholder="user fullname:"/>
       </div>
       <div>
       <div class="inputfield">
          <label>UserRole:</label>
          <div class="custom_select">
          <select>
            <option value="primary">Administrator</option>
          <option value="Bank OS A/c">Area Sales Manager</option>
          <option value="Branch/divisions">Customer</option>
          <option value="Bank OS A/c">Product Manager</option>
          <option value="Branch/divisions">Supplier</option>
          <option value="Bank OS A/c">Zonal Sales Manager</option>
          </select>
          </div>
          </div>
          <div class="inputfield">
          <label>User EmailId:</label>
          <input type="text" class="input" placeholder="User EmailId:"/>
       </div>
       <div class="inputfield">
          <label>Company Provided:</label>
          <input type="text" class="input" placeholder="Company Provided:"/>
       </div>
          <div class="inputfield">
          <label>User Address1:</label>
          <input type="text" class="input" placeholder="User Address1:"/>
       </div>
       <div class="inputfield">
          <label>User Address2:</label>
          <input type="text" class="input" placeholder="User Address2:"/>
       </div>
       <div class="inputfield">
          <label>Head Quarter:</label>
          <div class="custom_select">
          <select>
            <option value="primary">Nashik</option>
          <option value="Bank OS A/c">Panvel</option>
          <option value="Branch/divisions">Pune</option>
          <option value="Bank OS A/c">Thane</option>
          </select>
          </div>
          </div>
          <div class="inputfield">
          <label>Area:</label>
          <div class="custom_select">
          <select>
            <option value="primary">Pune</option>  
            </select>
          </div>
          </div>
          <div class="inputfield">
          <label>Region:</label>
          <div class="custom_select">
          <select>
            <option value="primary">Navi Mumbai</option>  
            </select>
          </div>
          </div>
          <div class="inputfield">
          <label>Zone:</label>
          <div class="custom_select">
          <select>
            <option value="primary">Central Zone</option>  
            </select>
          </div>
          </div>
          <div class="inputfield">
          <label>City:</label>
          <div class="custom_select">
          <select>
            <option value="primary">Mumbai</option>  
            </select>
          </div>
          </div>
          <div class="inputfield">
          <label>District:</label>
          <div class="custom_select">
          <select>
            <option value="primary">Kolhapur</option>
          <option value="Bank OS A/c">Mumbai City</option>
          <option value="Branch/divisions">Nagpur</option>
          </select>
          </div>
          </div>
          <div class="inputfield">
          <label>State:</label>
          <div class="custom_select">
          <select>
            <option value="primary">Gujrat</option>
          <option value="Bank OS A/c">Kerala</option>
          <option value="Branch/divisions">Maharashtra</option>
          <option value="Bank OS A/c">Maharashtra</option>
          <option value="Branch/divisions">Punjab</option>
          <option value="Bank OS A/c">Rajasthan</option>
          </select>
          </div>
          </div>
          <div class="inputfield">
          <label>Country:</label>
          <div class="custom_select">
          <select>
            <option value="primary">Australia</option>
          <option value="Bank OS A/c">Belgium</option>
          <option value="Branch/divisions">Bhutan</option>
          <option value="Bank OS A/c">India</option>
          <option value="Branch/divisions">India</option>
          <option value="Bank OS A/c">Israel</option>
          <option value="Bank OS A/c">Singapore</option>
          <option value="Branch/divisions">United Kingdom</option>
          <option value="Bank OS A/c">United State of America</option>
          </select>
          </div>
          </div>
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
          <fieldset class="input">
          <div class="title"> ADDITIONAL INFORMATION</div>
       <div class="form">
       <div class="inputfield">
          <label>Mobile1:</label>
          <input type="text" class="input" placeholder="Mobile1:"/>
       </div>
       <div class="inputfield">
          <label>Mobile2:</label>
          <input type="text" class="input" placeholder="Mobile2:"/>
       </div>
       <div class="inputfield">
          <label>Telephone1:</label>
          <input type="text" class="input" placeholder="Telephone1:"/>
       </div>
       <div class="inputfield">
          <label>Telephone2:</label>
          <input type="text" class="input" placeholder="Telephone2:"/>
       </div>
       </div>
       </fieldset>
       </div>
       <div class="inputfield">
        <input type="submit" value="Save" class="btn"/>
        <input type="submit" value="Cancel" class="btn"/>
        </div>
    </div>
    </div>
       </div>
       </div>
    ];
  }
}
