const messages = [
    "No",
"Are you sure? 🥺",
"Really sure? I'm really sorry!",
"But... I promised to fix everything!",
"There is no other girl! It's only you!",
"I promise to put in equal effort!",
"Don't you want our future wedding?💍",
"I won't leave you again, I promise.",
"I'll take care of everything, just say yes!",
"Please? for our future?",
"Don't break my heart 💔",
"Okay, I'm disabling this button now...",
"Just click Yes!😤",
    
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
