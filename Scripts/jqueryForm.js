$(function(){

    var defParams = {
        sTitle:"jQuery Plugin Form",
        sAction:" ",
        sRadioName:"RadioOptions",
        sButtonText:"Submit",
        oFields:["Name","text","Phone Number","text","Age","number","Email","email","Attachment","file"],
        oRadio:["Female","Male"],
        sFormClass:"jumbotron",
        sInputClass:"form-control",
        sButtonsClass:"btn btn-default btn-lg"
    };
    
   $.fn.Form = function(customParams){        
       
       var oParams = $.extend({},defParams,customParams);
       
      var oForm = $("<form />",{class:oParams.sFormClass,method:"post",action:oParams.sAction})
                       .appendTo(this); 
      
      oForm.prepend("<h1>"+oParams.sTitle+"</h1>"); 
       
      var oDivFields =  $("<div/>",{}).appendTo(oForm);
       
       for(i = 0; i < oParams.oFields.length;i = i + 2)
       {
           $("<label/>",{text:oParams.oFields[i],"for":oParams.oFields[i]}).appendTo(oDivFields);
           $("<input/>",{type:oParams.oFields[i + 1],name:oParams.oFields[i],class:oParams.sInputClass})
               .appendTo(oDivFields);
           $("<br />").appendTo(oDivFields);
       }          
       
      var oDiv = $("<div/>",{}).appendTo(oForm);        
       
      for(i = 0; i < oParams.oRadio.length;i++)
      {
          
          
          $("<input/>",
            { 
               type:"radio",               
               name:oParams.sRadioName,
               id:oParams.oRadio[i] ,
               value:oParams.oRadio[i]
            }
           ).appendTo(oDiv);
          
          
          
          $("<label/>",{
              text:oParams.oRadio[i],
              "for":oParams.oRadio[i]
              
          }).appendTo(oDiv);
          
          $("<br />").appendTo(oDiv);
      }
       
       var oBtnDiv = $("<div/>",{style:"text-align:center;"}).appendTo(oForm);
       
       $("<button/>",{
           text:oParams.sButtonText,
           class:oParams.sButtonsClass
       }).appendTo(oBtnDiv);
       $("<input/>",{
           type:"reset",
           text:"Reset",
           class:oParams.sButtonsClass
       }).appendTo(oBtnDiv);
        $("<label/>",{text:"By CarmelSoftware - The MVC Club",style:"font:800 8px Comic Sans MS;"}).appendTo(oForm);
        
       return this;
   };
})
