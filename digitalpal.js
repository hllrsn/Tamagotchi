var DigitalPal = function(property) {
  this.hungry = false;
  this.sleepy = false;
  this.bored = true;
  this.age = 0;


  this.feed = function() {
    if (this.hungry === true) {
      console.log("'That was yummy!'");
      this.hungry = false;
      this.sleepy = true;
    } else {
      console.log("'No thanks! I'm full.'");
    }
  };


  this.increaseAge = function() {
    this.age++;
    console.log("'Happy Birthday to me! I am " + this.age + " year(s) old!'");
  };


  this.sleep = function() {
    if (this.sleepy === true) {
      console.log("'ZzzZzzz...'");
      this.sleepy = false;
      this.bored = true;
      this.increaseAge();
    } else {
      console.log("'No way! I'm not tired.'");
    }
  };


  this.play = function() {
    if (this.bored === true) {
      console.log("'Yay! Let's play!'");
      this.bored = false;
      this.hungry = true;
    } else {
      console.log("'Not right now. Later?'");
    }
  };
};


var dog = new DigitalPal()

dog.outside = false;


dog.bark = function() {
  console.log("'Woof! Woof!'")
};


dog.goOutside = function() {
  if (dog.outside === false) {
    console.log("'Yay! I love the outdoors!'");
    dog.outside = true;
  } else {
    console.log("'We're already outside though...'");
  }
};


dog.goInside = function() {
  if (dog.outside === true) {
    console.log("'Do we have to? Fine...'");
    dog.outside = true;
  } else {
    console.log("'I'm already inside...'");
  }
};


dog.fetch = function() {
  console.log('You throw the stick. Dog runs and fetches it for you. "That was so fun!" he woofs.');
}


var cat = new DigitalPal();
 
cat.houseCondition = 100;


cat.meow = function() {
  console.log("'Meow! Meow!'");
};


cat.destroyFurniture = function() {
  if (cat.houseCondition > 0) {
    cat.houseCondition -= 10;
    console.log("'MUAHAHAHAHA! TAKE THAT, FURNITURE!'");
    bored = false;
    sleepy = true;
  } else {
    console.log("'I have punished the furniture sufficiently.'");
  };
};


cat.buyNewFurniture = function() {
  cat.houseCondition += 50;
  console.log("'Are you sure about that?'");
};


console.log(" ");

console.log("Cat: ")
console.log("~~~~~~~~");

cat.increaseAge();
console.log(" ");
cat.meow();
console.log(" ");
console.log("Feed the cat: ") + cat.feed();
console.log(" ");
console.log("Buy new furniture: ") + cat.buyNewFurniture();
cat.destroyFurniture();
console.log("Your house condition: " + cat.houseCondition);

console.log(" ");
console.log(" ");
console.log("Dog: ");
console.log("~~~~~~~~");

console.log("Go outside: ") + dog.goOutside();
dog.bark();
console.log(" ");
console.log("Playtime: ") + dog.play();
dog.fetch();
console.log(" ");
console.log("Go inside: ") + dog.goInside();
console.log(" ");
console.log("Feed the dog: ") + dog.feed();
console.log(" ");
console.log("Take a nap: ") + dog.sleep();

console.log(" ");
