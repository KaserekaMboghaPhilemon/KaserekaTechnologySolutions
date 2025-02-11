// Populate the amount dropdown dynamically
const amountDropdown = document.getElementById("amount");
for (let i = 500; i <= 100000; i += 500) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = "KES " + i;
    amountDropdown.appendChild(option);
}
