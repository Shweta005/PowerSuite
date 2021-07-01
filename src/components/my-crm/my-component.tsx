import { Component, Prop, h ,getAssetPath} from '@stencil/core';


@Component({
  tag: 'my-crm',
  styleUrl: 'my-component.css',
  assetsDirs:['assets'],
  shadow: true
})
export class MyComponent {
  @Prop() logo= "Powersuite.png";
  @Prop() cccd=sessionStorage.getItem('cccd');
  @Prop() user =sessionStorage.getItem('uname');
@Prop() erp="main.html";

// <------------------Acivities---------->
@Prop() ga="get-activities.html";
@Prop() asc="schedule-call.html";
@Prop() ast="schedule-task.html";
@Prop() ase="schedule-event.html";
@Prop() ia="imp-act.html";

// <------------------Contact---------->
@Prop() co="get-contact.html";
@Prop() cc="create-contact.html";
@Prop() ic="imp-contact.html";
// <------------------Account---------->
@Prop() acc="get-account.html";
@Prop() ccust="create-cust.html";
@Prop() c="custo-mer.html";
@Prop() s="supp-lier.html";
@Prop() ba="buis-acc.html";
// <------------------Lead---------->
@Prop() lead="get-lead.html";
@Prop() clead="create-lead.html";
@Prop() ilead="imp-lead.html";
// <------------------Campaign---------->
@Prop() camp="get-campaign.html";
@Prop() ccamp="create-camp.html";
@Prop() ctemp="create-temp.html";
@Prop() gm="gen-mailer.html";
@Prop() icamp="imp-camp.html";
@Prop() cpc="create-pro-cust.html";
@Prop() ipc="imp-pro-cust.html";
// <------------------Opportunities---------->
@Prop() opp="get-opportunity.html";
@Prop() copp="create-oppo.html";
@Prop() iopp="imp-oppo.html";

// <------------------Parameters---------->
@Prop() pr="create-para.html";
@Prop() ipr="imp-para.html";


// <------------------Product---------->

@Prop() pro="get-product.html";
@Prop() aig="additem-grp.html";

// <------------------Social Network---------->
@Prop() soc="social.html";




// <------------------Users---------->
@Prop() cu="create-user.html";

// <------------------cases---------->
@Prop() ca="get-cases.html";
@Prop() cca="create-case.html";
@Prop() ica="imp-case.html";

// <------------------Potentials---------->

@Prop() po="get-potential.html";
@Prop() cpo="create-pote.html";
@Prop() ipo="imp-pote.html";

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
    return[
      
    <div>
      <div id="main">

      <center><label id="l1" htmlFor="welcome">Welcome</label>      <label id="l2" htmlFor="user">{this.user}</label> <label id="l3"><a href="http://localhost:3333">[ Logout ]</a></label></center>
         <img src={getAssetPath(`./assets/${this.logo}`) } height="50" width="200"/> 
         {this.companyname()}
        </div>
     <nav id="menu">
        <label htmlFor="tm" id="toggle-menu">Navigation <span class="drop-icon">▾</span></label>
        <input type="checkbox" id="tm"/>
        <ul class="main-menu cf">
          <li><a href="#">Home</a></li>
          <li><a href={getAssetPath(`./assets/${this.ga}`) }>Activities
              <span class="drop-icon">▾</span>
              <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm0">▾</label>
            </a>
            <input type="checkbox" id="sm0"/>
            <ul class="sub-menu">
              <li><a href={getAssetPath(`./assets/${this.asc}`) }>Schedule call</a> </li>
              <li><a href={getAssetPath(`./assets/${this.ast}`) }>Schedule Task </a> </li>
             <li><a href={getAssetPath(`./assets/${this.ase}`) }>Schedule Event</a></li>
              <li><a href={getAssetPath(`./assets/${this.ia}`) }>Import Activities</a></li>
              </ul>
              </li>
          <li><a href={getAssetPath(`./assets/${this.co}`) }>Contacts
          <span class="drop-icon">▾</span>
              <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm1">▾</label>
            </a>
            <input type="checkbox" id="sm1"/>
            <ul class="sub-menu">
              <li><a href={getAssetPath(`./assets/${this.cc}`) }>Create Contacts</a> </li>
              <li><a href={getAssetPath(`./assets/${this.ic}`) }>Import Contacts </a> </li>
             
              </ul>
              </li>
          <li><a href={getAssetPath(`./assets/${this.acc}`) }>Accounts
          <span class="drop-icon">▾</span>
              <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm2">▾</label>
            </a>
            <input type="checkbox" id="sm2"/>
            <ul class="sub-menu">
              <li><a href={getAssetPath(`./assets/${this.ccust}`) }>Create Customer</a> </li>
              <li><a href={getAssetPath(`./assets/${this.c}`) }>Customers </a> </li>
             <li><a href={getAssetPath(`./assets/${this.s}`) }>Suppliers</a></li>
              <li><a href={getAssetPath(`./assets/${this.ba}`) }>Business Accounts</a></li>
              </ul>
              </li>   
    <li><a href={getAssetPath(`./assets/${this.camp}`) }>Campaigns
    <span class="drop-icon">▾</span>
              <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm3">▾</label>
            </a>
            <input type="checkbox" id="sm3"/>
            <ul class="sub-menu">
              <li><a href={getAssetPath(`./assets/${this.ccamp}`) }>Create Campaigns</a> </li>
              <li><a href={getAssetPath(`./assets/${this.ctemp}`) }>Create Template </a> </li>
             <li><a href={getAssetPath(`./assets/${this.gm}`) }>Generate Mailer</a></li>
              <li><a href="#">Prospect Customers
              <span class="drop-icon">▾</span>
              <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm3.1">▾</label>
            </a>
            <input type="checkbox" id="sm3.1"/>
            <ul class="sub-menu">
              <li><a href={getAssetPath(`./assets/${this.cpc}`) }>Create Prospect Customer</a> </li>
              <li><a href={getAssetPath(`./assets/${this.ipc}`) }>Import Prospect Customer </a> </li>
             
              </ul>
              </li>
              <li><a href={getAssetPath(`./assets/${this.icamp}`) }>Import Campaigns</a></li>
              </ul>
              </li>
          <li><a href={getAssetPath(`./assets/${this.lead}`) }>Leads
          <span class="drop-icon">▾</span>
              <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm4">▾</label>
            </a>
            <input type="checkbox" id="sm4"/>
            <ul class="sub-menu">
              <li><a href={getAssetPath(`./assets/${this.clead}`) }>Create lead</a> </li>
              <li><a href={getAssetPath(`./assets/${this.ilead}`) }>Import leads</a> </li>
             
              </ul>
            </li>
            <li><a href={getAssetPath(`./assets/${this.opp}`) }>Opportunities
            <span class="drop-icon">▾</span>
              <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm5">▾</label>
            </a>
            <input type="checkbox" id="sm5"/>
            <ul class="sub-menu">
              <li><a href={getAssetPath(`./assets/${this.copp}`) }>Create Opportunity</a> </li>
              <li><a href={getAssetPath(`./assets/${this.iopp}`) }>Import Opportunities </a> </li>
            
              </ul>
            </li>
          
          <li><a href={getAssetPath(`./assets/${this.pro}`) }>Products
          <span class="drop-icon">▾</span>
              <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm6">▾</label>
            </a>
            <input type="checkbox" id="sm6"/>
            <ul class="sub-menu">
              <li><a href={getAssetPath(`./assets/${this.aig}`) }>Add Item Group</a> </li>
              <li><a href="#">Item Groups
              <span class="drop-icon">▾</span>
              <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm6.1">▾</label>
            </a>
            <input type="checkbox" id="sm6.1"/>
            <ul class="sub-menu">
            
             <li><a href="#">Computer</a></li>
              <li><a href="#">Purchased</a></li>
             
              </ul>
              </li>
              </ul>  
          </li>
          <li><a href ="#">Users
          <span class="drop-icon">▾</span>
              <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm7">▾</label>
            </a>
            <input type="checkbox" id="sm7"/>
            <ul class="sub-menu">
              <li><a href={getAssetPath(`./assets/${this.cu}`) }>Create User</a> </li>
              </ul>
          </li>
				<li><a href ={getAssetPath(`./assets/${this.soc}`) }>SocialNetwork
        {/* <span class="drop-icon">▾</span> */}
              {/* <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm8">▾</label> */}
            </a>
            {/* <input type="checkbox" id="sm8"/>
            <ul class="sub-menu">
              <li><a href="#">Blue Bird(Twitter)</a> </li>
            
             <li><a href="#">Facebook</a></li>
              <li><a href="#">Facbook Message</a></li>
              <li><a href="#">Whatsapp Messenger</a></li>
              </ul>   */}
        </li>
        <li><a href ="#" >Parameters
        <span class="drop-icon">▾</span>
              <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm9">▾</label>
            </a>
            <input type="checkbox" id="sm9"/>
            <ul class="sub-menu">
              <li><a href={getAssetPath(`./assets/${this.pr}`) }>Create Parameters</a> </li>
              <li><a href="#">Import Parameters </a> </li>
             
              </ul>
        </li>
				<li><a href ={getAssetPath(`./assets/${this.ca}`) }>Cases
        <span class="drop-icon">▾</span>
              <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm10">▾</label>
            </a>
            <input type="checkbox" id="sm10"/>
            <ul class="sub-menu">
              <li><a href={getAssetPath(`./assets/${this.cca}`) }>Create Cases</a> </li>
              <li><a href={getAssetPath(`./assets/${this.ica}`) }>Import Cases</a> </li>
             
              </ul>
        </li>
        <li><a href ={getAssetPath(`./assets/${this.po}`) }>Potentials
        <span class="drop-icon">▾</span>
              <label title="Toggle Drop-down" class="drop-icon" htmlFor="sm11">▾</label>
            </a>
            <input type="checkbox" id="sm11"/>
            <ul class="sub-menu">
              <li><a href={getAssetPath(`./assets/${this.cpo}`) }>Create Potentials</a> </li>
              <li><a href={getAssetPath(`./assets/${this.ipo}`) }>Import Potentials</a></li>
              </ul>  
        </li>
        <li><a href ={getAssetPath(`./assets/${this.erp}`) }>ERP(Exit)</a></li>
        </ul>
      </nav>
  </div> ];
  }
}
// {getAssetPath(`./src/${this.back}`) }