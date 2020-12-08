export const INITIAL_STATE = {

items: [
  {
    id: 1,
    name: 'Brown Brim',
    imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
    price: 25,
    size: 'M'
  },
  {
    id: 2,
    name: 'Blue Beanie',
    imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
    price: 18,
    size: 'S'
  },
  {
    id: 3,
    name: 'Brown Cowboy',
    imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
    price: 35,
    size: 'S'
  },
  {
    id: 18,
    name: 'Black Jean Shearling',
    imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
    price: 125,
    size: 'M'
  },
  {
    id: 19,
    name: 'Blue Jean Jacket',
    imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
    price: 90,
    size: 'M'
  },
  {
    id: 20,
    name: 'Grey Jean Jacket',
    imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
    price: 90,
    size: 'M'
  },
  {
    id: 23,
    name: 'Blue Tanktop',
    imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
    price: 25,
    size: 'M'
  },
  {
    id: 24,
    name: 'Floral Blouse',
    imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
    price: 20,
    size: 'M'
  },
  {
    id: 25,
    name: 'Floral Dress',
    imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
    price: 80,
    size: 'M'
  },
  {
    id: 30,
    name: 'Camo Down Vest',
    imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
    price: 325,
    size: 'M'
  },
  {
    id: 31,
    name: 'Floral T-shirt',
    imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
    price: 20,
    size: 'M'
  },
  {
    id: 32,
    name: 'Black & White Longsleeve',
    imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
    price: 25,
    size: 'M'
  },
]
};

const sliderItemsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default sliderItemsReducer;
