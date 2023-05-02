/* eslint-disable @lwc/lwc/no-leading-uppercase-api-name */
import { LightningElement, wire ,api} from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';

export default class GenericForm extends LightningElement {
    contactRecord;
    opportunityRecord;
    caseRecord;

    flag=false;
    flagO=false;
    flagCa=false;

    @api Oname; 
    @api recordId;
    
    get Obname()
    {
        return 'Related '+this.Oname;
    }
    
    @wire(getRelatedListRecords, {
        parentRecordId: '$recordId',
        relatedListId:'Contacts',
        fields: ['Contact.Id','Contact.Name'],})
    listInfoCon({ error, data }) 
    {
        if (data) {
            this.contactRecord = data.records;
            console.log('Contact Record'+JSON.stringify(data))
        } else if (error) {
           console.log(error);
        }
    }
    @wire(getRelatedListRecords, {
        parentRecordId: '$recordId',
        relatedListId:'Opportunities',
        fields: ['Opportunity.Id','Opportunity.Name'],})
    listInfoOpp({ error, data }) 
    {
        if (data) {
            this.opportunityRecord = data.records;
            console.log('Opportunity Record'+JSON.stringify(data))
        } else if (error) {
           console.log(error);
        }
    }

    @wire(getRelatedListRecords, {
        parentRecordId: '$recordId',
        relatedListId:'Cases',
        fields: ['Case.Id','Case.CaseNumber'],})
    listInfoCa({ error, data }) 
    {
        if (data) {
            this.caseRecord = data.records;
            console.log('Case Record'+JSON.stringify(data))
        } else if (error) {
           console.log(error);
        }
    }

    connectedCallback()
    {
      if(this.Oname==='Contact')
      {
        this.flag=true;
      }
      else if(this.Oname==='Opportunity')
      {
        this.flagO=true;
      }
      else if(this.Oname==='Case')
      {
        this.flagCa=true;
      }
    }
}