function birthdayCakeCandles(candles) {
    // Write your code here
    let max = candles[0]
    let count = 0;
    
    candles.forEach((candle) => {
        if(candle > max){
            max = candle
            count = 1
        } else if (candle === max){
            count++
        }
    })
    
    return count
    

}