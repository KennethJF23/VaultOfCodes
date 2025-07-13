const scrollBtn = document.getElementById("scrolltoTop")

scrollBtn.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});