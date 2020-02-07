({
    selectEntry : function(component, event, helper){
        var autoCompleteId = component.get("v.autoCompleteId");
        var entry = component.get("v.entry");
        var compEvent = component.getEvent("AutocompleteSelectEvent");
        compEvent.setParams({"autoCompleteId" : autoCompleteId, "entry" : entry });
        compEvent.fire();
    },
})