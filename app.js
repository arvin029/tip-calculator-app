// Init Selector
const bill = document.getElementById('bill');
const tips = document.querySelectorAll('.tip');
const peopleCount = document.getElementById('peopleCount');

// Init variable for tip Amount
let tipAmount = '';
let calculate = '';

// Loop tip button percentage
tips.forEach(tip => {
  // add Event Listener for each button percentage
  tip.addEventListener('click', function() {
    // Calculate tip amount
    calculate = calculateResult(tip);
    // show tip amount
    tipAmount = showTipAmount(calculate)
    // show total amount tip
    showTotalAmount(calculate);
  })

})

// Add keyup event for number of people input field
peopleCount.addEventListener('keyup', function() {
  showTotalAmount(calculate);
})

// Event for custom field
document.querySelector('.custom').addEventListener('keyup', function(e) {
  // Calculate custom percentage
  calculate = (e.target.value / 100) * bill.value;
  // Tip amount
  showTipAmount(calculate)
  // total amount function
  showTotalAmount(calculate);
})

// Calculate Tip
function calculateResult(tip) {
  return (parseFloat(tip.innerHTML.slice(0,2)) / 100) * bill.value;
}
// Show Tip Amount
function showTipAmount(calculate) {
  return document.getElementById('tipAmount').textContent = '$' + calculate.toFixed(2);
}
// Show Total Amount
function showTotalAmount(calculate) {
  return document.getElementById('totalAmount').textContent = '$' + (calculate * peopleCount.value).toFixed(2);
}
// Reset Event
document.getElementById('reset').addEventListener('click', function() {
  // reset tip amount
  document.getElementById('tipAmount').textContent = '$0.00';
  // reset total amount
  document.getElementById('totalAmount').innerHTML = '$0.00';
  // reset bill input field
  bill.value = '';
  // reset peouple count input field
  peopleCount.value = '';
  // reset custom input field
  document.querySelector('.custom').value = '';
})