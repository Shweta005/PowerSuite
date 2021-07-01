import { Component,  h } from '@stencil/core';


@Component({
  tag: 'add-curr',
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
     ADD CURRENCIES
    </div>
    <div class="form">
       <div class="inputfield">
          <label>Name</label>
          <input type="text" class="input" placeholder="Name"/>
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
          <label>Number Of Decimal Places</label>
          <input type="text" class="input" placeholder="Number Of Decimal Places"/>
       </div>        
      <div class="inputfield">
          <label>Show Amount In Millions</label>
          <fieldset class="input">
           <label >Yes<input type="radio" value="value1" name="group1"/>
    <span class="checkmark"></span>
    </label>
     <label >No<input type="radio" value="value2" name="group1"/>
     </label>
     </fieldset>
 

       </div> 
        <div class="inputfield">
          <label>Is Symbol SUFFIXED To Amounts</label>
          <fieldset class="input">
           <label >Yes<input type="radio" value="value1" name="group2"/>
    <span class="checkmark"></span>
    </label>
     <label >No<input type="radio" value="value2" name="group2"/>
     </label>
     </fieldset>
            </div> 
            <div class="inputfield">
          <label>Put a SPACE Between Amount and Symbol</label>
          <fieldset class="input">
           <label >Yes<input type="radio" value="value1" name="group3"/>
    <span class="checkmark"></span>
    </label>
     <label >No<input type="radio" value="value2" name="group3"/>
     </label>
     </fieldset>
            </div> 
     


            <div class="inputfield">
          <label>Symbol For Decimal Portion Of Amount</label>
          <input type="text" class="input" placeholder=""/>
       </div>    
       <div class="inputfield">
          <label>Decimal Places For Printing Amounts in Words</label>
          <input type="text" class="input" placeholder=""/>
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


 