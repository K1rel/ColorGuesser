function changeColor() {
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
  }

  function game(){
      var colors = ["red","blue","green","brown","black","orange"];
     var color = colors[Math.floor(Math.random() * colors.length)];
     
      document.getElementById("prvo").remove();
      document.getElementById("vtoro").remove();
      
      for(i = 0;i<colors.length;i++){
        var novo =  document.body.appendChild(document.createElement("button"));
        novo.innerText = colors[i];
        novo.addEventListener("click", function() {
          displayWin(this, color);
        });
       
      }
      console.log(color);
   

  }

  function displayWin(button,col){

    if(button.innerText === col){
      document.body.style.backgroundColor = '#7CFC00';
      createConfetti();
     
    }
    else{
     document.body.style.backgroundColor = ' #FF2400';
     alert("You lost!");
    }

  }

  function createConfetti() {
    const confettiCount = 50;
    const confettiColors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    const confettiElements = [];
  
    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
      confetti.style.left = Math.random() * window.innerWidth + 'px';
      confetti.style.top = '-20px';
      confetti.style.width = Math.random() * 20 + 10 + 'px';
      confetti.style.height = confetti.style.width;
      confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
      document.body.appendChild(confetti);
      confettiElements.push(confetti);
    }
  
    confettiElements.forEach((confetti) => {
      const animationDuration = Math.random() * 2 + 3;
      const animationDelay = Math.random() * 2;
      const animation = confetti.animate([
        { transform: `translateY(0)`, opacity: 1 },
        { transform: `translateY(${window.innerHeight + 50}px)`, opacity: 0 }
      ], {
        duration: animationDuration * 1000,
        delay: animationDelay * 1000,
        iterations: Infinity,
        easing: 'ease-in-out'
      });
    });
  }
  
