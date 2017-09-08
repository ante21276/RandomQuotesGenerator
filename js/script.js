

var selected1 = document.getElementById("selected"); //Get select element from DOM
var numbers = [0,1,2,3,4];//Random number are picked from this arry
const quote_box = document.getElementById("quote-box"); //Get div from DOM

/*******************+
  QUOTES LIST
********************/
const quotes = {"inspirational":[
  {
    "quote": "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
   "author": "Helen Keller"

  },
  {
   "quote": "Put your heart, mind, and soul into even your smallest acts. This is the secret of success.",
  "author": "Swami Sivananda"
  },
  {
    "quote": "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
   "author": "Jimmy Dean"
 },
 {
   "quote": "My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.",
  "author": "Maya Angelou"
 },
 {
   "quote": "Change your thoughts and you change your world.",
  "author": "Norman Vincent Peale"
}
],"funny": [
  {
    "quote": "To succeed in life, you need three things: a wishbone, a backbone and a funny bone.",
    "author": "Reba McEntrie"

  },
  {
   "quote": "No man has a good enough memory to be a successful liar.",
   "author": "Abraham Lincoln"
  },
  {
    "quote": "I may be drunk, Miss, but in the morning I will be sober and you will still be ugly.",
    "author": "Winston Churchill"
 },
 {
   "quote": "People who think they know everything are a great annoyance to those of us who do.",
   "author": "Isaac Asimov"
 },
 {
   "quote": "My fake plants died because I did not pretend to water them.",
   "author": "Mitch Hedberg"
}
],
"love": [
  {
    "quote": "There is only one happiness in this life, to love and be loved.",
    "author": "George Sand"

  },
  {
   "quote": "Love yourself. It is important to stay positive because beauty comes from the inside out.",
   "author": "Jenn Proske"
  },
  {
    "quote": "Let us always meet each other with smile, for the smile is the beginning of love.",
    "author": "Mother Teresa"
 },
 {
   "quote": "The most important thing in the world is family and love.",
   "author": "John Wooden"
 },
 {
   "quote": "The beauty of a woman must be seen from in her eyes, because that is the doorway to her heart, the place where love resides.",
   "author": "Audrey Hepburn"
}
]
}


//Pick up random quote, add DOM paragraph element, change background color on clikc
function printQuote() {
  var random = getRandomQuote();
  var red = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
  var green = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
  var blue = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
  let keys = (Object.keys(quotes));
  var html = "";
  for (let i=0; i<keys.length; i++) {
    if (selected1.value === keys[i]) {
        html += '<p class="quote">';
        html += quotes[selected1.value][random].quote;
        html += '</p>';
        html += '<p class="source">';
        html += quotes[selected1.value][random].author;
        html += '</p>';
        console.log(quotes[selected1.value][random].quote + " " + quotes[selected1.value][random].author)
    }
  }
  document.body.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  quote_box.innerHTML = html;
}

//Pick up random quote on button click
document.getElementById('loadQuote').addEventListener("click", printQuote, true);

//Auto pick quotes every 10 seconds
var intervalID = window.setInterval(printQuote, 10000);

//Choose no-repeat random numbers
var getRandomQuote = function () {
  if (numbers.length === 0) {
    numbers = [0,1,2,3,4];
    }
  var number =  Math.floor(Math.random() * (4 - 0 + 1)) + 0;
  if(numbers.indexOf(number) > -1){
    numbers.splice(numbers.indexOf(number),1);
    return number;
  } else if (numbers.indexOf(number) === -1) {
      return numbers.shift();
  }
};
