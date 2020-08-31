//constant declarations
const mainChar = document.querySelector("#main-char");
        const score = document.querySelector(".score");
        const sideChick = document.querySelector("#side-chick");
        const dialogue = document.querySelector(".dialogue");
        let counter = 0;
        let log = console.log;
        let gameOverString = document.querySelector(".game-over");
        let reloadPage = document.querySelector(".reload");


       //these items will be displayed once the game is over
         reloadPage.style.display = "none";
         gameOverString.style.display = "none";
         
        //this is to get random quotes to display in game
        let array = ['good job','going strong','keep at it','kidding me?','wow! pro','amazing','bravo!!!'];
        
            let random = Math.floor(Math.random()*7);
       //function for random quotes
            function handleArray() {
                dialogue.innerText = array[random];
                console.log(array[random]);
                setTimeout(function() {dialogue.innerText = ''},22000)
                
            }
             //quotes will be displayef every 20secs
            setInterval(handleArray, 20000); 
        
        //FUNCTION to make character jump
        function handleJump(event) {
            log("hey threre");
            if( event.keyCode === 32) {
            mainChar.classList.add("animate");
                setTimeout(function() {
                    mainChar.classList.remove("animate");
                }, 1600);
            }
             };
        // this FUCTION is to display and update Score
        function handleScore() {
            
            counter = counter +1;
            score.innerText = `${counter}`;
            gameOverString.innerHTML = `game over: score is ${counter} `
        }

//function, to reload page
function reloadThePage() {
    window.location.reload(true);
    
}
//eventListner to handle the keys and make char jump
       window.addEventListener("keydown", handleJump);
//event listner to reload the page
       reloadPage.addEventListener("click",reloadThePage);
       //to stop the counter
     const removeIntervel = setInterval(handleScore,2000);
    
 //this will trigger when game is over    
function gameOver() {
    var charTop = parseInt(window.getComputedStyle(mainChar).getPropertyValue("top"));
        
    var sideLeft =parseInt(window.getComputedStyle(sideChick).getPropertyValue("left"));
    
    if(sideLeft < 180  && sideLeft >0 && charTop >= 250)  {
        sideChick.style.display = "none";
        gameOverString.style.display = "block";
        log(charTop + "just to make sure");
        clearInterval(removeIntervel);
        reloadPage.style.display = "block"; 
    }
}
   
setInterval(gameOver,500);
    