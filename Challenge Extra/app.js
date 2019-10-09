let sloths = document.querySelectorAll('.sloth')
let score = document.querySelector('.score')
let scoreN = 0
let interval = window.setInterval(showSloth, 2000)

registerEventListeners()

// SHOWING THE SLOTH AND HIDING IT INSITE WITH hideSloth()
function showSloth() {

    let random = Math.floor(Math.random() * sloths.length )


    for( let i = 0; i < sloths.length; i++) {
        let randInt = Math.floor(Math.random() * 2500 + 1500 )
        i == random ? sloths[i].style.top = "0%" : null
        let timeout = window.setTimeout(hideSloth, randInt, sloths[i])
    }
    
}

// HIDING THE SLOTH
function hideSloth(sloth) {
    try {
        sloth.style.top = "100%"
    } catch(err) {
        console.log(err)
    }
}

// ADDING CLICK EVENT LISTENER TO EVERY SLOTH
function registerEventListeners() {
    
    for(sloth of sloths) {
        sloth.addEventListener('click', (e) => {
            scoreN++
            score.innerHTML = scoreN
            hideSloth(e.target)
        })
    }
}