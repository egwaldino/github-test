//-------------- Mudar o conteudo da tag ------
const studentName = document.getElementById("studentName");
studentName.textContent = "Nome do estudante";

//-------------- Enviar e Mostrar o valor do input -------------------------
const message = document.getElementById("message");
const nameForm = document.getElementById("nameForm");
const nameInput = document.getElementById("nameInput");
const button = document.getElementById("button");

nameForm.addEventListener("submit", (event) => {
  event.preventDefault();
  message.textContent = "Olá, " + nameInput.value;
});

//-------------- Criar uma lista no JS ----------------



//-------------- Adicionar e remover tarefas -----------

const taskForm = document.getElementById("taskForm");

const taskInput = document.getElementById("taskInput");

const taskList = document.getElementById("taskList");



//-------------- Enviar form -----------

taskForm.addEventListener("submit", (event) => {

  event.preventDefault();

  // Verificar campo do input

  const taskText = taskInput.value.trim();

  if (taskText === "") return;


  // Criar lista

  const taskItem = document.createElement("li");

  const taskLabel = document.createElement("span");

  taskLabel.textContent = taskText;


  // Remove

  const removeButton = document.createElement("button");

  removeButton.type = "button";

  removeButton.textContent = "Remover";

  removeButton.addEventListener("click", () => taskItem.remove());

  taskItem.append(taskLabel, removeButton);

  taskList.append(taskItem);

  taskInput.value = "";

});
