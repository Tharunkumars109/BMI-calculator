document.getElementById('calculateBtn').addEventListener('click', function() {
    const age = document.getElementById('age').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    // Check if any field is empty
    if (!age || !height || !weight) {
        alert("Please fill all the fields correctly.");
        return;
    }

    // Calculate BMI
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    document.getElementById('bmiResult').innerText = bmi;

    // Set advice and rotate the needle based on BMI
    const needle = document.getElementById('needle');
    let angle = 0;

    if (bmi < 18.5) {
        angle = -45; // Underweight
        document.getElementById('bmiAdvice').innerText = "Underweight: You need to gain weight.";
    } else if (bmi >= 18.5 && bmi < 25) {
        angle = 0; // Normal
        document.getElementById('bmiAdvice').innerText = "Normal: You are in a healthy range.";
    } else if (bmi >= 25 && bmi < 30) {
        angle = 45; // Overweight
        document.getElementById('bmiAdvice').innerText = "Overweight: You need to lose weight.";
    } else {
        angle = 90; // Obesity
        document.getElementById('bmiAdvice').innerText = "Obesity: Consult with a healthcare provider.";
    }

    needle.style.transform = `rotate(${angle}deg)`;
});

// Gender selection animation
function selectGender(gender) {
    const buttons = document.querySelectorAll('.gender-btn');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    document.getElementById(gender).classList.add('active');
}
