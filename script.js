// Elements
const startBtn = document.getElementById('startBtn');
const replayBtn = document.getElementById('replayBtn');
const starter = document.getElementById('starter');
const caption = document.getElementById('caption');
const subtitle = document.getElementById('subtitle');
const girl = document.getElementById('girl');
const boy = document.getElementById('boy');
const scootyContainer = document.getElementById('scootyContainer');
const together = document.getElementById('together');
const phoneCall = document.getElementById('phoneCall');
const girlPhone = document.getElementById('girlPhone');
const boyPhone = document.getElementById('boyPhone');
const loveText = document.getElementById('loveText');
const greetingBubble = document.getElementById('greetingBubble');
const bgMusic = document.getElementById('bgMusic');
const ringtone = document.getElementById('ringtone');
const heartSound = document.getElementById('heartSound');
const voiceSound = document.getElementById('voiceSound');
const hearts = [
  document.getElementById('heart1'),
  document.getElementById('heart2'),
  document.getElementById('heart3')
];
const girlBlush = document.querySelectorAll('.girl .blush');
const boySmile = document.querySelector('.boy .smile');

// Messages
const messages = [
  { element: document.getElementById('hisText1'), delay: 2000 },
  { element: document.getElementById('herText1'), delay: 4000 },
  { element: document.getElementById('hisText2'), delay: 6000 },
  { element: document.getElementById('herText2'), delay: 8000 },
  { element: document.getElementById('hisText3'), delay: 10000 }
];

// Create confetti
function createConfetti() {
  const colors = ['#ff2d95', '#ff7a2d', '#2d95ff', '#7aff2d', '#ffd700'];
  const scene = document.getElementById('scene');
  
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.width = Math.random() * 10 + 5 + 'px';
    confetti.style.height = Math.random() * 10 + 5 + 'px';
    confetti.style.animationDelay = Math.random() * 2 + 's';
    confetti.style.animationDuration = Math.random() * 3 + 4 + 's';
    scene.appendChild(confetti);
    
    setTimeout(() => {
      confetti.remove();
    }, 10000);
  }
}

// Create balloons
function createBalloons() {
  const colors = ['#ff2d95', '#ff7a2d', '#2d95ff', '#7aff2d', '#ffd700'];
  const scene = document.getElementById('scene');
  
  for (let i = 0; i < 5; i++) {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = Math.random() * 80 + 10 + 'vw';
    balloon.style.background = colors[Math.floor(Math.random() * colors.length)];
    balloon.style.animationDelay = i * 2 + 's';
    scene.appendChild(balloon);
    
    setTimeout(() => {
      balloon.remove();
    }, 18000);
  }
}

// Show messages one by one
function showMessages() {
  messages.forEach((msg, index) => {
    setTimeout(() => {
      msg.element.style.display = 'inline-block';
    }, msg.delay);
  });
}

// Story sequence
function startStory() {
  starter.style.display = 'none';
  bgMusic.volume = 0.3;
  bgMusic.play().catch(e => console.log("Autoplay prevented:", e));
  
  caption.textContent = "December at Eternity Mall, Nagpur";
  subtitle.textContent = "I was waiting near the stairs, wearing my glasses...";
  
  setTimeout(() => {
    girl.classList.add('walking');
    girl.style.left = '40vw';
    
    setTimeout(() => {
      ringtone.play();
      girlPhone.style.opacity = '1';
      boyPhone.style.opacity = '1';
      phoneCall.classList.add('show');
      
      showMessages();
      
      setTimeout(() => {
        caption.textContent = "The phone rings...";
        subtitle.textContent = "Ankush is calling from outside the mall";
      }, 1000);
      
      setTimeout(() => {
        phoneCall.classList.remove('show');
        girlPhone.style.opacity = '0';
        boyPhone.style.opacity = '0';
        scootyContainer.style.right = '40vw';
        boy.classList.add('riding');
        
        setTimeout(() => {
          caption.textContent = "We spotted each other!";
          subtitle.textContent = "\"There you are!\" — he said, smiling";
          
          setTimeout(() => {
            greetingBubble.classList.add('show');
            voiceSound.play();
          }, 1000);
          
          girlBlush.forEach(blush => blush.style.opacity = '1');
          boySmile.style.opacity = '1';
          
          hearts.forEach((heart, i) => {
            setTimeout(() => {
              heart.style.opacity = '1';
              heart.style.transform = 'scale(1.5)';
              heartSound.currentTime = 0;
              heartSound.play();
            }, i * 800);
          });
          
          setTimeout(() => {
            girl.classList.add('walking-to-scooty');
            greetingBubble.classList.remove('show');
            
            setTimeout(() => {
              girl.style.opacity = '0';
              
              setTimeout(() => {
                scootyContainer.style.opacity = '0';
                
                setTimeout(() => {
                  together.classList.add('show');
                  together.classList.add('riding');
                  createConfetti();
                  createBalloons();
                  
                  setTimeout(() => {
                    loveText.classList.add('show');
                    caption.textContent = "And that's how we met";
                    subtitle.textContent = "I sat on his scooty and we rode off together";
                    
                    setTimeout(() => {
                      replayBtn.classList.add('show');
                    }, 3000);
                  }, 3000);
                }, 1000);
              }, 1000);
            }, 3000);
          }, 2000);
        }, 3000);
      }, 12000);
    }, 3000);
  }, 1000);
}

// Replay function
function replayStory() {
  girl.style.left = '10vw';
  girl.style.opacity = '1';
  girl.classList.remove('walking-to-scooty');
  scootyContainer.style.right = '-200px';
  scootyContainer.style.opacity = '1';
  phoneCall.classList.remove('show');
  girlPhone.style.opacity = '0';
  boyPhone.style.opacity = '0';
  loveText.classList.remove('show');
  together.classList.remove('show');
  together.classList.remove('riding');
  greetingBubble.classList.remove('show');
  replayBtn.classList.remove('show');
  girlBlush.forEach(blush => blush.style.opacity = '0');
  boySmile.style.opacity = '0';
  hearts.forEach(heart => {
    heart.style.opacity = '0';
    heart.style.transform = 'scale(1)';
  });
  
  messages.forEach(msg => {
    msg.element.style.display = 'none';
  });
  
  setTimeout(startStory, 1000);
}

// Event listeners
startBtn.addEventListener('click', startStory);
replayBtn.addEventListener('click', replayStory);

document.body.addEventListener('click', function() {
  bgMusic.play().catch(e => {});
}, { once: true });

// Add sparkles
setInterval(() => {
  const scene = document.getElementById('scene');
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.style.left = Math.random() * 100 + 'vw';
  sparkle.style.top = Math.random() * 50 + 'vh';
  sparkle.style.animationDelay = Math.random() * 2 + 's';
  scene.appendChild(sparkle);
  
  setTimeout(() => {
    sparkle.remove();
  }, 3000);
}, 1000);
