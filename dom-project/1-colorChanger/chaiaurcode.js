const buttons = document.querySelectorAll('.button')

const body = document.querySelector("body")
buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        switch(e.target.id){
            case 'grey':
                body.style.backgroundColor = e.target.id
                break;
            case 'white':
                body.style.backgroundColor = 'white'
                break;
            case 'blue':
                body.style.backgroundColor = 'blue'
                break;
            case 'yellow':
                body.style.backgroundColor = 'yellow'
                break;
        }
    })
// if(e.target.id === 'grey'){
    // body.style.backgroundColor = e.target.id
// }
    
})