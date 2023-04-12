public with sharing class AccountHandler {
  @Auraenabled (cacheable=true)
    public static list<contact> getContacts(id accountRecordId)
    {
        return [SELECT id,Name,Email from Contact where AccountId=:accountRecordId];
    }

    @Auraenabled (cacheable=true)
    public static list<Opportunity> getOpp(id accountRecordId)
    {
        return [SELECT id,Name,Amount from Opportunity where AccountId=:accountRecordId];
    }

    @Auraenabled (cacheable=true)
    public static list<Case> getCase(id accountRecordId)
    {
        return [SELECT id,CaseNumber,Origin from Case where AccountId=:accountRecordId];
    }
}