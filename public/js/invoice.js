$(document).ready(function() {
    let Invoice = {
        number: "",
        company: "",
        description: "",
        rate: "",
        hours: "",
        tax: "",
    };
    let invoiceContainer = $(".invoice-container");

    $("#make-invoice").on("click", function() {
        makeInvoice();
    });

    // function initializeRows() {
    //     invoiceContainer.empty();
    //     let invoiceToAdd = [];
    //     invoiceToAdd.push(makeInvoice());
    //     invoiceContainer.append(invoiceToAdd);
    // };

    function makeInvoice(invoice) {
        Invoice.number = $("#invoice-number").val();
        Invoice.company = $("#invoice-company").val();
        Invoice.description = $("#invoice-description").val();
        Invoice.rate = $("#invoice-rate").val();
        Invoice.hours = $("#invoice-hours").val();
        Invoice.tax = $("#invoice-tax").val();
        console.log(Invoice);
        let subtotal = Invoice.rate * Invoice.hours;
        let taxRate = Invoice.tax / 100;
        console.log(subtotal);
        console.log(taxRate);
        let amountDue = (subtotal * taxRate) + subtotal;
        console.log(amountDue);
        $("#subtotal").append("$", subtotal);
        $("#taxes").append(Invoice.tax, " %");
        $("#amount-due").append("$", amountDue);
        // var newPostCard = $("<div>");
        // newPostCard.addClass("card");
        // var newPostCardHeading = $("<div>");
        // newPostCardHeading.addClass("card-header");
        // var newPostTitle = $("<h2>");
        // var newPostNumber = $("<h3>");
        // var newPostDesc = $("<h4>");
        // var newPostRate = $("<h5>");
        // var newPostHours = $("<h6>");
        // newPostTitle.text(NewInvoice.invoiceCompany);
        // newPostNumber.text(NewInvoice.invoiceNumber);
        // newPostDesc.text(NewInvoice.invoiceDesc);
        // newPostRate.text(NewInvoice.invoiceRate);
        // newPostHours.text(NewInvoice.invoiceHours);
        // newPostCardHeading.append(newPostTitle);
        // newPostCard.append(newPostNumber);
        // newPostCard.append(newPostDesc);
        // newPostCard.append(newPostRate);
        // newPostCard.append(newPostHours);
        // newPostCard.data(invoice);
        // return newPostCard;
        $.ajax({
            method: "POST",
            url: "/api/invoices",
            data: Invoice
          }).catch((err) => {
            if (err) throw err;
          })
    };

});