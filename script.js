openMenu.addEventListener('click', () => {
    menu.style.display = 'flex'

    menu.style.background = 'black'

    menu.style.right = (menu.offsetWidth * -1) + 'px'

    openMenu.style.display = 'none'

    setTimeout(() => {
        menu.style.opacity = '1'

        menu.style.right = '0'
    }, 10)
})

closeMenu.addEventListener('click', () => {
    menu.style.opacity = '0'

    menu.style.right = (menu.offsetWidth * -1) + 'px'

    setTimeout(() => {
        menu.removeAttribute('style')

        openMenu.removeAttribute('style')
    }, 200)
})






let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeText = ()=>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = "letter out";
        },i * 80);
    });
    nextWord.style.opacity="1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        },340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText,3000);