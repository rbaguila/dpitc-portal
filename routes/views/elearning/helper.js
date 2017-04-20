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
                count = count + (i/2);
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
                count = count + (i/2);
            }
          }
        }
    }
    learningObject[counts[j]] = learningObject[counts[j]] - count;
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