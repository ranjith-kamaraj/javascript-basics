
//Callback Hell
createOrder(cart, function (ordeInfo) {
    proceedToPayment(ordeInfo, function (paymentInfo) {
        showSummary(paymentInfo, function () {
            updateWallet();
        });
    });
});

//Overcome with promise and promise chaining (return keywork is must)
createOrder(cart)
    .then(function (ordeInfo) {
        return proceedToPayment(ordeInfo)
    })
    .then(function (paymentInfo) {
        return showSummary(paymentInfo)
    })
    .then(function (summaryInfo) {
        return updateWallet(summaryInfo)
    })

createOrder(cart)
    .then(ordeInfo => proceedToPayment(ordeInfo))
    .then((paymentInfo) => showSummary(paymentInfo))
    .then(summaryInfo => updateWallet(summaryInfo));
