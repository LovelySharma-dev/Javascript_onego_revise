const form = document.querySelector('form')
// this use case will give you empty 
// const weight = parseInt(document.querySelector('#weight').value)

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const weightStatus = document.querySelector('#weight-status');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give valid height in cm ${height}`;
        weightStatus.innerHTML = '';
        return;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give valid weight in cm ${weight}`;
        weightStatus.innerHTML = '';
        return;

    }
        const bmi =  (weight / ((height / 100)**2)).toFixed(2)
        //show the result
        results.innerHTML = `<span>${bmi}</span>`;
    
    
    if(bmi < 18.6){
        weightStatus.innerHTML = "Under Weight"
    }else if (bmi >= 18.6 && bmi <= 24.9){
        weightStatus.innerHTML = "Normal"}
    else{
        weightStatus.innerHTML = 'Overweight'
    }
});

