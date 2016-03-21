var Bee = function() {


  this.age = 5;
  this.color = "yellow";
  this.job = "keep on growing"
  // console.log(bee)
};
Bee.prototype = new Grub();
Bee.prototype.constructor = Bee
