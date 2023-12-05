
const btnAdicionarTarefa = document.querySelector('.app__button--add-task')
const formAdicionaTarefa = document.querySelector('.app__form-add-task')


btnAdicionarTarefa.addEventListener('click',() =>{
    formAdicionaTarefa.classList.toggle('hidden')
})