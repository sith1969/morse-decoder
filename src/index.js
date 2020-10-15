'use strict';
const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let sym = [];
    let result = [];
    let [i,j] = [0,1];
    while (i < expr.length) {
        let simvol ='';
        sym =(expr.slice(i,(+(j+'0'))));
        for (let i = 0; i <= 10; i = i + 2) {
            if(sym[i] === '*') {
                simvol = ` `;
                break;
            }
            if(sym[i] + sym[i+1] === '00') {
                simvol += '';
                continue;
            }
            if(sym[i] + sym[i+1] === '10') {
                simvol += '.';
                continue;
            }
            if(sym[i] + sym[i+1] === '11') {
                simvol += '-';
                continue;
            }
        }
        if (simvol === ` `) {result.push(` `);}
        else {result.push(MORSE_TABLE[simvol]);}
        i = i+10;
        j++;
    }
    return result.join('');
}

module.exports = {
    decode
};