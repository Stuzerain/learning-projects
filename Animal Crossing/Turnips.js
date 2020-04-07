function turnipProfit(buy, sell, number) {
    var cost = buy * number;
    var gross = sell * number;
    var gain = Math.ceil((gross/cost) * 100);
    var net = gross - cost;
    if (gross > (cost * 2)) {
        return (`You spent ${cost} and will walk away with ${gross}. ` +
        `That's a return of ${gain}%, or a profit of ${net}. Consider selling while you can!`);
    }
    return (`You spent ${cost} and will walk away with ${gross}. That's a return of ${gain}, ` + 
    `or a profit of ${net}. You can do better! Hold out for more!`);
};

function whenSell(buy, number, desire) {
    var cost = buy * number;
    var sellGross = Math.ceil(desire/number);
    net = desire - cost;
    var sellNet = Math.ceil((desire + cost)/number);
    return (`If you want to walk away with ${desire} gross, sell at ${sellGross}. ` +
    `For a profit of ${desire}, sell at ${sellNet} instead.`);
    }
     


console.log(turnipProfit(104, 210, 1400));
console.log(whenSell(104, 1400, 160000));
