import { Negociacao } from './models/negociacao.js';

const negociacao = new Negociacao (new Date(), 10 , 100);
console.log(negociacao); //todos os valores da class
console.log(negociacao.data);
console.log(negociacao.valor);
console.log(negociacao.volume); //operacao matematica