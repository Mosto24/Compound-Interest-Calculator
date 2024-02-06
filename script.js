const calc = (startSum, time, stavka, period, addingMoney, addMoneyPeriod) => {
    let result = 0;
    if(period != 0) {
        result = startSum*(Math.pow((1+stavka/100/period), (period*time/12)));
    } else {
        result = startSum*(1+stavka/100*time/12);
    }
    let income = 0;
    let newTime = time;
    for (let i = 0; i < time; i += addMoneyPeriod) {
        newTime -= addMoneyPeriod;
        if (period != 0) {
            income += addingMoney*(Math.pow((1+stavka/100/period), (period*(newTime)/12)));
        } else {
            income += addingMoney*(1+stavka/100*newTime/12);
        }
    }
    result = result + income;
    return result.toFixed(2);
}

$("button").click((e) => {
    e.preventDefault();
    let startSum = Number($(".startSum").find("input").val());
    let time = Number($(".time").find("input").val())*12;
    let stavka = Number($(".stavka").find("input").val());
    let period = Number($("#reinvest").val());
    let addingMoney =  Number($(".addMoney").find("input").val());
    let addMoneyPeriod = 1;
    if (addingMoney !== 0) {
        addMoneyPeriod = Number($("#adding").val());
    }
    $(".result").text("Итоговая сумма: " + calc(startSum, time, stavka, period, addingMoney, addMoneyPeriod));
});