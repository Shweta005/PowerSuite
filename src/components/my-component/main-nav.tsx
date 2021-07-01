import { Component, Prop, h,getAssetPath } from '@stencil/core';


@Component({
  tag: 'my-component',
  styleUrl: 'erp-nav.css',
  assetsDirs:['assets'],
  shadow: true
})
export class MyComponent {
@Prop() cccd=sessionStorage.getItem('cccd');
@Prop() user=sessionStorage.getItem('uname');

   @Prop() img="Powersuite.png";
   @Prop() mainfile="main.html";
      /* <---------Masters Module---------------------------> */ 
  @Prop() gfile="groups.html";
  @Prop() ccfile="costc.html";
  @Prop() cfile="currency.html";
  @Prop() sgfile="stockgroup.html";
  @Prop() sifile="stockitems.html";
  @Prop() scfile="stockcateg.html";
  @Prop() gofile="godown.html";
  @Prop() umfile="munits.html";
  @Prop() ufile="unit.html";
  @Prop() tfile="tariff.html";
  @Prop() egfile="empgrp.html";
  @Prop() efile="employee.html";
  @Prop() atfile="attendance.html";
  @Prop() sfile="scenerio.html";
  @Prop() vfile="voucher.html";
  @Prop() lfile="ledger.html";
   @Prop() crfile="crm.html";
   @Prop() budfile="budget.html";
   @Prop() ecatfile="empcat.html";
@Prop() ccentfile="costcentre.html";
@Prop() plstkfile="get-priceliststkgrp.html"
@Prop() plstcatfile="get-priceliststkcat.html"
@Prop() payfile="get-payheads.html"
  /* <---------Finance Module---------------------------> */ 
  @Prop() ctfile="contra.html";
  @Prop() ptfile="payment.html";
  @Prop() rtfile="receipt.html";
  @Prop() jrfile="journal-voucher.html";
  @Prop() slfile="sales.html";
  @Prop() prfile="purchase.html";
/* <---------Order Module---------------------------> */
@Prop() sofile="salesorder.html";
@Prop() pofile="purchaseorder.html";
/* <---------Distribution Module---------------------------> */
@Prop() sjfile="stkjr.html";
// @Prop() mifile="mi.html";
@Prop() mofile="mo.html";
@Prop() msjfile="mstkjr.html";
/* <---------Payroll Module--------------------------> */
@Prop() pfile="get-payroll.html";
@Prop() spfile="get-singlepayslip.html";
@Prop() edfile="get-pemail.html";
/* <---------Display Module--------------------------> */
@Prop() dbfile="daybook.html";
/*---------------USer Module--------------------------->*/
@Prop() userfile="adduser.html";;
companyname() {
  console.log('Submitted Successfully!');
  
  const url ="http://www.powerbooks.in/PowerAPI/api/PBXCompany/GetPBXCompany?cccd="+this.cccd;
  fetch(url)
  .then(res => {
    return res.json();
  }).then(data=>{
      console.log(data);
      if(data.length > 0){
        var temp = "";
        data.forEach((u)=>{
          temp +="<tr>";
          temp +="<td>"+u.CCNM+"("+u.FinancialYrFrom+")</td>";
          // temp +="<td>("+u.FinancialYrFrom+")</td>";
        })
         document.getElementById("name").innerHTML=temp;
    
      }
  })
  .catch(err =>  {
    console.log(err);
  });
  }






  render() {
    return (
      <div >
        {/* <---------Image Div---------------------------> */}
        <div id="main">
        <center><label id="l1" htmlFor="welcome">Welcome</label>      <label id="l2" htmlFor="user">{this.user}</label>  <label id="l3"><a href="http://localhost:3333">[ Logout ]</a></label></center>
        {this.companyname()}
 
         <img src={getAssetPath(`./assets/${this.img}`) } height="50" width="200"/>
        
      
        </div>
       
     
          <nav id="menu">
        <label htmlFor="tm" id="toggle-menu">Navigation <span class="drop-icon">▾</span></label>
        <input type="checkbox" id="tm"/>
        <ul class="main-menu cf">
          <li><a href={getAssetPath(`./assets/${this.mainfile}`)} >Home</a></li> 
          {/* class="active" */}
          <li><a href="#">Master
              <span class="drop-icon">▾</span>
              <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm0">▾</label>
            </a>
            <input type="checkbox" id="sm0"/>
            <ul class="sub-menu">
              <li><a href="#">Accounts Info
                <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm1">▾</label>
              </a>
              <input type="checkbox" id="sm1"/>
              <ul class="sub-menu">
              <li><a href={getAssetPath(`./assets/${this.gfile}`)}>groups</a></li>
     <li><a href={getAssetPath(`./assets/${this.lfile}`)}>ledgers</a></li>
     <li><a href={getAssetPath(`./assets/${this.ccfile}`)}>cost categories</a></li>
     <li><a href={getAssetPath(`./assets/${this.ccentfile}`)}>cost centers</a></li>
     <li><a href={getAssetPath(`./assets/${this.budfile}`)}>budgets</a></li>
     <li><a href={getAssetPath(`./assets/${this.sfile}`)}>scenerios</a></li>
     <li><a href={getAssetPath(`./assets/${this.cfile}`)}>currencies</a></li>
              </ul>
            </li>
              <li><a href="#">Inventory Info
                <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm2">▾</label>
              </a>
              <input type="checkbox" id="sm2"/>
              <ul class="sub-menu">
              <li><a href={getAssetPath(`./assets/${this.sgfile}`)}>stock groups</a></li>
     <li><a href={getAssetPath(`./assets/${this.tfile}`)}>Tariff/VAT COMMODITY</a></li>
     <li><a href={getAssetPath(`./assets/${this.sifile}`)}>stock item</a></li>
     <li><a href={getAssetPath(`./assets/${this.scfile}`)}>stock category</a></li>
     <li><a href={getAssetPath(`./assets/${this.gofile}`)}>Godown</a></li>
     <li><a href={getAssetPath(`./assets/${this.umfile}`)}>units of measure</a></li>
     <li><a href="#">price list
     <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm2.1">▾</label>
                </a>
                <input type="checkbox" id="sm2.1"/>
              <ul class="sub-menu">   
       <li><a href={getAssetPath(`./assets/${this.plstkfile}`)}>stock group</a></li>
     <li><a href={getAssetPath(`./assets/${this.plstcatfile}`)}>stock category</a></li>
     </ul>
     </li>
     <li><a href="#">Reorder level
     <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm2.2">▾</label>
                </a>
                <input type="checkbox" id="sm2.2"/>
              <ul class="sub-menu">   
       <li><a href="#">stock groups</a></li>
     <li><a href="#">stock category</a></li>
     <li><a href="#">stock items</a></li>
     </ul>
     </li>
     <li><a href="#">statutory Info
     <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm2.3">▾</label>
                </a>
                <input type="checkbox" id="sm2.3"/>
              <ul class="sub-menu">   
       <li><a href="#">Excise Duty Classification</a></li>
       <li><a href="#">Excise  Classification</a></li>
       <li><a href="#">Excise Books</a></li>
       <li><a href="#">Excise opening Balance</a></li>
       <li><a href="#">Tax Units</a></li>
       <li><a href="#">Service categories</a></li>
       <li><a href="#">TDS Nature of Payments</a></li>
       <li><a href="#">TCS Nature of Good</a></li>
     </ul>
     </li>
              </ul> 
            </li>
              <li><a href="#">Payroll Info
                <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm3">▾</label>
              </a>
              <input type="checkbox" id="sm3"/>
              <ul class="sub-menu">
              <li><a href={getAssetPath(`./assets/${this.ecatfile}`)}>employee category</a></li>
     <li><a href={getAssetPath(`./assets/${this.egfile}`)}>employee groups</a></li>
     <li><a href={getAssetPath(`./assets/${this.efile}`)}>employees</a></li>
     <li><a href={getAssetPath(`./assets/${this.ufile}`)}>units(work)</a></li>
     <li><a href={getAssetPath(`./assets/${this.atfile}`)}>Attendance / production types</a></li>
     <li><a href={getAssetPath(`./assets/${this.payfile}`)}>Pay Heads</a></li>
     <li><a href="#">salary details</a></li>
     <li><a href={getAssetPath(`./assets/${this.vfile}`)}>voucher types</a></li>
     <li><a href="#">Income Tax Details
     
     <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm3.1">▾</label>
                </a>
                <input type="checkbox" id="sm3.1"/>
              <ul class="sub-menu">   
       <li><a href="#">Pay head configuration</a></li>
       <li><a href="#">Declaration</a></li>
       <li><a href="#">Override exemption value</a></li>
       <li><a href="#">Override tax value</a></li>
       <li><a href="#">Tax configuration</a></li>
       <li><a href="#">Service categories</a></li>
       <li><a href="#">Previous Employer details</a></li>
       
     </ul>
     </li>
            </ul>
            </li>
            </ul>
          </li>
          <li><a href="#">Finance
              <span class="drop-icon">▾</span>
              <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm4">▾</label>
            </a>
            <input type="checkbox" id="sm4"/>
            <ul class="sub-menu">
              <li><a href="#">Accounting Vouchers
                <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm5">▾</label>
              </a>
              <input type="checkbox" id="sm5"/>
              <ul class="sub-menu">
              <li><a href="#"> Dashboards</a></li>
                <li><a href={getAssetPath(`./assets/${this.ctfile}`)}> Contra</a></li>
                <li><a href={getAssetPath(`./assets/${this.ptfile}`)}>Payment</a></li>
                <li><a href={getAssetPath(`./assets/${this.rtfile}`)}>Receipt</a></li>
                <li><a href={getAssetPath(`./assets/${this.jrfile}`)}>Journal Voucher</a></li>
                <li><a href={getAssetPath(`./assets/${this.slfile}`)}>Sales</a></li>
                <li><a href={getAssetPath(`./assets/${this.prfile}`)}>Purchase</a></li>
                <li><a href="#">Credit Note</a></li>
                <li><a href="#">Debit Note</a></li>
                <li><a href="#">Reversing Journal</a></li>
                <li><a href="#">Memos</a></li>
                <li><a href="#">VAT Payment</a></li>
                <li><a href="#">Stat Payment</a></li>
              </ul>
            </li>
              <li><a href="#">Accounting Report
                  <span class="drop-icon">▸</span>
                  <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm6">▾</label>
                </a>
                <input type="checkbox" id="sm6"/>
                <ul class="sub-menu">
                  <li><a href="#">Account Books
                  <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm6.1">▾</label>
                </a>
                <input type="checkbox" id="sm6.1"/>
              <ul class="sub-menu">   
       <li><a href="#">Trial Balance</a></li>
       <li><a href="#">Day Book</a></li>
       <li><a href="#">Cash/Bank Books</a></li>
       <li><a href="#">Profit & loss
       <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm6.1.1">▾</label>
                </a>
                <input type="checkbox" id="sm6.1.1"/>
              <ul class="sub-menu">   
       <li><a href="#">Valuation</a></li>
       <li><a href="#">ScheduleVI</a></li>
       
      </ul>
       </li>
       <li><a href="#">Balance Sheet
       <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm6.1.2">▾</label>
                </a>
                <input type="checkbox" id="sm6.1.2"/>
              <ul class="sub-menu">   
       <li><a href="#">Valuation</a></li>
       <li><a href="#">ScheduleVI</a></li>
       
      </ul>
       </li>
       <li><a href={getAssetPath(`./assets/${this.lfile}`)}>Ledger</a></li>
       <li><a href="#">Group Summary</a></li>
       <li><a href="#">Group Vouchers</a></li>
       <li><a href="#">Sales Register</a></li>
       <li><a href="#">Purchase Register</a></li>
       <li><a href="#">Journal Register</a></li>
     </ul>
                  </li>
                  <li><a href="#">Statement of Accounts
                  <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm6.2">▾</label>
                </a>
                <input type="checkbox" id="sm6.2"/>
              <ul class="sub-menu">   
       <li><a href="#">Outstandings
       <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm6.2.1">▾</label>
                </a>
                <input type="checkbox" id="sm6.2.1"/>
              <ul class="sub-menu">   
       <li><a href="#">Receivables</a></li>
       <li><a href="#">Payables</a></li>
       <li><a href="#">Ledger</a></li>
       <li><a href="#">Group</a></li>
      </ul>
       </li>
       <li><a href="#">Interest Calculations
       <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm6.2.2">▾</label>
                </a>
                <input type="checkbox" id="sm6.2.2"/>
              <ul class="sub-menu">   
       <li><a href="#">Receivables</a></li>
       <li><a href="#">Payables</a></li>
       <li><a href="#">Ledger</a></li>
       <li><a href="#">Group</a></li>
      </ul>
       </li>
       <li><a href="#">Cost centres
       <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm6.2.3">▾</label>
                </a>
                <input type="checkbox" id="sm6.2.3"/>
              <ul class="sub-menu">   
       <li><a href="#">Category Summary</a></li>
       <li><a href="#">Cost Centre Breakup</a></li>
       <li><a href="#">Ledger Breakup</a></li>
       <li><a href="#">Group Breakup</a></li>
      </ul>
       </li>
       <li><a href="#">Job Work Analysis</a></li>
       <li><a href="#">Statistics</a></li>
     </ul>
                  </li>
                  <li><a href="#">Banking
                  <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm6.3">▾</label>
                </a>
                <input type="checkbox" id="sm6.3"/>
              <ul class="sub-menu">   
       <li><a href="#">Cheque Printing</a></li>
       <li><a href="#">Cheque Register</a></li>
       <li><a href="#">Bank Reconciliation</a></li>
       <li><a href="#">Deposit Slip
       <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm6.2.4">▾</label>
                </a>
                <input type="checkbox" id="sm6.2.4"/>
              <ul class="sub-menu">   
       <li><a href="#">Cheque Deposit Slip</a></li>
       <li><a href="#">Cash Deposit Slip</a></li>
       
      </ul>
       </li>
       <li><a href="#">Payment Advice</a></li>
     </ul>
                 </li>
                  <li><a href="#">Audit & Compliance
                  <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm6.4">▾</label>
                </a>
                <input type="checkbox" id="sm6.4"/>
              <ul class="sub-menu">   
       <li><a href="#">Tax Audit
       <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm6.4.1">▾</label>
                </a>
                <input type="checkbox" id="sm6.4.1"/>
              <ul class="sub-menu">   
       <li><a href="#">Form 3CD</a></li>
       <li><a href="#">44AB Audit</a></li>
       <li><a href="#">Form 3CA</a></li>
       <li><a href="#">Form 3CB</a></li>
      </ul>
      </li>
       <li><a href="#">Statutory Audit
       <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm6.4.2">▾</label>
                </a>
                <input type="checkbox" id="sm6.4.2"/>
              <ul class="sub-menu">   
       <li><a href="#">Audit Documentation</a></li>
       <li><a href="#">Audit & Analysis</a></li>
       <li><a href="#">Audit Journals</a></li>
       <li><a href="#">Financial Statements</a></li>
      </ul>
       </li></ul></li>
       <li><a href="#">Cash/Fund Flows
       <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm6.4.3">▾</label>
                </a>
                <input type="checkbox" id="sm6.4.3"/>
              <ul class="sub-menu">   
       <li><a href="#">Cash Flow</a></li>
       <li><a href="#">Funds flow</a></li>
       <li><a href="#">Cash flow Projection</a></li>
       
      </ul>
       </li>
                  <li><a href="#">Receipts/Payments</a></li>
                  <li><a href="#">Rapid Analysis</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a href="#">Order
              <span class="drop-icon">▾</span>
              <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm7">▾</label>
          </a>
          <input type="checkbox" id="sm7"/>
          <ul class="sub-menu">
            <li><a href="">Order Voucher
              <span class="drop-icon">▸</span>
              <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm8">▾</label>
            </a>
            <input type="checkbox" id="sm8"/>
              <ul class="sub-menu">
                <li><a href="">Dashboard</a></li>
                <li><a href={getAssetPath(`./assets/${this.pofile}`)}> Purchase Order</a></li>
                <li><a href={getAssetPath(`./assets/${this.sofile}`)}>Sales Order</a></li>
                <li><a href="">Job Work Out Order</a></li>
                <li><a href="">Job work In Order</a></li>
                <li><a href="">Stock Query</a></li>
              </ul>
            </li>
            <li><a href="">Order Report
              <span class="drop-icon">▸</span>
              <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm9">▾</label>
            </a>
            <input type="checkbox" id="sm9"/>
            
              <ul class="sub-menu">
                <li><a href="">Inventory Books
                <span class="drop-icon">▸</span>
              <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm9.1">▾</label>
            </a>
            <input type="checkbox" id="sm9.1"/>
              <ul class="sub-menu">
                <li><a href="">Stock item</a></li>
                <li><a href=""> Group Summary</a></li>
                <li><a href="">Batch</a></li>
                <li><a href="">Sales Orders Books</a></li>
                <li><a href="">Purchase Orders Books</a></li>
                <li><a href="">Stock Transfers</a></li>
                <li><a href="">Physical Stock Register</a></li>
                <li><a href="">Movement Analysis</a></li>
                <li><a href="">Ageing Analysis</a></li>
              </ul>
                </li>
                <li><a href="">Statements Of Inventory
                <span class="drop-icon">▸</span>
              <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm9.2">▾</label>
            </a>
            <input type="checkbox" id="sm9.2"/>
              <ul class="sub-menu">
                <li><a href="">Godown/Excise Units</a></li>
                <li><a href="">Categories</a></li>
                <li><a href="">Stock Query</a></li>
                <li><a href="">Cost Estimation</a></li>
                <li><a href="">Job Work Analysis</a></li>
                <li><a href="">Item Cost Analysis</a></li>
                <li><a href="">Sales Orders Outstandings</a></li>
                <li><a href="">Purchase Orders Outstandings</a></li>
                <li><a href="">Reorder Status</a></li>
                <li><a href="">Purchase Bill Pending </a></li>
                <li><a href="">Sales Bill Pending </a></li>
                <li><a href="">Statistics</a></li>
              </ul>
                </li>
                <li><a href="">Stock Summary</a></li>
                <li><a href="">Job Work In Reports
                <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm9.3">▾</label>
                </a>
                <input type="checkbox" id="sm9.3"/>
              <ul class="sub-menu">   
       <li><a href="#">Order Outstandings
       <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm9.3.1">▾</label>
                </a>
                <input type="checkbox" id="sm9.3.1"/>
              <ul class="sub-menu">   
       <li><a href="#">Order </a></li>
       <li><a href="#">Components</a></li>
      
      </ul>
       </li>
       <li><a href="#">Job Work Registers
       <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm9.4">▾</label>
                </a>
                <input type="checkbox" id="sm9.4"/>
              <ul class="sub-menu">   
       <li><a href="#">Job Work Out Order Book </a></li>
       <li><a href="#">Job Work Registers</a></li>
       <li><a href="#">Stock</a></li>
       <li><a href="#">Job Work Analysis</a></li>
      </ul>
       </li>
       <li><a href="#">Stock</a></li>
       <li><a href="#">Job Work Analysis</a></li>
      </ul>
                </li>
                <li><a href="">Job Work Out Reports
                <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm9.5">▾</label>
                </a>
                <input type="checkbox" id="sm9.5"/>
              <ul class="sub-menu">   
              <li><a href="#">Job Work Out Order Book </a></li>
       <li><a href="#">Material Out Register</a></li>
       <li><a href="#">Material in Register</a></li>
       <li><a href="#">Annexure V</a></li>
      </ul>
                </li>
                <li><a href="">Job Work Out Order Book 
                <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm9.6">▾</label>
                </a>
                <input type="checkbox" id="sm9.6"/>
              <ul class="sub-menu">   
       <li><a href="#">Job Work Out Registers
       <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm9.6.1">▾</label>
                </a>
                <input type="checkbox" id="sm9.6.1"/>
              <ul class="sub-menu">   
       <li><a href="#">Job Work Out Order Book </a></li>
       <li><a href="#">Material Out Register</a></li>
       <li><a href="#">Material in Register</a></li>
       <li><a href="#">Annexure V</a></li>
      </ul>
        </li>
       
      </ul>
                </li>
              </ul>
            </li>
        </ul>
    </li>
    <li><a href="#">Distribution
        <span class="drop-icon">▾</span>
        <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm10">▾</label>
    </a>
    <input type="checkbox" id="sm10"/>
    <ul class="sub-menu">
            <li><a href="">Inventory Vocher
                <span class="drop-icon">▸</span>
                  <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm11">▾</label>
                </a>
                <input type="checkbox" id="sm11"/>
              <ul class="sub-menu">
                <li><a href="">Dashboards</a></li>
                <li><a href="">Rejections In</a></li>
                <li><a href="">Rejections Out</a></li>
                <li><a href={getAssetPath(`./assets/${this.sjfile}`)}>Stock Journals</a></li>
                <li><a href="">Delivery Note</a></li>
                <li><a href="">Receipt Note</a></li>
                <li><a href="">Physical Sock</a></li>
                <li><a href={getAssetPath(`./assets/${this.mofile}`)}>Material Out</a></li>
                <li><a href="">Material In</a></li>
                <li><a href={getAssetPath(`./assets/${this.msjfile}`)}>Mfg Stock Journal</a></li>
                <li><a href="">Stock Query</a></li>
              </ul>
            </li>
            <li><a href="">Inventory Report
                <span class="drop-icon">▸</span>
                  <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm12">▾</label>
                </a>
                <input type="checkbox" id="sm12"/>
              <ul class="sub-menu">
                <li><a href="">Inventory Books
                <span class="drop-icon">▸</span>
              <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm12.1">▾</label>
            </a>
            <input type="checkbox" id="sm12.1"/>
              <ul class="sub-menu">
                <li><a href="">Stock item</a></li>
                <li><a href=""> Group Summary</a></li>
                <li><a href="">Batch</a></li>
                <li><a href="">Sales Orders Books</a></li>
                <li><a href="">Purchase Orders Books</a></li>
                <li><a href="">Stock Transfers</a></li>
                <li><a href="">Physical Stock Register</a></li>
                <li><a href="">Movement Analysis</a></li>
                <li><a href="">Ageing Analysis</a></li>
              </ul>
                </li>
                <li><a href="">Statement of Inventory
                <span class="drop-icon">▸</span>
              <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm12.2">▾</label>
            </a>
            <input type="checkbox" id="sm12.2"/>
              <ul class="sub-menu">
                <li><a href="">Godown/Excise Units</a></li>
                <li><a href="">Categories</a></li>
                <li><a href="">Stock Query</a></li>
                <li><a href="">Cost Estimation</a></li>
                <li><a href="">Job Work Analysis</a></li>
                <li><a href="">Item Cost Analysis</a></li>
                <li><a href="">Sales Orders Outstandings</a></li>
                <li><a href="">Purchase Orders Outstandings</a></li>
                <li><a href="">Recorder Status</a></li>
                <li><a href="">Purchase Bill Pending </a></li>
                <li><a href="">Sales Bill Pending </a></li>
                <li><a href="">Statistics</a></li>
              </ul>
                </li>
                <li><a href="">Stock Summary</a></li>
                <li><a href="">Job work in Reports
                <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm12.3">▾</label>
                </a>
                <input type="checkbox" id="sm12.3"/>
              <ul class="sub-menu">   
       <li><a href="#">Order Outstandings
       <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm12.3.1">▾</label>
                </a>
                <input type="checkbox" id="sm12.3.1"/>
              <ul class="sub-menu">   
       <li><a href="#">Orders </a></li>
       <li><a href="#">Components</a></li>
      </ul>
        </li>
       <li><a href="#">Job Work Registers</a>
      
       </li>
       <li><a href="#">Stock</a></li>
       <li><a href="#">Job Work Analysis</a></li>
      </ul>
                </li>
                <li><a href="">Job Work Out Reports
                <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm12.4">▾</label>
                </a>
                <input type="checkbox" id="sm12.4"/>
              <ul class="sub-menu">   
       <li><a href="#">Order Outstandings
       <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm12.5">▾</label>
                </a>
                <input type="checkbox" id="sm12.5"/>
              <ul class="sub-menu">   
       <li><a href="#">Orders </a></li>
       <li><a href="#">Components</a></li>
      </ul>
        </li>
       <li><a href="#">Job Work Registers</a> </li>
       <li><a href="#">Stock</a></li>
       <li><a href="#">Job Work Analysis</a></li>
      </ul>
                </li>
                <li><a href="">Job Work Out Order Book 
                <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm12.6">▾</label>
                </a>
                <input type="checkbox" id="sm12.6"/>
              <ul class="sub-menu">   
       <li><a href="#">Job Work Out Registers
       <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm12.6.1">▾</label>
                </a>
                <input type="checkbox" id="sm12.6.1"/>
              <ul class="sub-menu">   
       <li><a href="#">Job Work Out Order Book </a></li>
       <li><a href="#">Material Out Register</a></li>
       <li><a href="#">Material in Register</a></li>
       <li><a href="#">Annexure V</a></li>
      </ul>
        </li>
       
      </ul>
                </li>
              </ul>
            </li>
        </ul>
        </li>

          <li><a href="#">Payroll
            <span class="drop-icon">▾</span>
            <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm13">▾</label>
        </a>
        <input type="checkbox" id="sm13"/>
        <ul class="sub-menu">
                <li><a href="">Payroll Vocher
                    <span class="drop-icon">▸</span>
                      <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm13.1">▾</label>
                    </a>
                    <input type="checkbox" id="sm13.1"/>
                  <ul class="sub-menu">
                    <li><a href="">Dashboards</a></li>
                    <li><a href="">Attendance</a></li>
                    <li><a href="">Attendance Autofill</a></li>
                    <li><a href={getAssetPath(`./assets/${this.pfile}`)}>Payroll</a></li>
                    <li><a href="">Payroll Autofill</a></li>
                </ul>
            </li>
            <li><a href="">Payroll Reports
                <span class="drop-icon">▸</span>
                  <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm13.2">▾</label>
                </a>
                <input type="checkbox" id="sm13.2"/>
              <ul class="sub-menu">
                <li><a href="">Statement of Payroll
                <span class="drop-icon">▸</span>
                      <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm13.2.1">▾</label>
                    </a>
                    <input type="checkbox" id="sm13.2.1"/>
                  <ul class="sub-menu">
                    <li><a href="">Pay Slip
                    <span class="drop-icon">▸</span>
                      <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm13.2.2">▾</label>
                    </a>
                    <input type="checkbox" id="sm13.2.2"/>
                  <ul class="sub-menu">
                    <li><a href={getAssetPath(`./assets/${this.spfile}`)}>Single Pay Slip</a></li>
                    <li><a href="">Multi Pay Slip</a></li>
                    <li><a href={getAssetPath(`./assets/${this.edfile}`)}>Email Ds</a></li>
                    </ul>
                    </li>
                    <li><a href="">Pay Sheet</a></li>
                    <li><a href="">Payroll Statement</a></li>
                    <li><a href="">Payment Advice</a></li>
                    <li><a href="">Payroll Register</a></li>
                    <li><a href="">Employee Profile</a></li>
                    <li><a href="">Employee Head Count</a></li>
                    <li><a href="">Employee PayHead Breakup</a></li>
                    <li><a href="">PayHead Employee Breakup</a></li>
                   
                </ul>
                </li>
                <li><a href="">Attendance Sheet</a></li>
                <li><a href="">Attendance Register</a></li>
                <li><a href="">Expat Reports
                <span class="drop-icon">▸</span>
                      <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm13.3.1">▾</label>
                    </a>
                    <input type="checkbox" id="sm13.3.1"/>
                  <ul class="sub-menu">
                    <li><a href="">Passport Expiry</a></li>
                    <li><a href="">Visa Expiry</a></li>
                    <li><a href="">Contract Expiry</a></li>
                    
                </ul>
                </li>
                <li><a href="">Statutory Reports
                <span class="drop-icon">▸</span>
                      <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm13.4.1">▾</label>
                    </a>
                    <input type="checkbox" id="sm13.4.1"/>
                  <ul class="sub-menu">
                    <li><a href="">Summary</a></li>
                    <li><a href="">Provident Fund</a></li>
                    <li><a href="">Employee State Insurance</a></li>
                    <li><a href="">Professional Tax</a></li>
                    <li><a href="">National Pension Scheme</a></li>
                    <li><a href="">Gratuity</a></li>
                    <li><a href="">income Tax</a></li>
                </ul>
                </li>
            </ul>
        </li>
        </ul>
            </li>
            <li><a href="#">Display
              <span class="drop-icon">▾</span>
              <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm14">▾</label>
          </a>
          <input type="checkbox" id="sm14"/>
          <ul class="sub-menu">
                  <li><a href="">Accounts
                      <span class="drop-icon">▸</span>
                        <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm14.1">▾</label>
                      </a>
                      <input type="checkbox" id="sm14.1"/>
                    <ul class="sub-menu">
                      <li><a href="">Account Books
                      <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm14.1.1">▾</label>
                </a>
                <input type="checkbox" id="sm14.1.1"/>
              <ul class="sub-menu">   
       <li><a href="#">Trial Balance</a></li>
       <li><a href={getAssetPath(`./assets/${this.dbfile}`)}>Day Book</a></li>
       <li><a href="#">Cash/Bank Books</a></li>
       <li><a href="#">Profit & loss
       <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm14.1.2">▾</label>
                </a>
                <input type="checkbox" id="sm14.1.2"/>
              <ul class="sub-menu">   
       <li><a href="#">Valuation</a></li>
       <li><a href="#">ScheduleVI</a></li>
       
      </ul>
       </li>
       <li><a href="#">Balance Sheet
       <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm14.1.3">▾</label>
                </a>
                <input type="checkbox" id="sm14.1.3"/>
              <ul class="sub-menu">   
       <li><a href="#">Valuation</a></li>
       <li><a href="#">ScheduleVI</a></li>
       
      </ul>
       </li>
       <li><a href="#">Ledger</a></li>
       <li><a href="#">Group Summary</a></li>
       <li><a href="#">Group Vouchers</a></li>
       <li><a href="#">Sales Register</a></li>
       <li><a href="#">Purchase Register</a></li>
       <li><a href="#">Journal Register</a></li>
     </ul>
                      </li>
                      <li><a href="">Statement of Accounts
                      <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm14.2">▾</label>
                </a>
                <input type="checkbox" id="sm14.2"/>
              <ul class="sub-menu">   
       <li><a href="#">Outstandings
       <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm14.2.1">▾</label>
                </a>
                <input type="checkbox" id="sm14.2.1"/>
              <ul class="sub-menu">   
       <li><a href="#">Receivables</a></li>
       <li><a href="#">Payables</a></li>
       <li><a href="#">Ledger</a></li>
       <li><a href="#">Group</a></li>
      </ul>
       </li>
       <li><a href="#">Interest Calculations
       <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm14.2.2">▾</label>
                </a>
                <input type="checkbox" id="sm14.2.2"/>
              <ul class="sub-menu">   
       <li><a href="#">Receivables</a></li>
       <li><a href="#">Payables</a></li>
       <li><a href="#">Ledger</a></li>
       <li><a href="#">Group</a></li>
      </ul>
       </li>
       <li><a href="#">Cost centres
       <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm14.2.3">▾</label>
                </a>
                <input type="checkbox" id="sm14.2.3"/>
              <ul class="sub-menu">   
       <li><a href="#">Category Summary</a></li>
       <li><a href="#">Cost Centre Breakup</a></li>
       <li><a href="#">Ledger Breakup</a></li>
       <li><a href="#">Group Breakup</a></li>
      </ul>
       </li>
       <li><a href="#">Job Work Analysis</a></li>
       <li><a href="#">Statistics</a></li>
     </ul>
                      </li>
                      <li><a href="#">Banking
                      <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm14.3">▾</label>
                </a>
                <input type="checkbox" id="sm14.3"/>
              <ul class="sub-menu">   
       <li><a href="#">Cheque Printing</a></li>
       <li><a href="#">Cheque Register</a></li>
       <li><a href="#">Bank Reconciliation</a></li>
       <li><a href="#">Deposit Slip
       <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm14.3.1">▾</label>
                </a>
                <input type="checkbox" id="sm14.3.1"/>
              <ul class="sub-menu">   
       <li><a href="#">Cheque Deposit Slip</a></li>
       <li><a href="#">Cash Deposit Slip</a></li>
       
      </ul>
       </li>
       <li><a href="#">Payment Advice</a></li>
     </ul>
                      </li>
                      <li><a href="">Audit & Compliance
                      <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm14.4">▾</label>
                </a>
                <input type="checkbox" id="sm14.4"/>
              <ul class="sub-menu">   
       <li><a href="#">Tax Audit
       <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm14.4.1">▾</label>
                </a>
                <input type="checkbox" id="sm14.4.1"/>
              <ul class="sub-menu">   
       <li><a href="#">Form 3CD</a></li>
       <li><a href="#">44AB Audit</a></li>
       <li><a href="#">Form 3CA</a></li>
       <li><a href="#">Form 3CB</a></li>
      </ul>
      </li>
       <li><a href="#">Statutory Audit
       <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm14.4.2">▾</label>
                </a>
                <input type="checkbox" id="sm14.4.2"/>
              <ul class="sub-menu">   
       <li><a href="#">Audit Documentation</a></li>
       <li><a href="#">Audit & Analysis</a></li>
       <li><a href="#">Audit Journals</a></li>
       <li><a href="#">Financial Statements</a></li>
      </ul>
       </li></ul>
                      </li>
                      <li><a href="">Cash/Funds Flow</a></li>
                      <li><a href="">Receipts/Payments</a></li>
                      <li><a href="">Ratio Analysis</a></li>
                  </ul>
              </li>
              <li><a href="">Inventory
                  <span class="drop-icon">▸</span>
                    <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm14.4">▾</label>
                  </a>
                  <input type="checkbox" id="sm14.4"/>
                <ul class="sub-menu">
                <li><a href="">Inventory Books
                <span class="drop-icon">▸</span>
              <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm14.4.1">▾</label>
            </a>
            <input type="checkbox" id="sm14.4.1"/>
              <ul class="sub-menu">
                <li><a href="">Stock item</a></li>
                <li><a href=""> Group Summary</a></li>
                <li><a href="">Batch</a></li>
                <li><a href="">Sales Orders Books</a></li>
                <li><a href="">Purchase Orders Books</a></li>
                <li><a href="">Stock Transfers</a></li>
                <li><a href="">Physical Stock Register</a></li>
                <li><a href="">Movement Analysis</a></li>
                <li><a href="">Ageing Analysis</a></li>
              </ul>
                </li>
                <li><a href="">Statement of Inventory
                <span class="drop-icon">▸</span>
              <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm14.4.2">▾</label>
            </a>
            <input type="checkbox" id="sm14.4.2"/>
              <ul class="sub-menu">
                <li><a href="">Godown/Excise Units</a></li>
                <li><a href="">Categories</a></li>
                <li><a href="">Stock Query</a></li>
                <li><a href="">Cost Estimation</a></li>
                <li><a href="">Job Work Analysis</a></li>
                <li><a href="">Item Cost Analysis</a></li>
                <li><a href="">Sales Orders Outstandings</a></li>
                <li><a href="">Purchase Orders Outstandings</a></li>
                <li><a href="">Recorder Status</a></li>
                <li><a href="">Purchase Bill Pending </a></li>
                <li><a href="">Sales Bill Pending </a></li>
                <li><a href="">Statistics</a></li>
              </ul>
                </li>
                <li><a href="">Stock Summary</a></li>
                <li><a href="">Job work in Reports
                <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm14.4.3">▾</label>
                </a>
                <input type="checkbox" id="sm14.4.3"/>
              <ul class="sub-menu">   
       <li><a href="#">Order Outstandings
       <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm14.5.1">▾</label>
                </a>
                <input type="checkbox" id="sm14.5.1"/>
              <ul class="sub-menu">   
       <li><a href="#">Orders </a></li>
       <li><a href="#">Components</a></li>
      </ul>
        </li>
       <li><a href="#">Job Work Registers</a>
      
       </li>
       <li><a href="#">Stock</a></li>
       <li><a href="#">Job Work Analysis</a></li>
      </ul>
                </li>
                <li><a href="">Job Work Out Reports
                <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm14.5.2">▾</label>
                </a>
                <input type="checkbox" id="sm14.5.2"/>
              <ul class="sub-menu">   
       <li><a href="#">Order Outstandings
       <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm14.5.3">▾</label>
                </a>
                <input type="checkbox" id="sm14.5.3"/>
              <ul class="sub-menu">   
       <li><a href="#">Orders </a></li>
       <li><a href="#">Components</a></li>
      </ul>
        </li>
       <li><a href="#">Job Work Registers</a> </li>
       <li><a href="#">Stock</a></li>
       <li><a href="#">Job Work Analysis</a></li>
      </ul>
                </li>
                <li><a href="">Job Work Out Order Book 
                <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm14.6">▾</label>
                </a>
                <input type="checkbox" id="sm14.6"/>
              <ul class="sub-menu">   
       <li><a href="#">Job Work Out Registers
       <span class="drop-icon">▸</span>
                <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm14.6.1">▾</label>
                </a>
                <input type="checkbox" id="sm14.6.1"/>
              <ul class="sub-menu">   
       <li><a href="#">Job Work Out Order Book </a></li>
       <li><a href="#">Material Out Register</a></li>
       <li><a href="#">Material in Register</a></li>
       <li><a href="#">Annexure V</a></li>
      </ul>
        </li>
       
      </ul>
                </li>
            
        
                  <li><a href="">Statement of Inventory</a></li>
                  <li><a href="">Stock Summary</a></li>
              </ul>
          </li>
          <li><a href="">Payroll Info
            <span class="drop-icon">▸</span>
              <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm14.7">▾</label>
            </a>
            <input type="checkbox" id="sm14.7"/>
          <ul class="sub-menu">
            
            <li><a href="">Payroll Reports
                <span class="drop-icon">▸</span>
                  <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm13.2">▾</label>
                </a>
                <input type="checkbox" id="sm13.2"/>
              <ul class="sub-menu">
                <li><a href="">Statement of Payroll
                <span class="drop-icon">▸</span>
                      <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm13.2.1">▾</label>
                    </a>
                    <input type="checkbox" id="sm13.2.1"/>
                  <ul class="sub-menu">
                    <li><a href="">Pay Slip</a></li>
                    <li><a href="">Pay Sheet</a></li>
                    <li><a href="">Payroll Statement</a></li>
                    <li><a href="">Payment Advice</a></li>
                    <li><a href="">Payroll Register</a></li>
                    <li><a href="">Employee Profile</a></li>
                    <li><a href="">Employee Head Count</a></li>
                    <li><a href="">Employee PayHead Breakup</a></li>
                    <li><a href="">PayHead Employee Breakup</a></li>
                   
                </ul>
                </li>
                <li><a href="">Attendance Sheet</a></li>
                <li><a href="">Attendance Register</a></li>
                <li><a href="">Expat Reports
                <span class="drop-icon">▸</span>
                      <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm13.3.1">▾</label>
                    </a>
                    <input type="checkbox" id="sm13.3.1"/>
                  <ul class="sub-menu">
                    <li><a href="">Passport Expiry</a></li>
                    <li><a href="">Visa Expiry</a></li>
                    <li><a href="">Contract Expiry</a></li>
                    
                </ul>
                </li>
                <li><a href="">Statutory Reports
                <span class="drop-icon">▸</span>
                      <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm13.4.1">▾</label>
                    </a>
                    <input type="checkbox" id="sm13.4.1"/>
                  <ul class="sub-menu">
                    <li><a href="">Summary</a></li>
                    <li><a href="">Provident Fund</a></li>
                    <li><a href="">Employee State Insurance</a></li>
                    <li><a href="">Professional Tax</a></li>
                    <li><a href="">National Pension Scheme</a></li>
                    <li><a href="">Gratuity</a></li>
                    <li><a href="">income Tax</a></li>
                </ul>
                </li>
            </ul>
        </li>
           
            <li><a href="">Statements of PayRoll</a></li>
        </ul>
    </li>
    <li><a href="">Statutory
      <span class="drop-icon">▸</span>
        <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm14.8">▾</label>
      </a>
      <input type="checkbox" id="sm14.8"/>
    <ul class="sub-menu">
      <li><a href="">Statutory Info
      <span class="drop-icon">▸</span>
        <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm14.8.1">▾</label>
      </a>
      <input type="checkbox" id="sm14.8.1"/>
    <ul class="sub-menu">
      <li><a href="">VAT Classifications</a></li>
      <li><a href="">ExciseDuty Classifications</a></li>
      <li><a href="">Service Categories</a></li>
      <li><a href="">TDS Nature of Payments</a></li>
      <li><a href="">Deductee Types</a></li>
      <li><a href="">TDS Nature of goods</a></li>
      <li><a href="">Collectee Types</a></li>
      <li><a href="">FTB Assessee Type</a></li>
      <li><a href="">FTB Category</a></li>
      <li><a href="">Income Tax Classifications</a></li>
      <li><a href="">Income Tax Slabs</a></li>
  </ul>
      </li>
      <li><a href="">Statutory Reports
      <span class="drop-icon">▸</span>
        <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm14.8.2">▾</label>
      </a>
      <input type="checkbox" id="sm14.8.2"/>
    <ul class="sub-menu">
      <li><a href="">Payroll Reports</a></li>
      <li><a href="">MCA Reports</a></li>
      <li><a href="">EXcise</a></li>
      <li><a href="">VAT</a></li>
      <li><a href="">CST</a></li>
      <li><a href="">Service Tax reports</a></li>
      <li><a href="">TDS Reports</a></li>
      <li><a href="">TCS Reports</a></li>
      <li><a href="">LBT</a></li>
      <li><a href="">FBT Reports</a></li>
      
  </ul>
      </li>
  </ul>
</li>
<li><a href="">Reports
  <span class="drop-icon">▸</span>
    <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm14.9">▾</label>
  </a>
  <input type="checkbox" id="sm14.9"/>
<ul class="sub-menu">
  <li><a href="">Exception Reports
  <span class="drop-icon">▸</span>
        <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm14.9.1">▾</label>
      </a>
      <input type="checkbox" id="sm14.9.1"/>
    <ul class="sub-menu">
      <li><a href="">Negative Stock</a></li>
      <li><a href="">Negative Ledgers</a></li>
      <li><a href="">Overdue Receivables</a></li>
      <li><a href="">Overdue Payables</a></li>
      <li><a href="">Memorandum Vouchers</a></li>
      <li><a href="">Reversing Journals</a></li>
      <li><a href="">Optional Vouchers</a></li>
      <li><a href="">Post-dated Vouchers</a></li>
      <li><a href="">E-mails IDs</a></li>
      <li><a href="">Excise Dealer
      <span class="drop-icon">▸</span>
        <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm14.10">▾</label>
      </a>
      <input type="checkbox" id="sm14.10"/>
    <ul class="sub-menu">
      <li><a href="">Excise Dealer
      <span class="drop-icon">▸</span>
        <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm14.10.1">▾</label>
      </a>
      <input type="checkbox" id="sm14.10.1"/>
    <ul class="sub-menu">
      <li><a href="">Excise Registers
      <span class="drop-icon">▸</span>
        <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm14.10.1.1">▾</label>
      </a>
      <input type="checkbox" id="sm14.10.1.1"/>
    <ul class="sub-menu">
      <li><a href="">Excise Stock Registers</a></li>
      <li><a href="">Excise puechase bill registers</a></li>
      <li><a href="">Excise Stock CENVAT Register</a></li>
      <li><a href="">Return Transaction Book </a></li>
      <li><a href="">Customers Clearance Register</a></li>
  </ul>
      </li>
      <li><a href="">Excise reports
      <span class="drop-icon">▸</span>
        <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm14.10.1.2">▾</label>
      </a>
      <input type="checkbox" id="sm14.10.1.2"/>
    <ul class="sub-menu">
      <li><a href="">Party wise duty extract</a></li>
      <li><a href="">Sales And Purchase extract</a></li> 
  </ul>
      </li>
      <li><a href="">Form RG 23D
      <span class="drop-icon">▸</span>
        <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm14.10.1.3">▾</label>
      </a>
      <input type="checkbox" id="sm14.10.1.3"/>
    <ul class="sub-menu">
      <li><a href="">All Item</a></li>
      <li><a href="">One Item</a></li>
      <li><a href="">Sales Bill wise</a></li>
  </ul>
      </li>
      <li><a href="">Form 2</a></li>
      <li><a href="">E-Return
      <span class="drop-icon">▸</span>
        <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm14.10.1.4">▾</label>
      </a>
      <input type="checkbox" id="sm14.10.1.4"/>
    <ul class="sub-menu">
      <li><a href="">Validations</a></li>
      <li><a href="">Export</a></li> 
  </ul>
      </li>
  </ul>
      </li>
      <li><a href="">Excise Reports
      <span class="drop-icon">▸</span>
        <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm14.10.2">▾</label>
      </a>
      <input type="checkbox" id="sm14.10.2"/>
    <ul class="sub-menu">
      <li><a href="">Manufacturer
      <span class="drop-icon">▸</span>
        <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm14.10.2.1">▾</label>
      </a>
      <input type="checkbox" id="sm14.10.2.1"/>
    <ul class="sub-menu">
      <li><a href="">Excise Computation</a></li>
      <li><a href="">Excise registers</a></li>
      <li><a href="">CENVAT Register</a></li>
      <li><a href="">Excise Forms</a></li>
      <li><a href="">E-Return</a></li>
      <li><a href="">Export Register</a></li>
  </ul>
  
      </li>
      <li><a href="">Dealer</a></li>     
  </ul>
      </li>    
  </ul>
      </li>  
  </ul>
  </li>
</ul>
</li>
    </ul>
              </li>
          <li><a href="#">System Integration
                <span class="drop-icon">▾</span>
                  <label title="Toggle Drop-down" class="drop-icon" itemid="sm15">▾</label>
                </a>
                <input type="checkbox" id="sm15"/>
              <ul class="sub-menu">
                <li><a href="">Import and Process Master
                <span class="drop-icon">▾</span>
                  <label title="Toggle Drop-down" class="drop-icon" itemid="sm15.1">▾</label>
                </a>
                <input type="checkbox" id="sm15.1"/>
              <ul class="sub-menu">
                <li><a href="">Import Groups</a></li>
                <li><a href="">Import Ledgers</a></li>
                <li><a href="">Import Cost Categories</a></li>
                <li><a href="">Import Cost Centers</a></li>
                <li><a href="">Import Budgets Scenarios </a></li>
                <li><a href="">Import Currencies</a></li>
                <li><a href="">Import Stock Groups</a></li>
                <li><a href="">Import Stock Categories</a></li>
                <li><a href="">Import Traiffs Classifications</a></li>
                <li><a href="">Import Stock items</a></li>
                <li><a href="">Import Units</a></li>
                <li><a href="">Import GoDowns</a></li>
                <li><a href="">Import Serials</a></li>
                <li><a href="">Import Voucher Types</a></li>
                <li><a href="">Import PayHeads</a></li>
                <li><a href="">Import Attendence Types</a></li>
                <li><a href="">Import Employee Groups</a></li>
                <li><a href="">Import Employees</a></li>
                <li><a href="">All Statutory Masters</a></li>
              </ul> 
                </li>
                <li><a href="">All Day Books
                <span class="drop-icon">▾</span>
                  <label title="Toggle Drop-down" class="drop-icon" itemid="sm15.2">▾</label>
                </a>
                <input type="checkbox" id="sm15.2"/>
              <ul class="sub-menu">
                <li><a href="">Import Daybooks</a></li>
                <li><a href="">Process Daybooks</a></li>
                
              </ul> 
                </li>
              </ul>    
          </li>
          <li><a href ="#">Communication
          <span class="drop-icon">▾</span>
                  <label title="Toggle Drop-down" class="drop-icon" itemid="sm16">▾</label>
                </a>
                <input type="checkbox" id="sm16"/>
              <ul class="sub-menu">
                <li><a href="">Account E-mail
                <span class="drop-icon">▾</span>
                  <label title="Toggle Drop-down" class="drop-icon" itemid="sm16.1">▾</label>
                </a>
                <input type="checkbox" id="sm16.1"/>
              <ul class="sub-menu">
                <li><a href="">System Email Account
                <span class="drop-icon">▾</span>
                  <label title="Toggle Drop-down" class="drop-icon" itemid="sm16.1.1">▾</label>
                </a>
                <input type="checkbox" id="sm16.1.1"/>
              <ul class="sub-menu">
                <li><a href="">Servers</a></li>
                <li><a href="">Advance Setting</a></li>
                <li><a href="">Incoming Mail Processing</a></li>
              </ul>  
                </li>
                <li><a href="">All Email
                <span class="drop-icon">▾</span>
                  <label title="Toggle Drop-down" class="drop-icon" itemid="sm16.2.1">▾</label>
                </a>
                <input type="checkbox" id="sm16.2.1"/>
              <ul class="sub-menu">
                <li><a href="">All Records</a></li>
                <li><a href="">Outgoing Emails</a></li>
                <li><a href="">Incoming Emails</a></li>
                <li><a href="">Failed Email</a></li>
              </ul>
                </li>
                <li><a href="">Email Pending Processing</a></li>
                <li><a href="">Send and Receive Email</a></li>
              </ul>  
                </li>
               
              </ul>  
          </li>
				 <li><a href ={getAssetPath(`./assets/${this.crfile}`)}>CRM 
        {/* <li><a href ="#">CRM */}
                
                </a>
                <input type="checkbox" id="sm17"/>
              
               
                
        </li>
				<li><a href ={getAssetPath(`./assets/${this.userfile}`) }>User
        <span class="drop-icon">▾</span>
                  <label title="Toggle Drop-down" class="drop-icon" itemid="sm18">▾</label>
                </a>
                <input type="checkbox" id="sm18"/>
              <ul class="sub-menu">
                <li><a href="">Create User</a></li>
                <li><a href="">User</a></li>
              </ul>  
        </li>
        </ul>
      </nav>
    
      <div>
      
      </div>
      {/* <div id="img1">
   
      </div> */}
      
      </div>
      
      
 
    );
  }
}
