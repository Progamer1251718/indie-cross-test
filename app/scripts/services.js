'use strict';
  var app =angular.module('animAlikeApp');
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


  // var formdeets=[];
  // var entries=[];
  //

  var form={
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
    // formfac.getEntries=function(){
    //   return entries;
    // };
    // formfac.getEntry=function(index){
    //   return entries[index];
    // };


});
