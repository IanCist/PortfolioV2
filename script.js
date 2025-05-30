
document.querySelector('.navbar-toggle').addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('open');
});


const phrases = ["<html>;", "style.css;", "console.log('Hi');", "transform: rotate(360deg);", "querySelector('.cool')"];
const typingEl = document.getElementById("typingBg");
let currentPhrase = 0;
let currentChar = 0;
let isDeleting = false;

function TypewriterEffect(elementId, phrases, typingSpeed = 100, deletingSpeed = 50, delayAfterTyping = 1500, delayAfterDeleting = 500) {
    this.el = document.getElementById(elementId);
    this.phrases = phrases;
    this.typingSpeed = typingSpeed;
    this.deletingSpeed = deletingSpeed;
    this.delayAfterTyping = delayAfterTyping;
    this.delayAfterDeleting = delayAfterDeleting;
    this.currentPhraseIndex = 0;
    this.currentCharIndex = 0;
    this.isDeleting = false;

    this.type = () => {
        const currentPhrase = this.phrases[this.currentPhraseIndex];
        if(this.isDeleting) {
            this.currentCharIndex--;
            this.el.textContent = currentPhrase.substring(0, this.currentCharIndex);
        } else {
            this.currentCharIndex++;
            this.el.textContent = currentPhrase.substring(0, this.currentCharIndex);
        }

        if (!this.isDeleting && this.currentCharIndex === currentPhrase.length) {
            this.isDeleting = true;
            setTimeout(this.type, this.delayAfterTyping);
        } else if (this.isDeleting && this.currentCharIndex === 0) {
            this.isDeleting = false;
            this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
            setTimeout(this.type, this.delayAfterDeleting);
        } else {
            setTimeout(this.type, this.isDeleting ? this.deletingSpeed : this.typingSpeed);
        }
    };

    this.type();
}

// Initialize three typewriters with different phrase arrays:

const phrases1 = ["<html>;", "style.css;", "console.log('Hi');"];
const phrases2 = ["transform: rotate(360deg);", "querySelector('.cool');", "display: flex;"];
const phrases3 = ["const x = 42;", "function hello() {}", "return true;"];

window.onload = () => {
    new TypewriterEffect("typing1", phrases1);
    new TypewriterEffect("typing2", phrases2);
    new TypewriterEffect("typing3", phrases3);
};


window.addEventListener('load', () => {
    const loader = document.querySelector('.loader-wrapper');
    setTimeout(() => {
        loader.style.transition = 'opacity 0.6s ease';
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 600);
    }, 2000);
});


(() => {
    'use strict';
    const forms = document.querySelectorAll('.contact-form');
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
})();