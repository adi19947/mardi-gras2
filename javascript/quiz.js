const Questions = [
    {
        id: 0,
        q: "What is the day before Mardi Gras called?",
        a: [
            { text: "Puppy Gras", isCorrect: false },
            { text: "Corner Gras", isCorrect: false },
            { text: "Lundi Gras", isCorrect: true },
            { text: "Multi Gras", isCorrect: false },
        ],
    },
    {
        id: 1,
        q: "Where was the first known carnival celebration?",
        a: [
            { text: "Polland", isCorrect: false, isSelected: false },
            { text: "Germany", isCorrect: false },
            { text: "Australia", isCorrect: false },
            { text: "France", isCorrect: true },
        ],
    },
    {
        id: 2,
        q: "When was the earliest known carnival celebration?",
        a: [
            { text: "1995", isCorrect: false },
            { text: "1837", isCorrect: false },
            { text: "1294", isCorrect: true },
            { text: "1902", isCorrect: false },
        ],
    },
    {
        id: 3,
        q: "What is traditionally hidden inside a king cake?",
        a: [
            { text: "A plastic baby", isCorrect: true },
            { text: "A plastic dog", isCorrect: false },
            { text: "A plastic cat", isCorrect: false },
            { text: "A plastic bird", isCorrect: false },
        ],
    },
    {
        id: 4,
        q: "How many pounds of beads are thrown in New Orleans Mardi Gras celebration?",
        a: [
            { text: "5 million", isCorrect: false },
            { text: "40 million", isCorrect: false },
            { text: "25 million", isCorrect: true },
            { text: "12 million", isCorrect: false },
        ],
    },
    {
        id: 5,
        q: "Which krewe has a Star Wars theme?",
        a: [
            { text: "The Krewe of Chewbacchus", isCorrect: true },
            { text: "The Krewe of toni", isCorrect: false },
            { text: "The Krewe of johnny", isCorrect: false },
            { text: "The Krewe of gras", isCorrect: false },
        ],
    },
    {
        id: 6,
        q: "The success of a Mardi Gras parade is measured in what?",
        a: [
            { text: "Love", isCorrect: false },
            { text: "Trash", isCorrect: true },
            { text: "Kindness", isCorrect: false },
            { text: "Hate", isCorrect: false },
        ],
    },
    {
        id: 7,
        q: "When was Mardi Gras first declared a holiday in general?",
        a: [
            { text: "1356", isCorrect: false },
            { text: "1568", isCorrect: false },
            { text: "1582", isCorrect: true },
            { text: "2345", isCorrect: false },
        ],
    },
    {
        id: 7,
        q: "Special coins thrown during Mardi Gras parades are called what?",
        a: [
            { text: "Dollar", isCorrect: false },
            { text: "Euro", isCorrect: false },
            { text: "Shekel", isCorrect: false },
            { text: "Doubloons", isCorrect: true },
        ],
    },
    {
        id: 8,
        q: "King cake is typically made with what sort of dough?",
        a: [
            { text: "Bread", isCorrect: false },
            { text: "Tomato", isCorrect: false },
            { text: "Brioche", isCorrect: true },
            { text: "Onion", isCorrect: false },
        ],
    },
    {
        id: 9,
        q: "Mardi Gras may have links to what Roman celebrations?",
        a: [
            { text: "Lupercalia and Saturnalia", isCorrect: true },
            { text: "Lupercalia and Julia", isCorrect: false },
            { text: "Lupercalia and Amy", isCorrect: false },
            { text: "Lupercalia and Sarai", isCorrect: false },
        ],
    },
];

// Set start
let start = true;
var selected = "";
var opClicked;
var alreadyAnswered = false

// Iterate
function iterate(id) {
    // Getting the result display section
    const result = document.getElementsByClassName("result");
    result[0].innerText = "";

    // Getting the question
    const question = document.getElementById("question");

    // Setting the question text
    question.innerText = Questions[id].q;
    document.getElementById("question").style.fontSize = "1.7rem";
    // Getting the options
    const op1 = document.getElementById("op1");
    const op2 = document.getElementById("op2");
    const op3 = document.getElementById("op3");
    const op4 = document.getElementById("op4");

    // Providing option text
    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;


    // Providing the true or false value to the options
    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;



    // Show selection for op1
    op1.addEventListener("click", () => {
        op1.style.backgroundColor = "lightgoldenrodyellow";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op1.value;
        opClicked = op1;
    });

    // Show selection for op2
    op2.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightgoldenrodyellow";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op2.value;
        opClicked = op2;
    });

    // Show selection for op3
    op3.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightgoldenrodyellow";
        op4.style.backgroundColor = "lightskyblue";
        selected = op3.value;
        opClicked = op3;
    });

    // Show selection for op4
    op4.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightgoldenrodyellow";
        selected = op4.value;
        opClicked = op4;
    });



}

if (start) {
    iterate("0");
}



const evaluate = document.getElementsByClassName("evaluate");
// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (!alreadyAnswered) {
        if (selected == "true") {

            alreadyAnswered = true

            const pElement = document.getElementById('score-number')
            const pElementInnerHTML = Number(pElement.innerHTML)
            pElement.innerHTML = pElementInnerHTML + 10




            opClicked.style.backgroundColor = "green"
        } else {
            opClicked.style.backgroundColor = "red"
        }
    }

});



// Next button and method
const next = document.getElementsByClassName("next")[0];
var id = 0;
next.addEventListener("click", () => {
    alreadyAnswered = false
    start = false;

    op1.style.backgroundColor = 'lightskyblue'
    op2.style.backgroundColor = 'lightskyblue'
    op3.style.backgroundColor = 'lightskyblue'
    op4.style.backgroundColor = 'lightskyblue'

    if (id < 10) {
        id++;
        iterate(id);
    }
});
