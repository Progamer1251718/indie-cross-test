'use strict';
  var app =angular.module('animAlikeApp',[]);

        app.controller('FormController',['$scope', function($scope) {
              (function (global) {
                  var nextStatus= global.sessionStorage.getItem("next");
                  console.log(nextStatus);
                  if (nextStatus==='taken'){
                    $('#newEntryForm').modal('toggle');
                    global.sessionStorage.setItem("next","refreshed");
                      console.log(nextStatus  = global.sessionStorage.getItem("next"));
                  }
              }(window));

              (function (global) {
                  $("#subPic").src= global.sessionStorage.getItem("picture");
                  console.log("subpic src= ",  $("#subPic"));
              }(window));
                $("#newEntry,#addNew").click(function(){
                   $('#newEntryForm').modal('toggle');
                  });
                $scope.meesk=  function(){
                  $('#previewCaptionL').css({"display":"inline"});
                  $('#previewCaptionA').css({"display":"none"});
                  $('#looksPic').css({"display":"inline"});
                  $('#actsPic').css({"display":"none"});
                };
              $scope.showPreviewActsName=  function (){
                  $('#previewCaptionA').css({"display":"inline"});
                  $('#previewCaptionL').css({"display":"none"});
                  $('#looksPic').css({"display":"none"});
                  $('#actsPic').css({"display":"inline"});
                };




               $('#newEntryForm').ready(function(){
                 $scope.form={
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
                   var timestampForm=$scope.form.timestamp;
                 $('#last').mouseenter(function(){console.log($scope.form);$scope.timestamp=$scope.form.timestamp;console.log($scope.timestamp);});
                 var  dates=[String(timestampForm.getFullYear()),"-",String(timestampForm.getMonth()+1),"-",
                             String(timestampForm.getDate()),"@",
                             String(timestampForm.getHours()),":",
                             String(timestampForm.getMinutes())];
                 document.getElementById('timestamp').innerHTML=dates.join("");
                



                 $('.celeb').click(function celebutton(){
                   var celebsFirst=["Donald","Barry","Michio","Elon","Pharrel"];
                   var celebsLast=["Trump","Obama","Kaku","Musk","Williams"];
                   var celebsPicURL=["https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS5J2w7olISmt-tT9HAkQ8Ex-wkkzp_tKVVAOY78PG3otCMzmIT",
                   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC3hvNNhS0GEymW7VZZnA0Vp5ZQXD5x5Lpy0Fer4WhsrWzKeLv",
                   "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSKDIiT2RbxuLMAGGyfcVnqSl-DEg76TxCTR6sXFwt4iCqIQA-tyw",
                   "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcThM_1SPGI5xnPaZFVljSrBYUqUy6jwzKOo9AOMHzk7aG6jrsFshA",
                   "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSYCYZqgp30sdfYLD09bf7drrVw0ZhP0beNdFalkwaZdZl7S8iK"];

                   var randNum=Math.floor(Math.random() *5);
                   console.log(randNum);
                   document.getElementById('subPic').src=celebsPicURL[randNum];
                   var celebsFirsty=celebsFirst[randNum];
                   document.getElementById('first').value=celebsFirsty;
                   document.getElementById('last').value=celebsLast[randNum];
                   document.getElementById('nameSpan').innerHTML=celebsFirsty+"'s Portrait";
                   document.getElementById('nameSpan1').innerHTML=celebsFirsty;
                   document.getElementById('nameSpan2').innerHTML=celebsFirsty;
                 });

                 var picSource=$('#subPic').src;
                 if (picSource===undefined){
                   console.log('it"s not defined',picSource);
                //  }
                //  var picSourceArrayLength=picSourceArray.length
                //  var picSourceCheck=""
                // picSourceCheck=picSourceArray.slice(picSourceArrayLength-4,picSourceArrayLength).join("")
                //
                //  if (picSourceCheck=="null"){
                  //  $('.tooltipBrowse').css({
                  //    'display':'inline'
                  //  });
                  // $('.tooltipBrowse>input').attr("ng-mouseenter","style='position:absolute;left:35%;top:130px;display:inherit'")
                  // console.log("what is mouseenter2: "+$('.tooltipBrowse').attr("ng-mouseenter"))
                   $('#subPic').css({
                     'height':'165px'
                   });
                 }
                 else {
                   $('.tooltipBrowse').css({
                   "position":"absolute","left":'68%',"top":"180px"
                 });
               }
                 $('.carousel').carousel({
                      interval: 5000
                  });
                  $('.carousel .item').each(function () {
                      var next = $(this).next();
                      if (!next.length) {
                          next = $(this).siblings(':first');
                      }
                      next.children(':first-child').clone().appendTo($(this));
                      for (var i = 0; i < 2; i++) {
                          next = next.next();
                          if (!next.length) {
                              next = $(this).siblings(':first');
                          }
                          next.children(':first-child').clone().appendTo($(this));
                      }
                  });
                  $('#browsePath').click(function(){
                      if ($('#browsePath').value!==undefined){
                        console.log($('browsePath').value);
                      }
                      else {
                        console.log("it's not defined yet");
                      }
                    });
                  $('.center-block').click(function(){
                        var categorySourceArray=$(this).context.src.split("");
                        var category="";
                        for (var i=0;i<categorySourceArray.length;i++){
                          if (categorySourceArray[i]+categorySourceArray[i+1]+categorySourceArray[i+2]==="img"){
                              category=(categorySourceArray.slice(i+4,categorySourceArray.length-4)).join("");
                              console.log(category);
                              break;
                          }
                        }
                        var element=document.getElementsByClassName(category);
                        console.log(element);
                        $(element).css({"display":"inline"});

                        $('#pixCarousel').css({
                          'display':'none'
                        });

                        $('#backButtonFormGroup').css({
                          'display':'inline'
                        });
                        $('.sub>.carousel-inner>.item').css({
                          'display':'inline'
                        });
                    });
                    $('#backBtn').click(function(){
                      $('#pixCarousel').css({
                        'display':'initial'
                      });
                      $('#backButtonFormGroup').css({
                        'display':'none'
                      });
                      $('.sub').css({"display":"none"});
                    });
                    // click on animal picture
                    $('.sub img').click(function(){
                      console.log($(this));
                      $('#pixCarousel').css({
                        'display':'initial'
                      });

                      $('#backButtonFormGroup').css({
                        'display':'none'
                      });
                      $('.sub').css({"display":"none"});
                      var isLooksActive=document.getElementById('looks').className.split(" ");
                      var source=$(this).context.currentSrc.split("");
                      var animal="";
                      for (var i=0;i<source.length;i++){
                        if (source[i]+source[i+1]+source[i+2]==="img"){
                            animal=(source.slice(i+4,source.length-4)).join("");
                            console.log(animal);
                            break;
                          }
                      }
                      if(isLooksActive[2]){
                        document.getElementById('looksPic').src=$(this).context.currentSrc;
                        document.getElementById('previewCaptionL').innerHTML=animal;
                      }
                      else{
                        document.getElementById('actsPic').src=$(this).context.currentSrc;
                        document.getElementById('previewCaptionA').innerHTML=animal;
                      }
                    });
                  $('#acts').click(function(){
                    console.log($(this));
                    $('.actsShow').css({
                          'display':'inline'
                      });

                    $('.looksShow').css({
                        'display':"none"
                      });
                  });
                  $('#looks').click(function(){
                    console.log($(this));
                    $('.looksShow').css({
                          'display':'inline'
                      });

                    $('.actsShow').css({
                        'display':"none"
                      });
                  });
                    $('.moreInfoSwitch').click(function(){
                    console.log($(this));
                    var classname=(this.className.split(" "))[1];
                    console.log(classname);
                    var classyEls=document.getElementsByClassName(classname);
                    console.log(classyEls);
                    for (var i=0;i<classyEls.length;i++){
                      var classes=classyEls[i].className;
                      console.log(i,classes.split(" ")[0],classyEls[i],classname);
                      if (classes.split(" ")[0]==='moreInfo'){
                        $(classyEls[i]).css({
                          'display':'inline'
                        });
                      }
                      else if (classes.split(" ")[0]==='moreInfoSwitch'){
                          $(classyEls[i]).css({
                            'display':"none"
                          });
                      }
                    }
                  });
                  $('.less').click(function(){
                    console.log($(this));
                    var lessClass=this.className.split(" ")[1];
                    console.log(lessClass);
                    var classfulEls=document.getElementsByClassName(lessClass);
                    console.log(classfulEls);
                    for (var i=0;i<classfulEls.length;i++){
                      var classes=classfulEls[i].className;
                      console.log(i,classes.split(" ")[0],classfulEls[i],lessClass);
                      if (classes.split(" ")[0]==='moreInfo'){
                        $(classfulEls[i]).css({
                          'display':'none'
                        });
                      }
                      else if (classes.split(" ")[0]==='moreInfoSwitch'){
                          $(classfulEls[i]).css({
                            'display':"inline"
                          });
                      }
                    }
                  });


                });

            $scope.showTip= function(){
               $('.tooltipText').css({
                 "display":"inline"
               });
               $('.tooltipBrowse').css({
                 "display":"inline"
               });

             };
             $scope.hideTip= function(){
               $('.tooltipText').css({
                 "display":"none"
               });
               $('.tooltipBrowse').css({
                 "display":"none"
               });
             };



    }]);

    app.controller('EntryController',['$scope', function($scope) {

      var entry={
          name:'Jake',
          image: '../img/alberto.png',
          category: 'rodents',
          label:'animal',
          timestamp:'04/09/1987',
          animActs:  '../img/bear.png',
          actsCaption: 'bear',
          animLooks:  '../img/pig.png',
          looksCaption: 'pig',
          description:'Almost looks just like a dude.',
                 comments: [
                     {
                         rating:5,
                         comment:"Imagine all the eatables, living in conFusion!",
                         author:"John Lemon",
                         date:"2012-10-16T17:57:28.556094Z"
                     },
                     {
                         rating:4,
                         comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                         author:"Paul McVites",
                         date:"2014-09-05T17:57:28.556094Z"
                     },
                     {
                         rating:3,
                         comment:"Eat it, just eat it!",
                         author:"Michael Jaikishan",
                         date:"2015-02-13T17:57:28.556094Z"
                     },
                     {
                         rating:4,
                         comment:"Ultimate, Reaching for the stars!",
                         author:"Ringo Starry",
                         date:"2013-12-02T17:57:28.556094Z"
                     },
                     {
                         rating:2,
                         comment:"It's your birthday, we're gonna party!",
                         author:"25 Cent",
                         date:"2011-12-02T17:57:28.556094Z"
                     }

                 ]
              };
              $scope.entry=entry;

          // var captions=['#looksCaption','#personCaption','#actsCaption']
          // var picSet=[]
          // var  captionLength=0
          // picSet=$('.img-thumbnail')
          // for (var j=0;j<3;j++){
          //     caption= picSet[j].src.split("")
          //     console.log(picSet[j].className)
          //     for (var i=0;i<caption.length;i++){
          //       if (caption[i]+caption[i+1]+caption[i+2]=="img"){
          //           var caption=(caption.slice(i+4,captionLength-4)).join("")
          //           console.log("hi"+caption)
          //           if (j==0){$('.label')["0"].innerHTML=caption}
          //           break
          //         }
          //
          //     };
          //     console.log($('.label'))
          //     $(captions[j])["0"].innerHTML=caption
          // }

       // entry controller
       $scope.repeat=function(){
        var classes=$(' .three, .two');
        console.log(classes);
        var twoCss=Number(classes["0"].style.animationIterationCount)+1;
        var threeCss=Number(classes[1].style.animationIterationCount)+1;
        classes.css({"animation-iteration-count":String(twoCss)});
        console.log(twoCss,threeCss);

      };

       $scope.pause=function(){
        var classes=$(' .three, .two');
        classes.css({"animation-play-state": "paused"});
        $('button:first-of-type').css({"z-index":"0"});
        $('#play').css({"z-index":"1"});
      };

      $scope.play=function(){
        var button=$('button');
        button[1].draggable=true;
        var classes=$(' .three, .two');
        classes.css({"animation-play-state": "running"});
        $('#play').css({"z-index":"0"});
        $('button:first-of-type').css({"z-index":"1"});
      };
    }]);
