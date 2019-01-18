import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        title: 'Samsung Galaxy Note 9',
        image: '/static/images/note9.jpg',
        description: ['Camera: 12 MP + Dual Rear Camera (F1.5/F2.4) + 12 MP (F2.4) | 8 MP (F1.7) front camera',
          'Display: 16.2 centimeters (6.4-inch) QHD+ Super AMOLED Infinity capacitive touchscreen display with 2960x1440 pixels and 18.5:9 aspect ratio',
          'Memory, Storage & SIM: 6GB RAM | 128GB storage expandable up to 512GB | Dual SIM with dual standby (4G+4G)',
          'Operating System and Processor: Android v8.0 Oreo operating system with Exynos Octa core processor'],
        price: 950,
        ratings: 3,
        reviews: 5,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavourite: false,
        quantity: 1
      },
      {
        id: 2,
        title: 'Apple iPhone X',
        image: '/static/images/XS.jpg',
        description: 
          ['Camera: 12+12 MP Dual rear camera with Dual optical image stabilization, Portrait Mode, Digital zoom up to 10x, Quad-LED True tone flash and Slow sync, 4K Video recording at 24 fps or 30 fps or 60 fps and Slow-motion video recording in 1080p at 120 fps | 7 MP front TrueDepth camera with Retina Flash and Animoji feature',
          'Display: 14.73 centimeters (5.8-inch) Full HD+ capacitive touchscreen display with 2436x1125 pixels',
          'Memory, Storage & SIM: 3GB RAM | 64GB storage | Single nano SIM'],
        price: 1050,
        ratings: 3,
        reviews: 5,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavourite: false,
        quantity: 1
      },
      {
        id: 3,
        title: 'Apple MPXT2HN/A Laptop',
        image: '/static/images/macbook_pro.jpg',
        description: ['Upto 2.3GHz Intel Core i5 processor',
          '8GB LPDDR3 RAM',
          '256GB Solid State hard drive',
          'Intel Iris Plus 640 Graphics'],
        price: 2500,
        ratings: 3,
        reviews: 5,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavourite: false,
        quantity: 1
      },
      {
        id: 4,
        title: 'Nikon D750 Digital SLR Camera',
        image: '/static/images/nikon_d750.jpg',
        description: ['Nikon 750D, Nikon SLR, Nikon full frame camera',
          'Packed with an array of powerful features in an incredibly compact frame',
          'Capture even the quickest moving subjects with exceptional clarity'],
        price: 2350,
        ratings: 3,
        reviews: 5,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavourite: false,
        quantity: 1
      },
      {
        id: 5,
        title: 'Sony 138.8 cm (55 inches) 4K Ultra HD Smart LED TV KD-55X8200E',
        image: '/static/images/sony_tv.jpg',
        description: ['Resolution : 4K Ultra HD (3840x2160p)',
          'Display: Triluminous Display | 4K HDR | 4K X-Reality Pro',
          'Smart TV Features: Built-in WiFi | Android Nougat',
          'Connectivity: 4 HDMI ports to connect set top box, Blu Ray players, gaming console | 3 USB ports to connect hard drives and other USB devices'],
        price: 50,
        ratings: 3,
        reviews: 5,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavourite: false,
        quantity: 1
      },
      {
        id: 6,
        title: 'YI 87001 Home Camera Wireless',
        image: '/static/images/homeCamera.jpg',
        description: ['Records in 720p HD to capture clear images for your records and while using 2-way audio (built-in microphone and speaker) 720P/20FPS,700Kbps; 360P/20FPS,200Kbps',
          '111° wide-angle lens, 940nm infrared non-invasive sensor, 4x digital zoom',
          'Built-in (802.11 bgn) Single band 2.4Ghz. Reliable Wi-Fi connectivity to access your camera on YI Home App at anytime',
          'No monthly subscription fees: Secure your videos on a micro SD card (not included), own your video content and access video history anytime. '],
        price: 50,
        ratings: 3,
        reviews: 5,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavourite: false,
        quantity: 1
      },
      {
        id: 7,
        title: 'Apple iPad Pro MQDT2HN/A Tablet',
        image: '/static/images/ipad_pro.jpg',
        description: ['12MP primary camera with auto focus with focus pixels and 7MP front facing camera',
          '26.67 centimeters (10.5-inch) LED-backlit with multi-touch capacitive touchscreen with 2224 x 1668 pixels resolution',
          'iOS v10 operating system with 2.38 GHz A10X Fusion chip with 64-bit architecture Embedded M10 hexa core processor, 4GB RAM, 64GB internal memory'],
        price: 850,
        ratings: 3,
        reviews: 5,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavourite: false,
        quantity: 1
      },
      {
        id: 8,
        title: 'Bose Sound Sport Free Truly Wireless Sport Headphones',
        image: '/static/images/bose_earphones.jpg',
        description: ['Truly wireless sport headphones for total freedom of movement, packed full of technology that makes music sound clear and powerful',
          'Earbuds are sweat and weather resistant (with an IPX4 rating) and come with 3 different pairs of stay hear + sport tips (in sizes S/M/L) that provide a comfortable and secure fit',
          'Up to 5 hours of play time with each charge and an additional 10 hours with the included charging case',
          'Firmware update to improve Audio video synchronization for customers using iPhones, iPads and other Bluetooth devices that support AVDTP version 1.3 or later, available via connect app'],
        price: 300,
        ratings: 3,
        reviews: 5,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavourite: false,
        quantity: 1
      },
      {
        id: 9,
        title: 'Fossil Explorist Analog-Digital Black Dial Watch',
        image: '/static/images/watch.jpg',
        description: ['The battery life varies depending on the usage of the watch',
          'Calling facilities are compatible with Android phones only',
          'Stay connected with display notifications and touchscreen functionality for texts, calls, emails, and app updates. Our smartwatches use Bluetooth technology to connect to your phone.',
          'With built-in activity tracking, you can track your everyday accomplishments including steps, distance, and calories burned. Automatically syncs to your phone so you can keep tabs on your activity and notifications without ever pushing a button.'],
        price: 200,
        ratings: 4,
        reviews: 5,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavourite: false,
        quantity: 1
      }
    ],
    userInfo: {
      isLoggedIn: false,
      isSignedUp: false,
      hasSearched: false,
      name: '',
      productTitleSearched: ''
    },
    systemInfo: {
      openLoginModal: false,
      openSignupModal: false,
      openCheckoutModal: false
    }
  },
  
  getters: {
    productsAdded: state => {
      return state.products.filter(el => {
        return el.isAddedToCart;
      });
    },
    productsAddedToFavourite: state => {
      return state.products.filter(el => {
        return el.isFavourite;
      });
    },
    getProductById: state => id => {
      return state.products.find(product => product.id == id);
    },
    isUserLoggedIn: state => {
      return state.userInfo.isLoggedIn;
    },
    isUserSignedUp: state => {
      return state.userInfo.isSignedUp;
    },
    getUserName: state => {
      return state.userInfo.name;
    },
    isLoginModalOpen: state => {
      return state.systemInfo.openLoginModal;
    },
    isSignupModalOpen: state => {
      return state.systemInfo.openSignupModal;
    },
    isCheckoutModalOpen: state => {
      return state.systemInfo.openCheckoutModal;
    },
    quantity: state => {
      return state.products.quantity;
    }
  },
  
  mutations: {
    addToCart: (state, id) => {
      state.products.forEach(el => {
        if (id === el.id) {
          el.isAddedToCart = true;
        }
      });
    },
    setAddedBtn: (state, data) => {
      state.products.forEach(el => {
        if (data.id === el.id) {
          el.isAddedBtn = data.status;
        }
      });
    },
    removeFromCart: (state, id) => {
      state.products.forEach(el => {
        if (id === el.id) {
          el.isAddedToCart = false;
        }
      });
    },
    removeProductsFromFavourite: state => {
      state.products.filter(el => {
        el.isFavourite = false;
      });
    },
    isUserLoggedIn: (state, isUserLoggedIn) => {
      state.userInfo.isLoggedIn = isUserLoggedIn;
    },
    isUserSignedUp: (state, isSignedUp) => {
      state.userInfo.isSignedUp = isSignedUp;
    },
    setHasUserSearched: (state, hasSearched) => {
      state.userInfo.hasSearched = hasSearched;
    },
    setUserName: (state, name) => {
      state.userInfo.name = name;
    },
    setProductTitleSearched: (state, titleSearched) => {
      state.userInfo.productTitleSearched = titleSearched;
    },
    showLoginModal: (state, show) => {
      state.systemInfo.openLoginModal = show;
    },
    showSignupModal: (state, show) => {
      state.systemInfo.openSignupModal = show;
    },
    showCheckoutModal: (state, show) => {
      state.systemInfo.openCheckoutModal = show;
    },
    addToFavourite: (state, id) => {
      state.products.forEach(el => {
        if (id === el.id) {
          el.isFavourite = true;
        }
      });
    },
    removeFromFavourite: (state, id) => {
      state.products.forEach(el => {
        if (id === el.id) {
          el.isFavourite = false;
        }
      });
    },
    quantity: (state, data) => {
      state.products.forEach(el => {
        if (data.id === el.id) {
          el.quantity = data.quantity;
        }
      });
    }
  },
  
  actions: {

  }
});
