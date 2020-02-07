/**
 * Created by alexlazarovski on 2019-06-06.
 */

public with sharing class NewCaseListController {

    public List<Case> getNewCases() {

        List<Case> results = [SELECT ID, CaseNumber FROM Case WHERE Status = 'New'];

        return results;
    }

}