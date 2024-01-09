
const copyText = document.querySelector("#copyText");
         const pasteText = document.querySelector("#pasteText");
         const button = document.querySelector("button");
         const tooltip = document.querySelector(".tooltip");
         button.addEventListener('click', function(){
           copyText.select();
           pasteText.value = "";
           tooltip.classList.add("show");
           setTimeout(function(){
             tooltip.classList.remove("show");
           },700);
           if(document.execCommand("copy")){
             pasteText.focus();
           }else{
             alert("Something went wrong!");
           }
         });

