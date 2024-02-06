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

alert('Welcome!')