'use strict';
  var app =
angular.module('animAlikeApp',[])

        .controller('FormController',['$scope', function($scope) {
              (function (global) {
                  var nextStatus= global.sessionStorage.getItem("next");
                  console.log(nextStatus)
                  if (nextStatus=='taken'){
                    $('#newEntryForm').modal('toggle');
                    global.sessionStorage.setItem("next","refreshed")
                      console.log(nextStatus  = global.sessionStorage.getItem("next"));
                  }
              }(window));
            }]);

    (function (global) {
        $("#subPic").src= global.sessionStorage.getItem("picture");
        console.log("subpic src= ",  $("#subPic"))
    }(window));

  $("#newEntry,#addNew").click(function(){
     $('#newEntryForm').modal('toggle');
      });


     $('#newEntryForm').ready(function(){
       var picSourceArray=$('#subPic').src
       if (picSourceArray==undefined){
         console.log('it"s not defined',picSourceArray)
      //  }
      //  var picSourceArrayLength=picSourceArray.length
      //  var picSourceCheck=""
      // picSourceCheck=picSourceArray.slice(picSourceArrayLength-4,picSourceArrayLength).join("")
      //
      //  if (picSourceCheck=="null"){
         $('.tooltipBrowse').css({
           'display':'inline'
         });

        $('.tooltipBrowse').attr("onmouseenter","style='position:absolute;left:35%;top:150px;display:inherit'")
        console.log("what is mouseenter2: "+$('.tooltipBrowse').attr("onmouseenter"))
         $('#subPic').css({
           'height':'165px'
         })
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
            if ($('#browsePath').value!=undefined){
              console.log($('browsePath').value)
            }
            else {
              console.log("it's not defined yet")
            };
          });
        $('.center-block').click(function(){
              var categorySourceArray=$(this).context.src.split("");
              for (var i=0;i<categorySourceArray.length;i++){
                if (categorySourceArray[i]+categorySourceArray[i+1]+categorySourceArray[i+2]=="img"){
                    var category=(categorySourceArray.slice(i+4,categorySourceArray.length-4)).join("")
                    console.log(category)
                    break
                }
              }
              var element=document.getElementsByClassName(category)
              console.log(element)
              $(element).css({"display":"inline"})

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
            $('.sub').css({"display":"none"})
          })
          // click on animal picture
          $('.sub img').click(function(){
            console.log($(this))
            $('#pixCarousel').css({
              'display':'initial'
            });

            $('#backButtonFormGroup').css({
              'display':'none'
            });
            $('.sub').css({"display":"none"});
            var isLooksActive=document.getElementById('looks').className.split(" ")
            var source=$(this).context.currentSrc.split("")
            for (var i=0;i<source.length;i++){
              if (source[i]+source[i+1]+source[i+2]=="img"){
                  var animal=(source.slice(i+4,source.length-4)).join("")
                  console.log(animal)
                  break
                }
            };
            if(isLooksActive[2]){

              document.getElementById('looksPic').src=$(this).context.currentSrc

              document.getElementById('looksAnim').innerHTML=animal
            }
            else{
              document.getElementById('actsPic').src=$(this).context.currentSrc

              document.getElementById('actsAnim').innerHTML=animal
            }

          })

        // var firstName  = document.getElementById("first");
        // var nameSpan  = document.getElementById("nameSpan");
        // var nameSpan1= document.getElementById("nameSpan1");
        //   var nameSpan2= document.getElementById("nameSpan2");
        // // if (firstName.value!=null) {
        //   nameSpan.innerHTML=firstName.value+"'s Portrait";
        //   nameSpan1.innerHTML=firstName.value;
        //   nameSpan2.innerHTML= firstName.value
        // // };
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
          var classyEls=document.getElementsByClassName(classname)
          console.log(classyEls)
          for (var i=0;i<classyEls.length;i++){
            var classes=classyEls[i].className
            console.log(i,classes.split(" ")[0],classyEls[i],classname)
            if (classes.split(" ")[0]=='moreInfo'){
              $(classyEls[i]).css({
                'display':'inline'
              });
            }
            else if (classes.split(" ")[0]=='moreInfoSwitch'){
                $(classyEls[i]).css({
                  'display':"none"
                });
            };
          };
        });
        $('.less').click(function(){
          console.log($(this));
          var lessClass=this.className.split(" ")[1];
          console.log(lessClass);
          var classfulEls=document.getElementsByClassName(lessClass)
          console.log(classfulEls)
          for (var i=0;i<classfulEls.length;i++){
            var classes=classfulEls[i].className
            console.log(i,classes.split(" ")[0],classfulEls[i],lessClass)
            if (classes.split(" ")[0]=='moreInfo'){
              $(classfulEls[i]).css({
                'display':'none'
              });
            }
            else if (classes.split(" ")[0]=='moreInfoSwitch'){
                $(classfulEls[i]).css({
                  'display':"inline"
                });
            };
          };
        });


      });

   function showTip(){
     $('.tooltipText').css({
       "display":"inline"
     });
     $('.tooltipBrowse').css({
       "display":"inline"
     })

   }
   function hideTip(){
     $('.tooltipText').css({
       "display":"none"
     })
     $('.tooltipBrowse').css({
       "display":"none"
     })
   }



       // entry controller
       function repeat(){
        var classes=$(' .three, .two')
        console.log(classes)
        var twoCss=Number(classes["0"].style.animationIterationCount)+1
        var threeCss=Number(classes[1].style.animationIterationCount)+1
        classes.css({"animation-iteration-count":String(twoCss)})
        console.log(twoCss,threeCss)

      }

      function pause(){
        var classes=$(' .three, .two')
        classes.css({"animation-play-state": "paused"})
        $('button:first-of-type').css({"z-index":"0"})
        $('#play').css({"z-index":"1"})
       }

      function play(){
        var button=$('button')
        button[1].draggable=true
        var classes=$(' .three, .two')
        classes.css({"animation-play-state": "running"})
        $('#play').css({"z-index":"0"})
        $('button:first-of-type').css({"z-index":"1"})
      }
