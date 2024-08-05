// function addToCart(productName, price) {
//     // Redirect to transaction-form.html with product name and price as URL parameters
//     window.location.href = `transaction-form.html?product=${productName}&price=${price}`;
// }
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get('product');
    const price = urlParams.get('price');

    document.getElementById('product').value = productName;
    document.getElementById('price').value = price;
});


// function showSuccessMessage() {
//     // const name = transactionData ? transactionData.name : "Customer";
//     // const totalPrice = transactionData ? transactionData.price * transactionData.amount;
//     const message = `Order Created Successfully!! Any questions? Let us know. We're here to help.`;
//     alert(message);
//     redirectToInvoicePage();
// }

// function redirectToInvoicePage() {
//     window.location.href = "invoice.html";
// }

// JavaScript to handle form submission
function submitTransaction(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const productName = document.getElementById('product').value;
    const price = document.getElementById('price').value;
    const amount = document.getElementById('amount').value;
    const address = document.getElementById('address').value;
    const districts = document.getElementById('districts').value;
    const notes = document.getElementById('notes').value;
    const deliveryType = document.getElementById('deliveryType').value;
    const paymentType = document.getElementById('paymentType').value;

    // Calculate total price
    const totalPrice = price * amount;

    // Save the transaction details to localStorage (you can use a server to store this data)
    const transactionData = {
        name,
        phoneNumber,
        productName,
        price,
        amount,
        address,
        districts,
        notes,
        deliveryType,
        paymentType,
        totalPrice,
    };
    localStorage.setItem('transactionData', JSON.stringify(transactionData));

    // Redirect to the invoice.html page
    window.location.href = 'invoice.html';
}


// JavaScript to handle "Buy Now" button clicks
function addToCart(event) {
    const productElement = event.target.closest('.image-card');
    const productName = productElement.querySelector('h3').textContent;
    const price = productElement.querySelector('p').dataset.price;
    document.getElementById('product').value = productName;
    document.getElementById('price').value = price;
}




