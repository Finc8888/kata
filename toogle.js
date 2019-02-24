
$(function(){
var counter = callback();
  $('body').on('click','button',function(){
        $('.circle').toggle();
        var show =counter();
        if(show%2==0){
          $('button').html('Показать');
        }
        else {
          $('button').html('Скрыть');
        }
        });

});
function callback(){
  var count = -1;
  function wrapper(){
    count++;
    return count;
  }
  return wrapper;
}
var x = callback();
var y = x();
console.log(x());
console.log(x());
console.log(x());
console.log(x());
