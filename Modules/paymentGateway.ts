
function addPaymentGateway(value: number): number {
    return value;
}

function removePaymentGateway() {
  console.log('Payment gateway removed');
}

function getCurrentPaymentDetails() {
  console.log('Current payment gateway');
}


export { addPaymentGateway, removePaymentGateway, getCurrentPaymentDetails };