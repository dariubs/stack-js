
var Stackjs = function(){
    //this._type = type; //type of implementation
    this._storage = []; //array
    this._pointer = -1;
    this._temp = 0;
};

Stackjs.prototype.push = function(data){
    this._storage.push(data);
    this._pointer++;
};

Stackjs.prototype.pop = function(){
    if(this._pointer >= 0){
        this._storage.pop();
        this._pointer--;
    }else {
        this._pointer = -1;
    }
};

Stackjs.prototype.peek = function(){
    if(this._pointer >= 0){
        this._temp = this._storage[this._pointer];
        this._storage.pop();
        this._pointer--;
        
        return this._temp;
    }else {
        this._pointer = -1;
    }
};

Stackjs.prototype.clear = function(){
    this._storage = [];
    this._pointer = -1;
};

Stackjs.prototype.length = function() {
    if(this._pointer >= 0){
        return (this._pointer + 1);
    } else {
        return 0;
    }
};
