let comp = '';

function appendToDisplay(value) {
    comp += value;
    document.getElementById("result1").value = comp;
}

function clearT() {
   
    comp = "";
    
    document.getElementById("result1").value = '';
}

function deleteC() {
    console.log(comp)
    if (comp.length > 0) {
        comp = comp.slice(0, -1);
        console.log("test",comp)
        document.getElementById("result1").value = comp;
    }
}

function calculateResult() {
    try {
        const result1 = eval(comp);
        if(Number.isInteger(result1))
            document.getElementById('result1').value  =
         result1.toString();
        else
        document.getElementById('result1').value  = result1.toFixed(2).toString();

        comp = result1.toString();

    } catch (error) {
        document.getElementById('result1').value = 'Error';
    }
}
document.getElementById('calculator-form').addEventListener('submit', function (e) {
    e.preventDefault();
});