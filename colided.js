function hasCollided(lbullet,lwall){
  var  bulletRightEdge =lbullet.x+lbullet.width;
  var  wallLeftEdge = lwall.x;
    if(bulletRightEdge>wallLeftEdge){
        return true
    }
    return false;
}