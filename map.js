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
    this.height = height,
    this.tilesMade = function(width, height){
        var rows = [];
        for (var i = 0; i < width; i++) {
            var columns = [];
            for (var j = 0; j < height; j++){
                var rand = (Math.floor(Math.random() * 3) + 1)
                var tmp = "grass";
                if( rand === 1 ){
                    tmp = "water"
                } else if ( rand === 2 ){
                    tmp = "sand"
                } 
                columns.push(new Tile(tmp));
            }//first loop
            rows.push(columns)
        }//second loop
        return rows;
    },
    this.tiles = this.tilesMade(width, height),
    this.getWalkableOutput = "test"
}

var myMap = new Map(3,3);
console.log(myMap.tiles[0][0]);