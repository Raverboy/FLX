 let money = parseFloat(prompt('Enter amount of money'));
 let disc = parseFloat(prompt('Enter your discount'));
 let price = 0;
 let save = (money * disc / 100).toFixed(2);
 if (money <= 0 || money > 9999999) {
     alert('invalid data');
 } else if (isNaN(money)) {
     alert('invalid data');
 } else if (disc <= 0 || disc > 99) {
     alert('invalid data');
 } else {
     price = (money - save).toFixed(2);
     alert(
        `price without discount: ${money}
        discount: ${disc} % 
        price: ${price} 
        save: ${save}`);
 }
