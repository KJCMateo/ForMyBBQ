document.addEventListener("DOMContentLoaded", function () {
    
    const loveLetterText = "Happy 24th, babyyy! 🎉\n" +
"I was going to greet you earlier, but I was too busy working on this website for you 😌.\n\n" +

"Kahit lagi mo akong binubully at ako lagi ang favorite target mo, hindi ko ma-imagine ang buhay ko nang wala 'yung pang-aasar mo.\n" +
"I’m beyond grateful to have you by my side. Every moment with you is a blessing, and I can’t wait to create more beautiful memories together...\n" +
"kahit puro bullying pa ‘yon. hahahaha.\n\n" +

"Gumawa ako ng countdown sa website na ‘to since today is one of my favorite days, which is the day you were born,\n" +
"the day the world was blessed with someone as beautiful, kind, and amazing as you.\n\n" +

"On your birthday, I just want you to know how deeply and endlessly I care for you.\n" +
"I hope today brings you as much joy as you bring into my life.\n" +
"I want to be here for all your birthdays, making sure each one is more special than the last.\n\n" +

"Happy Birthday, baby! 🎂💖 Ikaw lang, always and forever. 💕✨\n\n" +

"- KM";
    let index = 0;
    const loveLetterElement = document.getElementById("loveLetter");

    function typeLetter() {
        if (index < loveLetterText.length) {
            loveLetterElement.textContent += loveLetterText.charAt(index);
            index++;
            setTimeout(typeLetter, 70); 
        }
    }

    setTimeout(typeLetter, 500); 

    const music = document.getElementById("backgroundMusic");
    const playPauseBtn = document.getElementById("playPauseBtn");

    playPauseBtn.addEventListener("click", function () {
        if (music.paused) {
            music.play();
            playPauseBtn.innerText = "⏸ Pause";
        } else {
            music.pause();
            playPauseBtn.innerText = "🎶 Play";
        }
    });

    window.addEventListener("beforeunload", function () {
        sessionStorage.setItem("musicTime", music.currentTime);
    });

    window.addEventListener("load", function () {
        let savedTime = sessionStorage.getItem("musicTime");
        if (savedTime !== null) {
            music.currentTime = savedTime;
            music.play();
            playPauseBtn.innerText = "⏸ Pause";
        }
    });
});
