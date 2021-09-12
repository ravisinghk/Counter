let count = 0;

// select value and btns
let btns = document.querySelectorAll(".btn");
let value = document.querySelector("#value");

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        let style = e.currentTarget.classList;
        if(style.contains("decrease")){
            count--;
            
        }
        else if(style.contains("increase")){
            count++;
        }
        else {
            count=0;
        }

        if(count > 0){
            value.style.color = "green";
        }
        else if(count < 0){
            value.style.color = "red";
        }
        else if(count === 0){
            value.style.color = "black";
        }

        value.textContent = count;
    });
});