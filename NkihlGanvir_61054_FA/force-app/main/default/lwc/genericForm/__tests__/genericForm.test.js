/* eslint-disable no-unused-vars */
import { createElement } from 'lwc';
import GenericForm from 'c/genericForm';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';


describe('c-generic-form', ()=>{
  afterEach(()=>{
    while(document.body.firstChild){
        document.body.removeChild(document.body.firstChild);
    }
  });

  beforeEach(()=>{
    const element= createElement('c-generic-form',{
        is:GenericForm
    })
    document.body.appendChild(element);
  });

 const mRelatedData=require('./data/mockRelatedData.json')
  it('Test Component',()=>{
    const element=document.body.querySelector('c-generic-form');
    getRelatedListRecords.emit(mRelatedData);
    expect(element).toBeUndefined();
  })


})

