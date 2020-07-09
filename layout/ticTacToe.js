let currentSym = 'x'
const rowArray = [".row1_1", ".row1_2", ".row1_3", ".row2_1", ".row2_2", 
".row2_3", ".row3_1", ".row3_2", ".row3_3"]
// Очистка поля
function restartGame() {
    for (let row of rowArray){
        document.querySelector(row).innerHTML = ''
        document.querySelector(".currentPlayer").innerHTML = '1'
        currentSym = 'x'
    }    
}

restartGame()

function checkForDraw() {
    let draw = true
    for (let row of rowArray){
        if (document.querySelector(row).innerHTML === '') {
            draw = false
        }
    } 
    return draw
}

function checkForWin() {
    if ((document.querySelector(".row1_1").innerHTML === currentSym) && 
        (document.querySelector(".row1_2").innerHTML === currentSym) && 
        (document.querySelector(".row1_3").innerHTML=== currentSym) ||
        (document.querySelector(".row2_1").innerHTML === currentSym) && 
        (document.querySelector(".row2_2").innerHTML === currentSym) && 
        (document.querySelector(".row2_3").innerHTML=== currentSym) ||
        (document.querySelector(".row3_1").innerHTML === currentSym) && 
        (document.querySelector(".row3_2").innerHTML === currentSym) && 
        (document.querySelector(".row3_3").innerHTML=== currentSym) ||
        (document.querySelector(".row1_1").innerHTML === currentSym) && 
        (document.querySelector(".row2_1").innerHTML === currentSym) && 
        (document.querySelector(".row3_1").innerHTML=== currentSym) ||
        (document.querySelector(".row1_2").innerHTML === currentSym) && 
        (document.querySelector(".row2_2").innerHTML === currentSym) && 
        (document.querySelector(".row3_2").innerHTML=== currentSym) ||
        (document.querySelector(".row1_3").innerHTML === currentSym) && 
        (document.querySelector(".row2_3").innerHTML === currentSym) && 
        (document.querySelector(".row3_3").innerHTML=== currentSym) ||
        (document.querySelector(".row1_1").innerHTML === currentSym) && 
        (document.querySelector(".row2_2").innerHTML === currentSym) && 
        (document.querySelector(".row3_3").innerHTML=== currentSym) ||
        (document.querySelector(".row1_3").innerHTML === currentSym) && 
        (document.querySelector(".row2_2").innerHTML === currentSym) && 
        (document.querySelector(".row3_1").innerHTML=== currentSym)) {
            if (currentSym === 'x'){
                alert('Выиграл игрок 1(крестики)!')
                restartGame()
                return true
            } else {
                alert('Выиграл игрок 2(нолики)!')
                restartGame()
                return true
            }
        }
        if (checkForDraw()) {
            alert('Ничья!')
            restartGame()
            return true
        }
        return false
}

window.onload = init;
function init(){
    let button1_1 = document.getElementById("but1_1")
    let button1_2 = document.getElementById("but1_2")
    let button1_3 = document.getElementById("but1_3")
    let button2_1 = document.getElementById("but2_1")
    let button2_2 = document.getElementById("but2_2")
    let button2_3 = document.getElementById("but2_3")
    let button3_1 = document.getElementById("but3_1")
    let button3_2 = document.getElementById("but3_2")
    let button3_3 = document.getElementById("but3_3")
    button1_1.onclick = handleButton1_1Click
    button1_2.onclick = handleButton1_2Click
    button1_3.onclick = handleButton1_3Click
    button2_1.onclick = handleButton2_1Click
    button2_2.onclick = handleButton2_2Click
    button2_3.onclick = handleButton2_3Click
    button3_1.onclick = handleButton3_1Click
    button3_2.onclick = handleButton3_2Click
    button3_3.onclick = handleButton3_3Click
}

function changePlayer() {
    if (!checkForWin()) {
        if (document.querySelector(".currentPlayer").innerHTML === '1') {
            document.querySelector(".currentPlayer").innerHTML = '2'
            currentSym = 'o'
        } else {
            document.querySelector(".currentPlayer").innerHTML = '1'
            currentSym = 'x'
        }
    } 
}

function handleButton1_1Click() {
    if (document.querySelector(".row1_1").innerHTML === '') {
        document.querySelector(".row1_1").innerHTML = currentSym
        changePlayer()
    }
}
function handleButton1_2Click() {
    if (document.querySelector(".row1_2").innerHTML === '') {
        document.querySelector(".row1_2").innerHTML = currentSym
        changePlayer()
    }
}
function handleButton1_3Click() {
    if (document.querySelector(".row1_3").innerHTML === '') {
        document.querySelector(".row1_3").innerHTML = currentSym
        changePlayer()
    }    
}
function handleButton2_1Click() {
    if (document.querySelector(".row2_1").innerHTML === '') {
        document.querySelector(".row2_1").innerHTML = currentSym
        changePlayer()
    }    
}
function handleButton2_2Click() {
    if (document.querySelector(".row2_2").innerHTML === '') {
        document.querySelector(".row2_2").innerHTML = currentSym
        changePlayer()
    }
}
function handleButton2_3Click() {
    if (document.querySelector(".row2_3").innerHTML === '') {
        document.querySelector(".row2_3").innerHTML = currentSym
        changePlayer()
    }
}
function handleButton3_1Click() {
    if (document.querySelector(".row3_1").innerHTML === '') {
        document.querySelector(".row3_1").innerHTML = currentSym
        changePlayer()
    }
}
function handleButton3_2Click() {
    if (document.querySelector(".row3_2").innerHTML === '') {
        document.querySelector(".row3_2").innerHTML = currentSym
        changePlayer()
    }
}
function handleButton3_3Click() {
    if (document.querySelector(".row3_3").innerHTML === '') {
        document.querySelector(".row3_3").innerHTML = currentSym
        changePlayer()
    }
}

















