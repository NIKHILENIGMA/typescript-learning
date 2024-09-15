"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPaymentGateway = addPaymentGateway;
exports.removePaymentGateway = removePaymentGateway;
exports.getCurrentPaymentDetails = getCurrentPaymentDetails;
function addPaymentGateway(value) {
    return value;
}
function removePaymentGateway() {
    console.log('Payment gateway removed');
}
function getCurrentPaymentDetails() {
    console.log('Current payment gateway');
}
