let slider = document.querySelector("img")
let counter =1;
let loop = setInterval(function(){
counter++
(counter===5)?counter=1:counter==counter

    slider.setAttribute("src","images/img-"+counter+".jpg")

},4000)