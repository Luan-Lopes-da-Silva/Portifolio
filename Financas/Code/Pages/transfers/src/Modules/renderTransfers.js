export function render() {
  const nameInput = document.querySelector("#name");
  const transferInput = document.querySelector("#transfer");
  const form = document.querySelector("form");
  const radios = document.querySelectorAll("input[type=radio]");
  const values = [];

  function createTransfer(transferData) {
    const article = document.createElement("article");
    article.id = `${transferData.id}`;
    article.classList.add("transfer-container");

    const name = document.createElement("span");
    name.textContent = `${transferData.name}`;
    name.classList.add("name");

    const type = document.createElement("span");
    type.textContent = `${transferData.type}`;
    type.classList.add("type");

    const value = document.createElement("span");
    value.textContent = `R$ ${transferData.value},00`;
    value.classList.add("value");

    const createdAt = document.createElement("span");
    createdAt.textContent = `${transferData.createdAt}`;
    createdAt.classList.add("created");

    article.append(name, type, value, createdAt);
    document.querySelector(".transfers-containers").appendChild(article);
  }

  function createTransferOff() {
    const article = document.createElement("article");
    article.id = `${Math.floor(Math.random()*1000)}`;
    article.classList.add("transfer-container");

    const name = document.createElement("span");
    name.textContent = `${nameInput.value}`;
    name.classList.add("name");

    const value = document.createElement("span");
    value.textContent = `R$ ${transferInput.value}`.replace(',','.');
    value.classList.add("value");

    const createdAt = document.createElement("span");
    createdAt.textContent = `${new Date().toLocaleString('pt-br')}`;
    createdAt.classList.add("created");

    values.push(parseFloat(transferInput.value.replace(/[,]/g, ".")))
    const sumValues = values.reduce(function(acc,transfer){
    return acc+transfer
    },0)
    localStorage.setItem('Transferencia',JSON.stringify(sumValues))
    article.append(name, value, createdAt);
    document.querySelector(".transfers-containers").appendChild(article);
  }

  async function fetchTransfers() {
    const transfers = await fetch("http://localhost:3001/transfers").then(
      (res) => res.json()
    );
    transfers.forEach(createTransfer);
  }

  
  document.addEventListener("DOMContentLoaded", () =>{
    const response = fetch("http://localhost:3001/transfers").then(response => {
      if(!response.ok){
        throw new Error('Nossos servidores estão offline no momento')
      }
      return response
     }).catch(form.addEventListener('submit',createTransferOff))
     fetchTransfers();
    })


  async function renderTransfer(ev) {
    ev.preventDefault()
    if (radios[0].checked) {
      const createdAt = new Date();
      const transferData = {
        name: nameInput.value,
        type: radios[0].value,
        value: parseFloat(transferInput.value),
        createdAt: createdAt.toLocaleString("pt-br"),
      };
      const response = await fetch("http://localhost:3001/transfers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transferData),
      });
      const savedTransfer = await response.json();
      form.reset();
      values.push(savedTransfer);
      createTransfer(savedTransfer);
    } else {
      const createdAt = new Date();
      const transferData = {
        name: nameInput.value,
        type: radios[1].value,
        value: parseFloat(transferInput.value.replace(/[,]/g, ".")),
        createdAt: createdAt.toLocaleString("pt-br"),
      };
      const response = await fetch("http://localhost:3001/transfers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transferData),
      });
      const savedTransfer = await response.json();
      form.reset();
      values.push(savedTransfer);
      createTransfer(savedTransfer);
    }
  }

  form.addEventListener("submit", renderTransfer);
}
