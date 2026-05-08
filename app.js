const btn = document.getElementById("btn")
const bill = document.getElementById("bill")
const tip = document.getElementById("tip")
const tot = document.getElementById("total")

function calculateTotal(){
    const tipValue = tip.value.trim()
    const billValue = bill.value.trim()
    if(billValue === "" && tipValue === ""){
        alert("Enter Bill Amount and Tip Percentage.")
    }else if(tipValue === ""){
        alert("Enter Tip Percentage.")
    }else if(billValue === ""){
        alert("Enter Bill Amount.")
    }else{
        let total = billValue*(1 + (tipValue/100))
        tot.innerText = `Total: $${total.toFixed(2)}`
    }
}

btn.addEventListener("click", calculateTotal)