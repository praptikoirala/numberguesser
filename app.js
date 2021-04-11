const num = document.querySelector('.user-inp');
const box = document.querySelector('.main-sec');
const btn = document.querySelector('#submit-btn');
const message = document.querySelector('.display-msg');
var counter = 3;

btn.addEventListener('click', btnClicked);

box.addEventListener('mousedown',reset);

function reset(e){
    if(e.target.className === 'play-again'){
       window.location.reload();
    }
}

function btnClicked(e){
    e.preventDefault();    

    let number = parseInt(num.value);

    if(number < 1 || number > 10 || isNaN(number)){

        num.value = '';
        setMessage(`Please enter a number between 1 and 10` , 'red');
        counter = 3;

    }else{
        var res = Math.floor(Math.random()*10 + 1);
        // var res = 3;

        if(res == number){

            endGame(true , `${number} is correct.You won!`);
    
        }else if(res != number){ 
            counter -= 1;
    
            if(counter >= 1 && counter < 3){

                setMessage(`Incorrect.${counter}  more guess left.`, 'red');

            }else{

                num.value = '';
                endGame(false , `Game over.Correct number is ${res}`);

            }
        }

        // if(counter >= 1 && counter <=3){

        //     if(res == number){

        //         endGame(true , `${number} is correct.You won!`);

        //     }else if(res != number){ 

        //         setMessage(`Incorrect.${counter}  more guess left.`, 'red');
        //         counter -= 1;
        //     }

        // }else{
            
        //     num.value = '';
        //     endGame(false , `Game over.Correct number is ${res}`);
            
        // }

    }
}

function endGame(situation , msg){
    let color;
    situation === true ? color = 'green' : color = 'red';

    counter = 3;
    num.disabled = true;
    // num.style.borderColor = color;
    // message.style.color = color;
    setMessage(msg , color);

    btn.value = 'Play Again';
    btn.className += 'play-again';
}

function setMessage(msg , col){
    num.style.borderColor = col;
    message.style.color = col;
    message.textContent = msg;
}
