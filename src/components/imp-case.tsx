import { Component,h ,Prop} from '@stencil/core';


@Component({
  tag: 'imp-case',
  styleUrl: 'import.css',
  // assetsDirs:['assets'],
  shadow: true
})
export class MyComponent {
   @Prop() Name:string;

 

  render() {
    return[
      <div class="container">
      <div class="wrapper">
       <div class="title"> Import {this.Name} </div>
       
    <div class="form">
        <table>
            <tr>
                <td>
                    <table>
                        <tr>
                            <td>
                            <div class="inputfield">
          <label>Select a file to upload</label></div>
          <div class="inputfield">
          <input type="file" class="input" name="FileUpload1" id="FileUpload1" /></div>
          <div class="inputfield">
          <label>[only .XLS and .XLSX format is supported]</label>
       </div>  
                            </td>
                        </tr>
                    </table>
                    </td>
                <td>

                  <div>
                <h3 class="abcd">Important things needs to consider while importing .XSL or .XLSX file…</h3><br />
        <ul><li>Excel file must contain 1<sup>st</sup> row as Column Header and these column headers must resemble to Column Headers.</li>  
        <li>Excel file size should not exceed more than 4mb.</li> </ul></div><br></br>
    
                </td>
            </tr>
        </table>
            
       {/* <div class="inputfield">
       <h3 color="Red">Important things needs to consider while importing .XSL or .XLSX file…</h3><br />
        <li>Excel file must contain 1<sup>st</sup> row as Column Header and these column headers must resemble to Column Headers.</li>
        
        <li>Excel file size should not exceed more than 4mb.</li>
       </div>   */}
        
      <div class="inputfield">
        <input type="submit" value="Import" class="btn"/>
        <input type="submit" value="Export" class="btn"/>
        <input type="submit" value="Cancel" class="btn"/>
      </div>  
    </div>
</div>
</div>   
 ] ;
  }
}