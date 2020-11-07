function cat(){
    console.log('eat')
    console.log('move')
    //eat(mouse)
}

cat.prototype.eat= function cat(mouse){
    this.stomache.push(mouse);

}
module.exports=cat