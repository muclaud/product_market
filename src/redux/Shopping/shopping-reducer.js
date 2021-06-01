import * as actionTypes from './shopping-types';

const initialState = {
  products: [
    {
      id: '100',
      name: 'Banan',
      image:
        'https://east-fruit.com/wp-content/uploads/2020/11/banan-960x638.jpg',
      shortDescr:
        'A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa.',
      description:
        'A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, bananas used for cooking may be called "plantains", distinguishing them from dessert bananas. The fruit is variable in size, color, and firmness, but is usually elongated and curved, with soft flesh rich in starch covered with a rind, which may be green, yellow, red, purple, or brown when ripe. The fruits grow in clusters hanging from the top of the plant. Almost all modern edible seedless (parthenocarp) bananas come from two wild species – Musa acuminata and Musa balbisiana. The scientific names of most cultivated bananas are Musa acuminata, Musa balbisiana, and Musa × paradisiaca for the hybrid Musa acuminata × M. balbisiana, depending on their genomic constitution. The old scientific name for this hybrid, Musa sapientum, is no longer used.',
      price: 10,
      discount: '',
    },
    {
      id: '101',
      name: 'Apple',
      image:
        'https://agropolit.com/media/news/o-o-w/00/09/9155/Apple-Fruit-Wallpaper-Free-y5Ezc-1200x750-13520.jpg',
      shortDescr:
        'An apple is an edible fruit produced by an apple tree (Malus domestica). Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus.',
      description:
        'An apple is an edible fruit produced by an apple tree (Malus domestica). Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today. Apples have been grown for thousands of years in Asia and Europe and were brought to North America by European colonists. Apples have religious and mythological significance in many cultures, including Norse, Greek, and European Christian tradition.',
      price: 8,
      discount: '',
    },
    {
      id: '102',
      name: 'Papaya',
      image:
        'https://s9.travelask.ru/system/images/files/001/115/952/wysiwyg_jpg/4.jpg',
      shortDescr:
        'The papaya is a small, sparsely branched tree, usually with a single stem growing from 5 to 10 m (16 to 33 ft) tall, with spirally arranged leaves confined to the top of the trunk.',
      description:
        'The papaya is a small, sparsely branched tree, usually with a single stem growing from 5 to 10 m (16 to 33 ft) tall, with spirally arranged leaves confined to the top of the trunk. The lower trunk is conspicuously scarred where leaves and fruit were borne. The leaves are large, 50–70 cm (20–28 in) in diameter, deeply palmately lobed, with seven lobes. All parts of the plant contain latex in articulated laticifers. Papayas are dioecious. The flowers are five-parted and highly dimorphic; the male flowers have the stamens fused to the petals. The female flowers have a superior ovary and five contorted petals loosely connected at the base. Male and female flowers are borne in the leaf axils, and the males are multiflowered dichasia, and the female flowers are in few-flowered dichasia.[citation needed] The pollen grains are elongated and approximately 35 microns in length.[citation needed] The flowers are sweet-scented, open at night, and wind- or insect-pollinated.',
      price: 10,
      discount: '25$ for 3 kg',
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.products.find((prod) => prod.id === action.payload.id);
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
