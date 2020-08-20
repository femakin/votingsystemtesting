var total = document.querySelector(".Fixed_number");
var minusBtn = document.querySelectorAll("#minus");
var allSpan = document.getElementById('displayvalue');
var plusBtn = document.querySelectorAll("#plus");
var value_object = {};

plusBtn.forEach(function(item) {
    item.onclick = function() {
        if (parseInt(total.innerText) > 0) {
            item.nextElementSibling.innerText = parseInt(item.nextElementSibling.innerText) + 1;
            total.innerText = parseInt(total.innerText) - 1;

        }
    };

});

minusBtn.forEach(function(item) {
    let variable;
    item.onclick = function() {
        if (parseInt(item.previousElementSibling.innerText) > 0) {
            item.previousElementSibling.innerText = parseInt(item.previousElementSibling.innerText) - 1;
            total.innerText = parseInt(total.innerText) + 1;
        }
    };
});