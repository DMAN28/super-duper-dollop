const axios = require('axios');
const colors = require('colors');

class CryptoAPI {
    constructor(apiKey){
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.nomics.com/v1/currencies/ticker';
    }

    async getPriceData(coinOption, curOption) {
        try {
          // Formatter for currency
          const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: curOption
          });
    
          const res = await axios.get(
            `${this.baseUrl}?key=${this.apiKey}&ids=${coinOption}&convert=${curOption}`
          );
    
          let output = '';
    
          res.data.forEach(coin => {
            output += `Coin: ${coin.symbol.brightYellow} (${coin.name}) | Rank: ${coin.rank.brightRed} | Price: ${
              formatter.format(coin.price).brightGreen
            } | High: ${formatter.format(coin.high).blue}\n`;
          });
    
          return output;
        } catch (err) {
          handleAPIError(err);
        }
      }
    }

    function handleAPIError(err) {
        if (err.response.status === 401){
            throw new Error('Your API key is invalid - Go to https://nomics.com');

        }else if (err.response.status ===404){
            throw new Error('API no responding');
        }else {
            throw new Error('HIDE YOU COINS HIDE YOUR WIFE SOMETHING IS WRONG!!!');
        }
    }

module.exports = CryptoAPI;