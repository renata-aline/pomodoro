
const btnAdicionarTarefa = document.querySelector('.app__button--add-task')
const formAdicionaTarefa = document.querySelector('.app__form-add-task')
const textarea = document.querySelector('.app__form-textarea')

const tarefas = []


btnAdicionarTarefa.addEventListener('click',() => {
    formAdicionaTarefa.classList.toggle('hidden')
})

formAdicionaTarefa.addEventListener('submit',(evento) => {
    evento.preventDefault();
    const tarefa = {
        descricao: textarea.value
    }
    tarefas.push(tarefa)
    localStorage.setItem('tarefas',tarefas)
})