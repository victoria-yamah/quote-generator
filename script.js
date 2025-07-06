const api_url="https://api.quotable.io/random";
let quote=document.getElementById("quote");
let author=document.getElementById("author");
const generate=document.querySelector(".newQuote");


const quotes=[
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "Start where you are. Use what you have. Do what you can.",
        author: "Arthur Ashe"
    },
    {
        quote: "Strive not to be a success, but rather to be of value.",
        author: "Albert Einstein"
    },
    {
        quote: "You miss 100% of the shots you don’t take.",
        author: "Wayne Gretzky"
    },

];
function getQuote(){
    let randomIndex= Math.floor(Math.random()*quotes.length);
    return quotes[randomIndex];
}

function showQuote(){
    let randomQuote= getQuote();
    quote.innerHTML=randomQuote.quote;
    author.innerHTML=randomQuote.author;
    
}


function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+ quote.innerHTML+ "  -----by " +author.innerHTML,"Tweet Window","width=600 , height=300");
}


// async function generateQuote(url){
//     const response= await fetch(url);
//     var data= await response.json();
//     console.log(data);
//     console.log(data.author);
//     quote.innerHTML=data.content;
//     quoter.innerHTML=data.author;
// }
