const normalPerson = {
    fistPerson : 'rahim',
    lastPerson : 'uddin',
    salary : 15000,
    getFullName : function(){
        console.log(this.fistPerson, this.lastPerson);
    },
    getRemaining : function (amount, tips, tax) {
        
        this.salary = this.salary - amount - tips - tax;
        console.log(this);   // ekhn ei take dekhao 
        // return this.salary
             
    }
   
}
const heroPerson = {
    fistPerson : 'hero',
    lastPerson : 'balam',
    salary : 25000,
}

const friendlyPerson = {
    fistPerson : 'hero',
    lastPerson : 'golam',
    salary : 25000,
}
//bind
// normalPerson.getRemaining();

// const heroBillCharge =  normalPerson.getRemaining.bind(heroPerson);
// heroBillCharge(1000);
// heroBillCharge(1000);
// console.log(heroPerson.salary);
// console.log(normalPerson.salary);


// call 

// normalPerson.getRemaining.call(heroPerson, 900, 100, 10);
// console.log(heroPerson.salary);

//apply

normalPerson.getRemaining.apply(heroPerson,[900, 100, 10]);
