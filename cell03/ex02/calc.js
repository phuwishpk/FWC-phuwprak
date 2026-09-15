document.addEventListener("DOMContentLoaded", function() {

    setInterval(function() {
        alert("Please, use me...");
    }, 30000);

    const submitBtn = document.getElementById('submitBtn');

    submitBtn.addEventListener('click', function() {

        const leftValue = document.getElementById('left').value;
        const rightValue = document.getElementById('right').value;
        const operator = document.getElementById('operator').value;


        function isPositiveInteger(str) {
            return /^\d+$/.test(str);
        }

        if (!isPositiveInteger(leftValue) || !isPositiveInteger(rightValue)) {
            alert("Error :(");
            console.log("Error :(");
            return; 
        }


        const leftNum = parseInt(leftValue, 10);
        const rightNum = parseInt(rightValue, 10);
        let result;

        if ((operator === '/' || operator === '%') && rightNum === 0) {
            alert("It's over 9000!");
            console.log("It's over 9000!");
            return; 
        }

 
        switch (operator) {
            case '+':
                result = leftNum + rightNum;
                break;
            case '-':
                result = leftNum - rightNum;
                break;
            case '*':
                result = leftNum * rightNum;
                break;
            case '/':
                result = leftNum / rightNum;
                break;
            case '%':
                result = leftNum % rightNum;
                break;
        }

        alert(result);
        console.log(result);
    });
});