//Author: Waleed Ahmad | 21357116
//Quiz Script
//Last updated: 06/05/2024

document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Define correct answers
    const correctAnswers = {
        q1: 'Job security',
        q2: 'All of the above',
        q3: 'Ensuring fairness in decision-making',
        q4: 'Ensuring diversity and inclusion',
        q5: 'Favoring candidates from certain backgrounds',
    };

    // Initialize score
    let score = 0;

    // Iterate through each question
    for (let i = 1; i <= 5; i++) {
        // Get selected answer for the current question
        const selectedAnswer = document.querySelector('input[name="q' + i + '"]:checked');

        // Check if an answer is selected
        if (selectedAnswer) {
            // Check if selected answer is correct
            if (selectedAnswer.value === correctAnswers['q' + i]) {
                score++;
            }
        }
    }

    // Display result
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = '<h2>Your Score: ' + score + '/5</h2>';
});
