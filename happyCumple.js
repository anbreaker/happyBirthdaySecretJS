const sms = 'Feliz Cumpleaños "personaHumana"!'.split('');

let unicode = [];
sms.forEach((element) => {
  unicode.push(element.charCodeAt(0));
});

// const unicode = [70, 101, 108, 105, 122,  32,  67,
//                  117, 109, 112, 108, 101,  97, 241,
//                  111, 115,  32,  83, 101, 241, 243,
//                  104,  32,  74, 117,  97, 110, 109,
//                  97,  33]

unicode.map((item) => String.fromCharCode(item)).join('');

console.log(
  '%c' + unicode.map((item) => String.fromCharCode(item)).join(''),
  'font-family:Comic Sans MS; font-size:50px; font-weight:bold; background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%); border-radius: 5px; padding: 20px'
);
