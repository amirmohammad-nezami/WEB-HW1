
document.getElementById("fee").addEventListener("input" , updateFormulas)
document.getElementById("count").addEventListener("input" , updateFormulas)
document.getElementById("discount").addEventListener("input" , updateFormulas)

function updateFormulas() {
    console.log("hello")
    document.querySelectorAll("formula").forEach(formula => {
        const expression = formula.getAttribute("evaluator");
        console.log(expression)
        try {
            const pattern = /^[1-9][0-9]*|0$/; 
            const feeInput = document.getElementById("fee").value.trim();
            const countInput = document.getElementById("count").value.trim();
            const discountInput = document.getElementById("discount").value.trim();

            if (!pattern.test(feeInput) || !pattern.test(countInput) || !pattern.test(discountInput)) {
                formula.textContent = "Invalid Input";
                return;
            }

            const fee = parseFloat(feeInput) || 0;
            const count = parseFloat(countInput) || 0;
            const discount = parseFloat(discountInput) || 0;
           
            const result = eval(expression.replace("count", count).replace("fee", fee).replace("discount", discount));
            
            formula.textContent = isNaN(result)? "Invalid Formula" : result;
        } catch (e) {
            console.log(e)
            formula.textContent = "Invalid Formula";
        }
    });
}

