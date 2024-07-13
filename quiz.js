function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";

    // Retrieve the user's answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    let userAnswer;
    if (selectedOption) {
        userAnswer = selectedOption.value;
    } else {
        userAnswer = null;
    }
    const feedback = document.getElementById('feedback');
    if (userAnswer === null) {
        feedback.textContent = "Please select an answer.";
        feedback.style.color = "orange";
    } else if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red";
    }
}
