import { Component,  h } from '@stencil/core';


@Component({
  tag: 'add-uom',
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
     UNIT CREATION
    </div>
    <div class="form">
    <div class="inputfield">
          <label>Types Of Units</label>
          <div class="custom_select">
            <select>
            <option value="Select">Select</option>
              <option value="Simple">Simple</option>
              <option value="Compound">Compound</option>
            </select>
          </div>
       </div>  
       <div class="inputfield">
          <label>Symbol</label>
          <input type="text" class="input" placeholder="Symbol"/>
       </div>  
       <div class="inputfield">
          <label>Formal Name</label>
          <input type="text" class="input" placeholder="Formal Name"/>
       </div> 
        <div class="inputfield">
          <label>Unit Quantity Code(UQC)</label>
          <div class="custom_select">
            <select>
            <option value="NA">Not Applicable</option>
          <option value="BB">BAG-BAGS</option>
          <option value="BALE">BAL-BALE</option>
          <option value="BUN">BDL-BUNDLES</option>
          <option value="BKL">BKL-BUCKLES</option>
          <option value="BOU">BOU-BILLION OF UNITS</option>
          <option value="BOX">BOX-BOX</option>
          <option value="BTL">BTL-BOTTLES</option>
          <option value="BUN">BUN-BUNCHES</option>
          <option value="CAN">CAN-CANS</option>
          <option value="CBM">CBM-CUBIC METERES</option>
          <option value="CCM">CCM-CUBIC CENTIMETERS</option>
          <option value="CMS">CMS-CENTIMTERS</option>
          <option value="CTN">CTN-CARTONS</option>
          <option value="DOZ">DOZ-DOZENS</option>
          <option value="DRM">DRM-DRUMS</option>
          <option value="GGK">GGK-GREAT GROSS</option>
          <option value="GMS">GMS-GRAMS</option>
          <option value="GRS">GRS-GROSS</option> 
          <option value="GYD">GYD-GROSS YARDS</option>
          <option value="Sales Account">KGS-KILOGRAMS</option>
          <option value="Secured Loans">KLR-KILOLETER</option>
          <option value="Stock-in-Hands">KME-KILOMETER</option>
          <option value="Sundry Creditors">MLT-MILILITER</option>
          <option value="Sundry Debtors">MTR-METER</option>
          <option value="Suspense Account">MTS-METRIC TON</option>
          <option value="Unsecured Loans">NOS-NUMBERS</option>
          <option value="Unsecured Loans">OTH-OTHERS</option>
          <option value="Unsecured Loans">PAC-PACKS</option>
          <option value="Unsecured Loans">PCS-PIECES</option>
          <option value="Unsecured Loans">PRS-PAIRS</option>
          <option value="Unsecured Loans">QTL-QUINTAL</option>
          <option value="Unsecured Loans">ROL-ROLLS</option>
          <option value="Unsecured Loans">SET-SETS</option>
          <option value="Unsecured Loans">SQF-SQUARE FEET</option>
          <option value="Unsecured Loans">SQM-SQUARE METERS</option>
          <option value="Unsecured Loans">SQY-SQUARE YARDS</option>
          <option value="Unsecured Loans">TBS-TABLETS</option>
          <option value="Unsecured Loans">TGM-TEN GROSS</option>
          <option value="Unsecured Loans">THD-THOUSAND</option>
          <option value="Unsecured Loans">TON-TONNES</option>
          <option value="Unsecured Loans">TUB-TUBES</option>
          <option value="Unsecured Loans">TUGS-US GALLONS</option>
          <option value="Unsecured Loans">UNT-UNITS</option>
          <option value="Unsecured Loans">YDS-YARDS</option>
     </select>
          </div>
       </div>  
       <div class="inputfield">
          <label>Number Of Decimal Places</label>
          <input type="text" class="input" placeholder="Number Of Decimal Places"/>
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


 