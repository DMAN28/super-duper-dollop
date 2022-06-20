const inquirer = require('inquirer');
const colors = require('colors');
const KeyManager = require ('../lib/KeyManger');
const {isRequired} = require('../utils/validation');

const key = {
   async set () {
        const keyManager = new KeyManager();
        const input = await inquirer.prompt([
            {
                type: 'input',
                name: 'key',
                message: 'Enter API Key'.green + 'https://nomics.com'
            }
        ]);

        const key = keyManager.setKey(input.key);
    },
    show(){
        try {
            const KeyManager = new KeyManager();
            const key = keyManager.getKey();

            console.log ('Current API key', key.yellow);

            return key; 
        } catch (err){
            console.log (err.message.red);
        }
    },
        //console.log('HODl show'.blue);
   
    remove(){
        try {
            const KeyManager = new KeyManager();
            const key = deleteKey();

            console.log ('Key Removed' .blue);

            return key; 
        } catch (err){
            console.log (err.message.red);
        }
    }
}

module .exports = key;