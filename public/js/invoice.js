$(document).ready(function() {
    $("#make-invoice").on("click", function() {
        makeInvoice()
    });
    function makeInvoice() {
        let invoiceNumber = document.getElementById("#invoice-number").nodeValue;
        let invoiceDesc = document.getElementById("#invoice-description").nodeValue;
        let invoiceRate = document.getElementById("#invoice-rate").nodeValue;
        console.log(invoiceNumber, invoiceDesc, invoiceRate);


    }
});