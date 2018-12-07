// Global Variables
var questionHeaders = [
    "Question 1", 
    "Question 2", 
    "Question 3", 
    "Question 4", 
    "Question 5", 
    "Question 6", 
    "Question 7", 
    "Question 8", 
    "Question 9", 
    "Question 10", 
    "Question 11", 
    "Question 12", 
    "Question 13", 
    // "Question 14", 
    // "Question 15"
];

var questions = [
    {
        question: "What are superpowers called in My Hero Academia?",
        choices: ["a. superpowers", "b. powers", "c. quirks", "d. magic"],
        answer: "c. quirks"
    },
    {
        question: "Who is the Number 1 Hero?",
        choices: ["a. All Might", "b. Eraserhead", "c. Best Jeanist", "d. Mt. Lady"],
        answer: "a. All Might"
    },
    // {
    //     question: "What is the name of the quirk Izuku Midoriya inherits from All Might?",
    //     choices: ["a. All for One ", "b. One for All", "c. Super Smash", "d. Justice Power"],
    //     answer: "b. One for All"
    // }
];

    // q2: "Who is the Number 1 Hero?",
    // q3: "What is the name of the quirk Izuku Midoriya inherits from All Might?",
    // q4: "True or False? Katsuki Bakugo’s quirk, Explosion, is sweating a nitroglycerin-like substance from his palms and igniting it to create...well, explosions.",
    // q5: "How does Iida Tenya have super speed?",
    // q6: "Who is the smartest (grade-wise) student in Class 1-A?",
    // q7: "What is Shota Aizawa’s quirk?",
    // q8: "Who is the leader of the League of Villains?",
    // q9: "True or False? Shoto Todoroki resents his father for neglecting him as a child.",
    // q10: "Who is the first superhero we see in action in My Hero Academia?",
    // q11: "Who becomes the new Number 1 hero after All Might’s retirement?",
    // q12: "What is All Might’s real name?",
    // q13: "True or False? One for All has been passed down through 8 generations.",
    // q14: "",
    // q15: "",


// var answers = {
//     a1: ["a. superpowers", "b. powers", "c. quirks", "d. magic"],
//     a2: ["a. All Might", "b. Eraserhead", "c. Best Jeanist", "d. Mt. Lady"],
//     a3: ["a. All for One ", "b. One for All", "c. Super Smash", "d. Justice Power"],
//     a4: ["a. True", "b. False"],
//     a5: ["a. A pseudo-scientfic mix of chemicals and a lightning strike.", "b. He has engines on his calves.", "c. He's just really fast"],
//     a6: ["a. Izuku Midoriya", "b. Shoto Todoroki", "c. Momo Yaoyorozu", "d. Tenya Iida"],
//     a7: ["a. Erasure", "b. Delete", "c. Nullify", "d. Sleep"],
//     a8: ["a. Dabi", "b. Kurogiri", "c. All for One", "d. Tomura Shigaraki"],
//     a9: ["a. True", "b. False"],
//     a10: ["a. Kamui Woods", "b. Mt. Lady", "c. Death Arms", "d. Backdraft"],
//     a11: ["a. Best Jeanist", "b. Gang Orca", "c. Kamui Woods", "d. Endeavor"],
//     a12: ["a. Takuma Ogata", "b. Natsu Maebara", "c. Yagi Toshinori", "d. Akeno Harada"],
//     a13: ["a. True", "b. False"],
    // a14: ["a. ", "b. ", "c. ", "d. "],
    // a15: ["a. ", "b. ", "c. ", "d. "]
// };
var number = 0
var timer = 20
// Functions
$(document).ready(function() {
    // 1. Push start button to begin trivia
    $("#start-button").click(function() {
    // 2. Display question with choices and timer of 20 seconds
        $(this).hide();
        $("#intro-text").hide();
        $("#spoiler-warning").hide();
        var timer = setInterval(function() {}, 1000 * 20);
        var userGuess;
        $(".choice").on("click", function() {
            userGuess = $(this).text();
            console.log(userGuess);
        })
        function display(i) {
            $("#question-header-text").text(questionHeaders[i]);
            $("#question-text").text(questions[i].question);
            $("#choiceA").text(questions[i].choices[0]);
            $("#choiceB").text(questions[i].choices[1]);
            $("#choiceC").text(questions[i].choices[2]);
            $("#choiceD").text(questions[i].choices[3]);
            if (userGuess === questions[i].answer) {
                number++;
                setTimeout(function() {display(number)}, 1000 * 5);
            }
            else if (userGuess != questions[i].answer) {
                number++;
                display(number);

            }
        
        };
        display(number);
    });
});
    // 3. Read player's choice and determine whether right or wrong

    // 4. Display "correct" messae if guessed right/display "wrong" message with correct answer if guessed wrong
    //      a. display "Time's Up!" with correct answer message if timer gets to 0
    // 5. Change to next question after 5 seconds and reset timer
    // 6. At end of questions, display number guessed right and number guessed wrong
    //      a. Provide reset button to take quiz again