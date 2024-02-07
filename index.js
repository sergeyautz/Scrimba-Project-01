

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

function moveRight(){
    margin += 10     
    document.getElementById('box-el').style.marginLeft = margin + 'px'
}

function moveLeft(){
    margin -= 10
    document.getElementById('box-el').style.marginLeft = margin + 'px'
}

