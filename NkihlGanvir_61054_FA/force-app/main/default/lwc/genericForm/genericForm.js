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
        } else if (error) {
           console.log(error);
        }
    }

    renderedCallback()
    {
      if(this.Oname=='Contact')
      {
        this.flag=true;
      }
      else if(this.Oname=='Opportunity')
      {
        this.flagO=true;
      }
      else if(this.Oname=='Case')
      {
        this.flagCa=true;
      }
    }
}