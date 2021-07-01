import { Component,h } from '@stencil/core';


@Component({
  tag: 'add-grp',
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
     ADD GROUP
    </div>
    <div class="form">
       <div class="inputfield">
          <label>Group Name</label>
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
          <option value="Cash-in-Hand">Cash-in-Hand</option>
          <option value="Current Assets">Current Assets</option>
          <option value="Current Liabilities">Current Liabilities</option>
          <option value="Deposits(Assets)">Deposits(Assets)</option>
          <option value="Duties Taxes">Duties Taxes</option>
          <option value="Fixed Assets">Fixed Assets</option>
          <option value="Indirect Expenses">Indirect Expenses</option>
          <option value="Indirect Incomes">Indirect Incomes</option>
          <option value="Investments">Investments</option>
          <option value="Loans Advances(Asset)">Loans Advances(Asset)</option>
          <option value="Loans(Liability)">Loans(Liability)</option>
          <option value="Misc.Expenses(Asset)">Misc.Expenses(Asset)</option>
          <option value="Priyaa">Priyaa</option>
          <option value="Provisions">Provisions</option>
          <option value="Purchase Accounts">Purchase Accounts</option> 
          <option value="Reserve Surplus">Reserve Surplus</option>
          <option value="Sales Account">Sales Account</option>
          <option value="Secured Loans">Secured Loans</option>
          <option value="Stock-in-Hands">Stock-in-Hands</option>
          <option value="Sundry Creditors">Sundry Creditors</option>
          <option value="Sundry Debtors">Sundry Debtors</option>
          <option value="Suspense Account">Suspense Account</option>
          <option value="Unsecured Loans">Unsecured Loans</option>
     </select>
          </div>
       </div>  
       <div class="inputfield">
          <label>Nature Of Group</label>
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
          <label>Group behaves like a Sub Ledger</label>
          <fieldset class="input">
           <label >Yes<input type="radio" value="value1" name="group1"/>
    <span class="checkmark"></span>
    </label>
     <label >No<input type="radio" value="value2" name="group1"/>
     </label>
     </fieldset>
 

       </div> 
        <div class="inputfield">
          <label>Net Debit / Credit Balances for Reporting</label>
          <fieldset class="input">
           <label >Yes<input type="radio" value="value1" name="group2"/>
    <span class="checkmark"></span>
    </label>
     <label >No<input type="radio" value="value2" name="group2"/>
     </label>
     </fieldset>
            </div> 
        <div class="inputfield">
          <label>Used for Calculation (eg. Taxes, Discounts)
(For Sales Invoice Entry)</label>
<fieldset class="input">
           <label >Yes<input type="radio" value="value1" name="group3"/>
    <span class="checkmark"></span>
    </label>
     <label >No<input type="radio" value="value2" name="group3"/>
     </label>
     </fieldset>
       </div> 
      <div class="inputfield">
          <label>Method to Allocate when used in Purchase Invoice</label>
          <div class="custom_select">
            <select>
           
              <option value="NA">Not Applicable</option>
              <option value="AQ">Appropriate By Qty</option>
              <option value="AV">Appropriate By Value</option>
           
            </select>
          </div>
       </div> 
      <div class="inputfield">
          <label>Set/Alter GST Details</label>
          <fieldset class="input">
           <label >Yes<input type="radio" value="value1" name="group4"/>
    <span class="checkmark"></span>
    </label>
     <label >No<input type="radio" value="value2" name="group4"/>
     </label>
     </fieldset>
       </div> 
       <div class="inputfield">
          <label>Set/Alter Service Tax Details</label>
          <fieldset class="input">
           <label >Yes<input type="radio" value="value1" name="group5"/>
    <span class="checkmark"></span>
    </label>
     <label >No<input type="radio" value="value2" name="group5"/>
     </label>
     </fieldset>
       </div> 
       <div class="inputfield">
          <label>Set/Alter TDS Details</label>
          <fieldset class="input">
           <label >Yes<input type="radio" value="value1" name="group6"/>
    <span class="checkmark"></span>
    </label>
     <label >No<input type="radio" value="value2" name="group6"/>
     </label>
     </fieldset>
       </div> 
       <div class="inputfield">
          <label>Set/Alter TCS Details</label>
          <fieldset class="input">
           <label >Yes<input type="radio" value="value1" name="group7"/>
    <span class="checkmark"></span>
    </label>
     <label >No<input type="radio" value="value2" name="group7"/>
     </label>
     </fieldset>
       </div> 
       <div class="inputfield">
          <label>Set/Alter VAT Details</label>
          <fieldset class="input">
           <label >Yes<input type="radio" value="value1" name="group8"/>
    <span class="checkmark"></span>
    </label>
     <label >No<input type="radio" value="value2" name="group8"/>
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


 