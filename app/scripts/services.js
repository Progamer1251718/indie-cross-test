'use strict';
  var app =angular.module('animAlikeApp',[]);
app.service('formService', function() {
  var formInputs = [];

  var addInfo = function(newObj) {
      formInputs.push(newObj);
  };

  var getInfo = function(){
      return formInputs;
  };

  return {
    addInfo: addInfo,
    getInfo: getInfo
  };

});
