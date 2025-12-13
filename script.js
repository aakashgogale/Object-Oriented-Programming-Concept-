// start with Advance JavaScript :-

// 1. OOPS (Object oriented programming concept)
    // - code -> objects classes and function 

// oops ka use hum is liye krte he, jab hum bade level ke projects bnate he to waha code ko hum objects function me divid kr ke likhte he , kahi sari alg alg file bnate he , jab bhi kisi paticular point pr problem aati he to hum sara lakho line ka code open nahi krte hum bs jaha problem aa rhi he uski file open kr ke us problem ko fix kr dete he that is oops     
    //modular , scalable , manageable , promise , easy to fix , re-use ,
 
//Introduction to OOPS in JavaScript.
    //
    
//Understanding (classes, objects) in javascript :-

    // classes banate he taki hume har bar ek naya object mil jYEGA

class BiscuitMaker{
    constructor(){
        this.name="parleG",
        this.price= 10;
    }
}

let biscuit = new BiscuitMaker();

class AlooChat{
    constructor(){
        this.price = 60;
        this.best = "yes"
        this.masala = ["pudina", "mirch", "namak", "dhaniya"]
    }
}

let chat = new AlooChat();

class Kitaab{
    constructor(name,price,author,color){
        this.name = name;
        this.price = price;
        this.author = author;
        this.color= color;
    }

    pannaPalto(){
        this.chapter = 20;
        this.bestChapeter = "Money"
    }
}

let Book = new Kitaab("moral",120,"aakash","white");
let Book2 = new Kitaab("computer", 12009, "harsh","red");
let Book3 = new Kitaab("scienc", 200,"janver", "green");
let Book4 = new Kitaab("socialScience", 9000, "aakkuu", "grey" );

// ProtoType :- 
    class Human{
        constructor(){
            this.name ="abcd";
            this.age = 28
        }
    }

    Human.prototype.saansLO = function(){
        console.log("hey");
    };

    Human.prototype.khanaKhao = function(){
        console.log("lolo");  
    };
    

// NOTES => 
    //1. oop = (opject-oriented programming) help you write cleaner, reusable, and structured coding using "Objects", "classes", "constructors", "prototype", and "inheritance".

// 2. Introduction to oops in javaScript
    // javaSript supports oop using:
        // Objects
        // Classes
        // Constructors
        // Prototypes
        // Inheritance

// Simple object example 
    const user = {
        name: 'akash',
        age : 21,
        greet(){
            console.log("hello");    
        }
    }
    user.greet();
    
// 2. Understanding Classes and objects
    // class -> blueprint
    // object -> real instance created from the bluprint
    
// Basic example
    class Car{
        constructor(brand, price){
            this.brand = brand;
            this.price = price;
        }

        drive(){
            console.log(`${this.brand} is driving...`);
            
        }
    } 
    let newCar = new Car("TATA", 2500000);  
     newCar.drive();

// 3. Constructor & Prototypes
    //Constructor :- A constructor is a special method inside a class that initializes object properties.
    
    class Student{
        constructor(name,age){
            this.name = name;
            this.age = age;
        }
    }
    let s1 = new Student("aakash", 29);

    //Prototype in javascript
    // :- every function in javascript has a Prototype which is used to share methods across all objects fro, that function.

    //example without class
        function Person(name){
            this.name = name;
        }

    // adding methods using prototypes
    Person.prototype.sayHii = function(){
        console.log(`hii, I am ${this.name}`);
    } ;
    
    const p1 = new Person("Anubhav");
    p1.sayHii();

// => class ek bluprint hota he jo bar bar ek object bna kr deta he   
// => constructor humara automatic chalne wala function he 
// => NEW -> jab aap likhte ho tab ek or new object banta he 
// => this -> this ek special keyword hota he , kyu this ki value badal jati he
// this ->
 // global -> window
    // console.log(this); = window

 // function -> window
    // function hehe(){
    //     console.log(this); => window  
    // }
    // hehe();

 // es5 function inside object -> object
    let obj = {
        function(){
            console.log(this); 
        }
    }
 // es6 function inside object -> window
 // es5 function inside es5 function inside object -> window
 // es6 function inside es5 function inside object -. object
  
// call -> fnc chalta he and this ki value set krta he 
// aply -> wahi krta he jo call krta he and argument me pahli value this ki and doosri value array hoti he
// bind -> wahi krta he jo call krta he and appko naya fnc deta he
let objj = {
    name : "aakash",
};

function abcd(){
    console.log(this, a, b, c,);
}

// MORE TOPICS (CLASS EXPRESSION, HOISTING , INHERITANCE, GATTING AND SETTER)
//Class Expression :-
let Animal = class{
    constructor(){
        this.name = "bhalu"
        this.color = "black"
    }
}
let kalu =  new Animal();

//Inheritance :- ager koi class he jisme kuch kuch likha he and app mane ho ek nayi class usi ka extension he to aap sare feature purani class se borrow kr skte ho and nayi class me USE kr skte ho

// Gatter and setter
 class Animall{
    constructor(){
        this._age = 23;
    }

    set age(val){
        if(val<0){
            console.error("not");
            return; 
        }
        this._age = val;
        return this._age;
    }
    get age(){
        return this._age;
    }
 }

 let a2 = new Animall();
//  a1.age= 23

// QUESTION SOLVE KRNE CHALOOOOOOOOO

// 1. create a user object that stores name and email and has a login methodd which print "user logged in"


// 2.
 class userr{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    loggedIn(){
        console.log("logging In");
        
    }
}

let user1 = new userr("aakash","aakash@gmail"); 
let user2 = new userr("aayush","aayush@gmail"); 
let user3 = new userr("shruti","shruti@gmail"); 
let user4 = new userr("varun","dhvan@gmail"); 

// 3. 

let product = {
    name: "cap",
    price: 3000,
    discountPrice: ()=>{
        return this.price - 200;
    },  
};
console.log(product.discountPrice());

// 4.

class car {
    constructor(brand, speed){
        this.bran= brand;
        this.speed = speed;
    }
    drive(){
        return this.brand + "-" + this.speed;
    }
}

let car1 = new car("honda", 180);

//

class student {
    constructor(name , rollnumber){
        this.name = name;
        this.rollnumber = rollnumber;
    }

    introduce(){
        console.log(this.name +"-" + this.rollnumber);
    }
}

let n1 = new student("harsh", 32);
st1.introduce()

//bina class ke bhi constructor function banta he 
// es6 se pahle constructor function aise bnate the

function User(){
    this.name="aakash";
}
let h1 = new User();

// introduction to Asynchrony in javascript.
// Introduction to "callback" and problems in callbacks

// -> synchronous -> "ek ke baad ek kaam hona" that is synchronous aproch.
// -> asynchronous -> "jo kaam ho skta he pahle use krte jao jise time lagega use bad me krna" 

// callbacks -: ek function hota he jo turnt nahi chalega ya chalega jab tab koi kaam complete hoga.

    setTimeout(()=>{
        console.log("hey");
        
    }, 2000);

    getDataFromInstagram("aakash123", ()=>{
        console.log("loging");
        
    },2000);


    function abcd(fn){
        fn(function(fn3){
            fn3(function(fn5){
                fn5();
            });
        });
    }

    abcd(function(fn2){
        fn2(function(fn4){
            fn4(function(){
                console.log("helo");
                
            })
        });
    });

// function afterDeaky(time, cd){
//     setTimeout(function(){
//         cd();
//     },time);
// };

// afterDeaky(3000, function(){
//     console.log("callBack Excuted");
    
// })

function afterDealy(time, cd){
    setTimeout(function(){
        cd();
    }, time);
};
afterDealy(3000, function(){
    console.log("data excuted"); 
});



function instaSeDataLaoo(useername , cd){
    setTimeout(()=>{
        cd({username:"aakash", uniqnum:1221});
    },3000)
}

function metaPrJaoo(uniqnum, cd){
    setTimeout(function(){
        cb(["img1", "img2"]);
    },4000)
}

instaSeDataLaoo("aakash", function(data){
   metaPrJaoo(data.uniqnum, function(images){
    console.log(images);
   });
})



// Promises 
// async await
// settimeout and setinterval

// Promises :- ek kam jaake karo
// pending state
// ho jayegaa :- resolved 
// nhi hoga // reject

// facebook -: pr jaoo or data leke aao 
// EXAMPLE :-
 const prm = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve();
    }, 3000);
 })

 prm.then(()=>{
    console.log("resolve"); // ager prm resolve hua to ye chalg 
 })

 prm.catch(()=>{
    console.log("reject"); // ager prm nahi chala to rejct ho jayega 
    
 })

 // Fetch se kisi bhi url pr ja skte he
  fetch(`https://randomuser.me/api/`)
  .then(raw => raw.json())
  then((data)=>{
    console.log(data.result[0].name.first); 
  })

  .catch((err)=>{
    console.log(err); 
  })

  //ASYNC AWAIT :-
   




// Introduction to ERROR HANDLING :-

// Common types of errors in JavaScript - ['syntax errors', 'runtime errors', 'logical errors']

// syntax  error :- aapne code me likhte wakt galti kr di
    let a = 12; // right sahi he
    // leht a = 12; // galt, syntax error he "leht"

// runtime error :- code likhte waqt error nahi ati he halte waqt error aata he 
    function abcdsd(){
        let a = 12;
        console.log(a.name); 
    }
    abcdsd();

// logical error :- aap ke code ko kuch krna chahiye tha pr vo kr kuch or rha he 

    function add(a,b){
        return a-b;
    }

    console.log(add(1,2));

// try, catch :-
    try{
        console.log(a.name.age);  
    }catch (arr){
        console.log(arr);
    };
     console.log("huihui");   

// Ubderstanding the error object - ["message", '"name", "staack"]  

    try{
        let a = 12;
        console.log(a.name.age);  
    }catch(err){
        console.log(err.stack);
}

// error throw 

try{
    let a = 12;
    console.log(a.name.age);
} catch(err){
    throw error("something")
}


// Debouncing And Throtting

function debounce(fn, delay){
    let timer;
    return function(){
        clearTimeout(timer);
        timer = setTimeout(fn, delay);
    };
}

document.querySelector("#search").addEventListener(
    "input",
    debounce(function(){
    console.log("chala")
    
}, 500)
);

