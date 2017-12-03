$(document).ready(function(){

//prepopulate the numbers for top 10 items into HTML
for(var i=1; i<=10; i++){
    var number = 2000 - i*53;
    var thisElement = document.getElementsByClassName('number')[i-1];
    if (localStorage.getItem(i) == number + 1){
        thisElement.innerHTML = localStorage.getItem(i).toString();
        thisElement.nextSibling.className = "heart like";
        }else{
          localStorage.setItem(i, number);
          thisElement.innerHTML = localStorage.getItem(i).toString()
        };
  };

//like button number +1 and save to localstorage
  $('.rateSystem').click(function(){
    $(this).find('.heart').toggleClass('like unlike');
    var x = parseInt($(this).find('.number').text());
    if($(this).find('.heart').hasClass('like')){
      x++;
    }else{x--};
    localStorage.setItem(this.id, x);

    $(this).find('.number').text(localStorage.getItem(this.id));
    document.getElementById(this.id).find('.number').text(localStorage.getItem(this.id));
  });

//prepopulate the numbers for last 10 items into HTML
  for(var i2=1; i2<=10; i2++){
      var number2 = 1470 - i2*53;
      var thisElement2 = document.getElementsByClassName('lastTen')[i2-1];
      var identicator = 10 + i2;
      if (localStorage.getItem(identicator) == number2 + 1){
          thisElement2.innerHTML = localStorage.getItem(identicator).toString();
          thisElement2.nextSibling.className = "heart like";
          }else{
            localStorage.setItem(identicator, number2);
            thisElement2.innerHTML = localStorage.getItem(identicator).toString()
          };
    };

});
