// q.1
let num = 1;
num = 2;
console.log(num)


// q.2
let myFunction = (a,b) => {
    if(a===b){
        return true
    }else{return false}
}


// q.3
const colors = ['red', 'green', 'blue', 'yellow']
colors.push('orange')
colors.splice(colors.indexOf('green'),1)


// q.4
class shape {
    constructor(color){
        this.color = color
    }
    getcolor() {
        return this.color
    }
}

class rectangle extends shape{
    constructor(color,width,height){
        super(color)
        this.width = width
        this.height = height
    }
    calculateArea(){
        return this.width * this.height
    }
}


// q.5
const evaluate = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched successfully!');
    }, 2000); // Delay of 2 seconds
});