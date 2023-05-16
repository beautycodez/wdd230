const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const listEl = document.querySelector("ul");

buttonEl.addEventListener("click", function(){
    
    if (inputEl.value != ""){
        console.log("It works!")
        const bookName = document.createElement("li");
        bookName.textContent = inputEl.value;
        inputEl.value = "";
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";

        listEl.appendChild(bookName);
        listEl.appendChild(deleteBtn);

        deleteBtn.addEventListener("click", ()=>{
            listEl.removeChild(bookName);
            listEl.removeChild(deleteBtn);
        })

    }
    inputEl.focus();
})