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
			'__ref': 'admin'
		}
	],


	/*ELearning Fixtures*/

  /*
    LUser
  */

  LUser: [
    {
      'name.first': 'Juan', 
      'name.last': 'Dela Cruz', 
      'email': 'jdelacruz@gmail.com', 
      'password': 'password', 
      '__ref': 'Juan'
    },
     {
      'name.first': 'John', 
      'name.last': 'Smith', 
      'email': 'jsmith@gmail.com', 
      'password': 'password', 
      '__ref': 'John'
    },
     {
      'name.first': 'Jane', 
      'name.last': 'Doe', 
      'email': 'jdoe@gmail.com', 
      'password': 'password', 
      '__ref': 'Jane'
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
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem ligula, varius non vulputate at, sagittis at neque. ',
        'extended': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia nibh felis, in placerat felis hendrerit quis. Aenean sit amet risus consectetur nulla pellentesque lacinia et quis sem. Etiam non ullamcorper quam, cursus posuere est. Curabitur lectus nulla, pellentesque ultrices rutrum sed, congue porta sem. Nullam vitae posuere diam. Sed velit metus, tristique et ipsum eget, gravida eleifend dui.  ',
      },
      'isp': 'corn-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,
      'tags': ['corn', 'agriculture'],
      'createdAt': Date.now,
      'updatedAt': Date.now,
      'reactions': {
        'likes': ['Juan', 'John', 'Jane'],
        'happy': ['Juan', 'John'],
        'sad': ['Juan'],
      },
      '__ref': 'stagescorn-lo',

    },
    { 
      'title': 'Soil Fertilization',
      'state': 'published',
      'publishedAt': Date.now,
      'author': 'admin',
      'content': {
        'brief': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem ligula, varius non vulputate at, sagittis at neque.  ',
        'extended': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia nibh felis, in placerat felis hendrerit quis. Aenean sit amet risus consectetur nulla pellentesque lacinia et quis sem. Etiam non ullamcorper quam, cursus posuere est. Curabitur lectus nulla, pellentesque ultrices rutrum sed, congue porta sem. Nullam vitae posuere diam. Sed velit metus, tristique et ipsum eget, gravida eleifend dui.  ',
      },
      'isp': 'corn-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'tags': ['corn', 'agriculture'],
      'createdAt': Date.now,
      'updatedAt': Date.now,
      'reactions': {
        'likes': ['Juan', 'John', 'Jane'],
        'happy': ['Juan', 'John'],
        'sad': ['Juan'],
      },
      '__ref': 'soilfertilization-lo',
    },
    { 
      'title': 'Land Preparation',
      'state': 'published',
      'publishedAt': Date.now,
      'author': 'admin',
      'content': {
        'brief': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem ligula, varius non vulputate at, sagittis at neque.  ',
        'extended': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia nibh felis, in placerat felis hendrerit quis. Aenean sit amet risus consectetur nulla pellentesque lacinia et quis sem. Etiam non ullamcorper quam, cursus posuere est. Curabitur lectus nulla, pellentesque ultrices rutrum sed, congue porta sem. Nullam vitae posuere diam. Sed velit metus, tristique et ipsum eget, gravida eleifend dui.  ',
      },
      'isp': 'corn-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'tags': ['corn', 'agriculture'],
      'createdAt': Date.now,
      'updatedAt': Date.now,
      'reactions': {
        'likes': ['Juan', 'John', 'Jane'],
        'happy': ['Juan', 'John'],
        'sad': ['Juan'],
      },
      '__ref': 'landpreparation-lo',
    },
    { 
      'title': 'Grain Quality',
      'state': 'published',
      'publishedAt': Date.now,
      'author': 'admin',
      'content': {
        'brief': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem ligula, varius non vulputate at, sagittis at neque.  ',
        'extended': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia nibh felis, in placerat felis hendrerit quis. Aenean sit amet risus consectetur nulla pellentesque lacinia et quis sem. Etiam non ullamcorper quam, cursus posuere est. Curabitur lectus nulla, pellentesque ultrices rutrum sed, congue porta sem. Nullam vitae posuere diam. Sed velit metus, tristique et ipsum eget, gravida eleifend dui.  ',
      },
      'isp': 'corn-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'tags': ['corn', 'agriculture'],
      'createdAt': Date.now,
      'updatedAt': Date.now,
      'reactions': {
        'likes': ['Juan', 'John', 'Jane'],
        'happy': ['Juan', 'John'],
        'sad': ['Juan'],
      },
      '__ref': 'grainquality-lo',
    },
    { 
      'title': 'Feeding Program',
      'state': 'published',
      'publishedAt': Date.now,
      'author': 'admin',
      'content': {
        'brief': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem ligula, varius non vulputate at, sagittis at neque.  ',
        'extended': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia nibh felis, in placerat felis hendrerit quis. Aenean sit amet risus consectetur nulla pellentesque lacinia et quis sem. Etiam non ullamcorper quam, cursus posuere est. Curabitur lectus nulla, pellentesque ultrices rutrum sed, congue porta sem. Nullam vitae posuere diam. Sed velit metus, tristique et ipsum eget, gravida eleifend dui.  ',
      },
      'isp': 'corn-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'tags': ['corn', 'agriculture'],
      'createdAt': Date.now,
      'updatedAt': Date.now,
      'reactions': {
        'likes': ['Juan', 'John', 'Jane'],
        'happy': ['Juan', 'John'],
        'sad': ['Juan'],
      },
      '__ref': 'feedingprogram-lo',
    },
    { 
      'title': 'Biotech BtCorn',
      'state': 'published',
      'publishedAt': Date.now,
      'author': 'admin',
      'content': {
        'brief': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem ligula, varius non vulputate at, sagittis at neque.  ',
        'extended': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia nibh felis, in placerat felis hendrerit quis. Aenean sit amet risus consectetur nulla pellentesque lacinia et quis sem. Etiam non ullamcorper quam, cursus posuere est. Curabitur lectus nulla, pellentesque ultrices rutrum sed, congue porta sem. Nullam vitae posuere diam. Sed velit metus, tristique et ipsum eget, gravida eleifend dui.  ',
      },
      'isp': 'corn-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'tags': ['corn', 'agriculture'],
      'createdAt': Date.now,  
      'reactions': {
        'likes': ['Juan', 'John', 'Jane'],
        'happy': ['Juan', 'John'],
        'sad': ['Juan'],
      },
      'updatedAt': Date.now,
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
      'tags': ['abaca', 'agriculture'],
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
      'tags': ['banana', 'agriculture'],
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
      'tags': ['coconut', 'agriculture'],
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
      'tags': ['coffee', 'agriculture'],
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
      'tags': ['mungbean', 'legume', 'agriculture'],
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
      'tags': ['peanut', 'legume', 'agriculture'],
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
      'tags': ['mango', 'agriculture'],
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
      'tags': ['rice', 'agriculture'],
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
      'tags': ['sweet potato','rootcrop', 'agriculture'],
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
      'tags': [ 'white potato', 'rootcrop', 'agriculture'],
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
      'tags': ['sugarcane', 'agriculture'],
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
      'tags': ['pineapple', 'tropical fruit', 'agriculture'],
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
      'tags': ['papaya', 'tropical fruit', 'agriculture'],
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
      'tags': ['citrus', 'tropical fruit', 'agriculture'],
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
      'tags': ['jackfruit', 'tropical fru', 'agriculture'],
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
      'tags': ['durian', 'tropical fruit', 'agriculture'],
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
      'tags': ['vegetable', 'agriculture'],
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
      'tags': ['feed resources', 'agriculture'],
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
      'tags': ['dairy goat', 'agriculture'],
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
      'tags': ['slaughter goat', 'agriculture'],
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
      'tags': ['dairy buffalo', 'agriculture'],
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
      'tags': ['corn', 'agriculture'],
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
      'tags': ['duck', 'agriculture'],
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
      'tags': ['native chicken', 'agriculture'],
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
      'tags': ['aquafeeds', 'aquatic resources'],
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
      'tags': ['milkfish', 'aquatic resources'],
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
      'tags': ['mangrove crab', 'aquatic resources'],
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
      'tags': ['tilapia', 'aquatic resources'],
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
      'tags': ['shrimp', 'aquatic resources'],
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
      'tags': ['mussel', 'aquatic resources'],
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
      'tags': ['blue swimming crab', 'aquatic resources'],
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
      'tags': ['abalone', 'aquatic resources'],
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
      'tags': ['oyster', 'aquatic resources'],
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
      'tags': ['sardines', 'aquatic resources'],
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
      'tags': ['sea cucumber', 'aquatic resources'],
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
      'tags': ['seaweeds', 'aquatic resources'],
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
      'tags': ['tuna', 'aquatic resources'],
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
      'tags': ['bathymetry', 'aquatic resources'],
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
      'tags': ['corals', 'aquatic resources'],
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
      'tags': ['fishing maps', 'aquatic resources'],
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
      'tags': ['algal blooms', 'aquatic resources'],
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
      'tags': ['cacao', 'natural resources'],
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
      'tags': ['bamboo', 'natural resources'],
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
      'tags': ['sago', 'natural resources'],
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
      'tags': ['rubber', 'natural resources'],
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
      'tags': ['industrial tree plantation', 'natural resources'],
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
      'tags': ['biodiversity', 'natural resources'],
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
      'tags': ['climate change', 'natural resources'],
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
      'tags': ['watershed', 'natural resources'],
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
      'tags': ['mangrove', 'natural resources'],
    },
  ],
  

  Chapter: [
    {
      'title': 'Corn Chapter',
      'state': 'published',
      'author': 'admin',
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
      'reactions': {
        'likes': ['Juan', 'John', 'Jane'],
        'happy': ['Juan', 'John'],
        'sad': ['Juan'],
      },
      '__ref': 'corn-chapter',
    },
    {
      'title': 'Legume Chapter',
      'state': 'published',
      'author': 'admin',
      'content': {
        'brief': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem ligula, varius non vulputate at, sagittis at neque.  ',
        'extended': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia nibh felis, in placerat felis hendrerit quis. Aenean sit amet risus consectetur nulla pellentesque lacinia et quis sem. Etiam non ullamcorper quam, cursus posuere est. Curabitur lectus nulla, pellentesque ultrices rutrum sed, congue porta sem. Nullam vitae posuere diam. Sed velit metus, tristique et ipsum eget, gravida eleifend dui.  ',
      },
      'publishedAt': Date.now,
      'outline': [
        'mungbean-lo',
        'peanut-lo'
      ],
      'reactions': {
        'likes': ['Juan', 'John', 'Jane'],
        'happy': ['Juan', 'John'],
        'sad': ['Juan'],
      },
      '__ref': 'legume-chapter',
    },
    {
      'title': 'Rootcrop Chapter',
      'state': 'published',
      'author': 'admin',
      'content': {
        'brief': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem ligula, varius non vulputate at, sagittis at neque.  ',
        'extended': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia nibh felis, in placerat felis hendrerit quis. Aenean sit amet risus consectetur nulla pellentesque lacinia et quis sem. Etiam non ullamcorper quam, cursus posuere est. Curabitur lectus nulla, pellentesque ultrices rutrum sed, congue porta sem. Nullam vitae posuere diam. Sed velit metus, tristique et ipsum eget, gravida eleifend dui.  ',
      },
      'publishedAt': Date.now,
      'outline': [
        'sweetpotato-lo',
        'whitepotato-lo'
      ],
      'reactions': {
        'likes': ['Juan', 'John', 'Jane'],
        'happy': ['Juan', 'John'],
        'sad': ['Juan'],
      },
      '__ref': 'rootcrop-chapter',
    },
    {
      'title': 'Tropical Fruit Chapter',
      'state': 'published',
      'author': 'admin',
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
      'reactions': {
        'likes': ['Juan', 'John', 'Jane'],
        'happy': ['Juan', 'John'],
        'sad': ['Juan'],
      },
      '__ref': 'tropicalfruit-chapter',
    },
    {
      'title': 'Feed Resources Chapter',
      'state': 'published',
      'author': 'admin',
      'content': {
        'brief': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem ligula, varius non vulputate at, sagittis at neque.  ',
        'extended': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia nibh felis, in placerat felis hendrerit quis. Aenean sit amet risus consectetur nulla pellentesque lacinia et quis sem. Etiam non ullamcorper quam, cursus posuere est. Curabitur lectus nulla, pellentesque ultrices rutrum sed, congue porta sem. Nullam vitae posuere diam. Sed velit metus, tristique et ipsum eget, gravida eleifend dui.  ',
      },
      'publishedAt': Date.now,
      'outline': [
        'aquafeeds-lo'
      ],
      'reactions': {
        'likes': ['Juan', 'John', 'Jane'],
        'happy': ['Juan', 'John'],
        'sad': ['Juan'],
      },
      '__ref': 'feedres-chapter',
    },

  ],

  Course: [
    {
      'title': 'Agriculture Course',
      'state': 'published',
      'author': 'admin',
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
      'reactions': {
        'likes': ['Juan', 'John', 'Jane'],
        'happy': ['Juan', 'John'],
        'sad': ['Juan'],
      },
    },
    {
      'title': 'Aquatic Resources Course',
      'state': 'published',
      'author': 'admin',
      'content': {
        'brief': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem ligula, varius non vulputate at, sagittis at neque.  ',
        'extended': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia nibh felis, in placerat felis hendrerit quis. Aenean sit amet risus consectetur nulla pellentesque lacinia et quis sem. Etiam non ullamcorper quam, cursus posuere est. Curabitur lectus nulla, pellentesque ultrices rutrum sed, congue porta sem. Nullam vitae posuere diam. Sed velit metus, tristique et ipsum eget, gravida eleifend dui.  ',
      },
      'publishedAt': Date.now,
      'outline': [
        'feedres-chapter',
      ],
      'reactions': {
        'likes': ['Juan', 'John', 'Jane'],
        'happy': ['Juan', 'John'],
        'sad': ['Juan'],
      },
    }
  ],

  
};
