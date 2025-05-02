export type Character = { name: string; image: string };

const characters: [Character, Character][] = [
  [
    { name: 'Lewandowski', image: 'https://img.asmedia.epimg.net/resizer/v2/4MJOYIAETUHKASRYJLMGVA2R6I.jpg?auth=abb9a18747a8ae1316aa924b38ac1258d85771018ce87ef10cfb5bba9a2fcca6&width=1200&height=1200&focal=1143%2C817' },
    { name: 'Bellingham', image: 'https://assets-es.imgfoot.com/media/cache/1200x1200/jude-bellingham-2425-67b32fd74dbca.jpg' }
  ],
  [
    { name: 'João Félix', image: 'https://phantom-marca-mx.unidadeditorial.es/8e30b7802cfbbb9b4493a9a2c0295f0b/resize/828/f/jpg/mx/assets/multimedia/imagenes/2023/09/19/16951525075856.jpg' },
    { name: 'Vinícius Jr', image: 'https://assets-es.imgfoot.com/media/cache/1200x1200/viniciusbvb.jpg' }
  ],
  [
    { name: 'Pedri', image: 'https://e00-xlk-ue-marca.uecdn.es/uploads/2025/03/31/67ea85bca20dd.jpeg' },
    { name: 'Modrić', image: 'https://es.e-noticies.cat/filesedc/uploads/image/post/modric-plano-medio_1200_800.webp' }
  ],
  [
    { name: 'Gavi', image: 'https://img2.rtve.es/i/?w=1600&i=1666032819228.jpg' },
    { name: 'Kroos', image: 'https://c.files.bbci.co.uk/71f4/live/326f1090-1765-11ef-806c-bf47bb1274cd.jpg' }
  ],
  [
    { name: 'Raphinha', image: 'https://img.asmedia.epimg.net/resizer/v2/4HOFZHEQYBGZ3I3PGC3ZQ2HHVE.jpg?auth=3f19c1db58aec65854415f24f14f8914e0f7498cd4f2d72a73809a08837dbec6&width=1200&height=1200&focal=1289%2C466' },
    { name: 'Rodrygo', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Rodrygo_2023_%28cropped%29.jpg/800px-Rodrygo_2023_%28cropped%29.jpg' }
  ],
  [
    { name: 'Araujo', image: 'https://media.elobservador.com.uy/p/355d3019522ddb66a4baeea514019aaf/adjuntos/362/imagenes/100/613/0100613260/1000x0/smart/araujojpg.jpg' },
    { name: 'Rüdiger', image: 'https://e00-xlk-ue-marca.uecdn.es/uploads/2025/03/13/67d2c08b449bc.jpeg' }
  ],
  [
    { name: 'Ter Stegen', image: 'https://www.reuters.com/resizer/v2/IGXAKTNRWZPG5GIREXP4K5GPOQ.jpg?auth=29d02a28d3fe4f2e2bab18bcd59297838f586b98eb80fe9a34915ac6f8e3ab3f&width=5636&quality=80' },
    { name: 'Courtois', image: 'https://s2.ppllstatics.com/rc/www/multimedia/2024/11/15/courtois-knAH-U230166130150rE-1200x840@RC.JPG' }
  ],
  [
    { name: 'Fermín López', image: 'https://futbolete.com/wp-content/uploads/2025/01/fermin-lopez-barcelona-goles-curiosidades-la-liga-espana.jpg' },
    { name: 'Tchouaméni', image: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcT8Ib1SOftqnfF7HC_TenvXDdHLwTc2w_rsVDoMtvApoA3X5M22s6yTmi084UjW_9v3JRAgGldTCKNRV84' }
  ]
];


let votes = Array(characters.length).fill(null).map(() => [0, 0]);
let voted = Array(characters.length).fill(false);
let subscribers: Function[] = [];

export const store = {
  getState: () => ({ characters, votes, voted }),
  subscribe: (cb: Function) => subscribers.push(cb),
};

export const vote = (index: number, side: number) => {
  if (voted[index]) return;
  votes[index][side]++;
  voted[index] = true;
  subscribers.forEach((cb) => cb());
};
