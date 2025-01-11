function University(name) {
    this.name = name;
  }
    
  University.prototype.prints = function() {
    console.log(`University name is ${this.name}`);
  };
   
  const clg = new University("CVR");
   
  clg.prints();
   
  console.log(clg.__proto__ === University.prototype);