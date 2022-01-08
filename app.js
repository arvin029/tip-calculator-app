// Init Selector
const bill = document.getElementById('bill');
const tips = document.querySelectorAll('.tip');
const peopleCount = document.getElementById('peopleCount');

// Init variable for tip Amount
let tipAmount = '';

// Loop tip button percentage
tips.forEach(tip => {
  // add Event Listener for each button percentage
  tip.addEventListener('click', function() {
    // Calculate tip amount
    let calculate = calculateResult(tip);
    // show tip amount
    tipAmount = showTipAmount(calculate)
    // show total amount tip
    showTotalAmount(tipAmount);
  })

  // Add keyup event
  peopleCount.addEventListener('keyup', function(e) {
    document.getElementById('totalAmount').textContent = tipAmount * e.target.value;
  })
})

document.querySelector('.custom').addEventListener('keyup', function(e) {
  tipAmount = (e.target.value / 100) * bill.value;
  document.getElementById('tipAmount').textContent = tipAmount.toFixed(2);
})

// Calculate Tip
function calculateResult(tip) {
  return (parseFloat(tip.innerHTML.slice(0,2)) / 100) * bill.value;
}
// Show Tip Amount
function showTipAmount(calculate) {
  return document.getElementById('tipAmount').textContent = calculate.toFixed(2);
}
// Show Total Amount
function showTotalAmount(tipAmount) {
  return document.getElementById('totalAmount').textContent = (tipAmount * peopleCount.value).toFixed(2);
}
// Reset Event
document.getElementById('reset').addEventListener('click', function() {
  // reset tip amount
  document.getElementById('tipAmount').textContent = '0.00';
  // reset total amount
  document.getElementById('totalAmount').innerHTML = '0.00';
})
