const quotes =[
    {
        quote: "관점과 태도만 바꾼다면 당신은 무엇이든 될 수 있다.",
        author: "Alicia Witt",
    },
    {
        quote: "침묵속에 있지말라. 누군가가 당신을 희생자로 만들게 가만히 두지말라.\n 누군가가 당신을 정의하게 두지말라. 스스로 자신을 정의해라.",
        author: "Harvey Fierstem",
    },
    {
        quote: "빛으로 세상을 환하게하는 법은 두가지가 있다.\n 하나는 양초가 되는 것이고, 하나는 그를 반사하는 거울이 되는 것이다.",
        author: "Edith Wharton",
    },
    {
        quote: "충분히 중요하다고 생각된다면, 일단 하자.\n 상황을 핑계대지말고.",
        author: "Elon Musk",
    },
    {
        quote: "당신에게 일어난 일은 당신 삶의 10% 밖에 되지않는다.\n 나머지 삶의 90%는 당신이 일어난 일에 어떻게 반응하냐에 달려있다.",
        author: "Charles R. Swindoll",
    },
    {
        quote: "항상 불가능해보일 것이다. 그 일이 끝나기전에는",
        author: "Nelson Mandela",
    },
    {
        quote: "항상 시도했고 항상 실패했다.\n 그게 무슨 상관이야? 다시 시도해서 더 나은 실패를 해보자고!",
        author: "Samuel Beckett",
    },
    {
        quote: "시계 좀 그만 쳐다봐. 그런다고 멈출 것 같아?",
        author: "Sam Levenson",
    },
    {
        quote: "오직 나만이 내 삶을 바꿀 수 있다. 누가 도와줄 거 같니?",
        author: "Carol Burnett",
    },
    {
        quote: "항상 달을 조준해. 그러다 빗나가면 별이라도 맞출거 아니야.",
        author: "W. Clement Stone",
    },
    {
        quote: "삶은 멈춰있다. 하지만 니가 계획을 세우는 순간, 삶의 시계는 움직이기 시작한다.",
        author: "John Lennon",
    },
    {
        quote: "과거에 움츠러들지말고, 미래도 꿈꾸지말자. 그냥 현재를 열심히 살자",
        author: "Buddha",
    },
    {
        quote: "니가 한 말들로 다른 사람들을 속일 수는 있겠지.\n 다만 너의 태도만큼은 다들 확실하게 알걸?",
        author: "John C. Maxwell",
    },



]; 

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
console.log(quote);
console.log(author);
// console.log(quotes.length); // 13개

function showQuote(){
    //math.floor , math.ceil, math.round
    // Math.floor(Math.random() * (quotes.length) );
    quote.innerText=quotes[Math.floor(Math.random() * (quotes.length) )].quote;
    // quote.innerText=quotes[1].quote;
    author.innerText=quotes[Math.floor(Math.random() * (quotes.length) )].author;
}

showQuote();
setInterval(showQuote,3000);


