class Auto {
    constructor(rok, przebieg, cena_wyjsciowa, cena_koncowa) {
        this.rok = rok;                                 //Date
        this.przebieg = przebieg;                       //Number
        this.cena_wyjsciowa = cena_wyjsciowa;           //Number
        this.cena_koncowa = cena_koncowa;               //Number
    }
}
var cars = [new Auto(1999, 200_000, 30_000, 40_000), new Auto(2020, 20_000, 120_000, 135_000), new Auto(1999, 200_000, 30_000, 40_000), new Auto(2020, 20_000, 120_000, 135_000)];
    function generateTableHead(table, data) {
        let thead = table.createTHead();
        let row = thead.insertRow();
        for (let key of data) {
          let th = document.createElement("th");
          let text = document.createTextNode(key);
          th.appendChild(text);
          row.appendChild(th);
        }
      }
      
      function createCarRecord(car) {
        var row = document.createElement("tr");
    
        var rokColumn = row.insertCell(-1);
        rokColumn.innerText = car.rok;
    
        var przebiegColumn = row.insertCell(-1);
        przebiegColumn.innerText = car.przebieg;
    
        var cenaWyjsciowaColumn = row.insertCell(-1);
        cenaWyjsciowaColumn.innerText = car.cena_wyjsciowa;
    
        var cenaKoncowaColumn = row.insertCell(-1);
        cenaKoncowaColumn.innerText = car.cena_koncowa;
    
        return row;
    }
    let table= document.createElement("table");
    let data = Object.keys(cars[0]);
    generateTableHead(table, data);
    for (var i = 0; i < cars.length; i++) {
        table.appendChild(createCarRecord(cars[i]));
    }
document.body.appendChild(table);
      