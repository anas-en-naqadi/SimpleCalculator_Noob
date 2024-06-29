let comp = '';

function appendToDisplay(value) {
    comp += value;
    document.getElementById("result").textContent = comp;
}

function clearT() {
   
    comp = "";
    
    document.getElementById("result").textContent = '';
}

function deleteC() {
    if (comp.length > 0) {
        comp = comp.slice(0, -1);
        document.getElementById("result").textContent = comp;
    }
}

function calculateResult() {
    try {
        const result = eval(comp);
        document.getElementById('result').textContent = result;
        comp = result.toFixed(2).toString();
    } catch (error) {
        document.getElementById('result').textContent = 'Error';
    }
}
document.getElementById('calculator-form').addEventListener('submit', function (e) {
    e.preventDefault();
});