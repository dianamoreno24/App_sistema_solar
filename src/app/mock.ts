export interface Planeta {
  id: number;
  title: string;
  tipo: string;
  content: string;
  src: string;
}
export const planetas: Planeta[] =  [
  {id: 1, title: 'Sol', tipo: 'Estrella', content: ' una estrella de tipo espectral G2 que contiene más del 99,86 % de la masa del sistema. Con un diámetro de 1 400 000 km, se compone de un 75 % de hidrógeno, un 20 % de helio y 5 % de oxígeno, carbono, hierro y otros elementos.', src: '../assets/images/Solx480.jpg'},
  {id: 2, title: 'Mercurio', tipo: 'Planeta', content: 'Mercurio es el planeta del sistema solar más próximo al Sol y el más pequeño. Forma parte de los denominados planetas interiores o terrestres y carece de satélites naturales al igual que Venus.', src: '../assets/images/Mercuriox480.jpg'},
  {id: 3, title: 'Venus', tipo: 'Planeta', content: 'Venus es el segundo planeta del sistema solar en orden de distancia desde el Sol, el sexto en cuanto a tamaño, ordenados de mayor a menor. Al igual que Mercurio, carece de satélites naturales. ', src: '../assets/images/Venus.gif'},
  {id: 4, title: 'Tierra', tipo: 'Planeta', content: 'La Tierra se formó hace aproximadamente 4550 millones de años y la vida surgió unos mil millones de años después.', src: '../assets/images/Tierax480.gif'},
  {id: 5, title: 'Marte', tipo: 'Planeta', content: 'Marte es el cuarto planeta en orden de distancia al Sol y el segundo más pequeño del sistema solar, después de Mercurio.', src: '../assets/images/Martex480.png'},
];
