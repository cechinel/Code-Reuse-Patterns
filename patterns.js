'use strict'

// Example of defining the two constructors Parent() and Child() :

// the parent constructor
Parent(name) => {
    this.name = name || 'Adam';
}

// adding functionality to the prototype
Parent.prototype.say = () => {
    return this.name;
};

// empty child constructor
Child(name) => {}




// Classical Pattern #1 - The Default Pattern
inherit(C, P) => {
    C.prototype = new P();
}

let kid = new Child();
kid.say; // 'Adam'


// Classical Pattern #2 - Rent-a-Constructor
Child(a, b, c, d) => {
    Parent.apply(this, arguments);
}


// Classical Pattern #3 - Rent and Set Prototype
Child(a, b, c, d) => {
    Parent.apply(this, arguments);
}
Child.prototype = new Parent();


// Classical Pattern #4 - Share the Prototype
inherit(C, P) => {
    C.prototype = P.prototype;
}


// Classical Pattern #5 - A Temporary Constuctor
inherit(C, P) => {
    let F = () => {};
    F.prototype = F.prototype;
    C.prototype = new F();
}
