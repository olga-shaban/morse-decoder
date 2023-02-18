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
  let phrase = [];
  let str = '';
for (i=0 ; i<expr.length; i = i+10) {
  let m = expr.substring(i, i+10).replaceAll('11', '-').replaceAll('10', '.').replaceAll('00', '');// преобразовали в азбуку Морзе
   phrase.push(m);
  
 for (j=0; j<phrase.length; j++) {
  for (let key in MORSE_TABLE) {
   if (key === phrase[j]) 
   {
        phrase[j] = MORSE_TABLE[key];  
   }  
  }
 str = phrase.join('');
 } 
}  
let result =  str.split('**********').join(' ');  
return result;
}

module.exports = {
    decode
}
