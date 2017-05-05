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