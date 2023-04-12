import { LightningElement, wire } from 'lwc';
import fetchContact from '@salesforce/apex/AccountHandler.getContacts';
import fetchOpportunity from '@salesforce/apex/AccountHandler.getOpp';
import fetchCase from '@salesforce/apex/AccountHandler.getCase';

conCol=[{label:'Name',fieldName:'Name',editable:true},
        {label:'Email',fieldName:'Email',editable:true}];

oppCol=[{label:'Name',fieldName:'Name',editable:true},
        {label:'Amount',fieldName:'Amount',editable:true}];

caseCol=[{label:'Case Number',fieldName:'CaseNumber',editable:true},
         {label:'Origin',fieldName:'Origin',editable:true}];

export default class RelatedComponent extends LightningElement {
    selectedValue;getContact=false;getOpp=false;getCase=false;
    
    contactCol=conCol;
    contactData=[];
    
    opportunityCol=oppCol;
    oppData=[];

    casesCol=caseCol;
    caseData=[];

    get option()
    {
        return [{label:'Contacts',value:'Contact'},
               {label:'Opportunities',value:'Opportunity'},
               {label:'Cases',value:'Case'}];
    }

    handleChange(event)
    {
        this.selectedValue=event.target.value;
        if(this.selectedValue=='Contact')
        {
            this.getContact=true;
            this.getOpp=false;
            this.getCase=false;
        } 
        else  if(this.selectedValue=='Opportunity')
        {
            this.getContact=false;
            this.getOpp=true;
            this.getCase=false;
        }
        else  if(this.selectedValue=='Case')
        {
            this.getContact=false;
            this.getOpp=false;
            this.getCase=true;
        }
    }

    @wire(fetchContact)
    wireCon({error,data})
    {
        if(data)
        {
            this.contactData=data;
        }
        if (error)
        {
            console.log(JSON.stringify(error));
        }
    }

    @wire(fetchOpportunity)
    wireCon({error,data})
    {
        if(data)
        {
            this.oppData=data;
        }
        if (error)
        {
            console.log(JSON.stringify(error));
        }
    }

    @wire(fetchCase)
    wireCon({error,data})
    {
        if(data)
        {
            this.caseData=data;
        }
        if (error)
        {
            console.log(JSON.stringify(error));
        }
    }
}