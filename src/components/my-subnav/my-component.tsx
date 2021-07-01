import { Component, Prop, h ,getAssetPath} from '@stencil/core';


@Component({
  tag: 'my-subnav',
  styleUrl: 'my-component.css',
  assetsDirs:['assets'],
  shadow: true
})
export class MyComponent {
  // @Prop() combonm: string;
  @Prop() create =" ";
  @Prop()  list =" ";

  render() {
    return[
      
    <div class="header">
    <div class="header-right">
      <a class="active" href="#home">Home</a>
      <a href={getAssetPath(`./assets/${this.create}`)}>Create</a>
      <a href="#about">Print</a>
      <a href="#about">Export</a>
      <a href={getAssetPath(`./assets/${this.list}`)}>List</a>
      {/* <a href="#about"><select class="custom-select" name={this.combonm}>
  <option>Assets</option>
  <option>Income</option>
<option>Liabilities</option>
<option>Expenses</option>
</select></a> */}
    </div>
  </div> ];
  }
}
