document.getElementById("OrderButton").onclick = function() {
    const foodPrice = parseInt(document.getElementById ("food").value); 
    const drinkPrice = parseInt(document.getElementById ("drink").value);
    
    
    
    let totalPrice = foodPrice + drinkPrice;
    let discount = 0;
    if (totalPrice > 100) {
        totalPrice = totalPrice - discount
    }
        const resultDiv = document.getElementById("result");
        if (totalPrice > 0) {
            resultDiv.innerHTML =  `
                 total : $$(foodPrice)<br>
                 discount : $$(discount.toFixed(2))<br>
                 final price : $$(totalPrice.toFixed(2))
                 `;
        } else{
            resultDiv.innerHTML = "please select both food and drink"
        }
    }


      
    
