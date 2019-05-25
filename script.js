function TotalPrice() {
    var item1 = document.getElementById("item1");
    var item2 = document.getElementById("item2");
    var item3 = document.getElementById("item3");
    var item4 = document.getElementById("item4");
    var item5 = document.getElementById("item5");

    var total = 0;
    var tax;
    if (item1.checked) {
        total += parseInt(item1.value);
    }
    if (item2.checked) {
        total += parseInt(item2.value);
    }
    if (item3.checked) {
        total += parseInt(item3.value);
    }
    if (item4.checked) {
        total += parseInt(item4.value);
    }
    if (item5.checked) {
        total += parseInt(item5.value);
    }
    var tax = total * 0.13;
    total += tax;

    window.alert("The order total is: $ " + total);
}