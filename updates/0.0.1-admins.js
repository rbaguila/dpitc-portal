/**
 * This script automatically creates a default Admin user when an
 * empty database is used for the first time. You can use this
 * technique to insert data into any List you have defined.
 *
 * Alternatively, you can export a custom function for the update:
 * module.exports = function(done) { ... }
 */

exports.create = {
  User: [
    {
      'name.first': 'Roinand',
      'name.last': 'Aguila',
      'email': 'aroinand@gmail.com',
      'password': 'admin',
      'isAdmin': true,
      'isElearningAdmin': true,
      'isElearningUser': true,
      '__ref': 'admin',
      'birthday': '1997-03-01',
      'sex': 'Male'
    },
  //],

  /*ELearning Fixtures*/
    {
      'name.first': 'Juan',
      'name.last': 'Dela Cruz',
      'email': 'jdelacruz@gmail.com',
      'password': 'password',
      'isAdmin': false,
      'isElearningAdmin': false,
      'isElearningUser': true,
      'birthday': '1997-03-01',
      'sex': 'Male',
      '__ref': 'Juan'
    },
    {
      'name.first': 'John',
      'name.last': 'Smith',
      'email': 'jsmith@gmail.com',
      'password': 'password',
      'isAdmin': false,
      'isElearningAdmin': false,
      'isElearningUser': true,
      'birthday': '1997-03-01',
      'sex': 'Male',
      '__ref': 'John'
    },
    {
      'name.first': 'Jane',
      'name.last': 'Doe',
      'email': 'jdoe@gmail.com',
      'password': 'password',
      'isAdmin': false,
      'isElearningAdmin': false,
      'isElearningUser': true,
      'birthday': '1997-03-01',
      'sex': 'Male',
      '__ref': 'Jane'
    },
    {
      'name.first': 'Albert',
      'name.last': 'Kim',
      'email': 'akim@gmail.com',
      'password': 'password',
      'isAdmin': false,
      'isElearningAdmin': false,
      'isElearningUser': true,
      'birthday': '1997-03-01',
      'sex': 'Male',
      '__ref': 'Albert'
    },
    {
      'name.first': 'Bryan',
      'name.last': 'Kim',
      'email': 'bkim@gmail.com',
      'password': 'password',
      'isAdmin': false,
      'isElearningAdmin': false,
      'isElearningUser': true,
      'birthday': '1997-03-01',
      'sex': 'Male',
      '__ref': 'Bryan'
    },
    {
      'name.first': 'Carl',
      'name.last': 'Kim',
      'email': 'ckim@gmail.com',
      'password': 'password',
      'isAdmin': false,
      'isElearningAdmin': false,
      'isElearningUser': true,
      'birthday': '1997-03-01',
      'sex': 'Male',
      '__ref': 'Lee'
    },
    {
      'name.first': 'Daniel',
      'name.last': 'Kim',
      'email': 'dkim@gmail.com',
      'password': 'password',
      'isAdmin': false,
      'isElearningAdmin': false,
      'isElearningUser': true,
      'birthday': '1997-03-01',
      'sex': 'Male',
      '__ref': 'Daniel'
    },
    {
      'name.first': 'Ellen',
      'name.last': 'Kim',
      'email': 'ekim@gmail.com',
      'password': 'password',
      'isAdmin': false,
      'isElearningAdmin': false,
      'isElearningUser': true,
      'birthday': '1997-03-01',
      'sex': 'Male',
      '__ref': 'Ellen'
    },
    {
      'name.first': 'Ferdinand',
      'name.last': 'Kim',
      'email': 'fkim@gmail.com',
      'password': 'password',
      'isAdmin': false,
      'isElearningAdmin': false,
      'isElearningUser': true,
      'birthday': '1997-03-01',
      'sex': 'Male',
      '__ref': 'Ferdinand'
    },
    {
      'name.first': 'Gerald',
      'name.last': 'Kim',
      'email': 'gkim@gmail.com',
      'password': 'password',
      'isAdmin': false,
      'isElearningAdmin': false,
      'isElearningUser': true,
      'birthday': '1997-03-01',
      'sex': 'Male',
      '__ref': 'Gerald'
    },
    {
      'name.first': 'Harold',
      'name.last': 'Kim',
      'email': 'hkim@gmail.com',
      'password': 'password',
      'isAdmin': false,
      'isElearningAdmin': false,
      'isElearningUser': true,
      'birthday': '1997-03-01',
      'sex': 'Male',
      '__ref': 'Harold'
    },
    {
      'name.first': 'Irish',
      'name.last': 'Kim',
      'email': 'ikim@gmail.com',
      'password': 'password',
      'isAdmin': false,
      'isElearningAdmin': false,
      'isElearningUser': true,
      'birthday': '1997-03-01',
      'sex': 'Male',
      '__ref': 'Irish'
    },
    {
      'name.first': 'Jeff',
      'name.last': 'Kim',
      'email': 'jkim@gmail.com',
      'password': 'password',
      'isAdmin': false,
      'isElearningAdmin': false,
      'isElearningUser': true,
      'birthday': '1997-03-01',
      'sex': 'Male',
      '__ref': 'Jeff'
    },
    {
      'name.first': 'Karl',
      'name.last': 'Kim',
      'email': 'kkim@gmail.com',
      'password': 'password',
      'isAdmin': false,
      'isElearningAdmin': false,
      'isElearningUser': true,
      'birthday': '1997-03-01',
      'sex': 'Male',
      '__ref': 'Karl'
    },
    {
      'name.first': 'Logan',
      'name.last': 'Kim',
      'email': 'lkim@gmail.com',
      'password': 'password',
      'isAdmin': false,
      'isElearningAdmin': false,
      'isElearningUser': true,
      'birthday': '1997-03-01',
      'sex': 'Male',
      '__ref': 'Logan'
    },
    {
      'name.first': 'Manuel',
      'name.last': 'Kim',
      'email': 'mkim@gmail.com',
      'password': 'password',
      'isAdmin': false,
      'isElearningAdmin': false,
      'isElearningUser': true,
      'birthday': '1997-03-01',
      'sex': 'Male',
      '__ref': 'Manuel'
    },
    {
      'name.first': 'Natalie',
      'name.last': 'Kim',
      'email': 'nkim@gmail.com',
      'password': 'password',
      'isAdmin': false,
      'isElearningAdmin': false,
      'isElearningUser': true,
      'birthday': '1997-03-01',
      'sex': 'Male',
      '__ref': 'Natalie'
    },
    {
      'name.first': 'Oliver',
      'name.last': 'Kim',
      'email': 'okim@gmail.com',
      'password': 'password',
      'isAdmin': false,
      'isElearningAdmin': false,
      'isElearningUser': true,
      'birthday': '1997-03-01',
      'sex': 'Male',
      '__ref': 'Oliver'
    },
    {
      'name.first': 'Patricia',
      'name.last': 'Kim',
      'email': 'pkim@gmail.com',
      'password': 'password',
      'isAdmin': false,
      'isElearningAdmin': false,
      'isElearningUser': true,
      'birthday': '1997-03-01',
      'sex': 'Male',
      '__ref': 'Patricia'
    },
    {
      'name.first': 'Queen',
      'name.last': 'Kim',
      'email': 'qkim@gmail.com',
      'password': 'password',
      'isAdmin': false,
      'isElearningAdmin': false,
      'isElearningUser': true,
      'birthday': '1997-03-01',
      'sex': 'Male',
      '__ref': 'Queen'
    },
    {
      'name.first': 'Rona',
      'name.last': 'Kim',
      'email': 'rkim@gmail.com',
      'password': 'password',
      'isAdmin': false,
      'isElearningAdmin': false,
      'isElearningUser': true,
      'birthday': '1997-03-01',
      'sex': 'Male',
      '__ref': 'Rona'
    },
    {
      'name.first': 'Sally',
      'name.last': 'Kim',
      'email': 'skim@gmail.com',
      'password': 'password',
      'isAdmin': false,
      'isElearningAdmin': false,
      'isElearningUser': true,
      'birthday': '1997-03-01',
      'sex': 'Male',
      '__ref': 'Sally'
    },
    {
      'name.first': 'Tim',
      'name.last': 'Kim',
      'email': 'tkim@gmail.com',
      'password': 'password',
      'isAdmin': false,
      'isElearningAdmin': false,
      'isElearningUser': true,
      'birthday': '1997-03-01',
      'sex': 'Male',
      '__ref': 'Tim'
    },
    {
      'name.first': 'Uvin',
      'name.last': 'Kim',
      'email': 'ukim@gmail.com',
      'password': 'password',
      'isAdmin': false,
      'isElearningAdmin': false,
      'isElearningUser': true,
      'birthday': '1997-03-01',
      'sex': 'Male',
      '__ref': 'Uvin'
    },
    {
      'name.first': 'Vince',
      'name.last': 'Kim',
      'email': 'vkim@gmail.com',
      'password': 'password',
      'isAdmin': false,
      'isElearningAdmin': false,
      'isElearningUser': true,
      'birthday': '1997-03-01',
      'sex': 'Male',
      '__ref': 'Vince'
    },
    {
      'name.first': 'Wilson',
      'name.last': 'Kim',
      'email': 'wkim@gmail.com',
      'password': 'password',
      'isAdmin': false,
      'isElearningAdmin': false,
      'isElearningUser': true,
      'birthday': '1997-03-01',
      'sex': 'Male',
      '__ref': 'Wilson'
    },
    {
      'name.first': 'Xyrus',
      'name.last': 'Kim',
      'email': 'xkim@gmail.com',
      'password': 'password',
      'isAdmin': false,
      'isElearningAdmin': false,
      'isElearningUser': true,
      'birthday': '1997-03-01',
      'sex': 'Male',
      '__ref': 'Xyrus'
    },
    {
      'name.first': 'Yvette',
      'name.last': 'Kim',
      'email': 'ykim@gmail.com',
      'password': 'password',
      'isAdmin': false,
      'isElearningAdmin': false,
      'isElearningUser': true,
      'birthday': '1997-03-01',
      'sex': 'Male',
      '__ref': 'Yvette'
    },
    {
      'name.first': 'Zend',
      'name.last': 'Kim',
      'email': 'zkim@gmail.com',
      'password': 'password',
      'isAdmin': false,
      'isElearningAdmin': false,
      'isElearningUser': true,
      'birthday': '1997-03-01',
      'sex': 'Male',
      '__ref': 'Zend'
    },
    {
      'name.first': 'Henry',
      'name.last': 'Lee',
      'email': 'hlee@gmail.com',
      'password': 'password',
      'isAdmin': false,
      'isElearningAdmin': false,
      'isElearningUser': true,
      'birthday': '1997-03-01',
      'sex': 'Male',
      '__ref': 'Henry'
    },
    {
      'name.first': 'Angelica',
      'name.last': 'Lee',
      'email': 'alee@gmail.com',
      'password': 'password',
      'isAdmin': false,
      'isElearningAdmin': false,
      'isElearningUser': true,
      'birthday': '1997-03-01',
      'sex': 'Male',
      '__ref': 'Angelica'
    },
    {
      'name.first': 'Kris',
      'name.last': 'Lee',
      'email': 'klee@gmail.com',
      'password': 'password',
      'isAdmin': false,
      'isElearningAdmin': false,
      'isElearningUser': true,
      'birthday': '1997-03-01',
      'sex': 'Male',
      '__ref': 'Kris'
    },
    {
      'name.first': 'Luhan',
      'name.last': 'Lee',
      'email': 'llee@gmail.com',
      'password': 'password',
      'isAdmin': false,
      'isElearningAdmin': false,
      'isElearningUser': true,
      'birthday': '1997-03-01',
      'sex': 'Male',
      '__ref': 'Luhan'
    },
    {
      'name.first': 'Amber',
      'name.last': 'Lee',
      'email': 'alee@gmail.com',
      'password': 'password',
      'isAdmin': false,
      'isElearningAdmin': false,
      'isElearningUser': true,
      'birthday': '1997-03-01',
      'sex': 'Male',
      '__ref': 'Amber'
    },
    {
      'name.first': 'Victoria',
      'name.last': 'Lee',
      'email': 'vlee@gmail.com',
      'password': 'password',
      'isAdmin': false,
      'isElearningAdmin': false,
      'isElearningUser': true,
      'birthday': '1997-03-01',
      'sex': 'Male',
      '__ref': 'Victoria'
    },
    {
      'name.first': 'Krystal',
      'name.last': 'Lee',
      'email': 'klee@gmail.com',
      'password': 'password',
      'isAdmin': false,
      'isElearningAdmin': false,
      'isElearningUser': true,
      'birthday': '1997-03-01',
      'sex': 'Male',
      '__ref': 'Krystal'
    },
    {
      'name.first': 'Gary',
      'name.last': 'Lee',
      'email': 'glee@gmail.com',
      'password': 'password',
      'isAdmin': false,
      'isElearningAdmin': false,
      'isElearningUser': true,
      'birthday': '1997-03-01',
      'sex': 'Male',
      '__ref': 'Gary'
    },
    {
      'name.first': 'Joon',
      'name.last': 'Lee',
      'email': 'jlee@gmail.com',
      'password': 'password',
      'isAdmin': false,
      'isElearningAdmin': false,
      'isElearningUser': true,
      'birthday': '1997-03-01',
      'sex': 'Male',
      '__ref': 'Joon'
    },
    {
      'name.first': 'Cena',
      'name.last': 'Lee',
      'email': 'clee@gmail.com',
      'password': 'password',
      'isAdmin': false,
      'isElearningAdmin': false,
      'isElearningUser': true,
      'birthday': '1997-03-01',
      'sex': 'Male',
      '__ref': 'Cena'
    },
    {
      'name.first': 'Justin',
      'name.last': 'Lee',
      'email': 'jlee@gmail.com',
      'password': 'password',
      'isAdmin': false,
      'isElearningAdmin': false,
      'isElearningUser': true,
      'birthday': '1997-03-01',
      'sex': 'Male',
      '__ref': 'Justin'
    },
    {
      'name.first': 'Christian',
      'name.last': 'Chim',
      'email': 'cchim@gmail.com',
      'password': 'password',
      'isAdmin': false,
      'isElearningAdmin': false,
      'isElearningUser': true,
      'birthday': '1995-10-01',
      'sex': 'Male',
    }
  ],


  /*
    Categories:
      LIndustry
      - LSector
        - ISP
  */

  LIndustry: [
    {
      'name': 'Agriculture',
      '__ref': 'agri-industry'
    },
    {
      'name': 'Aquatic Resources',
      '__ref': 'aqua-industry'
    },
    {
      'name': 'Natural Resources',
      '__ref': 'natural-industry'
    }
  ],

  LSector: [
    {
      'name': 'Crops',
      'industry': 'agri-industry',
      '__ref': 'crops-sector'
    },
    {
      'name': 'Livestock',
      'industry': 'agri-industry',
      '__ref': 'livestock-sector'
    },
    {
      'name': 'Inland Aquatic',
      'industry': 'aqua-industry',
      '__ref': 'inlandaq-sector'
    },
    {
      'name': 'Marine Resources',
      'industry': 'aqua-industry',
      '__ref': 'marineres-sector'
    },
    {
      'name': 'Ocean Environment Services (OES)',
      'industry': 'aqua-industry',
      '__ref': 'oes-sector'
    },
    {
      'name': 'Forestry',
      'industry': 'natural-industry',
      '__ref': 'forestry-sector'
    },
    {
      'name': 'Inland Environment Services (IES)',
      'industry': 'natural-industry',
      '__ref': 'ies-sector'
    }

  ],

  ISP: [
    {
      'name': 'Corn',
      'sector': 'crops-sector',
      '__ref': 'corn-isp'
    },
    {
      'name': 'Rice',
      'sector': 'crops-sector',
      '__ref': 'rice-isp'
    },
    {
      'name': 'Abaca',
      'sector': 'crops-sector',
      '__ref': 'abaca-isp'
    },
    {
      'name': 'Banana',
      'sector': 'crops-sector',
      '__ref': 'banana-isp'
    },
    {
      'name': 'Coconut',
      'sector': 'crops-sector',
      '__ref': 'coconut-isp'
    },
    {
      'name': 'Coffee',
      'sector': 'crops-sector',
      '__ref': 'coffee-isp'
    },
    {
      'name': 'Legume',
      'sector': 'crops-sector',
      '__ref': 'legume-isp'
    },
    {
      'name': 'Mango',
      'sector': 'crops-sector',
      '__ref': 'mango-isp'
    },
    {
      'name': 'Rice',
      'sector': 'crops-sector',
      '__ref': 'rice-isp'
    },
    {
      'name': 'Rootcrop',
      'sector': 'crops-sector',
      '__ref': 'rootcrop-isp'
    },
    {
      'name': 'Sugarcane',
      'sector': 'crops-sector',
      '__ref': 'sugarcane-isp'
    },
    {
      'name': 'Tropical Fruit',
      'sector': 'crops-sector',
      '__ref': 'tropicalfruit-isp'
    },
    {
      'name': 'Vegetable',
      'sector': 'crops-sector',
      '__ref': 'vegetable-isp'
    },
    {
      'name': 'Feed Resources (Livestock)',
      'sector': 'livestock-sector',
      '__ref': 'feedres-l-isp'
    },
    {
      'name': 'Dairy Goat',
      'sector': 'livestock-sector',
      '__ref': 'dairygoat-isp'
    },
    {
      'name': 'Slaughter Goat',
      'sector': 'livestock-sector',
      '__ref': 'slaughtergoat-isp'
    },
    {
      'name': 'Dairy Buffalo',
      'sector': 'livestock-sector',
      '__ref': 'dairybuffalo-isp'
    },
    {
      'name': 'Swine',
      'sector': 'livestock-sector',
      '__ref': 'swine-isp'
    },
    {
      'name': 'Duck',
      'sector': 'livestock-sector',
      '__ref': 'duck-isp'
    },
    {
      'name': 'Native Chicken',
      'sector': 'livestock-sector',
      '__ref': 'nativechicken-isp'
    },
    {
      'name': 'Feed Resources (Inland Aquatic)',
      'sector': 'inlandaq-sector',
      '__ref': 'feedres-ia-isp'
    },
    {
      'name': 'Milkfish',
      'sector': 'inlandaq-sector',
      '__ref': 'milkfish-isp'
    },
    {
      'name': 'Mangrove Crab (Mudcrab)',
      'sector': 'inlandaq-sector',
      '__ref': 'mudcrab-isp'
    },
    {
      'name': 'Tilapia',
      'sector': 'inlandaq-sector',
      '__ref': 'tilapia-isp'
    },
    {
      'name': 'Shrimp',
      'sector': 'inlandaq-sector',
      '__ref': 'shrimp-isp'
    },
    {
      'name': 'Mussel',
      'sector': 'inlandaq-sector',
      '__ref': 'mussel-isp'
    },
    {
      'name': 'Blue Swimming Crab',
      'sector': 'marineres-sector',
      '__ref': 'bscrab-isp'
    },
    {
      'name': 'Abalone',
      'sector': 'marineres-sector',
      '__ref': 'abalone-isp'
    },
    {
      'name': 'Oyster',
      'sector': 'marineres-sector',
      '__ref': 'oyster-isp'
    },
    {
      'name': 'Sardines',
      'sector': 'marineres-sector',
      '__ref': 'sardines-isp'
    },
    {
      'name': 'Sea Cucumber',
      'sector': 'marineres-sector',
      '__ref': 'seacucumber-isp'
    },
    {
      'name': 'Seaweeds',
      'sector': 'marineres-sector',
      '__ref': 'seaweeds-isp'
    },
    {
      'name': 'Tuna',
      'sector': 'marineres-sector',
      '__ref': 'tuna-isp'
    },
    {
      'name': 'Bathymetry',
      'sector': 'oes-sector',
      '__ref': 'bathymetry-isp'
    },
    {
      'name': 'Corals',
      'sector': 'oes-sector',
      '__ref': 'corals-isp'
    },
    {
      'name': 'Fishing Maps',
      'sector': 'oes-sector',
      '__ref': 'fishingmaps-isp'
    },
    {
      'name': 'Harmful Algal Blooms',
      'sector': 'oes-sector',
      '__ref': 'algalblooms-isp'
    },
    {
      'name': 'Cacao',
      'sector': 'forestry-sector',
      '__ref': 'cacao-isp'
    },
    {
      'name': 'Bamboo',
      'sector': 'forestry-sector',
      '__ref': 'bamboo-isp'
    },
    {
      'name': 'Sago',
      'sector': 'forestry-sector',
      '__ref': 'sago-isp'
    },
    {
      'name': 'Rubber',
      'sector': 'forestry-sector',
      '__ref': 'rubber-isp'
    },
    {
      'name': 'Industrial Tree Plant',
      'sector': 'forestry-sector',
      '__ref': 'itreeplant-isp'
    },
    {
      'name': 'Biodiversity',
      'sector': 'forestry-sector',
      '__ref': 'biodiversity-isp'
    },
    {
      'name': 'Climate Change',
      'sector': 'forestry-sector',
      '__ref': 'climatechange-isp'
    },
    {
      'name': 'Watershed',
      'sector': 'forestry-sector',
      '__ref': 'watershed-isp'
    },
    {
      'name': 'Mangrove',
      'sector': 'forestry-sector',
      '__ref': 'mangrove-isp'
    },
  ],

  /*
    Learning Objects:
      - Course
        - Chapter
          - LearningObject
            - LOVideo
            - ISP

  */

  LOVideo: [
    {
      'title': 'Stages Corn',
      'url': 'https://www.youtube.com/watch?v=VlSmx5Tck-s&index=1&t=3s&list=PLbdcQpXzx9ZVRXKNzyGJW9Nsr_wj8TMPJ',
    //  'videoId': 'VlSmx5Tck-s',
      '__ref': 'stagescorn-yt'
    },
    {
      'title': 'Soil Fertilization',
      'url': 'https://www.youtube.com/watch?v=BPiQTm2uqo0&index=2&t=6s&list=PLbdcQpXzx9ZVRXKNzyGJW9Nsr_wj8TMPJ',
    //  'videoId': 'BPiQTm2uqo0',
      '__ref': 'soilfertilization-yt'
    },
    {
      'title': 'Land Preparation',
      'url': 'https://www.youtube.com/watch?v=s8xBIWP83cg&index=3&list=PLbdcQpXzx9ZVRXKNzyGJW9Nsr_wj8TMPJ',
    //  'videoId': 's8xBIWP83cg',
      '__ref': 'landpreparation-yt'
    },
    {
      'title': 'Grain Quality',
      'url': 'https://www.youtube.com/watch?v=wqQzFz0WdtE&index=4&list=PLbdcQpXzx9ZVRXKNzyGJW9Nsr_wj8TMPJ',
    //  'videoId': 'wqQzFz0WdtE',
      '__ref': 'grainquality-yt'
    },
    {
      'title': 'Feeding Program',
      'url': 'https://www.youtube.com/watch?v=LlR9jsIg_Ik&index=5&list=PLbdcQpXzx9ZVRXKNzyGJW9Nsr_wj8TMPJ',
    //  'videoId': 'LlR9jsIg_Ik',
      '__ref': 'feedingprogram-yt'
    },
    {
      'title': 'Farm Mechanization',
      'url': 'https://www.youtube.com/watch?v=kgpWtPmT6Qc&index=6&list=PLbdcQpXzx9ZVRXKNzyGJW9Nsr_wj8TMPJ',
    //  'videoId': '',
      '__ref': 'farmmechanization-yt'
    },
    {
      'title': 'Economic Aspect',
      'url': 'https://www.youtube.com/watch?v=wt7P5Cz8_UY&index=7&list=PLbdcQpXzx9ZVRXKNzyGJW9Nsr_wj8TMPJ',
    //  'videoId': '',
      '__ref': 'economicaspect-yt'
    },
    {
      'title': 'Corn Processing',
      'url': 'https://www.youtube.com/watch?v=YWCebgn2KcU&index=8&list=PLbdcQpXzx9ZVRXKNzyGJW9Nsr_wj8TMPJ',
    //  'videoId': '',
      '__ref': 'cornprocessing-yt'
    },
    {
      'title': 'Corn Pests',
      'url': 'https://www.youtube.com/watch?v=ZocuzjY_6yQ&index=9&list=PLbdcQpXzx9ZVRXKNzyGJW9Nsr_wj8TMPJ',
    //  'videoId': '',
      '__ref': 'cornpests-yt'
    },
    {
      'title': 'Corn Forage',
      'url': 'https://www.youtube.com/watch?v=4NruDxZNF7Y&index=10&list=PLbdcQpXzx9ZVRXKNzyGJW9Nsr_wj8TMPJ',
    //  'videoId': '',
      '__ref': 'cornforage-yt'
    },
    {
      'title': 'Corn Diseases',
      'url': 'https://www.youtube.com/watch?v=ZxiBcJJHL_c&index=11&list=PLbdcQpXzx9ZVRXKNzyGJW9Nsr_wj8TMPJ',
    //  'videoId': '',
      '__ref': 'corndiseases-yt'
    },
    {
      'title': 'Conservation Methods',
      'url': 'https://www.youtube.com/watch?v=quLBub6Hpg0&index=12&list=PLbdcQpXzx9ZVRXKNzyGJW9Nsr_wj8TMPJ',
    //  'videoId': '',
      '__ref': 'conservationmethods-yt'
    },
    {
      'title': 'Choosing Producing',
      'url': 'https://www.youtube.com/watch?v=vCTqwpia1YY&index=13&list=PLbdcQpXzx9ZVRXKNzyGJW9Nsr_wj8TMPJ',
    //  'videoId': '',
      '__ref': 'choosingproducing-yt'
    },
    {
      'title': 'Biotech BtCorn ',
      'url': 'https://www.youtube.com/watch?v=Yt2MkxFeono&index=14&t=120s&list=PLbdcQpXzx9ZVRXKNzyGJW9Nsr_wj8TMPJ',
    //  'videoId': 'Yt2MkxFeono',
      '__ref': 'biotechbtcorn-yt'
    },

    /*{
      'title': '',
      'url': '',
    //  'videoId': '',
      '__ref': ''
    },
    */

  ],
  Author: [
    {
      'name': 'Project SARAI',
      '__ref': 'sarai'
    }
  ],

  LOFileUpload: [
    /* CORN TOOLKIT */
    {
      'name': 'Introduction to SARAI Training Toolkit for Corn',
      'description': 'The SARAI TRAINING TOOLKIT FOR CORN is a user-friendly guide to all the developed technologies and systems of the program. It provides the stakeholders a holistic view of the program, and its direct applications to daily agricultural practices.',
      '__ref': 'intro-corn-toolkit-file',
    },

    {
      'name': 'Volume 1: Introduction to SARAI',
      'description': 'This volume discusses the detailed introduction to the program – its main objectives, various components, and expected outputs',

      '__ref': 'corn-vol1-file',
    },

    {
      'name': 'Volume 2: Climate, Weather & Climate Change',
      'description': 'Before the discussion on the numerous technologies and systems to improve their agricultural practices, it is important for them to develop a basic understanding of climate, weather, and climate change',
      '__ref': 'corn-vol2-file',
    },

    {
      'name': 'Volume 3: Pests and Diseases of Corn',
      'description': 'This volume focuses on the major corn pests and diseases.',
      '__ref': 'corn-vol3-file',
    },

    {
      'name': 'Volume 4: Nutrient Management',
      'description': 'This volume emphasizes the importance of providing our farmers with site-specific crop nutrient advisories for maximum crop growth.',

      '__ref': 'corn-vol4-file',
    },

    {
      'name': 'Volume 5: Soil Moisture Monitoring System',
      'description': 'This volume focuses on three topics: \nModule 1 – Discusses the physical and chemical characteristics of soil and the importance of active soil moisture monitoring. \nModule 2 – Presents the Project SARAI cost-efficient soil moisture monitoring system. Basic steps on how to set up, operate, and roubleshoot the sensors will be discussed \nModule 3 – Includes the use of Water-balanced Assisted Irrigation Decision Support System (WAISS) and how it works.',

      '__ref': 'corn-vol5-file',
    },

    {
      'name': 'Volume 6: SARAI Knowledge Portal',
      'description': 'This volume gives a walkthrough on the SARAI Knowledge Portal. This portal offers a wide-range of agricultural services in web and mobile platforms for its initial six priority crops.',
      '__ref': 'corn-vol6-file',
    },

    /* RICE TOOLKIT */

    {
      'name': 'Introduction to SARAI Training Toolkit for Rice',
      'description': 'The SARAI TRAINING TOOLKIT FOR RICE is a user-friendly guide to all the developed technologies and systems of the program. It provides the stakeholders a holistic view of the program, and its direct applications to daily agricultural practices.',
      '__ref': 'intro-rice-toolkit-file',
    },

    {
      'name': 'Volume 1: Introduction to SARAI',
      'description': 'This volume discusses the detailed introduction to the program – its main objectives, various components, and expected outputs.',
      '__ref': 'rice-vol1-file',
    },

    {
      'name': 'Volume 2: Climate, Weather & Climate Change',
      'description': 'Before the trainers introduce the participants to numerous technologies and systems to improve their agricultural practices, it is important for them to develop a basic understanding of climate, weather, and climate change.',
      '__ref': 'rice-vol2-file',
    },

    {
      'name': 'Volume 3: Pests and Diseases of Rice',
      'description': 'This volume highlights the importance of understanding the plants’ specific growth stage and how their vulnerabilities to particular pests and diseases change over time. ',
      '__ref': 'rice-vol3-file',
    },

    {
      'name': 'Volume 4: Nutrient Management',
      'description': 'This volume emphasizes the importance of providing our farmers with site-specific crop nutrient advisories for maximum crop growth.',
      '__ref': 'rice-vol4-file',
    },

    {
      'name': 'Volume 5: SARAI Knowledge Portal',
      'description': 'This volume gives a walkthrough on the SARAI Knowledge Portal. This portal offers a wide-range of agricultural services in web and mobile platforms for its initial six priority crops.',
      '__ref': 'rice-vol5-file',
    },

  ],


  LearningObject: [
    /* CORN TOOLKIT */
    {
      'title': 'Introduction to SARAI Training Toolkit for Corn',
      'state': 'published',
      'author': 'sarai',
      'publishedAt': Date.now,
      'content': {
        'brief': 'The SARAI TRAINING TOOLKIT FOR CORN is a user-friendly guide to all the developed technologies and systems of the program. It provides the stakeholders a holistic view of the program, and its direct applications to daily agricultural practices.',
        'extended': 'The SARAI TRAINING TOOLKIT FOR CORN is a user-friendly guide to all the developed technologies and systems of the program. It provides the stakeholders a holistic view of the program, and its direct applications to daily agricultural practices. In addition to the conduct of lectures and group discussions, one other important facet of the SARAI Training is the incorporation of fieldworks to the exercises. These field exposures provide participants the opportunities to test out what they learned, document their questions, and directly discuss with the trainers issues that can only be better appreciated in a field setting. The toolkit is a package of modules, PowerPoint presentations, and handouts. All these materials will be provided to the training participants, both in hardcopy and e-copy formats.',
      },
      'isp': 'corn-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,
      'file': 'intro-corn-toolkit-file',
      'createdAt': Date.now,
      'updatedAt': Date.now,
      'createdBy': 'admin',
      '__ref': 'intro-corn-toolkit',
    },

    {
      'title': 'Volume 1: Introduction to SARAI',
      'state': 'published',
      'author': 'sarai',
      'publishedAt': Date.now,
      'content': {
        'brief': 'This volume discusses the detailed introduction to the program – its main objectives, various components, and expected outputs',
        'extended': 'This volume discusses the detailed introduction to the program – its main objectives, various components, and expected outputs. This is an appreciation volume that presents ideas for how SARAI can contribute to the regular agricultural activities of our farmers. It is divided into two modules: \nModule 1 – Detailed discussion on Project SARAI and its various components \nModule 2 – Introduction and discussion on the smarter technologies promoted by Project SARAI',
      },
      'isp': 'corn-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,
      'file': 'corn-vol1-file',
      'createdAt': Date.now,
      'updatedAt': Date.now,
      'createdBy': 'admin',
      '__ref': 'corn-vol1',
    },

    {
      'title': 'Volume 2: Climate, Weather & Climate Change',
      'state': 'published',
      'author': 'sarai',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Before the discussion on the numerous technologies and systems to improve their agricultural practices, it is important for them to develop a basic understanding of climate, weather, and climate change',
        'extended': 'Before the discussion on the numerous technologies and systems to improve their agricultural practices, it is important for them to develop a basic understanding of climate, weather, and climate change. This volume has two modules: \nModule 1 – Discussion on climate and weather \nModule 2 – Understanding climate change, global warming, and extreme weather events',
      },
      'isp': 'corn-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,
      'file': 'corn-vol2-file',
      'createdAt': Date.now,
      'updatedAt': Date.now,
      'createdBy': 'admin',
      '__ref': 'corn-vol2',
    },

    {
      'title': 'Volume 3: Pests and Diseases of Corn',
      'state': 'published',
      'author': 'sarai',
      'publishedAt': Date.now,
      'content': {
        'brief': 'This volume focuses on the major corn pests and diseases.',
        'extended': 'This volume focuses on the major corn pests and diseases. Similarly, three modules comprise this volume: \nModule 1 - Provides detailed discussions and illustrations for pest identification and their corresponding control measures. \nModule 2 - Focuses on corn diseases. \nModule 3 – Presents the mobile and web application called \nSARAI Pest Identification Technology (SPId Tech). \nThis volume is a significant improvement from older published materials on corn pests and diseases. It highlights the importance of understanding the plants’ specific growth stage and how their vulnerabilities to particular pests and diseases change over time. Immediate control measures are also presented on a per life-stage format for quicker reference.',
      },
      'isp': 'corn-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,
      'file': 'corn-vol3-file',
      'createdAt': Date.now,
      'updatedAt': Date.now,
      'createdBy': 'admin',
      '__ref': 'corn-vol3',
    },

    {
      'title': 'Volume 4: Nutrient Management',
      'state': 'published',
      'author': 'sarai',
      'publishedAt': Date.now,
      'content': {
        'brief': 'This volume emphasizes the importance of providing our farmers with site-specific crop nutrient advisories for maximum crop growth.',
        'extended': 'This volume contains comprehensive discussions on two major topics: \nModule 1 – Basic crop-nutrient interaction, corn nutrient deficiencies and its requirements. \nModule 2 –Integrated Crop Management (ICM) with focus on Site-Specific Nutrient Management (SSNM) software called Maize Nutrient Expert. \n This volume emphasizes the importance of providing our farmers with site-specific crop \n nutrient advisories for maximum crop growth.',
      },
      'isp': 'corn-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,
      'file': 'corn-vol4-file',
      'createdAt': Date.now,
      'updatedAt': Date.now,
      'createdBy': 'admin',
      '__ref': 'corn-vol4',
    },

    {
      'title': 'Volume 5: Soil Moisture Monitoring System',
      'state': 'published',
      'author': 'sarai',
      'publishedAt': Date.now,
      'content': {
        'brief': 'This volume focuses on three topics: \nModule 1 – Discusses the physical and chemical characteristics of soil and the importance of active soil moisture monitoring. \nModule 2 – Presents the Project SARAI cost-efficient soil moisture monitoring system. Basic steps on how to set up, operate, and roubleshoot the sensors will be discussed \nModule 3 – Includes the use of Water-balanced Assisted Irrigation Decision Support System (WAISS) and how it works.',
        'extended': 'This volume focuses on three topics: \nModule 1 – Discusses the physical and chemical characteristics of soil and the importance of active soil moisture monitoring. \nModule 2 – Presents the Project SARAI cost-efficient soil moisture monitoring system. Basic steps on how to set up, operate, and roubleshoot the sensors will be discussed \nModule 3 – Includes the use of Water-balanced Assisted Irrigation Decision Support System (WAISS) and how it works.',
      },
      'isp': 'corn-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,
      'file': 'corn-vol5-file',
      'createdAt': Date.now,
      'updatedAt': Date.now,
      'createdBy': 'admin',
      '__ref': 'corn-vol5',
    },

    {
      'title': 'Volume 6: SARAI Knowledge Portal',
      'state': 'published',
      'author': 'sarai',
      'publishedAt': Date.now,
      'content': {
        'brief': 'This volume gives a walkthrough on the SARAI Knowledge Portal. This portal offers a wide-range of agricultural services in web and mobile platforms for its initial six priority crops.',
        'extended': 'This volume gives a walkthrough on the SARAI Knowledge Portal. This portal offers a wide-range of agricultural services in web and mobile platforms for its initial six priority crops. It contains only one module: \nNavigating Through SARAI Knowledge Portal',
      },
      'isp': 'corn-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,
      'file': 'corn-vol6-file',
      'createdAt': Date.now,
      'updatedAt': Date.now,
      'createdBy': 'admin',
      '__ref': 'corn-vol6',
    },

    /* RICE TOOLKIT */

    {
      'title': 'Introduction to SARAI Training Toolkit for Rice',
      'state': 'published',
      'author': 'sarai',
      'publishedAt': Date.now,
      'content': {
        'brief': 'The SARAI TRAINING TOOLKIT FOR RICE is a user-friendly guide to all the developed technologies and systems of the program. It provides the stakeholders a holistic view of the program, and its direct applications to daily agricultural practices.',
        'extended': 'The SARAI TRAINING TOOLKIT FOR RICE is a user-friendly guide to all the developed technologies and systems of the program. It provides the stakeholders a holistic view of the program, and its direct applications to daily agricultural practices. In addition to the conduct of lectures and group discussions, one other important facet of the SARAI Training is the incorporation of fieldworks to the exercises. These field exposures provide participants the opportunities to test out what they learned, document their questions, and directly discuss with the trainers issues that can only be better appreciated in a field setting. \nThe toolkit is a package of modules, powerpoint presentations, and handouts. All these materials will be provided to the training participants, both in hardcopy and e-copy formats.',
      },
      'isp': 'rice-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,
      'file': 'intro-rice-toolkit-file',
      'createdAt': Date.now,
      'updatedAt': Date.now,
      'createdBy': 'admin',
      '__ref': 'intro-rice-toolkit',
    },

    {
      'title': 'Volume 1: Introduction to SARAI',
      'state': 'published',
      'author': 'sarai',
      'publishedAt': Date.now,
      'content': {
        'brief': 'This volume discusses the detailed introduction to the program – its main objectives, various components, and expected outputs.',
        'extended': 'This volume discusses the detailed introduction to the program – its main objectives, various components, and expected outputs. This is an appreciation volume that presents ideas for how SARAI can contribute to the regular agricultural activities of our farmers. It is divided into two modules: \nModule 1 – Detailed discussion on Project SARAI and its various components \nModule 2 – Introduction and discussion on the smarter technologies promoted by Project SARAI',
      },
      'isp': 'rice-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,
      'file': 'rice-vol1-file',
      'createdAt': Date.now,
      'updatedAt': Date.now,
      'createdBy': 'admin',
      '__ref': 'rice-vol1',
    },

    {
      'title': 'Volume 2: Climate, Weather & Climate Change',
      'state': 'published',
      'author': 'sarai',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Before the trainers introduce the participants to numerous technologies and systems to improve their agricultural practices, it is important for them to develop a basic understanding of climate, weather, and climate change.',
        'extended': 'Before the trainers introduce the participants to numerous technologies and systems to improve their agricultural practices, it is important for them to develop a basic understanding of climate, weather, and climate change. This volume has two modules: \nModule 1 – Discussion on climate and weather \nModule 2 – Understanding climate change, climate variability, and extreme weather events',
      },
      'isp': 'rice-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,
      'file': 'rice-vol2-file',
      'createdAt': Date.now,
      'updatedAt': Date.now,
      'createdBy': 'admin',
      '__ref': 'rice-vol2',
    },

    {
      'title': 'Volume 3: Pests and Diseases of Rice',
      'state': 'published',
      'author': 'sarai',
      'publishedAt': Date.now,
      'content': {
        'brief': 'This volume highlights the importance of understanding the plants’ specific growth stage and how their vulnerabilities to particular pests and diseases change over time. ',
        'extended': 'This volume focuses on the major rice pests and diseases. Similarly, two modules comprise this volume: \nModule 1 - Provides detailed discussions and illustrations for pest identification and their corresponding control measures. \nModule 2 - Focuses on rice diseases. \nModule 3 - Presents the mobile and web application called SARAI Smarter Pest Identification Technology (SPid Tech). \nThis volume is a significant improvement from older published materials on rice pests and diseases. It highlights the importance of understanding the plants’ specific growth stage and how their vulnerabilities to particular pests and diseases change over time. Immediate control measures are also presented on a per life-stage format for quicker reference.',
      },
      'isp': 'rice-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,
      'file': 'rice-vol3-file',
      'createdAt': Date.now,
      'updatedAt': Date.now,
      'createdBy': 'admin',
      '__ref': 'rice-vol3',
    },

    {
      'title': 'Volume 4: Nutrient Management',
      'state': 'published',
      'author': 'sarai',
      'publishedAt': Date.now,
      'content': {
        'brief': 'This volume emphasizes the importance of providing our farmers with site-specific crop nutrient advisories for maximum crop growth.',
        'extended': 'This volume contains comprehensive discussions on two major topics: \nModule 1 – Basic crop-nutrient interaction, and the impacts of the various nutrient cycles to crop production. \nModule 2 –Integrated Crop Management (ICM) with focus on Site-Specific Nutrient Management (SSNM) \nThis volume emphasizes the importance of providing our farmers with site-specific crop nutrient advisories for maximum crop growth.',
      },
      'isp': 'rice-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,
      'file': 'rice-vol4-file',
      'createdAt': Date.now,
      'updatedAt': Date.now,
      'createdBy': 'admin',
      '__ref': 'rice-vol4',
    },

    {
      'title': 'Volume 5: SARAI Knowledge Portal',
      'state': 'published',
      'author': 'sarai',
      'publishedAt': Date.now,
      'content': {
        'brief': 'This volume gives a walkthrough on the SARAI Knowledge Portal. This portal offers a wide-range of agricultural services in web and mobile platforms for its initial six priority crops.',
        'extended': 'This volume gives a walkthrough on the SARAI Knowledge Portal. This portal offers a wide-range of agricultural services in web and mobile platforms for its initial six priority crops. It contains only one module: \nNavigating through SARAI Knowledge Portal',
      },
      'isp': 'rice-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,
      'file': 'rice-vol5-file',
      'createdAt': Date.now,
      'updatedAt': Date.now,
      'createdBy': 'admin',
      '__ref': 'rice-vol5',
    },

    /* CORN CULTURAL MANAGEMENT */
    {
      'title': 'Land Preparation',
      'state': 'published',
      'author': 'sarai',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Tinatalakay sa video na ito ang iba’t ibang uri ng lugar kung saan mainam magtanim ng mais, kung papaano dapat ihanda ang lupang pagtataniman at ang proseso ng pagtatanim ng mais.',
        'extended': 'Ipinapakita rito kung paano dapat ihanda ang lupang pagtataniman ng mais. Ang mais ay mas mainam itanim sa lupa na may malaking water capacity at maraming organic nutrients. Kayang mabuhay ng mais sa iba’t ibang kundisyon sa Pilipinas. \nTinatalakay sa video na ito ang iba’t ibang uri ng lugar kung saan mainam magtanim ng mais, kung papaano dapat ihanda ang lupang pagtataniman at ang proseso ng pagtatanim ng mais.',
      },
      'isp': 'corn-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,
      'video': 'landpreparation-yt',
      'createdAt': Date.now,
      'updatedAt': Date.now,
      'createdBy': 'admin',
      '__ref': 'landpreparation-lo',
    },
    {
      'title': 'Corn Pests',
      'state': 'published',
      'author': 'sarai',
      'publishedAt': Date.now,
      'content': {
        'brief': 'lamin natin kung ano ang mga pangunahing peste ng mais, at ang mga paraan para mapigilan o mabawasan ang peste ng mais.',
        'extended': 'Ang paglaganap ng mga peste sa mais ay isa sa mga nakakapigil sa magandang produksyon ng mais. Ang paggamit ng insecticide ay isa sa mga karaniwang paraan para masugpo ang mga peste. Ngunit, ang madalas na paggamit nito ay pwedeng makaresulta sa mga peste na maka-adapt at hindi na tablan ng insecticide. Isa pa, ito ay mapanganib sa kalusugan ng tao at sa kapaligiran. \nAlamin natin kung ano ang mga pangunahing peste ng mais, at ang mga paraan para mapigilan o mabawasan ang peste ng mais.',
      },
      'isp': 'corn-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,
      'video': 'cornpests-yt',
      'createdAt': Date.now,
      'updatedAt': Date.now,
      'createdBy': 'admin',
      '__ref': 'cornpests-lo',
    },
    {
      'title': 'Corn Diseases',
      'state': 'published',
      'author': 'sarai',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Sa Pilipinas, mayroong higit sa 20 na mga itinalang sakit ng mais. Dito sa video na ito, malalaman natin kung ano ang mga pangunahing sakit ng mais at kung paano ito mapipigilan.',
        'extended': 'Sa Pilipinas, mayroong higit sa 20 na mga itinalang sakit ng mais. Dito sa video na ito, malalaman natin kung ano ang mga pangunahing sakit ng mais at kung paano ito mapipigilan.',
      },
      'isp': 'corn-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,
      'video': 'corndiseases-yt',
      'createdAt': Date.now,
      'updatedAt': Date.now,
      'createdBy': 'admin',
      '__ref': 'corndiseases-lo',
    },

    {
      'title': 'Growth Stages',
      'state': 'published',
      'author': 'sarai',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Ang video na ito ay ipinapakita kung paano tumutubo ang mais simula pagtanim. ',
        'extended': 'Ang video na ito ay ipinapakita kung paano tumutubo ang mais simula pagtanim. Ang pag-alam sa stages ng plant development ay makakatulong sa atin sa teknikal na pag-aalaga ng mais. Sa video presentation na ito, dapat mong ipaliwanag kung paano tumutubo ang mais, at ilista ang mga tamang pag-aalaga at pagsasagawa ng corn production.',
      },
      'isp': 'corn-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,
      'video': 'stagescorn-yt',
      'createdAt': Date.now,
      'updatedAt': Date.now,
      'createdBy': 'admin',
      '__ref': 'stagescorn-lo',
    },

    {
      'title': 'Corn Mechanization',
      'state': 'published',
      'author': 'sarai',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Panoorin ang video na ito para malaman kung ano ba ng iba’t ibang uri ng farm mechanization technologies na ginagamit sa produksyon ng mais.',
        'extended': 'Dahil sa mataas na demand ng mais, kailangan gawing mabisa at epektibo ang produksyon ng mais. Isa sa mga paraan nito ay ang paggamit ng mga makina. Panoorin ang video na ito para malaman kung ano ba ng iba’t ibang uri ng farm mechanization technologies na ginagamit sa produksyon ng mais. Malalaman rin natin kung ano ba ng iba’t ibang katangian ng mga makina na ito at kung ano ang importansya at benepisyo ng farm mechanization.',
      },
      'isp': 'corn-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,
      'video': 'farmmechanization-yt',
      'createdAt': Date.now,
      'updatedAt': Date.now,
      'createdBy': 'admin',
      '__ref': 'farmmechanization-lo',
    },

    {
      'title': 'Corn Processing',
      'state': 'published',
      'author': 'sarai',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Sa video na ito, malalaman natin kung ano ba and iba’t ibang parte ng isang corn kernel, and iba’t ibang uri ng mais ayon sa structure, at kung ano ang corn processing at ang mga pinaggagamitan nito.',
        'extended': 'Maraming pwedeng paggamitan ang mais kaya ang demand sa mais sa pandaigdigang merkado ay patuloy na tumataas. Ang pinaka-pinaggagamitan ng mais ay sa paggawa ng feeds at sa industrial processing. Ang mais ang pangunahing sangkap na ginagamit sa livestock feed. \nSa video na ito, malalaman natin kung ano ba and iba’t ibang parte ng isang corn kernel, and iba’t ibang uri ng mais ayon sa structure, at kung ano ang corn processing at ang mga pinaggagamitan nito.',
      },
      'isp': 'corn-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,
      'video': 'cornprocessing-yt',
      'createdAt': Date.now,
      'updatedAt': Date.now,
      'createdBy': 'admin',
      '__ref': 'cornprocessing-lo',
    },

    {
      'title': 'Corn Fertilization',
      'state': 'published',
      'author': 'sarai',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Alamin kung ano ang mga katangian ng lupa na angkop sa pagtatanim ng mais at ang tamang proseso para mapabuti ang kalidad ng lupang pagtataniman.',
        'extended': 'Ang lupa kung saan itatanim ang mais ay nakakaapekto sa paglaki ng halaman. Ang lupa ang nagbibigay ng nutrisyon at minerals na kailangan ng mais para mabuhay at magkabunga. Sa Pilipinas, maraming uri ng lupa ang makikita, depende kung nasaang parte ka. \nAlamin kung ano ang mga katangian ng lupa na angkop sa pagtatanim ng mais at ang tamang proseso para mapabuti ang kalidad ng lupang pagtataniman.',
      },
      'isp': 'corn-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,
      'video': 'soilfertilization-yt',
      'createdAt': Date.now,
      'updatedAt': Date.now,
      'createdBy': 'admin',
      '__ref': 'cornfertilization-lo',
    },

    /*{
      'title': '',
      'state': 'published',
      'author': 'sarai',
      'publishedAt': Date.now,
      'content': {
        'brief': '',
        'extended': '',
      },
      'isp': 'corn-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,
      'video': '',
      'createdAt': Date.now,
      'updatedAt': Date.now,
      'createdBy': 'admin',
      '__ref': 'intro-rice-toolkit',
    },*/


    /*
    {
      'title': 'Planting Abaca',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Planting Abaca description',
        'extended': 'Extended description',
      },
      'isp': 'abaca-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,

      'createdAt': Date.now,

      'likes': ['Ferdinand', 'Gerald', 'Harold', 'Henry', 'Irish', 'Joon', 'Jeff'],
      'happy': ['Juan', 'John', 'Jane', 'Amber', 'Angelica', 'Albert', 'Bryan', 'Cena'],
      'sad': ['Juan', 'John', 'Jane', 'Amber', 'Angelica', 'Albert', 'Bryan', 'Cena', 'Daniel', 'Ellen'],

      'updatedAt': Date.now,
      '__ref': 'plantingabaca-lo'
    },
    {
      'title': 'Planting Banana',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Planting Banana description',
        'extended': 'Extended description',
      },
      'isp': 'banana-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,

      'createdAt': Date.now,

      'likes': ['Juan', 'John', 'Jane', 'Amber', 'Angelica', 'Albert', 'Bryan', 'Cena', 'Daniel', 'Ellen'],
      'happy': ['Juan', 'John', 'Jane', 'Amber', 'Angelica', 'Albert', 'Bryan', 'Cena'],
      'sad': ['Ferdinand', 'Gerald', 'Harold', 'Henry', 'Irish', 'Joon', 'Jeff'],

      'updatedAt': Date.now,
      '__ref': 'plantingbanana-lo'
    },
    {
      'title': 'Planting Coconut',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Planting Coconut description',
        'extended': 'Extended description',
      },
      'isp': 'coconut-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,

      'createdAt': Date.now,

      'likes': ['Juan', 'John', 'Jane'],
      'happy': ['Juan', 'John'],
      'sad': ['Zend'],

      'updatedAt': Date.now,
      '__ref': 'plantingcoconut-lo'
    },
    {
      'title': 'Planting Coffee',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Planting Coffee description',
        'extended': 'Extended description',
      },
      'isp': 'coffee-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,

      'createdAt': Date.now,

      'likes': ['Justin', 'Krystal', 'Kris', 'Karl', 'Luhan', 'Logan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],
      'happy': ['Logan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],
      'sad': ['Sally', 'Tim', 'Uvin', 'Vince', 'Victoria', 'Wilson', 'Xyrus', 'Yvette', 'Zend'],

      'updatedAt': Date.now,
      '__ref': 'plantingcoffee-lo'
    },
    {
      'title': 'Planting Mungbean',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Planting Mungbean description',
        'extended': 'Extended description',
      },
      'isp': 'legume-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': 'Mungbean',

      'createdAt': Date.now,

      'likes': ['Sally', 'Tim', 'Uvin', 'Vince', 'Victoria', 'Wilson', 'Xyrus', 'Yvette', 'Zend'],
      'happy': ['Logan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],
      'sad': ['Justin', 'Krystal', 'Kris', 'Karl', 'Luhan', 'Logan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],

      'updatedAt': Date.now,
      '__ref': 'mungbean-lo',
    },
    {
      'title': 'Planting Peanut',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Planting Peanut description',
        'extended': 'Extended description',
      },
      'isp': 'legume-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': 'Peanut',
      'createdAt': Date.now,

      'likes': ['Sally', 'Tim', 'Uvin', 'Vince', 'Victoria', 'Wilson', 'Xyrus', 'Yvette', 'Zend'],
      'happy': ['Justin', 'Krystal', 'Kris', 'Karl', 'Luhan', 'Logan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],
      'sad': ['Logan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],

      'updatedAt': Date.now,
      '__ref': 'peanut-lo',
    },
    {
      'title': 'Planting Mango',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Planting Mango description',
        'extended': 'Extended description',
      },
      'isp': 'mango-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,

      'createdAt': Date.now,

      'likes': ['Juan', 'John', 'Jane'],
      'happy': ['Juan', 'John'],
      'sad': ['Juan'],

      'updatedAt': Date.now,
      '__ref': 'plantingmango-lo'
    },
    {
      'title': 'Planting Rice',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Planting Rice description',
        'extended': 'Extended description',
      },
      'isp': 'rice-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,

      'createdAt': Date.now,

      'likes': ['Justin', 'Krystal', 'Kris', 'Karl', 'Luhan', 'Logan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],
      'happy': ['Logan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],
      'sad': ['Sally', 'Tim', 'Uvin', 'Vince', 'Victoria', 'Wilson', 'Xyrus', 'Yvette', 'Zend'],

      'updatedAt': Date.now,
      '__ref': 'plantingrice-lo'
    },
    {
      'title': 'Planting Sweet Potato',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Planting Sweet Potato description',
        'extended': 'Extended description',
      },
      'isp': 'rootcrop-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': 'Sweet Potato',
      'createdAt': Date.now,

      'likes': ['Juan', 'John', 'Jane'],
      'happy': ['Juan', 'John'],
      'sad': ['Juan'],

      'updatedAt': Date.now,
      '__ref': 'sweetpotato-lo',
    },
    {
      'title': 'Planting White Potato',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Planting White Potato description',
        'extended': 'Extended description',
      },
      'isp': 'rootcrop-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': 'White Potato',

      'createdAt': Date.now,

      'likes': ['Sally', 'Tim', 'Uvin', 'Vince', 'Victoria', 'Wilson', 'Xyrus', 'Yvette', 'Zend'],
      'happy': ['Logan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],
      'sad': ['Justin', 'Krystal', 'Kris', 'Karl', 'Luhan', 'Logan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],

      'updatedAt': Date.now,
      '__ref': 'whitepotato-lo',
    },
    {
      'title': 'Planting Sugarcane',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Planting Sugarcane description',
        'extended': 'Extended description',
      },
      'isp': 'sugarcane-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,

      'createdAt': Date.now,

      'likes': ['Sally', 'Tim', 'Uvin', 'Vince', 'Victoria', 'Wilson', 'Xyrus', 'Yvette', 'Zend'],
      'happy': ['Logan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],
      'sad': ['Justin', 'Krystal', 'Kris', 'Karl', 'Luhan', 'Logan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],

      'updatedAt': Date.now,
      '__ref': 'sugarcane-lo'
    },
    {
      'title': 'Planting Pineapple',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Planting Pineapple description',
        'extended': 'Extended description',
      },
      'isp': 'tropicalfruit-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': 'Pineapple',

      'createdAt': Date.now,

      'likes': ['Juan', 'John', 'Jane'],
      'happy': ['Juan', 'John'],
      'sad': ['Xyrus'],

      'updatedAt': Date.now,
      '__ref': 'pineapple-lo',
    },
    {
      'title': 'Planting Papaya',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Planting Papaya description',
        'extended': 'Extended description',
      },
      'isp': 'tropicalfruit-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': 'Papaya',

      'createdAt': Date.now,

      'likes': ['Sally', 'Tim', 'Uvin', 'Vince', 'Victoria', 'Wilson', 'Xyrus', 'Yvette', 'Zend', 'Justin', 'Krystal', 'Kris', 'Karl', 'Luhan', 'Logan'],
      'happy': ['Logan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],
      'sad': ['Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],

      'updatedAt': Date.now,
      '__ref': 'papaya-lo',
    },
    {
      'title': 'Planting Citrus',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Planting Citrus description',
        'extended': 'Extended description',
      },
      'isp': 'tropicalfruit-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': 'Citrus',

      'createdAt': Date.now,

      'likes': ['Ferdinand', 'Gerald', 'Gary', 'Harold', 'Henry', 'Irish', 'Juan', 'John', 'Juan', 'Jane', 'Justin', 'Joon', 'Jeff'],
      'happy': ['Juan', 'John', 'Gerald', 'Gary', 'Harold', 'Henry', 'Irish'],
      'sad': ['Amber', 'Angelica', 'Albert', 'Bryan', 'Cena', 'Daniel', 'Ellen'],

      'updatedAt': Date.now,
      '__ref': 'citrus-lo',
    },
    {
      'title': 'Planting Jackfruit',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Planting Jackfruit description',
        'extended': 'Extended description',
      },
      'isp': 'tropicalfruit-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': 'Jackfruit',

      'createdAt': Date.now,

      'likes': ['Amber', 'Bryan', 'Cena', 'Daniel', 'Ellen'],
      'happy': ['Juan', 'John', 'Gerald', 'Gary', 'Harold', 'Henry', 'Irish'],
      'sad': ['Ferdinand', 'Gerald', 'Gary', 'Harold', 'Henry', 'Irish', 'Juan', 'John', 'Juan', 'Jane', 'Justin', 'Joon', 'Jeff'],

      'updatedAt': Date.now,
      '__ref': 'jackfruit-lo',
    },
    {
      'title': 'Planting Durian',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Planting Durian description',
        'extended': 'Extended description',
      },
      'isp': 'tropicalfruit-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': 'Durian',

      'createdAt': Date.now,

      'likes': ['Amber', 'Angelica', 'Daniel', 'Ellen'],
      'happy': ['Ferdinand', 'Gerald', 'Gary', 'Harold', 'Henry', 'Irish', 'Juan', 'John', 'Juan', 'Jane', 'Justin', 'Joon', 'Jeff'],
      'sad': ['Juan', 'John', 'Gerald', 'Gary', 'Harold', 'Henry', 'Irish'],

      'updatedAt': Date.now,
      '__ref': 'durian-lo',
    },
    {
      'title': 'Planting Vegetable',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Planting Vegetable description',
        'extended': 'Extended description',
      },
      'isp': 'vegetable-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,
      'createdAt': Date.now,

      'likes': ['Ferdinand', 'Gerald', 'Gary', 'Harold', 'Henry', 'Irish', 'Juan', 'John', 'Juan', 'Jane', 'Justin', 'Joon', 'Jeff'],
      'happy': ['Juan', 'John', 'Gerald', 'Gary', 'Harold', 'Henry', 'Irish'],
      'sad': ['Amber', 'Cena', 'Daniel', 'Ellen'],

      'updatedAt': Date.now
    },
    {
      'title': 'Learning about Feed Resources',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Feed Resources description',
        'extended': 'Extended description',
      },
      'isp': 'feedres-l-isp',
      'sector': 'livestock-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,
      'createdAt': Date.now,

      'likes': ['Amber', 'Angelica', 'Albert', 'Bryan', 'Cena', 'Daniel', 'Ellen'],
      'happy': ['Juan', 'John', 'Gerald', 'Gary', 'Harold', 'Henry', 'Irish'],
      'sad': ['Ferdinand', 'Gerald', 'Gary', 'Harold', 'Henry', 'Irish', 'Juan', 'John', 'Juan', 'Jane', 'Justin', 'Joon', 'Jeff'],

      'updatedAt': Date.now
    },
    {
      'title': 'Learning about Dairy Goat',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Dairy Goat description',
        'extended': 'Extended description',
      },
      'isp': 'dairygoat-isp',
      'sector': 'livestock-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,

      'createdAt': Date.now,

      'likes': ['Amber', 'Angelica', 'Albert', 'Bryan', 'Cena', 'Daniel', 'Ellen'],
      'happy': ['Ferdinand', 'Juan', 'John', 'Juan', 'Jane', 'Justin', 'Joon', 'Jeff'],
      'sad': ['Juan', 'John', 'Gerald', 'Gary', 'Harold', 'Henry', 'Irish'],

      'updatedAt': Date.now
    },
    {
      'title': 'Learning about Slaughter Goat',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Slaughter Goat description',
        'extended': 'Extended description',
      },
      'isp': 'slaughtergoat-isp',
      'sector': 'livestock-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,
      'createdAt': Date.now,

      'likes': ['Ferdinand', 'Gerald', 'Gary', 'Harold', 'Henry', 'Irish', 'Juan', 'John', 'Juan', 'Jane', 'Justin', 'Joon', 'Jeff'],
      'happy': ['Juan', 'John', 'Gerald', 'Gary', 'Harold', 'Henry', 'Irish'],
      'sad': ['Amber', 'Angelica', 'Albert', 'Bryan', 'Cena', 'Daniel', 'Ellen'],

      'updatedAt': Date.now
    },
    {
      'title': 'Learning about Dairy Buffalo',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Dairy Buffalo description',
        'extended': 'Extended description',
      },
      'isp': 'dairybuffalo-isp',
      'sector': 'livestock-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,
      'createdAt': Date.now,

      'likes': ['Juan', 'John'],
      'happy': ['Juan'],
      'sad': ['Kris'],

      'updatedAt': Date.now
    },
    {
      'title': 'Learning about Swine',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Swine description',
        'extended': 'Extended description',
      },
      'isp': 'swine-isp',
      'sector': 'livestock-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,
      'createdAt': Date.now,

      'likes': ['Ferdinand', 'Irish', 'Juan', 'John', 'Juan', 'Jane', 'Justin', 'Joon', 'Jeff'],
      'happy': ['Juan', 'John', 'Gerald', 'Gary', 'Harold', 'Henry', 'Irish'],
      'sad': ['Amber', 'Angelica', 'Albert', 'Bryan', 'Cena', 'Daniel', 'Ellen'],

      'updatedAt': Date.now
    },
    {
      'title': 'Learning about Duck',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Duck description',
        'extended': 'Extended description',
      },
      'isp': 'duck-isp',
      'sector': 'livestock-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,

      'createdAt': Date.now,

      'likes': ['John', 'Juan', 'Jane', 'Justin', 'Joon', 'Jeff'],
      'happy': ['Ferdinand','Juan', 'John', 'Gerald', 'Gary', 'Harold', 'Henry', 'Irish'],
      'sad': ['Amber', 'Angelica', 'Albert', 'Bryan', 'Cena', 'Daniel', 'Ellen'],

      'updatedAt': Date.now
    },
    {
      'title': 'Learning about Native Chicken',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Native Chicken description',
        'extended': 'Extended description',
      },
      'isp': 'nativechicken-isp',
      'sector': 'livestock-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,
      'createdAt': Date.now,

      'likes': ['John'],
      'happy': ['Juan', 'John'],
      'sad': [],

      'updatedAt': Date.now
    },
    {
      'title': 'Learning about Aquafeeds',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Aquafeeds description',
        'extended': 'Extended description',
      },
      'isp': 'feedres-ia-isp',
      'sector': 'inlandaq-sector',
      'industry': 'aqua-industry',
      'specificCommodity': 'Aquafeeds',
      'createdAt': Date.now,

      'likes': ['Sally', 'Tim', 'Uvin', 'Victoria', 'Vince', 'Wilson', 'Xyrus', 'Zend'],
      'happy': ['Sally', 'Tim', 'Zend', 'Juan', 'John', 'Jane'],
      'sad': ['Justin', 'Joon', 'Jeff', 'Krystal', 'Kris', 'Karl', 'Logan', 'Luhan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],

      'updatedAt': Date.now,
      '__ref': 'aquafeeds-lo',
    },
    {
      'title': 'Learning about Milkfish',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Milkfish description',
        'extended': 'Extended description',
      },
      'isp': 'milkfish-isp',
      'sector': 'inlandaq-sector',
      'industry': 'aqua-industry',
      'specificCommodity': null,
      'createdAt': Date.now,

      'likes': ['Justin', 'Joon', 'Jeff', 'Krystal', 'Kris', 'Karl', 'Logan', 'Luhan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],
      'happy': ['Sally', 'Tim', 'Uvin', 'Victoria', 'Vince', 'Wilson', 'Xyrus', 'Zend', 'Juan', 'John', 'Jane'],
      'sad': ['Sally', 'Tim', 'Uvin', 'Wilson', 'Xyrus', 'Zend'],

      'updatedAt': Date.now
    },
    {
      'title': 'Learning about Mangrove Crab (Mudcrab)',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Mangrove Crab (Mudcrab) description',
        'extended': 'Extended description',
      },
      'isp': 'mudcrab-isp',
      'sector': 'inlandaq-sector',
      'industry': 'aqua-industry',
      'specificCommodity': null,
      'createdAt': Date.now,

      'likes': ['Karl', 'Logan', 'Luhan', 'Manuel', 'Natalie', 'Oliver'],
      'happy': ['Justin', 'Joon', 'Jeff', 'Krystal', 'Kris', 'Luhan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],
      'sad': ['Tim', 'Uvin', 'Victoria', 'Vince', 'Wilson', 'Xyrus'],

      'updatedAt': Date.now
    },
    {
      'title': 'Learning about Tilapia',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Tilapia description',
        'extended': 'Extended description',
      },
      'isp': 'tilapia-isp',
      'sector': 'inlandaq-sector',
      'industry': 'aqua-industry',
      'specificCommodity': null,
      'createdAt': Date.now,

      'likes': ['Justin', 'Luhan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],
      'happy': ['Sally', 'Tim', 'Uvin', 'Victoria', 'Vince', 'Wilson', 'Xyrus', 'Zend', 'Juan', 'John', 'Jane'],
      'sad': ['Sally', 'Tim', 'Uvin', 'Victoria', 'Vince', 'Wilson', 'Xyrus', 'Zend'],

      'updatedAt': Date.now
    },
    {
      'title': 'Learning about Shrimp',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Shrimp description',
        'extended': 'Extended description',
      },
      'isp': 'shrimp-isp',
      'sector': 'inlandaq-sector',
      'industry': 'aqua-industry',
      'specificCommodity': null,
      'createdAt': Date.now,

      'likes': ['Sally', 'Tim', 'Uvin', 'Victoria', 'Vince', 'Wilson', 'Xyrus', 'Zend'],
      'happy': ['Justin', 'Kris', 'Karl', 'Logan', 'Luhan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],
      'sad': ['Juan'],

      'updatedAt': Date.now
    },
    {
      'title': 'Learning about Mussel',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Mussel description',
        'extended': 'Extended description',
      },
      'isp': 'mussel-isp',
      'sector': 'inlandaq-sector',
      'industry': 'aqua-industry',
      'specificCommodity': null,
      'createdAt': Date.now,

      'likes': ['Justin', 'Joon', 'Jeff', 'Krystal', 'Kris', 'Karl', 'Logan', 'Luhan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],
      'happy': ['Sally', 'Tim', 'Uvin', 'Victoria', 'Zend', 'Juan', 'John', 'Jane'],
      'sad': ['Sally', 'Tim', 'Uvin', 'Victoria', 'Vince', 'Wilson', 'Xyrus', 'Zend'],

      'updatedAt': Date.now
    },
    {
      'title': 'Learning about Blue Swimming Crab',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Blue Swimming Crab description',
        'extended': 'Extended description',
      },
      'isp': 'bscrab-isp',
      'sector': 'marineres-sector',
      'industry': 'aqua-industry',
      'specificCommodity': null,

      'createdAt': Date.now,

      'likes': ['Sally', 'Tim', 'Uvin', 'Victoria', 'Vince', 'Wilson', 'Xyrus', 'Zend'],
      'happy': ['Juan', 'John', 'Jane'],
      'sad': ['Justin', 'Joon', 'Jeff', 'Krystal', 'Kris', 'Karl', 'Logan', 'Luhan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],

      'updatedAt': Date.now
    },
    {
      'title': 'Learning about Abalone',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Abalone description',
        'extended': 'Extended description',
      },
      'isp': 'abalone-isp',
      'sector': 'marineres-sector',
      'industry': 'aqua-industry',
      'specificCommodity': null,
      'createdAt': Date.now,

      'likes': ['Juan', 'John', 'Jane', 'Justin'],
      'happy': ['Juan'],
      'sad': ['Juan'],

      'updatedAt': Date.now
    },
    {
      'title': 'Learning about Oyster',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Oyster description',
        'extended': 'Extended description',
      },
      'isp': 'oyster-isp',
      'sector': 'marineres-sector',
      'industry': 'aqua-industry',
      'specificCommodity': null,
      'createdAt': Date.now,

      'likes': ['Justin', 'Joon', 'Jeff', 'Krystal', 'Kris', 'Karl', 'Logan', 'Luhan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],
      'happy': ['Sally', 'Tim', 'Uvin', 'Victoria', 'Vince', 'Wilson', 'Xyrus', 'Zend', 'Juan', 'John', 'Jane'],
      'sad': ['Sally', 'Tim', 'Uvin', 'Victoria', 'Vince', 'Wilson', 'Xyrus', 'Zend'],

      'updatedAt': Date.now
    },
    {
      'title': 'Learning about Sardines',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Sardines description',
        'extended': 'Extended description',
      },
      'isp': 'sardines-isp',
      'sector': 'marineres-sector',
      'industry': 'aqua-industry',
      'specificCommodity': null,
      'createdAt': Date.now,

      'likes': ['Sally', 'Tim', 'Uvin', 'Victoria', 'Vince', 'Wilson', 'Xyrus', 'Zend'],
      'happy': ['John', 'Jane'],
      'sad': ['Justin', 'Joon', 'Jeff', 'Krystal', 'Kris', 'Karl', 'Logan', 'Luhan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],

      'updatedAt': Date.now
    },
    {
      'title': 'Learning about Sea Cucumber',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Sea Cucumber description',
        'extended': 'Extended description',
      },
      'isp': 'seacucumber-isp',
      'sector': 'marineres-sector',
      'industry': 'aqua-industry',
      'specificCommodity': null,

      'createdAt': Date.now,

      'likes': ['Juan'],
      'happy': ['Juan'],
      'sad': ['John', 'Jane', 'Justin'],

      'updatedAt': Date.now
    },
    {
      'title': 'Learning about Seaweeds',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Seaweeds description',
        'extended': 'Extended description',
      },
      'isp': 'seaweeds-isp',
      'sector': 'marineres-sector',
      'industry': 'aqua-industry',
      'specificCommodity': null,
      'createdAt': Date.now,

      'likes': ['Justin', 'Joon', 'Jeff', 'Krystal', 'Kris', 'Karl', 'Logan', 'Luhan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],
      'happy': ['Sally', 'Tim', 'Xyrus', 'Zend', 'Juan', 'John', 'Jane'],
      'sad': ['Sally', 'Tim', 'Uvin', 'Victoria', 'Vince', 'Wilson', 'Xyrus', 'Zend'],

      'updatedAt': Date.now
    },
    {
      'title': 'Learning about Tuna',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Tuna description',
        'extended': 'Extended description',
      },
      'isp': 'tuna-isp',
      'sector': 'marineres-sector',
      'industry': 'aqua-industry',
      'specificCommodity': null,
      'createdAt': Date.now,

      'likes': ['Sally', 'Tim', 'Uvin', 'Victoria', 'Vince', 'Wilson', 'Xyrus', 'Zend'],
      'happy': ['John', 'Jane'],
      'sad': ['Justin', 'Joon', 'Jeff', 'Krystal', 'Kris', 'Karl', 'Logan', 'Luhan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],

      'updatedAt': Date.now
    },
    {
      'title': 'Learning about Bathymetry',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Bathymetry description',
        'extended': 'Extended description',
      },
      'isp': 'bathymetry-isp',
      'sector': 'oes-sector',
      'industry': 'aqua-industry',
      'specificCommodity': null,
      'createdAt': Date.now,

      'likes': ['Gerald', 'Gary', 'Harold', 'Henry', 'Irish', 'Juan', 'John', 'Juan', 'Jane', 'Justin', 'Joon', 'Jeff'],
      'happy': ['Ferdinand','Juan', 'John', 'Gerald', 'Gary', 'Harold', 'Henry', 'Irish'],
      'sad': ['Amber', 'Angelica', 'Albert', 'Bryan', 'Cena', 'Daniel', 'Ellen'],

      'updatedAt': Date.now
    },
    {
      'title': 'Learning about Corals',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Corals description',
        'extended': 'Extended description',
      },
      'isp': 'corals-isp',
      'sector': 'oes-sector',
      'industry': 'aqua-industry',
      'specificCommodity': null,
      'createdAt': Date.now,

      'likes': ['Gerald', 'Gary', 'Harold', 'Henry', 'Irish', 'Juan', 'John', 'Juan', 'Jane', 'Justin', 'Joon', 'Jeff'],
      'happy': ['Ferdinand','Juan', 'John', 'Gerald', 'Gary', 'Harold', 'Henry', 'Irish'],
      'sad': ['Amber', 'Angelica', 'Albert', 'Bryan', 'Cena', 'Daniel'],

      'updatedAt': Date.now
    },
    {
      'title': 'Learning about Fishing Maps',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Fishing Maps description',
        'extended': 'Extended description',
      },
      'isp': 'fishingmaps-isp',
      'sector': 'oes-sector',
      'industry': 'aqua-industry',
      'specificCommodity': null,

      'createdAt': Date.now,

      'likes': ['Amber', 'Albert', 'Cena', 'Ellen', 'Gary', 'Gerald', 'Irish', 'Karl', 'Krystal', 'Kris', 'Angelica', 'Bryan', 'Daniel', 'Ferdinand', 'Henry', 'Harold', 'Juan'],
      'happy': ['Gary', 'Gerald', 'Irish'],
      'sad': ['John', 'Jane', 'Justin', 'Joon', 'Jeff'],

      'updatedAt': Date.now
    },
    {
      'title': 'Learning about Harmful Algal Blooms',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Harmful Algal Blooms description',
        'extended': 'Extended description',
      },
      'isp': 'algalblooms-isp',
      'sector': 'oes-sector',
      'industry': 'aqua-industry',
      'specificCommodity': null,

      'createdAt': Date.now,

      'likes': ['Amber', 'Albert', 'Cena', 'Ellen', 'Gary', 'Gerald', 'Irish', 'Karl', 'Krystal', 'Kris'],
      'happy': ['Gary', 'Gerald', 'Irish'],
      'sad': ['Angelica', 'Bryan', 'Daniel', 'Ferdinand', 'Henry', 'Harold', 'Juan', 'John', 'Jane', 'Justin', 'Joon', 'Jeff'],

      'updatedAt': Date.now
    },
    {
      'title': 'Learning about Cacao',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Cacao description',
        'extended': 'Extended description',
      },
      'isp': 'cacao-isp',
      'sector': 'forestry-sector',
      'industry': 'natural-industry',
      'specificCommodity': null,
      'createdAt': Date.now,

      'likes': ['Amber', 'Albert', 'Cena', 'Ellen', 'Gary', 'Gerald', 'Irish', 'Karl', 'Krystal', 'Kris'],
      'happy': ['Gary', 'Gerald', 'Irish', 'Henry', 'Harold'],
      'sad': ['Angelica', 'Bryan', 'Daniel', 'Ferdinand', 'Juan', 'John', 'Jane', 'Justin', 'Joon', 'Jeff'],

      'updatedAt': Date.now
    },
    {
      'title': 'Learning about Bamboo',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Bamboo description',
        'extended': 'Extended description',
      },
      'isp': 'bamboo-isp',
      'sector': 'forestry-sector',
      'industry': 'natural-industry',
      'specificCommodity': null,
      'createdAt': Date.now,

      'likes': ['Harold', 'Juan', 'John', 'Jane', 'Amber', 'Albert', 'Cena', 'Ellen', 'Gary', 'Gerald', 'Irish', 'Karl', 'Krystal', 'Kris'],
      'happy': ['Gary', 'Gerald', 'Irish'],
      'sad': ['Angelica', 'Bryan', 'Daniel', 'Ferdinand', 'Henry', 'Justin', 'Joon', 'Jeff'],

      'updatedAt': Date.now
    },
    {
      'title': 'Learning about Sago',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Sago description',
        'extended': 'Extended description',
      },
      'isp': 'sago-isp',
      'sector': 'forestry-sector',
      'industry': 'natural-industry',
      'specificCommodity': null,
      'createdAt': Date.now,

      'likes': ['Amber', 'Albert', 'Cena', 'Ellen', 'Gary', 'Gerald', 'Irish', 'Karl', 'Krystal', 'Kris'],
      'happy': ['Angelica', 'Bryan', 'Gary', 'Gerald', 'Irish'],
      'sad': ['Daniel', 'Ferdinand', 'Henry', 'Harold', 'Juan', 'John', 'Jane', 'Justin', 'Joon', 'Jeff'],

      'updatedAt': Date.now
    },
    {
      'title': 'Learning about Rubber',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Rubber description',
        'extended': 'Extended description',
      },
      'isp': 'rubber-isp',
      'sector': 'forestry-sector',
      'industry': 'natural-industry',
      'specificCommodity': null,

      'createdAt': Date.now,

      'likes': ['Amber', 'Albert', 'Cena', 'Ellen', 'Gary', 'Gerald', 'Irish', 'Karl', 'Krystal', 'Kris'],
      'happy': ['Gary', 'Gerald', 'Irish', 'Daniel', 'Ferdinand'],
      'sad': ['Angelica', 'Bryan', 'Henry', 'Harold', 'Juan', 'John', 'Jane', 'Justin', 'Joon', 'Jeff'],

      'updatedAt': Date.now
    },
    {
      'title': 'Learning about Industrial Tree Plantation',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Industrial Tree Plantation description',
        'extended': 'Extended description',
      },
      'isp': 'itreeplant-isp',
      'sector': 'forestry-sector',
      'industry': 'natural-industry',
      'specificCommodity': null,

      'createdAt': Date.now,

      'likes': ['Amber', 'Albert', 'Cena', 'Ellen', 'Gary', 'Gerald', 'Irish', 'Karl', 'Krystal', 'Kris'],
      'happy': ['Gary', 'Gerald', 'Irish', 'Harold', 'Juan', 'John'],
      'sad': ['Angelica', 'Bryan', 'Daniel', 'Ferdinand', 'Henry', 'Jane', 'Justin', 'Joon', 'Jeff'],

      'updatedAt': Date.now
    },
    {
      'title': 'Learning about Biodiversity',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Biodiversity description',
        'extended': 'Extended description',
      },
      'isp': 'biodiversity-isp',
      'sector': 'ies-sector',
      'industry': 'natural-industry',
      'specificCommodity': null,

      'createdAt': Date.now,

      'likes': ['Amber', 'Albert', 'Cena', 'Ellen', 'Gary', 'Gerald', 'Irish', 'Karl', 'Krystal', 'Kris', 'Ferdinand', 'Henry', 'Harold'],
      'happy': ['Gary', 'Gerald', 'Irish'],
      'sad': ['Angelica', 'Bryan', 'Daniel', 'Juan', 'John', 'Jane', 'Justin', 'Joon', 'Jeff'],

      'updatedAt': Date.now
    },
    {
      'title': 'Learning about Climate Change',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Climate Change description',
        'extended': 'Extended description',
      },
      'isp': 'climatechange-isp',
      'sector': 'ies-sector',
      'industry': 'natural-industry',
      'specificCommodity': null,

      'createdAt': Date.now,

      'likes': ['Amber', 'Albert', 'Cena', 'Ellen', 'Gary', 'Gerald', 'Irish', 'Karl', 'Krystal', 'Kris'],
      'happy': ['Gary', 'Gerald', 'Irish', 'Angelica', 'Bryan', 'Daniel', 'Ferdinand'],
      'sad': ['Henry', 'Harold', 'Juan', 'John', 'Jane', 'Justin', 'Joon', 'Jeff'],

      'updatedAt': Date.now
    },
    {
      'title': 'Learning about Watershed',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Watershed description',
        'extended': 'Extended description',
      },
      'isp': 'watershed-isp',
      'sector': 'ies-sector',
      'industry': 'natural-industry',
      'specificCommodity': null,
      'createdAt': Date.now,

      'likes': ['Amber', 'Albert', 'Cena', 'Ellen', 'Gary', 'Gerald', 'Irish', 'Karl', 'Krystal', 'Kris'],
      'happy': ['Gary', 'Gerald', 'Irish', 'Bryan', 'Daniel', 'Ferdinand', 'Henry', 'Harold', 'Juan', 'John', 'Jane', 'Justin', 'Joon', 'Jeff'],
      'sad': ['Angelica'],

      'updatedAt': Date.now
    },
    {
      'title': 'Learning about Mangrove',
      'state': 'published',

      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Mangrove description',
        'extended': 'Extended description',
      },
      'isp': 'mangrove-isp',
      'sector': 'ies-sector',
      'industry': 'natural-industry',
      'specificCommodity': null,
      'createdAt': Date.now,

      'likes': ['Amber', 'Albert', 'Cena', 'Ellen', 'Gary', 'Gerald', 'Irish', 'Karl', 'Krystal', 'Kris'],
      'happy': ['Gary', 'Gerald', 'Irish', 'Karl', 'Krystal', 'Kris'],
      'sad': ['Angelica', 'Bryan', 'Daniel', 'Ferdinand', 'Henry', 'Harold', 'Juan', 'John', 'Jane', 'Justin', 'Joon', 'Jeff'],

      'updatedAt': Date.now
    },*/
  ],


  //Chapter: [
  Course: [
    {
      'title': 'Corn Toolkit',
      'state': 'published',
      'publishedAt': Date.now,
      'content': {
        'brief': 'The SARAI TRAINING TOOLKIT FOR CORN is a user-friendly guide to all the developed technologies and systems of the program. It provides the stakeholders a holistic view of the program, and its direct applications to daily agricultural practices.',
        'extended': 'The SARAI TRAINING TOOLKIT FOR CORN is a user-friendly guide to all the developed technologies and systems of the program. It provides the stakeholders a holistic view of the program, and its direct applications to daily agricultural practices. In addition to the conduct of lectures and group discussions, one other important facet of the SARAI Training is the incorporation of fieldworks to the exercises. These field exposures provide participants the opportunities to test out what they learned, document their questions, and directly discuss with the trainers issues that can only be better appreciated in a field setting. \nThe toolkit is a package of modules, PowerPoint presentations, and handouts. All these materials will be provided to the training participants, both in hardcopy and e-copy formats.',
      },
      'outline': [
        'intro-corn-toolkit',
        'corn-vol1',
        'corn-vol2',
        'corn-vol3',
        'corn-vol4',
        'corn-vol5',
        'corn-vol6'
      ],
      'createdAt': Date.now,
      'updatedAt': Date.now,
      'createdBy': 'admin',
      '__ref': 'corn-toolkit',
    },

    {
      'title': 'Rice Toolkit',
      'state': 'published',
      'publishedAt': Date.now,
      'content': {
        'brief': 'The SARAI TRAINING TOOLKIT FOR RICE is a user-friendly guide to all the developed technologies and systems of the program. It provides the stakeholders a holistic view of the program, and its direct applications to daily agricultural practices.',
        'extended': 'The SARAI TRAINING TOOLKIT FOR RICE is a user-friendly guide to all the developed technologies and systems of the program. It provides the stakeholders a holistic view of the program, and its direct applications to daily agricultural practices. In addition to the conduct of lectures and group discussions, one other important facet of the SARAI Training is the incorporation of fieldworks to the exercises. These field exposures provide participants the opportunities to test out what they learned, document their questions, and directly discuss with the trainers issues that can only be better appreciated in a field setting. \nThe toolkit is a package of modules, powerpoint presentations, and handouts. All these materials will be provided to the training participants, both in hardcopy and e-copy formats.',
      },
      'outline': [
        'intro-rice-toolkit',
        'rice-vol1',
        'rice-vol2',
        'rice-vol3',
        'rice-vol4',
        'rice-vol5'
      ],
      'createdAt': Date.now,
      'updatedAt': Date.now,
      'createdBy': 'admin',
      '__ref': 'rice-toolkit',
    },

    {
      'title': 'Corn Cultural Management',
      'state': 'published',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Mais ang pangalawa sa pangunahing pananim sa ating bansa. 60% ng mais na itinatanim sa Pilipinas ay ginagamit para maging pakain sa mga hayop at 40% naman ay ginagamit na pagkain o panghalili sa kanin. Ayon sa Kagawaran ng Pagsasaka, mahigit kumulang sa 600,000 ng mga magsasaka ang nakadepende sa mais bilang pangunahing hanapbuhay. Bukod sa mga magsasaka, kumikita rin ang iba’t ibang sektor ng lipunan tulad ng transportasyon sa pagpoproseso at pagbebenta ng mais. ',
        'extended': 'Mais ang pangalawa sa pangunahing pananim sa ating bansa. 60% ng mais na itinatanim sa Pilipinas ay ginagamit para maging pakain sa mga hayop at 40% naman ay ginagamit na pagkain o panghalili sa kanin. Ayon sa Kagawaran ng Pagsasaka, mahigit kumulang sa 600,000 ng mga magsasaka ang nakadepende sa mais bilang pangunahing hanapbuhay. Bukod sa mga magsasaka, kumikita rin ang iba’t ibang sektor ng lipunan tulad ng transportasyon sa pagpoproseso at pagbebenta ng mais. \nSubalit noong 2011, ayon sa National Corn Program ng Kagawaran ng Pagsasaka, hindi sapat ang suplay ng mais sa ating bansa. Kung ikukumpara sa mga bansang Thailand, Argentina, Estados Unidos, at iba pang mga bansang nagtatanim ng mais, nahuhuli ang Pilipinas sa average corn productivity na 3.21 metric tons/hectare (mt/ha). Sa kasalukyan, ayon kay Dr. Art Salazar ay sapat na ang suplay ng mais sa ating bansa. \n Isa sa mga tinuturing na dahilan ng pagbaba ng produksyon ng mais sa ating bansa ay ang pababago-bagong klima na nagdudulot ng mga kalamidad tulad ng bagyo at tagtuyot. Ang pamumugad din ng mga insekto ay isa rin sa mga dahilan ng pagbaba ng produksyon ng mais at ng mas madalas na paggamit ng pestisidyo. Ang corn borer at corn plant hopper ang mga halimbawa ng insekto na namumugad sa mga taniman ng mais. Bukod dito, ang pagkakaroon ng sakit ng mga halaman tulad ng corn rust, corn downy mildew, at corn leaf spot at ang regular na paggamit ng kemikal ng mga magsasaka ay nakaka-apekto rin sa produksyon ng mais sa ating bansa.',
      },
      'outline': [
        'landpreparation-lo',
        'cornpests-lo',
        'corndiseases-lo',
        'stagescorn-lo',
        'farmmechanization-lo',
        'cornprocessing-lo',
        'cornfertilization-lo',

      ],
      'createdAt': Date.now,
      'updatedAt': Date.now,
      'createdBy': 'admin',
      '__ref': 'rice-toolkit',
    },

    /*{
      'title': 'Corn',
      //'title': 'Corn Chapter',
      'state': 'published',

      'content': {
        'brief': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem ligula, varius non vulputate at, sagittis at neque.  ',
        'extended': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia nibh felis, in placerat felis hendrerit quis. Aenean sit amet risus consectetur nulla pellentesque lacinia et quis sem. Etiam non ullamcorper quam, cursus posuere est. Curabitur lectus nulla, pellentesque ultrices rutrum sed, congue porta sem. Nullam vitae posuere diam. Sed velit metus, tristique et ipsum eget, gravida eleifend dui.  ',
      },
      'publishedAt': Date.now,
      'outline': [
        'biotechbtcorn-lo',
        'feedingprogram-lo',
        'grainquality-lo',
        'landpreparation-lo',
        'soilfertilization-lo',
        'stagescorn-lo'
      ],
      '__ref': 'corn-chapter',
    },
    {
      'title': 'Legume',
      //'title': 'Legume Chapter',
      'state': 'published',

      'content': {
        'brief': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem ligula, varius non vulputate at, sagittis at neque.  ',
        'extended': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia nibh felis, in placerat felis hendrerit quis. Aenean sit amet risus consectetur nulla pellentesque lacinia et quis sem. Etiam non ullamcorper quam, cursus posuere est. Curabitur lectus nulla, pellentesque ultrices rutrum sed, congue porta sem. Nullam vitae posuere diam. Sed velit metus, tristique et ipsum eget, gravida eleifend dui.  ',
      },
      'publishedAt': Date.now,
      'outline': [
        'mungbean-lo',
        'peanut-lo'
      ],
      '__ref': 'legume-chapter',
    },
    {
      'title': 'Rootcrop',
      //'title': 'Rootcrop Chapter',
      'state': 'published',

      'content': {
        'brief': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem ligula, varius non vulputate at, sagittis at neque.  ',
        'extended': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia nibh felis, in placerat felis hendrerit quis. Aenean sit amet risus consectetur nulla pellentesque lacinia et quis sem. Etiam non ullamcorper quam, cursus posuere est. Curabitur lectus nulla, pellentesque ultrices rutrum sed, congue porta sem. Nullam vitae posuere diam. Sed velit metus, tristique et ipsum eget, gravida eleifend dui.  ',
      },
      'publishedAt': Date.now,
      'outline': [
        'sweetpotato-lo',
        'whitepotato-lo'
      ],
      '__ref': 'rootcrop-chapter',
    },
    {
      'title': 'Tropical Fruit',
    //  'title': 'Tropical Fruit Chapter',
      'state': 'published',

      'content': {
        'brief': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem ligula, varius non vulputate at, sagittis at neque.  ',
        'extended': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia nibh felis, in placerat felis hendrerit quis. Aenean sit amet risus consectetur nulla pellentesque lacinia et quis sem. Etiam non ullamcorper quam, cursus posuere est. Curabitur lectus nulla, pellentesque ultrices rutrum sed, congue porta sem. Nullam vitae posuere diam. Sed velit metus, tristique et ipsum eget, gravida eleifend dui.  ',
      },
      'publishedAt': Date.now,
      'outline': [
        'durian-lo',
        'jackfruit-lo',
        'citrus-lo',
        'papaya-lo',
        'pineapple-lo'
      ],
      '__ref': 'tropicalfruit-chapter',
    },
    {
      'title': 'Feed Resources',
    //  'title': 'Feed Resources Chapter',
      'state': 'published',

      'content': {
        'brief': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem ligula, varius non vulputate at, sagittis at neque.  ',
        'extended': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia nibh felis, in placerat felis hendrerit quis. Aenean sit amet risus consectetur nulla pellentesque lacinia et quis sem. Etiam non ullamcorper quam, cursus posuere est. Curabitur lectus nulla, pellentesque ultrices rutrum sed, congue porta sem. Nullam vitae posuere diam. Sed velit metus, tristique et ipsum eget, gravida eleifend dui.  ',
      },
      'publishedAt': Date.now,
      'outline': [
        'aquafeeds-lo'
      ],
      '__ref': 'feedres-chapter',
    },*/

  ],

/*
  Course: [
    {
      'title': 'Agriculture Course',
      'state': 'published',

      'content': {
        'brief': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem ligula, varius non vulputate at, sagittis at neque.  ',
        'extended': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia nibh felis, in placerat felis hendrerit quis. Aenean sit amet risus consectetur nulla pellentesque lacinia et quis sem. Etiam non ullamcorper quam, cursus posuere est. Curabitur lectus nulla, pellentesque ultrices rutrum sed, congue porta sem. Nullam vitae posuere diam. Sed velit metus, tristique et ipsum eget, gravida eleifend dui.  ',
      },
      'publishedAt': Date.now,
      'outline': [
        'corn-chapter',
        'tropicalfruit-chapter',
        'rootcrop-chapter',
        'legume-chapter'
      ],

    },
    {
      'title': 'Aquatic Resources Course',
      'state': 'published',

      'content': {
        'brief': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem ligula, varius non vulputate at, sagittis at neque.  ',
        'extended': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia nibh felis, in placerat felis hendrerit quis. Aenean sit amet risus consectetur nulla pellentesque lacinia et quis sem. Etiam non ullamcorper quam, cursus posuere est. Curabitur lectus nulla, pellentesque ultrices rutrum sed, congue porta sem. Nullam vitae posuere diam. Sed velit metus, tristique et ipsum eget, gravida eleifend dui.  ',
      },
      'publishedAt': Date.now,
      'outline': [
        'feedres-chapter',
      ],

    }
  ],
*/

/*  LOComment: [
    {
      'content': 'Hello po!',
      'author': 'Angelica',
      'learningObject': 'aquafeeds-lo',
      'createdAt': '2017-01-12'
    },
    {
      'content': 'Hello po!',
      'author': 'Amber',
      'learningObject': 'pineapple-lo',
      'createdAt': '2017-01-28'
    },
    {
      'content': 'Hello po!',
      'author': 'Albert',
      'learningObject': 'papaya-lo',
      'createdAt': '2017-01-18'
    },
    {
      'content': 'Hello po!',
      'author': 'Bryan',
      'learningObject': 'citrus-lo',
      'createdAt': '2017-01-10'
    },
    {
      'content': 'Hello po!',
      'author': 'Cena',
      'learningObject': 'jackfruit-lo',
      'createdAt': '2017-02-09'
    },
    {
      'content': 'Hello po!',
      'author': 'Daniel',
      'learningObject': 'durian-lo',
      'createdAt': '2017-02-26'
    },
    {
      'content': 'Hello po!',
      'author': 'Ellen',
      'learningObject': 'whitepotato-lo',
      'createdAt': '2017-02-07'
    },
    {
      'content': 'Hello po!',
      'author': 'Ferdinand',
      'learningObject': 'sweetpotato-lo',
      'createdAt': '2017-03-01'
    },
    {
      'content': 'Hello po!',
      'author': 'Gerald',
      'learningObject': 'peanut-lo',
      'createdAt': '2017-03-11'
    },
    {
      'content': 'Hello po!',
      'author': 'Gary',
      'learningObject': 'mungbean-lo',
      'createdAt': '2017-03-09'
    },
    {
      'content': 'Hello po!',
      'author': 'Henry',
      'learningObject': 'stagescorn-lo',
      'createdAt': '2017-03-16'
    },
    {
      'content': 'Hello po!',
      'author': 'Harold',
      'learningObject': 'soilfertilization-lo',
      'createdAt': '2017-03-19'
    },
    {
      'content': 'Hello po!',
      'author': 'Irish',
      'learningObject': 'landpreparation-lo',
      'createdAt': '2017-03-20'
    },
    {
      'content': 'Hello po!',
      'author': 'Juan',
      'learningObject': 'biotechbtcorn-lo',
      'createdAt': '2017-03-21'
    },
    {
      'content': 'Hello po!',
      'author': 'John',
      'learningObject': 'feedingprogram-lo',
      'createdAt': '2017-03-22'
    },
    {
      'content': 'Hello po!',
      'author': 'Jane',
      'learningObject': 'grainquality-lo',
      'createdAt': '2017-03-25'
    },
    {
      'content': 'Hello po!',
      'author': 'Justin',
      'learningObject': 'sugarcane-lo',
      'createdAt': '2017-03-26'
    },
    {
      'content': 'Hello po!',
      'author': 'Joon',
      'learningObject': 'plantingrice-lo',
      'createdAt': '2017-03-20'
    },
    {
      'content': 'Hello po!',
      'author': 'Jeff',
      'learningObject': 'plantingmango-lo',
      'createdAt': '2017-03-23'
    },
    {
      'content': 'Hello po!',
      'author': 'Kris',
      'learningObject': 'plantingcoffee-lo',
      'createdAt': '2017-03-23'
    },
    {
      'content': 'Hello po!',
      'author': 'Karl',
      'learningObject': 'plantingcoconut-lo',
      'createdAt': '2017-03-24'
    },
    {
      'content': 'Hello po!',
      'author': 'Krystal',
      'learningObject': 'plantingbanana-lo',
      'createdAt': '2017-03-28'
    },
    {
      'content': 'Hello po!',
      'author': 'Luhan',
      'learningObject': 'plantingabaca-lo',
      'createdAt': '2017-03-22'
    },
    {
      'content': 'Hello po!',
      'author': 'Logan',
      'learningObject': 'pineapple-lo',
      'createdAt': '2017-03-17'
    },
    {
      'content': 'Hello po!',
      'author': 'Manuel',
      'learningObject': 'aquafeeds-lo',
      'createdAt': '2017-03-16'
    },
    {
      'content': 'Hello po!',
      'author': 'Natalie',
      'learningObject': 'papaya-lo',
      'createdAt': '2017-03-17'
    },
    {
      'content': 'Hello po!',
      'author': 'Oliver',
      'learningObject': 'citrus-lo',
      'createdAt': '2017-03-04'
    },
    {
      'content': 'Hello po!',
      'author': 'Patricia',
      'learningObject': 'jackfruit-lo',
      'createdAt': '2017-04-05'
    },
    {
      'content': 'Hello po!',
      'author': 'Queen',
      'learningObject': 'whitepotato-lo',
      'createdAt': '2017-04-04'
    },
    {
      'content': 'Hello po!',
      'author': 'Rona',
      'learningObject': 'durian-lo',
      'createdAt': '2017-04-03'
    },

  ],
*/
  LOView: [
/*
    {
      'user': 'Angelica',
      'learningObject': 'aquafeeds-lo',
      'dateViewed': '2017-01-12',
      'country_code': 'PH',
      'region': 'Calabarzon',
      'city': 'Rizal'
    },
    {
      'user': 'Amber',
      'learningObject': 'pineapple-lo',
      'dateViewed': '2017-01-28',
      'country_code': 'PH',
      'region': 'Calabarzon',
      'city': 'Cavite'
    },
    {
      'user': 'Sally',
      'learningObject': 'pineapple-lo',
      'dateViewed': '2017-01-28',
      'country_code': 'PH',
      'region': 'Northern Mindanao',
      'city': 'Bukidnon'
    },
    {
      'user': 'Tim',
      'learningObject': 'pineapple-lo',
      'dateViewed': '2017-01-28',
      'country_code': 'PH',
      'region': 'Western Visayas',
      'city': 'Aklan'
    },
    {
      'user': 'Uvin',
      'learningObject': 'pineapple-lo',
      'dateViewed': '2017-01-28',
      'country_code': 'PH',
      'region': 'Western Visayas',
      'city': 'Antique'
    },
    {
      'user': 'Albert',
      'learningObject': 'papaya-lo',
      'dateViewed': '2017-01-18',
      'country_code': 'PH',
      'region': 'Western Visayas',
      'city': 'Capiz'
    },
    {
      'user': 'Bryan',
      'learningObject': 'citrus-lo',
      'dateViewed': '2017-01-10',
      'country_code': 'PH',
      'region': 'Western Visayas',
      'city': 'Guimaras'
    },
    {
      'user': 'Cena',
      'learningObject': 'jackfruit-lo',
      'dateViewed': '2017-02-09',
      'country_code': 'PH',
      'region': 'Calabarzon',
      'city': 'Laguna'
    },
    {
      'user': 'Cena',
      'learningObject': 'aquafeeds-lo',
      'dateViewed': '2017-02-09',
      'country_code': 'PH',
      'region': 'Calabarzon',
      'city': 'Laguna'
    },
    {
      'user': 'Cena',
      'learningObject': 'aquafeeds-lo',
      'dateViewed': '2017-02-09',
      'country_code': 'PH',
      'region': 'Calabarzon',
      'city': 'Laguna'
    },
    {
      'user': 'Cena',
      'learningObject': 'aquafeeds-lo',
      'dateViewed': '2017-02-09',
      'country_code': 'PH',
      'region': 'Calabarzon',
      'city': 'Laguna'
    },
    {
      'user': 'Daniel',
      'learningObject': 'durian-lo',
      'dateViewed': '2017-02-26',
      'country_code': 'PH',
      'region': 'Calabarzon',
      'city': 'Batangas'
    },
    {
      'user': 'Ellen',
      'learningObject': 'whitepotato-lo',
      'dateViewed': '2017-02-07',
      'country_code': 'PH',
      'region': 'Calabarzon',
      'city': 'Quezon'
    },
    {
      'user': 'Ferdinand',
      'learningObject': 'sweetpotato-lo',
      'dateViewed': '2017-03-01',
      'country_code': 'PH',
      'region': 'Calabarzon',
      'city': 'Lucena'
    },
    {
      'user': 'Victoria',
      'learningObject': 'sweetpotato-lo',
      'dateViewed': '2017-03-01',
      'country_code': 'PH',
      'region': 'Central Luzon',
      'city': 'Aurora'
    },
    {
      'user': 'Vince',
      'learningObject': 'sweetpotato-lo',
      'dateViewed': '2017-03-01',
      'country_code': 'PH',
      'region': 'Central Luzon',
      'city': 'Bataan'
    },
    {
      'user': 'Gerald',
      'learningObject': 'peanut-lo',
      'dateViewed': '2017-03-11',
      'country_code': 'PH',
      'region': 'Mimaropa',
      'city': 'Marinduque'
    },
    {
      'user': 'Gary',
      'learningObject': 'mungbean-lo',
      'dateViewed': '2017-02-09',
      'country_code': 'PH',
      'region': 'Mimaropa',
      'city': 'Occidental Mindoro'
    },
    {
      'user': 'Henry',
      'learningObject': 'stagescorn-lo',
      'dateViewed': '2017-02-16',
      'country_code': 'PH',
      'region': 'Mimaropa',
      'city': 'Oriental Mindoro'
    },
    {
      'user': 'Harold',
      'learningObject': 'soilfertilization-lo',
      'dateViewed': '2017-02-19',
      'country_code': 'PH',
      'region': 'Mimaropa',
      'city': 'Palawan'
    },
    {
      'user': 'Irish',
      'learningObject': 'landpreparation-lo',
      'dateViewed': '2017-02-20',
      'country_code': 'PH',
      'region': 'Bicol',
      'city': 'Albay'
    },
    {
      'user': 'Juan',
      'learningObject': 'biotechbtcorn-lo',
      'dateViewed': '2017-02-21',
      'country_code': 'PH',
      'region': 'Bicol',
      'city': 'Camarines Norte'
    },
    {
      'user': 'John',
      'learningObject': 'feedingprogram-lo',
      'dateViewed': '2017-02-22',
      'country_code': 'PH',
      'region': 'Bicol',
      'city': 'Camarines Sur'
    },
    {
      'user': 'Jane',
      'learningObject': 'grainquality-lo',
      'dateViewed': '2017-03-25',
      'country_code': 'PH',
      'region': 'National Capital Region',
      'city': 'Caloocan'
    },
    {
      'user': 'Wilson',
      'learningObject': 'grainquality-lo',
      'dateViewed': '2017-03-25',
      'country_code': 'PH',
      'region': 'National Capital Region',
      'city': 'Makati'
    },
    {
      'user': 'Yvette',
      'learningObject': 'grainquality-lo',
      'dateViewed': '2017-03-25',
      'country_code': 'PH',
      'region': 'National Capital Region',
      'city': 'Malabon'
    },
    {
      'user': 'Xyrus',
      'learningObject': 'grainquality-lo',
      'dateViewed': '2017-03-25',
      'country_code': 'PH',
      'region': 'National Capital Region',
      'city': 'Mandaluyong'
    },
    {
      'user': 'Justin',
      'learningObject': 'sugarcane-lo',
      'dateViewed': '2017-03-26',
      'country_code': 'PH',
      'region': 'National Capital Region',
      'city': 'Manila'
    },
    {
      'user': 'Joon',
      'learningObject': 'plantingrice-lo',
      'dateViewed': '2017-03-20',
      'country_code': 'PH',
      'region': 'National Capital Region',
      'city': 'Marikina'
    },
    {
      'user': 'Jeff',
      'learningObject': 'plantingmango-lo',
      'dateViewed': '2017-03-23',
      'country_code': 'PH',
      'region': 'National Capital Region',
      'city': 'Muntinlupa'
    },
    {
      'user': 'Kris',
      'learningObject': 'plantingcoffee-lo',
      'dateViewed': '2017-03-23',
      'country_code': 'PH',
      'region': 'National Capital Region',
      'city': 'Navotas'
    },
    {
      'user': 'Karl',
      'learningObject': 'plantingcoconut-lo',
      'dateViewed': '2017-03-24',
      'country_code': 'PH',
      'region': 'Cordillera Administrative Region',
      'city': 'Ifugao'
    },
    {
      'user': 'Krystal',
      'learningObject': 'plantingbanana-lo',
      'dateViewed': '2017-03-28',
      'country_code': 'PH',
      'region': 'Cordillera Administrative Region',
      'city': 'Kalinga'
    },
    {
      'user': 'Zend',
      'learningObject': 'plantingbanana-lo',
      'dateViewed': '2017-03-28',
      'country_code': 'PH',
      'region': 'Cordillera Administrative Region',
      'city': 'Mountain Province'
    },
    {
      'user': 'Luhan',
      'learningObject': 'plantingabaca-lo',
      'dateViewed': '2017-03-22',
      'country_code': 'PH',
      'region': 'Cordillera Administrative Region',
      'city': 'Baguio'
    },
    {
      'user': 'Logan',
      'learningObject': 'pineapple-lo',
      'dateViewed': '2017-04-17',
      'country_code': 'PH',
      'region': 'National Capital Region',
      'city': 'Pasay'
    },
    {
      'user': 'Manuel',
      'learningObject': 'aquafeeds-lo',
      'dateViewed': '2017-04-16',
      'country_code': 'PH',
      'region': 'National Capital Region',
      'city': 'Pasig'
    },
    {
      'user': 'Natalie',
      'learningObject': 'papaya-lo',
      'dateViewed': '2017-04-17',
      'country_code': 'PH',
      'region': 'Soccsksargen',
      'city': 'Cotabato'
    },
    {
      'user': 'Oliver',
      'learningObject': 'citrus-lo',
      'dateViewed': '2017-04-04',
      'country_code': 'PH',
      'region': 'Soccsksargen',
      'city': 'Sarangani'
    },
    {
      'user': 'Patricia',
      'learningObject': 'jackfruit-lo',
      'dateViewed': '2017-04-05',
      'country_code': 'PH',
      'region': 'Soccsksargen',
      'city': 'South Cotabato'
    },
    {
      'user': 'Queen',
      'learningObject': 'whitepotato-lo',
      'dateViewed': '2017-04-04',
      'country_code': 'PH',
      'region': 'Soccsksargen',
      'city': 'Sultan Kudarat'
    },
    {
      'user': 'Rona',
      'learningObject': 'durian-lo',
      'dateViewed': '2017-04-03',
      'country_code': 'PH',
      'region': 'Soccsksargen',
      'city': 'General Santos'
    },
    {
      'user': 'Cena',
      'learningObject': 'durian-lo',
      'dateViewed': '2017-04-03',
      'country_code': 'PH',
      'region': 'Calabarzon',
      'city': 'Dasmarinas'
    },
    {
      'user': 'Albert',
      'learningObject': 'durian-lo',
      'dateViewed': '2017-04-03',
      'country_code': 'PH',
      'region': 'Calabarzon',
      'city': 'Batangas'
    },
    {
      'user': 'Angelica',
      'learningObject': 'aquafeeds-lo',
      'dateViewed': '2017-01-12',
      'country_code': 'PH',
      'region': 'Calabarzon',
      'city': 'Rizal'
    },
    {
      'user': 'Amber',
      'learningObject': 'pineapple-lo',
      'dateViewed': '2017-01-28',
      'country_code': 'PH',
      'region': 'Calabarzon',
      'city': 'Cavite'
    },
    {
      'user': 'Sally',
      'learningObject': 'pineapple-lo',
      'dateViewed': '2017-01-28',
      'country_code': 'PH',
      'region': 'Northern Mindanao',
      'city': 'Bukidnon'
    },
    {
      'user': 'Tim',
      'learningObject': 'pineapple-lo',
      'dateViewed': '2017-01-28',
      'country_code': 'PH',
      'region': 'Western Visayas',
      'city': 'Aklan'
    },
    {
      'user': 'Uvin',
      'learningObject': 'pineapple-lo',
      'dateViewed': '2017-01-28',
      'country_code': 'PH',
      'region': 'Western Visayas',
      'city': 'Antique'
    },
    {
      'user': 'Albert',
      'learningObject': 'papaya-lo',
      'dateViewed': '2017-01-18',
      'country_code': 'PH',
      'region': 'Western Visayas',
      'city': 'Capiz'
    },
    {
      'user': 'Bryan',
      'learningObject': 'citrus-lo',
      'dateViewed': '2017-01-10',
      'country_code': 'PH',
      'region': 'Western Visayas',
      'city': 'Guimaras'
    },
    {
      'user': 'Cena',
      'learningObject': 'jackfruit-lo',
      'dateViewed': '2017-02-09',
      'country_code': 'PH',
      'region': 'Calabarzon',
      'city': 'Laguna'
    },
    {
      'user': 'Daniel',
      'learningObject': 'durian-lo',
      'dateViewed': '2017-02-26',
      'country_code': 'PH',
      'region': 'Calabarzon',
      'city': 'Batangas'
    },
    {
      'user': 'Ellen',
      'learningObject': 'whitepotato-lo',
      'dateViewed': '2017-02-07',
      'country_code': 'PH',
      'region': 'Calabarzon',
      'city': 'Quezon'
    },
    {
      'user': 'Ferdinand',
      'learningObject': 'sweetpotato-lo',
      'dateViewed': '2017-03-01',
      'country_code': 'PH',
      'region': 'Calabarzon',
      'city': 'Lucena'
    },
    {
      'user': 'Victoria',
      'learningObject': 'sweetpotato-lo',
      'dateViewed': '2017-03-01',
      'country_code': 'PH',
      'region': 'Central Luzon',
      'city': 'Aurora'
    },
    {
      'user': 'Vince',
      'learningObject': 'sweetpotato-lo',
      'dateViewed': '2017-03-01',
      'country_code': 'PH',
      'region': 'Central Luzon',
      'city': 'Bataan'
    },
    {
      'user': 'Gerald',
      'learningObject': 'peanut-lo',
      'dateViewed': '2017-03-11',
      'country_code': 'PH',
      'region': 'Mimaropa',
      'city': 'Marinduque'
    },
    {
      'user': 'Gary',
      'learningObject': 'mungbean-lo',
      'dateViewed': '2017-02-09',
      'country_code': 'PH',
      'region': 'Mimaropa',
      'city': 'Occidental Mindoro'
    },
    {
      'user': 'Henry',
      'learningObject': 'stagescorn-lo',
      'dateViewed': '2017-02-16',
      'country_code': 'PH',
      'region': 'Mimaropa',
      'city': 'Oriental Mindoro'
    },
    {
      'user': 'Harold',
      'learningObject': 'soilfertilization-lo',
      'dateViewed': '2017-02-19',
      'country_code': 'PH',
      'region': 'Mimaropa',
      'city': 'Palawan'
    },
    {
      'user': 'Irish',
      'learningObject': 'landpreparation-lo',
      'dateViewed': '2017-02-20',
      'country_code': 'PH',
      'region': 'Bicol',
      'city': 'Albay'
    },
    {
      'user': 'Juan',
      'learningObject': 'biotechbtcorn-lo',
      'dateViewed': '2017-02-21',
      'country_code': 'PH',
      'region': 'Bicol',
      'city': 'Camarines Norte'
    },
    {
      'user': 'John',
      'learningObject': 'feedingprogram-lo',
      'dateViewed': '2017-02-22',
      'country_code': 'PH',
      'region': 'Bicol',
      'city': 'Camarines Sur'
    },
    {
      'user': 'Jane',
      'learningObject': 'grainquality-lo',
      'dateViewed': '2017-03-25',
      'country_code': 'PH',
      'region': 'National Capital Region',
      'city': 'Caloocan'
    },
    {
      'user': 'Wilson',
      'learningObject': 'grainquality-lo',
      'dateViewed': '2017-03-25',
      'country_code': 'PH',
      'region': 'National Capital Region',
      'city': 'Makati'
    },
    {
      'user': 'Yvette',
      'learningObject': 'grainquality-lo',
      'dateViewed': '2017-03-25',
      'country_code': 'PH',
      'region': 'National Capital Region',
      'city': 'Malabon'
    },
    {
      'user': 'Xyrus',
      'learningObject': 'grainquality-lo',
      'dateViewed': '2017-03-25',
      'country_code': 'PH',
      'region': 'National Capital Region',
      'city': 'Mandaluyong'
    },
    {
      'user': 'Justin',
      'learningObject': 'sugarcane-lo',
      'dateViewed': '2017-03-26',
      'country_code': 'PH',
      'region': 'National Capital Region',
      'city': 'Manila'
    },
    {
      'user': 'Joon',
      'learningObject': 'plantingrice-lo',
      'dateViewed': '2017-03-20',
      'country_code': 'PH',
      'region': 'National Capital Region',
      'city': 'Marikina'
    },
    {
      'user': 'Jeff',
      'learningObject': 'plantingmango-lo',
      'dateViewed': '2017-03-23',
      'country_code': 'PH',
      'region': 'National Capital Region',
      'city': 'Muntinlupa'
    },
    {
      'user': 'Kris',
      'learningObject': 'plantingcoffee-lo',
      'dateViewed': '2017-03-23',
      'country_code': 'PH',
      'region': 'National Capital Region',
      'city': 'Navotas'
    },
    {
      'user': 'Karl',
      'learningObject': 'plantingcoconut-lo',
      'dateViewed': '2017-03-24',
      'country_code': 'PH',
      'region': 'Cordillera Administrative Region',
      'city': 'Ifugao'
    },
    {
      'user': 'Krystal',
      'learningObject': 'plantingbanana-lo',
      'dateViewed': '2017-03-28',
      'country_code': 'PH',
      'region': 'Cordillera Administrative Region',
      'city': 'Kalinga'
    },
    {
      'user': 'Zend',
      'learningObject': 'plantingbanana-lo',
      'dateViewed': '2017-03-28',
      'country_code': 'PH',
      'region': 'Cordillera Administrative Region',
      'city': 'Mountain Province'
    },
    {
      'user': 'Luhan',
      'learningObject': 'plantingabaca-lo',
      'dateViewed': '2017-03-22',
      'country_code': 'PH',
      'region': 'Cordillera Administrative Region',
      'city': 'Baguio'
    },
    {
      'user': 'Logan',
      'learningObject': 'pineapple-lo',
      'dateViewed': '2017-04-17',
      'country_code': 'PH',
      'region': 'National Capital Region',
      'city': 'Pasay'
    },
    {
      'user': 'Manuel',
      'learningObject': 'aquafeeds-lo',
      'dateViewed': '2017-04-16',
      'country_code': 'PH',
      'region': 'National Capital Region',
      'city': 'Pasig'
    },
    {
      'user': 'Natalie',
      'learningObject': 'papaya-lo',
      'dateViewed': '2017-04-17',
      'country_code': 'PH',
      'region': 'Soccsksargen',
      'city': 'Cotabato'
    },
    {
      'user': 'Oliver',
      'learningObject': 'citrus-lo',
      'dateViewed': '2017-04-04',
      'country_code': 'PH',
      'region': 'Soccsksargen',
      'city': 'Sarangani'
    },
    {
      'user': 'Patricia',
      'learningObject': 'jackfruit-lo',
      'dateViewed': '2017-04-05',
      'country_code': 'PH',
      'region': 'Soccsksargen',
      'city': 'South Cotabato'
    },
    {
      'user': 'Queen',
      'learningObject': 'whitepotato-lo',
      'dateViewed': '2017-04-04',
      'country_code': 'PH',
      'region': 'Soccsksargen',
      'city': 'Sultan Kudarat'
    },
    {
      'user': 'Rona',
      'learningObject': 'durian-lo',
      'dateViewed': '2017-04-03',
      'country_code': 'PH',
      'region': 'Soccsksargen',
      'city': 'General Santos'
    },
    {
      'user': 'Cena',
      'learningObject': 'durian-lo',
      'dateViewed': '2017-04-03',
      'country_code': 'PH',
      'region': 'Calabarzon',
      'city': 'Dasmarinas'
    },
    {
      'user': 'Albert',
      'learningObject': 'durian-lo',
      'dateViewed': '2017-04-03',
      'country_code': 'PH',
      'region': 'Calabarzon',
      'city': 'Batangas'
    }*/
  ],

  ELearningVisit: [
    /*{
      'dateViewed': '2017-01-12',
      'country_code': 'PH',
      'region': 'Calabarzon',
      'city': 'Rizal'
    },
    {
      'dateViewed': '2017-01-28',
      'country_code': 'PH',
      'region': 'Calabarzon',
      'city': 'Cavite'
    },
    {
      'dateViewed': '2017-01-28',
      'country_code': 'PH',
      'region': 'Northern Mindanao',
      'city': 'Bukidnon'
    },
    {
      'dateViewed': '2017-01-28',
      'country_code': 'PH',
      'region': 'Western Visayas',
      'city': 'Aklan'
    },
    {
      'dateViewed': '2017-01-28',
      'country_code': 'PH',
      'region': 'Western Visayas',
      'city': 'Antique'
    },
    {
      'dateViewed': '2017-01-18',
      'country_code': 'PH',
      'region': 'Western Visayas',
      'city': 'Capiz'
    },
    {
      'dateViewed': '2017-01-10',
      'country_code': 'PH',
      'region': 'Western Visayas',
      'city': 'Guimaras'
    },
    {
      'dateViewed': '2017-02-09',
      'country_code': 'PH',
      'region': 'Calabarzon',
      'city': 'Laguna'
    },
    {
      'dateViewed': '2017-02-09',
      'country_code': 'PH',
      'region': 'Calabarzon',
      'city': 'Laguna'
    },
    {
      'dateViewed': '2017-02-09',
      'country_code': 'PH',
      'region': 'Calabarzon',
      'city': 'Laguna'
    },
    {
      'dateViewed': '2017-02-09',
      'country_code': 'PH',
      'region': 'Calabarzon',
      'city': 'Laguna'
    },
    {
      'dateViewed': '2017-02-26',
      'country_code': 'PH',
      'region': 'Calabarzon',
      'city': 'Batangas'
    },
    {
      'dateViewed': '2017-02-07',
      'country_code': 'PH',
      'region': 'Calabarzon',
      'city': 'Quezon'
    },
    {
      'dateViewed': '2017-03-01',
      'country_code': 'PH',
      'region': 'Calabarzon',
      'city': 'Lucena'
    },
    {
      'dateViewed': '2017-03-01',
      'country_code': 'PH',
      'region': 'Central Luzon',
      'city': 'Aurora'
    },
    {
      'dateViewed': '2017-03-01',
      'country_code': 'PH',
      'region': 'Central Luzon',
      'city': 'Bataan'
    },
    {
      'dateViewed': '2017-03-11',
      'country_code': 'PH',
      'region': 'Mimaropa',
      'city': 'Marinduque'
    },
    {
      'dateViewed': '2017-02-09',
      'country_code': 'PH',
      'region': 'Mimaropa',
      'city': 'Occidental Mindoro'
    },
    {
      'dateViewed': '2017-02-16',
      'country_code': 'PH',
      'region': 'Mimaropa',
      'city': 'Oriental Mindoro'
    },
    {
      'dateViewed': '2017-02-19',
      'country_code': 'PH',
      'region': 'Mimaropa',
      'city': 'Palawan'
    },
    {
      'dateViewed': '2017-02-20',
      'country_code': 'PH',
      'region': 'Bicol',
      'city': 'Albay'
    },
    {
      'dateViewed': '2017-02-21',
      'country_code': 'PH',
      'region': 'Bicol',
      'city': 'Camarines Norte'
    },
    {
      'dateViewed': '2017-02-22',
      'country_code': 'PH',
      'region': 'Bicol',
      'city': 'Camarines Sur'
    },
    {
      'dateViewed': '2017-03-25',
      'country_code': 'PH',
      'region': 'National Capital Region',
      'city': 'Caloocan'
    },
    {
      'dateViewed': '2017-03-25',
      'country_code': 'PH',
      'region': 'National Capital Region',
      'city': 'Makati'
    },
    {
      'dateViewed': '2017-03-25',
      'country_code': 'PH',
      'region': 'National Capital Region',
      'city': 'Malabon'
    },
    {
      'dateViewed': '2017-03-25',
      'country_code': 'PH',
      'region': 'National Capital Region',
      'city': 'Mandaluyong'
    },
    {
      'dateViewed': '2017-03-26',
      'country_code': 'PH',
      'region': 'National Capital Region',
      'city': 'Manila'
    },
    {
      'dateViewed': '2017-03-20',
      'country_code': 'PH',
      'region': 'National Capital Region',
      'city': 'Marikina'
    },
    {
      'dateViewed': '2017-03-23',
      'country_code': 'PH',
      'region': 'National Capital Region',
      'city': 'Muntinlupa'
    },
    {
      'dateViewed': '2017-03-23',
      'country_code': 'PH',
      'region': 'National Capital Region',
      'city': 'Navotas'
    },
    {
      'dateViewed': '2017-03-24',
      'country_code': 'PH',
      'region': 'Cordillera Administrative Region',
      'city': 'Ifugao'
    },
    {
      'dateViewed': '2017-03-28',
      'country_code': 'PH',
      'region': 'Cordillera Administrative Region',
      'city': 'Kalinga'
    },
    {
      'dateViewed': '2017-03-28',
      'country_code': 'PH',
      'region': 'Cordillera Administrative Region',
      'city': 'Mountain Province'
    },
    {
      'dateViewed': '2017-03-22',
      'country_code': 'PH',
      'region': 'Cordillera Administrative Region',
      'city': 'Baguio'
    },
    {
      'dateViewed': '2017-04-17',
      'country_code': 'PH',
      'region': 'National Capital Region',
      'city': 'Pasay'
    },
    {
      'dateViewed': '2017-04-16',
      'country_code': 'PH',
      'region': 'National Capital Region',
      'city': 'Pasig'
    },
    {
      'dateViewed': '2017-04-17',
      'country_code': 'PH',
      'region': 'Soccsksargen',
      'city': 'Cotabato'
    },
    {
      'dateViewed': '2017-04-04',
      'country_code': 'PH',
      'region': 'Soccsksargen',
      'city': 'Sarangani'
    },
    {
      'dateViewed': '2017-04-05',
      'country_code': 'PH',
      'region': 'Soccsksargen',
      'city': 'South Cotabato'
    },
    {
      'dateViewed': '2017-04-04',
      'country_code': 'PH',
      'region': 'Soccsksargen',
      'city': 'Sultan Kudarat'
    },
    {
      'dateViewed': '2017-04-03',
      'country_code': 'PH',
      'region': 'Soccsksargen',
      'city': 'General Santos'
    },
    {
      'dateViewed': '2017-04-03',
      'country_code': 'PH',
      'region': 'Calabarzon',
      'city': 'Dasmarinas'
    },
    {
      'dateViewed': '2017-04-03',
      'country_code': 'PH',
      'region': 'Calabarzon',
      'city': 'Batangas'
    },
    {
      'dateViewed': '2017-01-12',
      'country_code': 'PH',
      'region': 'Calabarzon',
      'city': 'Rizal'
    },
    {
      'dateViewed': '2017-01-28',
      'country_code': 'PH',
      'region': 'Calabarzon',
      'city': 'Cavite'
    },
    {
      'dateViewed': '2017-01-28',
      'country_code': 'PH',
      'region': 'Northern Mindanao',
      'city': 'Bukidnon'
    },
    {
      'dateViewed': '2017-01-28',
      'country_code': 'PH',
      'region': 'Western Visayas',
      'city': 'Aklan'
    },
    {
      'dateViewed': '2017-01-28',
      'country_code': 'PH',
      'region': 'Western Visayas',
      'city': 'Antique'
    },
    {
      'dateViewed': '2017-01-18',
      'country_code': 'PH',
      'region': 'Western Visayas',
      'city': 'Capiz'
    },
    {
      'dateViewed': '2017-01-10',
      'country_code': 'PH',
      'region': 'Western Visayas',
      'city': 'Guimaras'
    },
    {
      'dateViewed': '2017-02-09',
      'country_code': 'PH',
      'region': 'Calabarzon',
      'city': 'Laguna'
    },
    {
      'dateViewed': '2017-02-26',
      'country_code': 'AF'
    },
    {
      'dateViewed': '2017-02-07',
      'country_code': 'AF'
    },
    {
      'dateViewed': '2017-03-01',
      'country_code': 'AR'
    },
    {
      'dateViewed': '2017-03-01',
      'country_code': 'AR'
    },
    {
      'dateViewed': '2017-03-01',
      'country_code': 'AR'
    },
    {
      'dateViewed': '2017-03-11',
      'country_code': 'AR'
    },
    {
      'dateViewed': '2017-02-09',
      'country_code': 'AR'
    },
    {
      'dateViewed': '2017-02-16',
      'country_code': 'AR'
    },
    {
      'dateViewed': '2017-02-19',
      'country_code': 'AR'
    },
    {
      'dateViewed': '2017-02-20',
      'country_code': 'AR'
    },
    {
      'dateViewed': '2017-02-21',
      'country_code': 'BR'
    },
    {
      'dateViewed': '2017-02-22',
      'country_code': 'BR'
    },
    {
      'dateViewed': '2017-03-25',
      'country_code': 'BR'
    },
    {
      'dateViewed': '2017-03-25',
      'country_code': 'BR'
    },
    {
      'dateViewed': '2017-03-25',
      'country_code': 'CA'
    },
    {
      'dateViewed': '2017-03-25',
      'country_code': 'CA'
    },
    {
      'dateViewed': '2017-03-26',
      'country_code': 'CA'
    },
    {
      'dateViewed': '2017-03-20',
      'country_code': 'CA'
    },
    {
      'dateViewed': '2017-03-23',
      'country_code': 'CA'
    },
    {
      'dateViewed': '2017-03-23',
      'country_code': 'CA'
    },
    {
      'dateViewed': '2017-03-24',
      'country_code': 'CL'
    },
    {
      'dateViewed': '2017-03-28',
      'country_code': 'CN'
    },
    {
      'dateViewed': '2017-03-28',
      'country_code': 'CO'
    },
    {
      'dateViewed': '2017-03-22',
      'country_code': 'CO'
    },
    {
      'dateViewed': '2017-04-17',
      'country_code': 'FR'
    },
    {
      'dateViewed': '2017-04-16',
      'country_code': 'FR'
    },
    {
      'dateViewed': '2017-04-17',
      'country_code': 'FR'
    },
    {
      'dateViewed': '2017-04-04',
      'country_code': 'FR'
    },
    {
      'dateViewed': '2017-04-05',
      'country_code': 'FR'
    },
    {
      'dateViewed': '2017-04-04',
      'country_code': 'FR'
    },
    {
      'dateViewed': '2017-04-03',
      'country_code': 'FR'
    },
    {
      'dateViewed': '2017-04-03',
      'country_code': 'DE'
    },
    {
      'dateViewed': '2017-04-03',
      'country_code': 'DE'
    },
    {
      'dateViewed': '2017-02-07',
      'country_code': 'DE'
    },
    {
      'dateViewed': '2017-03-01',
      'country_code': 'ID'
    },
    {
      'dateViewed': '2017-03-01',
      'country_code': 'ID'
    },
    {
      'dateViewed': '2017-03-01',
      'country_code': 'JP'
    },
    {
      'dateViewed': '2017-03-11',
      'country_code': 'JP'
    },
    {
      'dateViewed': '2017-02-09',
      'country_code': 'KR'
    },
    {
      'dateViewed': '2017-02-16',
      'country_code': 'KR'
    },
    {
      'dateViewed': '2017-02-19',
      'country_code': 'KR'
    },
    {
      'dateViewed': '2017-02-20',
      'country_code': 'KR'
    },
    {
      'dateViewed': '2017-02-21',
      'country_code': 'MY'
    },
    {
      'dateViewed': '2017-02-22',
      'country_code': 'MY'
    },
    {
      'dateViewed': '2017-03-25',
      'country_code': 'MY'
    },
    {
      'dateViewed': '2017-03-25',
      'country_code': 'MY'
    },
    {
      'dateViewed': '2017-03-25',
      'country_code': 'MY'
    },
    {
      'dateViewed': '2017-03-25',
      'country_code': 'MY'
    },
    {
      'dateViewed': '2017-03-26',
      'country_code': 'MX'
    },
    {
      'dateViewed': '2017-03-20',
      'country_code': 'SG'
    },
    {
      'dateViewed': '2017-03-23',
      'country_code': 'SG'
    },
    {
      'dateViewed': '2017-03-23',
      'country_code': 'SG'
    },
    {
      'dateViewed': '2017-03-24',
      'country_code': 'SG'
    },
    {
      'dateViewed': '2017-03-28',
      'country_code': 'SG'
    },
    {
      'dateViewed': '2017-03-28',
      'country_code': 'SG'
    },
    {
      'dateViewed': '2017-03-22',
      'country_code': 'SG'
    },
    {
      'dateViewed': '2017-04-17',
      'country_code': 'SG'
    },
    {
      'dateViewed': '2017-04-16',
      'country_code': 'SG'
    },
    {
      'dateViewed': '2017-04-17',
      'country_code': 'SG'
    },
    {
      'dateViewed': '2017-04-04',
      'country_code': 'SG'
    },
    {
      'dateViewed': '2017-04-05',
      'country_code': 'US'
    },
    {
      'dateViewed': '2017-04-04',
      'country_code': 'US'
    },
    {
      'dateViewed': '2017-04-03',
      'country_code': 'US'
    },
    {
      'dateViewed': '2017-04-03',
      'country_code': 'US'
    },
    {
      'dateViewed': '2017-04-03',
      'country_code': 'US'
    }*/
  ]

};
