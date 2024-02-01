const baseVariant = (sum, time, stavka) => {
    let result = sum + sum*stavka*time;
    return result;
}

const calc = (startSum, time, stavka, period, addingMoney, addMoneyPeriod) => {
    let oneMonthSatvka = stavka/100/12;
    let result = startSum;
    if (period == 0) {
        let income = 0;
        let addMoneyPeriodCopy = addMoneyPeriod;
        for (let i = 0; i < time; i++) {
            addMoneyPeriodCopy -= 1;
            if (addMoneyPeriodCopy == 0) {
                addMoneyPeriodCopy = addMoneyPeriod;
                result += addingMoney;
            }
            income += baseVariant(result, 1, oneMonthSatvka) - result;
            console.log(i);
        }
        console.log(result);
        result += income;
        return result.toFixed(2);
    }
    for (let i = 0; i < time; i += period) {
        result = baseVariant(result, period, oneMonthSatvka) + (addingMoney / addMoneyPeriod * period);
    }
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