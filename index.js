

//Counter

let count = 0

function increment() {
    count += 1
    document.getElementById("count-el").innerText = count
}

function save() {

    document.getElementById("saved-el").textContent += count + '-'
    count = 0
    document.getElementById("count-el").innerText = count

}

function clearMe() {

    document.getElementById("saved-el").textContent = ' '
}



//Move the box

let margin = 0

function moveRight() {
    margin += 10
    document.getElementById('box-el').style.marginLeft = margin + 'px'
}

function moveLeft() {
    margin -= 10
    document.getElementById('box-el').style.marginLeft = margin + 'px'
}

// Random Color

function generateRandomColor() {
    let randomNumber1 = Math.floor(Math.random()*5) 
    let randomNumber2 = Math.floor(Math.random()*5) 
    let randomNumber3 = Math.floor(Math.random()*5) 

    const alphabet = ['a','b','c','d','e','f']

    console.log(randomNumber1)
    console.log(randomNumber2)
    console.log(randomNumber3)

    let randomLetter1 = alphabet[randomNumber1]
    let randomLetter2 = alphabet[randomNumber2]
    let randomLetter3 = alphabet[randomNumber3]
   
    let randomHexColor1 = randomLetter1 + randomNumber1 
    console.log(randomHexColor1)
    let randomHexColor2 = randomLetter2 + randomNumber2
    console.log(randomHexColor2)
    let randomHexColor3 = randomLetter3 + randomNumber3
    console.log(randomHexColor3)

    let randomHexColorCode = '#' + randomHexColor1+randomHexColor2+randomHexColor3
    console.log(randomHexColorCode)

    document.getElementById('color-box-el').style.backgroundColor = randomHexColorCode
    
}

generateRandomColor()