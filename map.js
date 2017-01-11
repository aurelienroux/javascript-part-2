function Tile(type){
    this.type = type,
    this.isWalkable = function(type){
        if(type === "grass" || "sand"){
            return true;
        } else {
            return false;
        }
    }
}

function Map(width, height){
    this.width = width,
    this.height = height
    this.tiles = new Tile(function(){
        for (var i = 0; i < width; i++) {
            for(var j = 0; j < height; i++){
                            
            }
        }
    }    
    )
}