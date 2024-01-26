let menu=document.querySelector("i");
let count=0;

menu.addEventListener("click",function(){
    if(count==0){
        let ss=document.querySelector(".addition");
    ss.style.opacity="1";
    menu.style.opacity="0.3"
    count=1;
    }else{
        let ss=document.querySelector(".addition");
        ss.style.opacity="0";
        menu.style.opacity="1"
        count=0;
    }
    
})
