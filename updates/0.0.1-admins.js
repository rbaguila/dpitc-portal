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
      'url': 'https://www.youtube.com/watch?v=VlSmx5Tck-s&t=3s&index=1&list=PLbdcQpXzx9ZVRXKNzyGJW9Nsr_wj8TMPJ',
      'videoId': 'VlSmx5Tck-s',
      '__ref': 'stagescorn-yt'
    },
    {
      'title': 'Soil Fertilization',
      'url': 'https://www.youtube.com/watch?v=BPiQTm2uqo0&index=2&list=PLbdcQpXzx9ZVRXKNzyGJW9Nsr_wj8TMPJ',
      'videoId': 'BPiQTm2uqo0',
      '__ref': 'soilfertilization-yt'
    },
    {
      'title': 'Land Preparation',
      'url': 'https://www.youtube.com/watch?v=s8xBIWP83cg&index=3&list=PLbdcQpXzx9ZVRXKNzyGJW9Nsr_wj8TMPJ',
      'videoId': 's8xBIWP83cg',
      '__ref': 'landpreparation-yt'
    },
    {
      'title': 'Grain Quality',
      'url': 'https://www.youtube.com/watch?v=wqQzFz0WdtE&index=4&list=PLbdcQpXzx9ZVRXKNzyGJW9Nsr_wj8TMPJ',
      'videoId': 'wqQzFz0WdtE',
      '__ref': 'grainquality-yt'
    },
    {
      'title': 'Feeding Program',
      'url': 'https://www.youtube.com/watch?v=LlR9jsIg_Ik&index=5&list=PLbdcQpXzx9ZVRXKNzyGJW9Nsr_wj8TMPJ',
      'videoId': 'LlR9jsIg_Ik',
      '__ref': 'feedingprogram-yt'
    },
    {
      'title': 'Biotech BtCorn ',
      'url': 'https://www.youtube.com/watch?v=Yt2MkxFeono&t=120s&index=14&list=PLbdcQpXzx9ZVRXKNzyGJW9Nsr_wj8TMPJ',
      'videoId': 'Yt2MkxFeono',
      '__ref': 'biotechbtcorn-yt'
    },

  ],

  LearningObject: [
    {
      'title': 'Stages Corn',
      'state': 'published',
      
      'publishedAt': Date.now,
      'content': {
        'brief': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem ligula, varius non vulputate at, sagittis at neque. ',
        'extended': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia nibh felis, in placerat felis hendrerit quis. Aenean sit amet risus consectetur nulla pellentesque lacinia et quis sem. Etiam non ullamcorper quam, cursus posuere est. Curabitur lectus nulla, pellentesque ultrices rutrum sed, congue porta sem. Nullam vitae posuere diam. Sed velit metus, tristique et ipsum eget, gravida eleifend dui.  ',
      },
      'isp': 'corn-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,
      'createdAt': Date.now,
      'updatedAt': Date.now,
      
      'likes': ['Juan', 'John', 'Jane', 'Amber', 'Angelica', 'Albert', 'Bryan', 'Cena'],
      'happy': ['Juan', 'John', 'Jane', 'Amber', 'Angelica', 'Albert', 'Bryan', 'Cena', 'Daniel', 'Ellen'],
      'sad': ['Ferdinand', 'Gerald', 'Harold', 'Henry', 'Irish', 'Joon', 'Jeff'],
      
      'video': 'stagescorn-yt',
      '__ref': 'stagescorn-lo',

    },
    { 
      'title': 'Soil Fertilization',
      'state': 'published',
      
      'publishedAt': Date.now,
      'content': {
        'brief': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem ligula, varius non vulputate at, sagittis at neque.  ',
        'extended': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia nibh felis, in placerat felis hendrerit quis. Aenean sit amet risus consectetur nulla pellentesque lacinia et quis sem. Etiam non ullamcorper quam, cursus posuere est. Curabitur lectus nulla, pellentesque ultrices rutrum sed, congue porta sem. Nullam vitae posuere diam. Sed velit metus, tristique et ipsum eget, gravida eleifend dui.  ',
      },
      'isp': 'corn-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'createdAt': Date.now,
      'updatedAt': Date.now,
      
      'likes': ['Ferdinand', 'Gerald', 'Harold', 'Henry', 'Irish', 'Joon', 'Jeff'],
      'happy': ['Juan', 'John', 'Jane', 'Amber', 'Angelica', 'Albert', 'Bryan', 'Cena'],
      'sad': ['Juan', 'John', 'Jane', 'Amber', 'Angelica', 'Albert', 'Bryan', 'Cena', 'Daniel', 'Ellen'],
      
      'video': 'soilfertilization-yt',
      '__ref': 'soilfertilization-lo',
    },
    { 
      'title': 'Land Preparation',
      'state': 'published',
      
      'publishedAt': Date.now,
      'content': {
        'brief': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem ligula, varius non vulputate at, sagittis at neque.  ',
        'extended': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia nibh felis, in placerat felis hendrerit quis. Aenean sit amet risus consectetur nulla pellentesque lacinia et quis sem. Etiam non ullamcorper quam, cursus posuere est. Curabitur lectus nulla, pellentesque ultrices rutrum sed, congue porta sem. Nullam vitae posuere diam. Sed velit metus, tristique et ipsum eget, gravida eleifend dui.  ',
      },
      'isp': 'corn-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'createdAt': Date.now,
      'updatedAt': Date.now,
       
      'likes': ['Juan', 'John', 'Jane', 'Amber', 'Angelica'],
      'happy': ['Henry', 'Irish', 'Joon', 'Jeff', 'Albert', 'Bryan', 'Cena', 'Daniel', 'Ellen'],
      'sad': ['Ferdinand', 'Gerald', 'Harold'],
      
      'video': 'landpreparation-yt',
      '__ref': 'landpreparation-lo',
    },
    { 
      'title': 'Grain Quality',
      'state': 'published',
      
      'publishedAt': Date.now,
      'content': {
        'brief': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem ligula, varius non vulputate at, sagittis at neque.  ',
        'extended': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia nibh felis, in placerat felis hendrerit quis. Aenean sit amet risus consectetur nulla pellentesque lacinia et quis sem. Etiam non ullamcorper quam, cursus posuere est. Curabitur lectus nulla, pellentesque ultrices rutrum sed, congue porta sem. Nullam vitae posuere diam. Sed velit metus, tristique et ipsum eget, gravida eleifend dui.  ',
      },
      'isp': 'corn-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'createdAt': Date.now,
      'updatedAt': Date.now,
      
      'likes': ['Juan', 'John', 'Jane', 'Amber', 'Angelica'],
      'happy': ['Juan', 'John'],
      'sad': ['Ferdinand', 'Gerald', 'Harold'],
      
      'video': 'grainquality-yt',
      '__ref': 'grainquality-lo',
    },
    { 
      'title': 'Feeding Program',
      'state': 'published',
      
      'publishedAt': Date.now,
      'content': {
        'brief': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem ligula, varius non vulputate at, sagittis at neque.  ',
        'extended': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia nibh felis, in placerat felis hendrerit quis. Aenean sit amet risus consectetur nulla pellentesque lacinia et quis sem. Etiam non ullamcorper quam, cursus posuere est. Curabitur lectus nulla, pellentesque ultrices rutrum sed, congue porta sem. Nullam vitae posuere diam. Sed velit metus, tristique et ipsum eget, gravida eleifend dui.  ',
      },
      'isp': 'corn-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'createdAt': Date.now,
      'updatedAt': Date.now,
      
      'likes': ['Ferdinand', 'Gerald', 'Harold', 'Henry', 'Irish', 'Joon', 'Jeff'],
      'happy': ['Juan', 'John', 'Jane', 'Amber', 'Angelica', 'Albert', 'Bryan', 'Cena'],
      'sad': ['Juan', 'John', 'Jane', 'Amber', 'Angelica', 'Albert', 'Bryan', 'Cena', 'Daniel', 'Ellen'],
      
      'video': 'feedingprogram-yt',
      '__ref': 'feedingprogram-lo',
    },
    { 
      'title': 'Biotech BtCorn',
      'state': 'published',
      
      'publishedAt': Date.now,
      'content': {
        'brief': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem ligula, varius non vulputate at, sagittis at neque.  ',
        'extended': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia nibh felis, in placerat felis hendrerit quis. Aenean sit amet risus consectetur nulla pellentesque lacinia et quis sem. Etiam non ullamcorper quam, cursus posuere est. Curabitur lectus nulla, pellentesque ultrices rutrum sed, congue porta sem. Nullam vitae posuere diam. Sed velit metus, tristique et ipsum eget, gravida eleifend dui.  ',
      },
      'isp': 'corn-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'createdAt': Date.now,  
      
      'likes': ['Juan', 'John', 'Jane', 'Amber', 'Angelica', 'Albert', 'Bryan', 'Cena', 'Daniel', 'Ellen'],
      'happy': ['Juan', 'John', 'Jane', 'Amber', 'Angelica', 'Albert', 'Bryan', 'Cena'],
      'sad': ['Ferdinand', 'Gerald', 'Harold', 'Henry', 'Irish', 'Joon', 'Jeff'],
      
      'updatedAt': Date.now,
      'video': 'biotechbtcorn-yt',
      '__ref': 'biotechbtcorn-lo',
    },
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
      
      'likes': ['Amber', 'Angelica', 'Albert', 'Bryan', 'Cena', 'Daniel', 'Ellen'],
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
      
      'likes': ['Amber', 'Angelica', 'Albert', 'Bryan', 'Cena', 'Daniel', 'Ellen'],
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
      'sad': ['Amber', 'Angelica', 'Albert', 'Bryan', 'Cena', 'Daniel', 'Ellen'],
      
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
      'happy': ['Ferdinand', 'Gerald', 'Gary', 'Harold', 'Henry', 'Irish', 'Juan', 'John', 'Juan', 'Jane', 'Justin', 'Joon', 'Jeff'],
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
      
      'likes': ['Ferdinand', 'Gerald', 'Gary', 'Harold', 'Henry', 'Irish', 'Juan', 'John', 'Juan', 'Jane', 'Justin', 'Joon', 'Jeff'],
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
      
      'likes': ['Gerald', 'Gary', 'Harold', 'Henry', 'Irish', 'Juan', 'John', 'Juan', 'Jane', 'Justin', 'Joon', 'Jeff'],
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
      'happy': ['Sally', 'Tim', 'Uvin', 'Victoria', 'Vince', 'Wilson', 'Xyrus', 'Zend', 'Juan', 'John', 'Jane'],
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
      'sad': ['Sally', 'Tim', 'Uvin', 'Victoria', 'Vince', 'Wilson', 'Xyrus', 'Zend'],
      
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
      'happy': ['Justin', 'Joon', 'Jeff', 'Krystal', 'Kris', 'Karl', 'Logan', 'Luhan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],
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
      
      'likes': ['Justin', 'Joon', 'Jeff', 'Krystal', 'Kris', 'Karl', 'Logan', 'Luhan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],
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
      'happy': ['Justin', 'Joon', 'Jeff', 'Krystal', 'Kris', 'Karl', 'Logan', 'Luhan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],
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
      'happy': ['Sally', 'Tim', 'Uvin', 'Victoria', 'Vince', 'Wilson', 'Xyrus', 'Zend', 'Juan', 'John', 'Jane'],
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
      'happy': ['Sally', 'Tim', 'Uvin', 'Victoria', 'Vince', 'Wilson', 'Xyrus', 'Zend', 'Juan', 'John', 'Jane'],
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
      'happy': ['Sally', 'Tim', 'Uvin', 'Victoria', 'Vince', 'Wilson', 'Xyrus', 'Zend', 'Juan', 'John', 'Jane'],
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
      'happy': ['Sally', 'Tim', 'Uvin', 'Victoria', 'Vince', 'Wilson', 'Xyrus', 'Zend', 'Juan', 'John', 'Jane'],
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
      'happy': ['Sally', 'Tim', 'Uvin', 'Victoria', 'Vince', 'Wilson', 'Xyrus', 'Zend', 'Juan', 'John', 'Jane'],
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
    },
  ],
  

  //Chapter: [
  Course: [
    {
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
    },

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

  LOComment: [
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

  LOView: [
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
    }
  ],

  ELearningVisit: [
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
    }
  ]
  
};
