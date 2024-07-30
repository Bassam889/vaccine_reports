const newButton = document.querySelector("#new-button")
const enterButton = document.querySelector("#enter-button")
const exitButton = document.querySelector("#exit-button")
const initialStock = document.querySelector("#initial-stock")
const finalStock = document.querySelector("#final-stock")
const amountPeople = document.querySelector("#amount-people")

enterButton.addEventListener("click", event => {
    event.preventDefault()
    checkInput()
})

function checkInput() {
    const initialStockValue = initialStock.value.trim()
    if (initialStockValue === "") {
        setErrorFor(initialStock, "The field cannot be blank")
    } else if (isNaN(initialStockValue)) {
        setErrorFor(initialStock, "The field can't contain text or special characters")
    } else if (initialStockValue >= 10) {
        window.alert("Your request is being processed")
        amountPeople.value = initialStockValue
        finalStock.value = initialStockValue / amountPeople.value
        setSuccessFor(initialStock)
    } else {
        setErrorFor(initialStock, "Not enough stocks")
        finalStock.value = ""
        amountPeople.value = ""
    }

    
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector("small"); 
    
    // add error message inside small
    small.textContent = message;

    // add error class
    formControl.className = "form-control error";  
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

newButton.addEventListener("click", event => {
    event.preventDefault()
    finalStock.value = ""
    amountPeople.value = ""
    initialStock.value = ""
    window.location.reload();
})

exitButton.addEventListener("click", event => {
    event.preventDefault()
    setTimeout("window.close()", 100);
})
