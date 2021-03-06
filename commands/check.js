const KeyManager = require ('../lib/KeyManger')
const CryptoAPI = require ('../lib/CrytptoAPI')

const check = {
  async price (cmd) {
        //console.log (cmd.coin, cmd.cur)
       try{
          keyManager = new KeyManager();
          const key = keyManager.getKey();

          const api = new CryptoAPI(key);


          const priceOutputData = await api.getPriceData(cmd.coin, cmd.cur);

          console.log (priceOutputData);
        } catch(err){
            console.error(err.message.red);
        }
    }
};

module.exports = check;