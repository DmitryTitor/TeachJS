


function checkForParent(element, searchClass) {
  
  if (element.classList.contains(searchClass)) {
    return element
  } 
  return checkForParent(element.parentNode, searchClass)
}

function getBySelector(selectorName) {
  return document.querySelector(selectorName)
}

function getAllBySelector(selectorName) {
  return document.querySelectorAll(selectorName)
}

function createElementWithClass(tagName, className) {
  let element = document.createElement(tagName)
  element.classList.add(className)
  return element
}

function createDivWithClass(className) {
  return createElementWithClass('div', className)
}
// const createDivWithClass = createElementWithClass.bind(null,'div')

function createTimeTask(time) {
  const element = createDivWithClass('allTasks__time')
  element.innerText = time
  return element
}

function createTextTask(text) {
  const element = createDivWithClass('allTasks__item')
  element.innerText = text
  return element
}

function createImgTask(imgWay) {
  const element = createDivWithClass('allTasks__completed')
  element.innerHTML = imgWay
  return element
}

function createTaskArrow() {
  const element = createDivWithClass('allTasks__arrow')
  element.innerText = '↺'

  return element
}


// function getLast(array) {
//   console.log('arr = ', array[array.length - 1])
//   return array[array.length - 1]
// }

class ToDo {
  
    constructor() {
      
      this.tasks = getAllBySelector('.allTasks__task')

      this.inputField = getBySelector('.input')

      this.button = getBySelector('.button')
      
      this.allTasks = getBySelector('.allTasks')

      this.backArrow = getAllBySelector('.allTasks__arrow')

    }

    init() {
        this.folowClick()  
    }

    folowClick() {
      this.tasks.forEach(task => {
        this.addEvent(task)
      })
      this.button.addEventListener('click', event => this.addTask(event))
      this.backArrow.forEach(arrow => {
        arrow.addEventListener('click', event => this.backupStatus(event))
      })
      this.inputField.addEventListener('keyup', event => {
        if(event.keyCode == 13){
          this.button.click()
          this.inputField.value = ''
      }
      })        
      
    }
    
    backupStatus({target}) {
      const task = target.parentNode.children[1]
      console.log("ToDo -> backupStatus -> task", task)
      if (task.classList.contains('taskCompleted')) {
        task.classList.remove('allTasks__deleteTask')
        task.classList.remove('taskCompleted')
      } 
    }

    addEvent(task) {
      task.addEventListener('click', event => this.changeStatusTask(event))  
      task.addEventListener('mouseenter', event => this.showImg(event))
      task.addEventListener('mouseleave', event => this.hideImg(event))
    }

    addArrowEvent(arrow) {
      arrow.addEventListener('click', event => this.backupStatus(event))
    }
    
    changeStatusTask({target}) {
      const elem = checkForParent(target, 'allTasks__taskWithArrow')
      if (elem.children[1].classList.contains('taskCompleted')) {
        elem.parentNode.removeChild(elem)
      } else {
        this.completeTask(target)
      }
    }

    completeTask(target) {
      const elem = checkForParent(target, 'allTasks__task')
      console.log("ToDo -> completeTask -> elem", elem)
      elem.classList.add('taskCompleted') 
      elem.classList.add('allTasks__deleteTask')    
      elem.children[2].innerHTML = '<img src="img/02.png" class="allTasks__ok">'
      elem.children[2].children[0].classList.add('showImg')
    }

    showImg({target}) {
      if (target.classList.contains('allTasks__task')) {
        const divOk = target.children[2].children[0]
        divOk.classList.remove('hideImg')
        divOk.classList.add('showImg')
      }

    }    

    hideImg({target}) {
      if (target.classList.contains('allTasks__task')) {
        const divOk = target.children[2].children[0]
        divOk.classList.remove('showImg')
        divOk.classList.add('hideImg')
      }
    }

    addTask(event) {
      const newDiv = createDivWithClass('allTasks__taskWithArrow')
      const newTask = createDivWithClass('allTasks__task')
      const newArrow = createTaskArrow()
      const time = createTimeTask('20:20')
      const textInput = getBySelector('.input')
      this.addArrowEvent(newArrow)
      if (textInput.value === '') {
        alert('Текст задачи пустой! Введите его!')
      } else {
        const text = createTextTask(textInput.value)
        const okImg = createImgTask('<img src="img/01.png" class="allTasks__ok">')
        this.inputField.value = ''
        newTask.append(time)
        newTask.append(text)
        newTask.append(okImg)
        newDiv.append(newArrow)
        newDiv.append(newTask)
        this.allTasks.append(newDiv)
        this.tasks = getAllBySelector('.allTasks__task')
        this.backArrow = getAllBySelector('.allTasks__arrow')
        
        this.addEvent(newTask)
      }
    }


}


new ToDo().init()












