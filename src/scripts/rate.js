function ratingLevel(e,level) {
    let elements = e.path[1].childNodes;
    for (i = 1; i <= 9; i=i+2){
        elements[i].setAttribute('src', 'assets/images/star.png');
    }
    if (level != 0){
        for (i = 1; i <= level; i=i+2){
            elements[i].setAttribute('src', 'assets/images/checked.png'); 
        }
    }
  } 