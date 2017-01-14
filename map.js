function Tile(type){
    this.type = type,
    this.isWalkable = function(type){
        if(type === "grass" || "sand"){
            return true;
        } else {
            return false;
        }
    };
}

function Map(width, height){
    this.width = width,
    this.height = height,
    
    //TILES CONSTRUCTOR ***********************
    this.tilesMade = function(width, height){
        var rows = [];
        for (var i = 0; i < width; i++) {
            var columns = [];
            for (var j = 0; j < height; j++){
                var rand = (Math.floor(Math.random() * 3) + 1);
                var tmp = "grass";
                if( rand === 1 ){
                    tmp = "water";
                } else if ( rand === 2 ){
                    tmp = "sand";
                } 
                columns.push(new Tile(tmp));
            }//first loop
            rows.push(columns);
        }//second loop
        return rows;
    },//END OF TILESMADE
    this.tiles = this.tilesMade(width, height),
    
    //GET WALKABLE OUTPUT
    this.getWalkableOutput = function(){
        this.tiles.forEach(function(arrayOfTiles){
            console.log(
                arrayOfTiles.map(function(tile){
                    return tile.type === "water" ? "X" : "O";
                }).join(" ")
            );
        });
    };//END OF WALKABLE OUTPUT

    //GET ASCII OUTPUT
    this.getAsciiOutput = function(){
        this.tiles.forEach(function(arrayOfTiles){
            console.log(
                arrayOfTiles.map(function(tile){
                    if(tile.type === "sand"){
                        return ":"
                    } else if (tile.type === "water"){
                        return "~"
                    } else {
                        return "*"
                    }
                }).join(" ")
            );
        });
    };//END OF ASCII OUTPUT
    
}//END OF MAP FUNCTION

var myMap = new Map(5,5);
console.log(myMap.getAsciiOutput());
