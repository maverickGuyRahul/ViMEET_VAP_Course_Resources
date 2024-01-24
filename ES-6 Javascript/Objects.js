// let rahul = {
//   name: 'Rahul Trivedi',
//   profession: 'IT Trainer',
//   salary: 10,
// };

// console.log(rahul.salary);

let menu = {
  southIndian: {
    idli: 40,
    meduVada: 40,
    masalaDosa: 60,
  },
  northIndian: {
    vegKolhapuri: 220,
    dalBaati: 120,
  },
  add: function (number) {
    return number;
  },
};

// for (let key in menu) {
//   console.log(key + ' : ' + menu[key]);
// }

console.log(menu.add(24));
