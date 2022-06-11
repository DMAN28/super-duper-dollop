const inquirer = require('inquirer');
const colors = require('colors');
const KeyManager = require ('../lib/KeyManger');

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
        console.log('HODl show'.blue);
    },
    remove(){
        console.log('HODl remove');
    }
}

module .exports = key;