import ilx from './images/ilx.jpg';
import ilxF from './images/ilxfeature.jpg'
import ILX from './images/2020ILX.jpg'
import tlx from './images/tlx.jpg';
import tlxF from './images/tlxfeature.jpg'
import TLX from './images/2020TLX.jpg'
import rdx from './images/rdx.jpg';
import rdxF from './images/rdxfeature.jpg'
import RDX from './images/2020RDX.jpg'
import rlx from './images/rlx.jpg';
import rlxF from './images/rlxfeature.jpg'
import RLX from './images/2020RLX.jpg'
import mdx from './images/mdx.jpg';
import mdxF from './images/mdxfeature.jpg'
import MDX from './images/2020MDX.jpg'
import nsx from './images/nsx.jpg';
import nsxF from './images/nsxfeature.jpg'
import NSX from './images/2020NSX.jpg'

export const carInventory = [
  {
    id: '0001',
    model: "ILX",
    make: "Acura",
    info: "Compact Sport Sedan",
    img: ilx,
    imgF: ilxF,
    imgB: ILX,
    price: '25,900',
    engine: 'INLINE-4',
    hp: 201,
    sedan: ""
  },
  {
    id: '0002',
    model: "TLX",
    make: "Acura",
    info: "Performance Luxury Sedan",
    img: tlx,
    imgB: TLX,
    imgF: tlxF,
    price: '33,000',
    engine: "INLINE-4",
    engine2: "V6",
    hp: 206,
    hp2: "290-HP"
  },
  {
    id: '0003',
    model: "RDX",
    make: "Acura",
    info: "Luxury Crossover SUV",
    img: rdx,
    imgB: RDX,
    imgF: rdxF,
    price: '37,600',
    engine: "INLINE-4 Turbo",
    hp: 272
  },
  {
    id: '0004',
    model: "MDX",
    make: "Acura",
    info: "Three-Row Luxury SUV",
    img: mdx,
    imgB: MDX,
    imgF: mdxF,
    price: '44,400',
    engine: "V6",
    engine2: "V6 Hybrid",
    hp: 290,
    hp2: "321-HP"
  },
  {
    id: '0005',
    model: "NSX",
    make: "Acura",
    info: "Next-Generation Supercar",
    img: nsx,
    imgB: NSX,
    imgF: nsxF,
    price: '159,450',
    engine: "V6 Turbo Hybrid",
    hp: 573
  },
  {
    id: '0006',
    model: "RLX",
    make: "Acura",
    info: "Premium Luxury Sedan",
    img: rlx,
    imgB: RLX,
    imgF: rlxF,
    price: '54,900',
    engine: "V6",
    engine2: "V6 Hybrid",
    hp: 310,
    hp2: "377-HP"

  }
];

export const detailProduct = {
  model: "ILX",
  make: "Acura",
  info: "Compact Sport Sedan",
  img: ilx,
  imgB: ILX,
  id: '0001',
  sedan: ""
};
