'use strict';
  var app =angular.module('animAlikeApp').constant("baseURL","http://localhost:3000/");
// app.service('formService', function() {
//   var formInputs = [];
//
//   var addInfo = function(newObj) {
//       formInputs.push(newObj);
//   };
//
//   var getInfo = function(){
//       return formInputs;
//   };
//
//   return {
//     addInfo: addInfo,
//     getInfo: getInfo
//   };
//
// });
app.service('formFactory',function(){
  var form={
    _id:0,
    first:'',
    last:'',
    image: '',
    category: '',
    timestamp: new Date(),
    animActs:  '',
    actsCaption: '',
    animLooks:  '',
    looksCaption: '',
    description:'',};
    var timestampForm=form.timestamp;
    var  dates=[String(timestampForm.getFullYear()),"-",String(timestampForm.getMonth()+1),"-",
                String(timestampForm.getDate()),"@",
                String(timestampForm.getHours()),":",
                String(timestampForm.getMinutes())];
    document.getElementById('timestamp').innerHTML=dates.join("");


    this.getForm=function(){
      return form;
    };
  });

app.service('entriesFactory',['$resource','baseURL',function($resource,baseURL){
    this.getEntries=function(){
      return $resource(baseURL+"entries/:id",null,{'update':{method:'PUT'}});
    };
}]);
