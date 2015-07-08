var findMinMax = function (val){
    var max = val[0];
    var min = val[0];
    

    for(var i = 1; i < val.length; i++) {
        if (min > val[i]) {
            min = val[i];
            }
        if (max < val[i]){
            max = val[i];
              }
        }
      if ( min == max){
        return [min];
      }
      else{
        return [min,max];
      }
};
