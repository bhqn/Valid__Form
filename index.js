// seção de formulário
const form = document.querySelector(".form");
const formBtn = document.querySelector(".form__button");
const inputName = document.querySelector(".form__name");
const inputWasBorn = document.querySelector(".form__idade");
const inputEmail = document.querySelector(".form__email");
const inputPhone = document.querySelector(".form__phone");
const inputCPF = document.querySelector(".form__cpf")
const checkValidation = document.querySelector(".form__checkbox");

// seção do display
const container = document.querySelector(".container");

// função que cria o card
function createCard(cardName,cardCPF, cardEmail, cardAge, cardPhone) {
  const template = document.querySelector("#card-template").content.cloneNode(true);

  template.querySelector(".card__name").textContent = cardName;
  template.querySelector(".card__cpf").textContent = cardCPF;
  template.querySelector(".card__email").textContent = cardEmail;
  template.querySelector(".card__idade").textContent = cardAge;
  template.querySelector(".card__phone").textContent = cardPhone;

  container.appendChild(template);
}

// função que calcula a idade a partir da data de nascimento
function calcAge(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const month = today.getMonth() - birth.getMonth();

  if (month < 0 || (month === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age;
}



// evento ao clicar no botão do formulário
formBtn.addEventListener("click", () => {
  const name = inputName.value.trim();
  const cpf = inputCPF.value.trim();
  const email = inputEmail.value.trim();
  const phone = inputPhone.value.trim();
  const wasborn = inputWasBorn.value.trim();

  if (!name || !cpf || !email || !phone || !wasborn) {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  if (!checkValidation.checked) {
    alert("Por favor, confirme a validação!");
    return;
  }

  const age = calcAge(wasborn);
  

  createCard(name, cpf,  email, age + " anos", phone);

  // limpa os campos após criar o card
  inputName.value = "";
  inputCPF.value = "";
  inputEmail.value = "";
  inputPhone.value = "";
  inputWasBorn.value = "";
  checkValidation.checked = false;
});
