import expressoTradicional from '../assets/expresso-tradicional.svg'
import expressoAmericano from '../assets/expresso-americano.svg'
import expressoCremoso from '../assets/expresso-cremoso.svg'
import expressoGelado from '../assets/expresso-gelado.svg'
import cafeComLeite from '../assets/cafe-com-leite.svg'
import latte from '../assets/latte.svg'
import capuccino from '../assets/capuccino.svg'
import macchiato from '../assets/macchiato.svg'
import mocaccino from '../assets/mocaccino.svg'
import chocolateQuente from '../assets/chocolate-quente.svg'
import cubano from '../assets/cubano.svg'
import havaiano from '../assets/havaiano.svg'
import arabe from '../assets/arabe.svg'
import irlandes from '../assets/irlandes.svg'

export const products = [
  {
    id: '1',
    image: expressoTradicional,
    type: ['Tradicional'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: '2',
    image: expressoAmericano,
    type: ['Tradicional'],
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
  {
    id: '3',
    image: expressoCremoso,
    type: ['Tradicional'],
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
  },
  {
    id: '4',
    image: expressoGelado,
    type: ['Tradicional', 'Gelado'],
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
  },
  {
    id: '5',
    image: cafeComLeite,
    type: ['Tradicional', 'Com leite'],
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },
  {
    id: '6',
    image: latte,
    type: ['Tradicional', 'Com leite'],
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },
  {
    id: '7',
    image: capuccino,
    type: ['Tradicional', 'Com leite'],
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
  },
  {
    id: '8',
    image: macchiato,
    type: ['Tradicional', 'Com leite'],
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
  },
  {
    id: '9',
    image: mocaccino,
    type: ['Tradicional', 'Com leite'],
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
  },
  {
    id: '10',
    image: chocolateQuente,
    type: ['Especial', 'Com leite'],
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
  },
  {
    id: '11',
    image: cubano,
    type: ['Especial', 'Alcoólico', 'Gelado'],
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
  },
  {
    id: '12',
    image: havaiano,
    type: ['Especial'],
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
  },
  {
    id: '13',
    image: arabe,
    type: ['Especial'],
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
  },
  {
    id: '14',
    image: irlandes,
    type: ['Especial', 'Alcoólico'],
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
  },
]
