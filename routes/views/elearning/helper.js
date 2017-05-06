var _ = require('lodash');

var classifications = ["specificCommodity", "isp", "sector", "industry"];
var counts = ["specCommCount", "ispCount", "sectorCount", "industryCount"];

exports.getCountLOTaken = function (learningObject, learningObjectsTaken){
  for(var j=0;j<classifications.length;j++){
    var count = 0; 
    if(learningObject[classifications[j]]!=null){
      var learningObjectClassId = learningObject[classifications[j]] + "";
        for(var i=0;i<learningObjectsTaken.length;i++){
          if(learningObjectsTaken[i][classifications[j]]!=null){
            var eachTakenClassId = learningObjectsTaken[i][classifications[j]]._id + "";
            if(learningObjectClassId==eachTakenClassId){
                count++;
                count = count;
            }
          }
        }
    }
    learningObject[counts[j]] = count;
  }
  return learningObject;
}

exports.getCountLiked = function (learningObject, likedLO){
  for(var j=0;j<classifications.length;j++){
    var count = 0; 
    if(learningObject[classifications[j]]!=null){
      var learningObjectClassId = learningObject[classifications[j]] + "";
        for(var i=0;i<likedLO.length;i++){
          if(likedLO[i][classifications[j]]!=null){
            var eachTakenClassId = likedLO[i][classifications[j]]._id + "";
            if(learningObjectClassId==eachTakenClassId){
                count++;
                count = count;
            }
          }
        }
    }
    learningObject[counts[j]] = learningObject[counts[j]] + count;
  }
  return learningObject;
}

exports.getCountHappy = function (learningObject, happyLO){
  for(var j=0;j<classifications.length;j++){
    var count = 0; 
    if(learningObject[classifications[j]]!=null){
      var learningObjectClassId = learningObject[classifications[j]] + "";
        for(var i=0;i<happyLO.length;i++){
          if(happyLO[i][classifications[j]]!=null){
            var eachTakenClassId = happyLO[i][classifications[j]]._id + "";
            if(learningObjectClassId==eachTakenClassId){
                count++;
                count = count;
            }
          }
        }
    }
    learningObject[counts[j]] = learningObject[counts[j]] + count;
  }
  return learningObject;
}

exports.getCountSad = function (learningObject, sadLO){
  for(var j=0;j<classifications.length;j++){
    var count = 0; 
    if(learningObject[classifications[j]]!=null){
      var learningObjectClassId = learningObject[classifications[j]] + "";
        for(var i=0;i<sadLO.length;i++){
          if(sadLO[i][classifications[j]]!=null){
            var eachTakenClassId = sadLO[i][classifications[j]]._id + "";
            if(learningObjectClassId==eachTakenClassId){
                count++;
                count = count;
            }
          }
        }
    }
    learningObject[counts[j]] = learningObject[counts[j]] - (3*count);
  }
  return learningObject;
}

//function for checking if the specific course was already taken by the logged in user
exports.notYetTaken = function (learningObject, learningObjectsTaken){
  var flag = 0;
  var learningObjectId = learningObject._id + "";
  for(var i=0;i<learningObjectsTaken.length;i++){
      var learningObjectsTakenId = learningObjectsTaken[i]._id + "";
      if(learningObjectId==learningObjectsTakenId){
          flag = 1;
          return 0;
      }
  }
  if(flag==0) return 1;
}
//TO DO, ADD HERE THE ALGO FOR RATING
exports.getAverageRating = function (learningObject, ratedLO){

}

// Pagination function for an Array of Objects
// Similar to Keystone JS pagination query
exports.paginate = function (array, page, perPage) {

  /*
    keystone's paginate()
    total: all matching results (not just on this page)
    results: array of results for this page
    currentPage: the index of the current page
    totalPages: the total number of pages
    pages: array of pages to display
    previous: index of the previous page, false if at the first page
    next: index of the next page, false if at the last page
    first: the index of the first result included
    last: index of the last result included

  */

  var pagination = {
    total: array.length,
    results: paginateArray(array, perPage, page),
    currentPage: page,
    pages: _.range(1, Math.ceil(array.length / perPage)+1),
    
  };

  pagination.first = pagination.pages[0];
  pagination.last = Math.ceil(array.length / perPage);

  pagination.previous = page == pagination.first ? false : page - 1;
  pagination.next = page == pagination.last ? false : page + 1;

  return pagination;
}

var paginateArray = function (array, page_size, page_number) {
  --page_number; // because pages logically start with 1, but technically with 0
  return array.slice(page_number * page_size, (page_number + 1) * page_size);
}

exports.cities = [
  { value: 'Caloocan', label: 'Caloocan'},
  { value: 'Las Piñas', label: 'Las Piñas'},
  { value: 'Makati', label: 'Makati'},
  { value: 'Malabon', label: 'Malabon'},
  { value: 'Mandaluyong', label: 'Mandaluyong'},
  { value: 'Manila', label: 'Manila'},
  { value: 'Marikina', label: 'Marikina'},
  { value: 'Muntinlupa', label: 'Muntinlupa'},
  { value: 'Navotas', label: 'Navotas'},
  { value: 'Parañaque', label: 'Parañaque'},
  { value: 'Pasay', label: 'Pasay'},
  { value: 'Pasig', label: 'Pasig'},
  { value: 'Quezon', label: 'Quezon'},
  { value: 'San Juan', label: 'San Juan'},
  { value: 'Taguig', label: 'Taguig'},
  { value: 'Valenzuela', label: 'Valenzuela'},
  { value: 'Baguio', label: 'Baguio'},
  { value: 'Tabuk', label: 'Tabuk'},
  { value: 'Batac', label: 'Batac'},
  { value: 'Laoag', label: 'Laoag'},
  { value: 'Candon', label: 'Candon'},
  { value: 'Vigan', label: 'Vigan'},
  { value: 'San Fernando', label: 'San Fernando'},
  { value: 'Alaminos', label: 'Alaminos'},
  { value: 'Dagupan', label: 'Dagupan'},
  { value: 'San Carlos', label: 'San Carlos'},
  { value: 'Urdaneta', label: 'Urdaneta'},
  { value: 'Tuguegarao', label: 'Tuguegarao'},
  { value: 'Cauayan', label: 'Cauayan'},
  { value: 'Ilagan', label: 'Ilagan'},
  { value: 'Santiago', label: 'Santiago'},
  { value: 'Balanga', label: 'Balanga'},
  { value: 'Malolos', label: 'Malolos'},
  { value: 'Meycauayan', label: 'Meycauayan'},
  { value: 'San Jose del Monte', label: 'San Jose del Monte'},
  { value: 'Cabanatuan', label: 'Cabanatuan'},
  { value: 'Gapan', label: 'Gapan'},
  { value: 'Muñoz', label: 'Muñoz'},
  { value: 'Palayan', label: 'Palayan'},
  { value: 'San Jose', label: 'San Jose'},
  { value: 'Angeles', label: 'Angeles'},
  { value: 'Mabalacat', label: 'Mabalacat'},
  { value: 'San Fernando', label: 'San Fernando'},
  { value: 'Tarlac', label: 'Tarlac'},
  { value: 'Olongapo', label: 'Olongapo'},
  { value: 'Batangas', label: 'Batangas'},
  { value: 'Lipa', label: 'Lipa'},
  { value: 'Tanauan', label: 'Tanauan'},
  { value: 'Bacoor', label: 'Bacoor'},
  { value: 'Cavite', label: 'Cavite'},
  { value: 'Dasmariñas', label: 'Dasmariñas'},
  { value: 'Imus', label: 'Imus'},
  { value: 'Tagaytay', label: 'Tagaytay'},
  { value: 'Trece Martires', label: 'Trece Martires'},
  { value: 'Biñan', label: 'Biñan'},
  { value: 'Cabuyao', label: 'Cabuyao'},
  { value: 'Calamba', label: 'Calamba'},
  { value: 'San Pablo', label: 'San Pablo'},
  { value: 'San Pedro', label: 'San Pedro'},
  { value: 'Santa Rosa', label: 'Santa Rosa'},
  { value: 'Lucena', label: 'Lucena'},
  { value: 'Tayabas', label: 'Tayabas'},
  { value: 'Antipolo', label: 'Antipolo'},
  { value: 'Calapan', label: 'Calapan'},
  { value: 'Puerto Princesa', label: 'Puerto Princesa'},
  { value: 'Legazpi', label: 'Legazpi'},
  { value: 'Ligao', label: 'Ligao'},
  { value: 'Tabaco', label: 'Tabaco'},
  { value: 'Iriga', label: 'Iriga'},
  { value: 'Naga', label: 'Naga'},
  { value: 'Masbate', label: 'Masbate'},
  { value: 'Sorsogon', label: 'Sorsogon'},
  { value: 'Roxas', label: 'Roxas'},
  { value: 'Iloilo', label: 'Iloilo'},
  { value: 'Passi', label: 'Passi'},
  { value: 'Bacolod', label: 'Bacolod'},
  { value: 'Bago', label: 'Bago'},
  { value: 'Cadiz', label: 'Cadiz'},
  { value: 'Escalante', label: 'Escalante'},
  { value: 'Himamaylan', label: 'Himamaylan'},
  { value: 'Kabankalan', label: 'Kabankalan'},
  { value: 'La Carlota', label: 'La Carlota'},
  { value: 'Sagay', label: 'Sagay'},
  { value: 'San Carlos', label: 'San Carlos'},
  { value: 'Silay', label: 'Silay'},
  { value: 'Sipalay', label: 'Sipalay'},
  { value: 'Talisay', label: 'Talisay'},
  { value: 'Victorias', label: 'Victorias'},
  { value: 'Tagbilaran', label: 'Tagbilaran'},
  { value: 'Bogo', label: 'Bogo'},
  { value: 'Carcar', label: 'Carcar'},
  { value: 'Cebu', label: 'Cebu'},
  { value: 'Danao', label: 'Danao'},
  { value: 'Lapu-Lapu', label: 'Lapu-Lapu'},
  { value: 'Mandaue', label: 'Mandaue'},
  { value: 'Naga', label: 'Naga'},
  { value: 'Talisay', label: 'Talisay'},
  { value: 'Toledo', label: 'Toledo'},
  { value: 'Bais', label: 'Bais'},
  { value: 'Bayawan', label: 'Bayawan'},
  { value: 'Canlaon', label: 'Canlaon'},
  { value: 'Dumaguete', label: 'Dumaguete'},
  { value: 'Guihulngan', label: 'Guihulngan'},
  { value: 'Tanjay', label: 'Tanjay'},
  { value: 'Borongan', label: 'Borongan'},
  { value: 'Baybay', label: 'Baybay'},
  { value: 'Ormoc', label: 'Ormoc'},
  { value: 'Tacloban', label: 'Tacloban'},
  { value: 'Calbayog', label: 'Calbayog'},
  { value: 'Catbalogan', label: 'Catbalogan'},
  { value: 'Maasin', label: 'Maasin'},
  { value: 'Dapitan', label: 'Dapitan'},
  { value: 'Dipolog', label: 'Dipolog'},
  { value: 'Pagadian', label: 'Pagadian'},
  { value: 'Zamboanga', label: 'Zamboanga'},
  { value: 'Malaybalay', label: 'Malaybalay'},
  { value: 'Valencia', label: 'Valencia'},
  { value: 'Iligan', label: 'Iligan'},
  { value: 'Oroquieta', label: 'Oroquieta'},
  { value: 'Ozamiz', label: 'Ozamiz'},
  { value: 'Tangub', label: 'Tangub'},
  { value: 'Cagayan de Oro', label: 'Cagayan de Oro'},
  { value: 'El Salvador', label: 'El Salvador'},
  { value: 'Gingoog', label: 'Gingoog'},
  { value: 'Panabo', label: 'Panabo'},
  { value: 'Samal', label: 'Samal'},
  { value: 'Tagum', label: 'Tagum'},
  { value: 'Davao', label: 'Davao'},
  { value: 'Digos', label: 'Digos'},
  { value: 'Mati', label: 'Mati'},
  { value: 'Kidapawan', label: 'Kidapawan'},
  { value: 'General Santos', label: 'General Santos'},
  { value: 'Koronadal', label: 'Koronadal'},
  { value: 'Tacurong', label: 'Tacurong'},
  { value: 'Butuan', label: 'Butuan'},
  { value: 'Cabadbaran', label: 'Cabadbaran'},
  { value: 'Bayugan', label: 'Bayugan'},
  { value: 'Surigao', label: 'Surigao'},
  { value: 'Bislig', label: 'Bislig'},
  { value: 'Tandag', label: 'Tandag'},
  { value: 'Isabela', label: 'Isabela'},
  { value: 'Lamitan', label: 'Lamitan'},
  { value: 'Marawi', label: 'Marawi'},
  { value: 'Cotabato', label: 'Cotabato'},
  
];

exports.regions = [
  { value: 'National Capital Region', label: 'National Capital Region'},
  { value: 'Cordillera Administrative Region', label: 'Cordillera Administrative Region (CAR)'},
  { value: 'Ilocos', label: 'Ilocos (Region I)'},
  { value: 'Cagayan Valley', label: 'Cagayan Valley (Region II)'},
  { value: 'Central Luzon', label: 'Central Luzon (Region III)'},
  { value: 'CALABARZON', label: 'CALABARZON (Region IV-A)'},
  { value: 'MIMAROPA', label: 'MIMAROPA (Region IV-B)'},
  { value: 'Bicol', label: 'Bicol (Region V)'},
  { value: 'Western Visayas', label: 'Western Visayas'},
  { value: 'Central Visayas', label: 'Central Visayas (Region VII)'},
  { value: 'Eastern Visayas', label: 'Eastern Visayas  (Region VIII)'},
  { value: 'Zamboanga Peninsula', label: 'Zamboanga Peninsula (Region IX)'},
  { value: 'Northern Mindanao', label: 'Northern Mindanao (Region X)'},
  { value: 'Davao', label: 'Davao (Region XI)'},
  { value: 'SOCCSKSARGEN', label: 'SOCCSKSARGEN (Region XII)'},
  { value: 'Dinagat Islands', label: 'Dinagat Islands (Region XIII)'},
  { value: 'Autonomous Region in Muslim Mindanao', label: 'Autonomous Region in Muslim Mindanao (ARMM)'},
];