let login = document.querySelector('.change')
let bg = document.querySelector('.bg')
let have = document.querySelector('.have')
let left = true
login.addEventListener('click', ()=>{
    if(left){
    bg.style.cssText = 'left: 49%; transitin: all 1s;'
    have.innerHTML = "Don't have an account?"
    login.innerHTML = "Sign up"
    left = false
    }
    else{
        bg.style.cssText = 'left: 10px'
        left = true
        have.innerHTML = "Already have an account?"
        login.innerHTML = "Log in"
    }
})
let pass = document.querySelector('.pass')
let hide = document.querySelector('.hide')
let shown = true
hide.addEventListener('click', ()=>{
    if(shown){
        pass.type = 'text'
        shown = false
    }
    else{
        pass.type = 'password'
        shown = true
    }
})

let pass2 = document.querySelector('.pass2')
let hide2 = document.querySelector('.hide2')
let shown2 = true
hide2.addEventListener('click', ()=>{
    if(shown2){
        pass2.type = 'text'
        shown2 = false
    }
    else{
        pass2.type = 'password'
        shown2 = true
    }
})