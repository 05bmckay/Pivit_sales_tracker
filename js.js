function calculate()  {
    document.getElementById("calculated").style.display = "block";
}

function calculate2() {

    var amount = document.getElementById("amount").value;
    var answer_rate = document.getElementById("deal_rate").value;   
    var deal_rate = document.getElementById("answer_rate").value;


    document.getElementById("complete").innerHTML = answer_rate*deal_rate*amount;

    document.getElementById("calculated").style.display = "block";




}