//всем ячейкам задать единый класс, row не нужны
//создать класс для хранения состояния приложения
//использовать querySelectorAll для получения всех ячеек в масив
//в конструкторе класса получить массив всех ячеек и сохранить в поле this.cells
// в констркуторе создать поле которое хранит массив других массивов, содержащий
// индексы для победных комбинаций! this.combs = [[1, 2, 3], [4, 5, 6], ...]
// реализовать метод для определения индекса нажатой ячейки - получаем при помощи
// addEvent... реализовать метод для добавления слушателей ячейкам проблежаться по
// массиву this.cells и для каждого вызвать addEventListener. функция внутри имеет вид
 // скобка (event) => {...тело функции} (чтобы получить доступ к элементу через eventTarget)
 // через event добавляем событие click, функция в скобках показывает что делать при клике
 // Внутри функции события должен вызываться метод, который будет определять индекс нажатой ячейки
 // target это элемент на который я нажал
 // вывожу в консоль event, если что то непонятно в браузере, там есть target, можно глянуть
//  нужен this.state который равен по умолчанию пустому массиву []. но при вызове события click
// и определении индекса элемента, мы туда заносим индекс элемента index и что туда заносим type - х или о
// послу того как занесли данные в this.state1 и this.state2 - в одно записываются элементы с х, в другое с о
// нужно запустить метод, который смотрит все победные комбинации и сравнивает их с this.state1 и this.state2

// ИТОГ объявление всех победных комбинаций, получение всех элементов и навешивание соответствующих событий на них
// класс в принципе не обязательно, главное поля




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

















