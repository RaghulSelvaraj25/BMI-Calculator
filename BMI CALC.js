const form=document.querySelector('form');
form.addEventListener('submit',function (e){
    e.preventDefault();
    const Height=parseInt(document.querySelector('#height').value);
    const Weight=parseInt(document.querySelector('#weight').value);
    const results=document.querySelector('#results');
    const message=document.querySelector('#message');

    if ((Height === '') || (Height < 0) || (isNaN(Height))) {
        results.innerHTML= "Please provide a valid height";

    }
    else if ((Weight ==='') || (Weight < 0) || (isNaN(Weight))) {
        results.innerHTML= "Please provide a vaslid weight";
    } else {
        const BMI=(Weight / ((Height * Height) / 10000)).toFixed(2);
        results.innerHTML= `<span>${BMI}</span>`
        if (BMI < 18.6) {
            message.innerHTML = "You are underweight";

        } else if (BMI > 18.6 && BMI < 24.9) {
            message.innerHTML = "Normal";
        } else if (BMI > 24.9) {
            message.innerHTML = "Overweight";
        }
    }

})