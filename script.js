let btns = document.querySelectorAll('.btns button');
let submit = document.querySelector('#submit');
let bChoice = document.getElementById('box-choice');
let bThanks = document.getElementById('box-thanks');
let number = document.getElementById("number");


btns.forEach((e)=>{
    e.addEventListener('click', ()=>{
        let choice = parseInt(e.textContent);
        switch (choice) {
            case 1:
                btns.forEach((e)=>{
                    e.classList.remove('active');
                })
                e.classList.add('active')
                break;
            case 2:
                btns.forEach((e)=>{
                    e.classList.remove('active');
                })
                e.classList.add('active')
                break;
            case 1:
                btns.forEach((e)=>{
                    e.classList.remove('active');
                })
                e.classList.add('active')
                break;
            case 3:
                btns.forEach((e)=>{
                    e.classList.remove('active');
                })
                e.classList.add('active')
                break;
            case 4:
                btns.forEach((e)=>{
                    e.classList.remove('active');
                })
                e.classList.add('active')
                break;
            case 5:
                btns.forEach((e)=>{
                    e.classList.remove('active');
                })
                e.classList.add('active')
                break;
            default:
                break;
        }
    })
})

btns.forEach((e)=>{
    submit.addEventListener('click', ()=>{
        if(e.classList == 'active'){
            bChoice.style.display = 'none';
            number.innerHTML = e.textContent;
            bThanks.style.display = 'flex';
        }
    })
})