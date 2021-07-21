const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn= document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

//New Quote
function newQuote(){
    //Random quote
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    //Author field
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
            authorText.textContent = quote.author;
        }
    }
    // Check quote length
    if(quote.text.length > 50) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;

//Get Quotes fom API
async function getQuotes(){
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error){
        //Error here
    }
}
//On load
getQuotes();
