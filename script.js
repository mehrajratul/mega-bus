function handleServiceChange(service, isIncrease) {
    const serviceCount = getInputValue(service);
    let serviceNewCount = serviceCount;
    if (isIncrease == true) {
        serviceNewCount = serviceCount + 1;
    }
    if (isIncrease == false && serviceCount > 0) {
        serviceNewCount = serviceCount - 1;
    }
    document.getElementById(service + '-count').value = serviceNewCount;
    let serviceTotal = 0;
    if (service == 'first') {
        serviceTotal = serviceNewCount * 150;
    }
    if (service == 'economy') {
        serviceTotal = serviceNewCount * 100;
    }

    document.getElementById(service + '-total').innerText = '$' + serviceTotal;
    calculateTotal();
}

function calculateTotal() {
    const firstCount = getInputValue('first');
    const economyCount = getInputValue('economy');

    const totalPrice = firstCount * 150 + economyCount * 100;
    document.getElementById('total-price').innerText = '$' + totalPrice;

    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax-amount').innerText = '$' + tax;

    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = '$' + grandTotal;
}

function getInputValue(service) {
    console.log(service);
    const serviceInput = document.getElementById(service + '-count');
    const serviceCount = parseInt(serviceInput.value);
    return serviceCount;
}
const bookNowBtn = document.getElementById('bookNowBtn');
bookNowBtn.addEventListener('click', function () {
    const mainContent = document.getElementById("mainPageContent");
    mainContent.style.display = "none";
    document.body.innerHTML = "Thank You";
})