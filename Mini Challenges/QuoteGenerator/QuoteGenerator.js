const quoteDisplay = document.querySelector('#quote-display');
const authorDisplay = document.querySelector('#author-display');
const quoteButton = document.querySelector('#new-quote-button');

let quotes = [
    {
        quote: "You forget a thousand things every day, pal. Make sure this is one of 'em.",
        author: "Michael De Santa"
    },
    {
        quote: "We can't change what's done, we can only move on.",
        author: "Arthur Morgan"
    },
    {
        quote: "All we had to do was follow the damn train, CJ!",
        author: "Big Smoke"
    },
    {
        quote: "You either take the ride, or you don't.",
        author: "Franklin Clinton"
    },
    {
        quote: "The past is a gaping hole. You can't climb out of it — all you can do is fall deeper",
        author: "Max Payne"
    }          
];

function showRandomQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[randomIndex];
    quoteDisplay.textContent = `"${randomQuote.quote}"`;
    authorDisplay.textContent = `- ${randomQuote.author}`;
}

quoteButton.addEventListener('click', showRandomQuote);
