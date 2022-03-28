
function zad1(a,b,c) {
    if (c>b && c>a || b>c && b>a || a>c && a>b) {
        if (a*a+b*b===c*c || a*a+c*c===b*b || c*c+b*b===a*a) {
            return('Jest trojka pitagorejska');
        }
        else {
            return('Nie jest trojka pitagorejska');
        }
    }
}

function zad2(a,b,c) {
    while (a<=b) {
        if (a%c!==0);
        else {
            console.log(a);
        }
        a++;
    }
}

function zad3(height) {
    var result="";
    for (let column=1; column<=height; column++){
        for(let row=1; row<=height; row++) {
            var val=column*row;
            if(val>=10) {
                result+=val+ " ";
            }
            else {
                result+=val+" ";
            }
        }
        result+= '\n'
    }
    console.log(result);
}
function zad4(n){
    var a=0;
    var b=1;
    for (i=0; i<n; i++){
        console.log(b);
        b+=a;
        a=b-a;
    }
}
function zad5(n) {
   for (let line="*"; line.length <=n; line+="*"){
       console.log(line);
   }
}
const zad6 = (l) => {
    for (let i = 1;i<l+1;i++) {
        console.log(`${'*'.repeat(l-i+1)}${' '.repeat((i*2)-1)}${'*'.repeat(l-i+1)}`);
    }
    console.log(`${'*'.repeat(l)} ${'*'.repeat(l)}`);
}

const prostokat = (a, b, _) => a*b;
const trapez = (a, b, h) => ((a+b)/2)*h;
const rownoleglobok = (a,h) => a*h;
const trojkat = (a, h, _) => (a*h)/2;

const zad7 = (choice, a, b, c) => {
    switch(choice) {
        case 'pr':
            return prostokat(a, b);
            break;
        case 'tr':
            return trapez(a, b, c);
            break;
        case 'ro':
            return rownoleglobok(a, b);
            break;
        case 'tro':
            return trojkat(a, b);
            break;
    }
}

const zad8 = (chosenFunc, a, b ,c) => {
    return chosenFunc(a, b, c);
}
const zad9 = (len) => {
    if (len == 0) {
        return [[1]];
    }
    const prev = zad9(len-1);
    const lvoprev = prev[prev.length-1];
    return [...prev, lvoprev.reduce((acc,_,i) => lvoprev[i+1] != undefined ? [...acc, lvoprev[i]+lvoprev[i+1]] : [...acc, 1], [1])];
}

//zad10
class Auto {
    constructor(rok, przebieg, cena_wyjsciowa, cena_koncowa) {
        this.rok = rok;                                 //Date
        this.przebieg = przebieg;                       //Number
        this.cena_wyjsciowa = cena_wyjsciowa;           //Number
        this.cena_koncowa = cena_koncowa;               //Number
    }

    reducePriceBy1000 = () => this.cena_wyjsciowa -= 1000;
    reducePriceBy1000PerYear = () => this.cena_koncowa = this.cena_wyjsciowa - ((new Date().getFullYear()-rok.getFullYear()) * 1000);
    reducePriceBy10000PerKms = () => this.cena_koncowa -= (this.przebieg % 100_000) * 10_000;
    setYearAndPrzebieg = (newYear, newPrzebieg) => {
        this.rok = newYear;
        this.przebieg = newPrzebieg;
        this.reducePriceBy1000PerYear();
        this.reducePriceBy10000PerKms();
    }

    static increaseYearOfEachCar(listOfCars) {
        return listOfCars.map(car => {
            car.rok -= 1;
            return car;
        })
    }
}