/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    // maxGain will keep track of the largest positive gain we've seen so far
    let maxGain = 0
    
    // First For: Loop through all potential buying prices
    for (let i = 0; i < prices.length-1; ++i)
    {
        // Second For: Loop through all potential selling prices
        for (let j = i+1; j < prices.length; ++j)
        {
            // Calculate the Gains from buying at i and selling at j
            let potentialGain = prices[j] - prices[i]
            
            // if the new gain is larger than any
            if (potentialGain > maxGain)
            {
                maxGain = potentialGain
            }
        }

    }
    
    // Return the largest gain we've seen.
    // if there was no possitive gain, maxGain would not have been modified and would still be 0
    return maxGain
};
