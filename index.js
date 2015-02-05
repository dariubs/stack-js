
var Stackjs = function(){
    //this._type = type; //type of implementation
    this._storage = []; //array
    this._pointer = -1;
}

Stackjs.prototype.push = function(data){
    this._storage.push(data);
    this._pointer++;
}

Stackjs.prototype.pop = function(){
    if(this._pointer >= 0){
        this._storage.pop();
        this._pointer--;
    }else {
        this._pointer = -1;
    }
}
