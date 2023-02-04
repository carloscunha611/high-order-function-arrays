const carros = [
  {
    marca: 'Citroën',
    nome: 'C4 Picasso',
    cilindrada: 1997,
    potencia: 143,
    zeroCem: 11.5,
    velMax: 195
  },
  {
    marca: 'Citroën',
    nome: 'C3 XTR',
    cilindrada: 1587,
    potencia: 113,
    zeroCem: 9.8,
    velMax: 198
  },
  {
    marca: 'Chevrolet',
    nome: 'Cobalt SS',
    cilindrada: 1998,
    potencia: 208,
    zeroCem: 6.4,
    velMax: 220
  },
  {
    marca: 'Chevrolet',
    nome: 'Corvette Z06',
    cilindrada: 7011,
    potencia: 512,
    zeroCem: 3.9,
    velMax: 319
  },
  {
    marca: 'Honda',
    nome: 'Civic Type R',
    cilindrada: 1998,
    potencia: 200,
    zeroCem: 6.6,
    velMax: 235
  },
  {
    marca: 'Honda',
    nome: 'Civic Si',
    cilindrada: 1998,
    potencia: 192,
    zeroCem: 7.5,
    velMax: 215
  },
  {
    marca: 'Volkswagen',
    nome: 'Touareg',
    cilindrada: 4163,
    potencia: 350,
    zeroCem: 7.5,
    velMax: 234
  },
  {
    marca: 'Volkswagen',
    nome: 'Polo GTI',
    cilindrada: 1781,
    potencia: 150,
    zeroCem: 8.2,
    velMax: 216
  },
  {
    marca: 'BMW',
    nome: 'X5',
    cilindrada: 4799,
    potencia: 355,
    zeroCem: 6.5,
    velMax: 242
  },
  {
    marca: 'BMW',
    nome: 'X3',
    cilindrada: 2996,
    potencia: 272,
    zeroCem: 7.2,
    velMax: 228
  },
  {
    marca: 'BMW',
    nome: 'Z4 M Coupė',
    cilindrada: 3246,
    potencia: 343,
    zeroCem: 5.0,
    velMax: 250
  },
  {
    marca: 'Pontiac',
    nome: 'G6 Coupė',
    cilindrada: 3880,
    potencia: 243,
    zeroCem: 7.5,
    velMax: 200
  },
  {
    marca: 'Seat',
    nome: 'Leon 2.0 TFSI',
    cilindrada: 1984,
    potencia: 200,
    zeroCem: 7.7,
    velMax: 220
  },
  {
    marca: 'Fiat',
    nome: 'Palio 1.8R',
    cilindrada: 1796,
    potencia: 115,
    zeroCem: 9.2,
    velMax: 191
  },
  {
    marca: 'Jaguar',
    nome: 'X-Type',
    cilindrada: 2967,
    potencia: 231,
    zeroCem: 7.0,
    velMax: 235
  },
  {
    marca: 'Cadillac',
    nome: 'XLR-V',
    cilindrada: 4371,
    potencia: 450,
    zeroCem: 5.0,
    velMax: 250
  },
  {
    marca: 'Rolls-Royce',
    nome: 'Phantom Extended Base',
    cilindrada: 6749,
    potencia: 460,
    zeroCem: 6.1,
    velMax: 240
  },
  {
    marca: 'Porche',
    nome: '911 GT3',
    cilindrada: 3600,
    potencia: 415,
    zeroCem: 4.3,
    velMax: 310
  },
  {
    marca: 'Subaru',
    nome: 'Legacy',
    cilindrada: 2999,
    potencia: 245,
    zeroCem: 8.2,
    velMax: 237
  },
  {
    marca: 'Mercedes-Benz',
    nome: 'CL 63 AMG',
    cilindrada: 6208,
    potencia: 525,
    zeroCem: 4.6,
    velMax: 250
  },
  {
    marca: 'Dodge',
    nome: 'Viper',
    cilindrada: 8360,
    potencia: 612,
    zeroCem: 4.0,
    velMax: 306
  },
  {
    marca: 'Maserati',
    nome: 'Spyder',
    cilindrada: 4244,
    potencia: 390,
    zeroCem: 5.0,
    velMax: 283
  },
  {
    marca: 'Bugatti',
    nome: 'EB 16.4 Veyron',
    cilindrada: 7993,
    potencia: 1001,
    zeroCem: 2.5,
    velMax: 407
  },
  {
    marca: 'Chrysler',
    nome: '300C SRT-8',
    cilindrada: 6059,
    potencia: 431,
    zeroCem: 5.3,
    velMax: 274
  },
  {
    marca: 'Lobini',
    nome: 'H1',
    cilindrada: 1781,
    potencia: 180,
    zeroCem: 6.0,
    velMax: 240
  }
]

/* MAP */ console.log(`MAP`)
/* const nomes = []
for (let i = 0; i < carros.length; i++) {
  const carro = carros[i]
  nomes.push(carro.nome)
}*/

const nomes = carros.map(function (carro) {
  return carro.nome
})
console.log(nomes)

/* FILTER */ console.log(`FILTER`)
/* const bmw = []
for (let i = 0; i < carros.length; i++) {
  const carro = carros[i]
  if (carro.marca === 'BMW') {
    bmw.push(carro)
  }
} */
const bmw = carros.filter(function (carro) {
  return carro.marca === 'BMW'
})
console.log(bmw)

/* REDUCE */ console.log(`REDUCE`)
/* let potenciaTotal = 0
for (let i = 0; i < carros.length; i++) {
  potenciaTotal += carros[i].potencia
} */

const potenciaTotal = carros.reduce(function (acumulador, carro) {
  return acumulador + carro.potencia
}, 0)
console.log(potenciaTotal)

const marcas = carros.reduce(function (acumulador, carro) {
  if (acumulador[carro.marca]) {
    acumulador[carro.marca].push(carro)
  } else {
    acumulador[carro.marca] = [carro]
  }
  return acumulador
}, {})
console.log(marcas)

/* SORT */ console.log(`SORT`)
const carrosOrdenados = carros.slice().sort(function (a, b) {
  return b.velMax - a.velMax
})

console.log(carrosOrdenados)
