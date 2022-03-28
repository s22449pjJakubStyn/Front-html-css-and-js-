//funkcja na zaladowanie dokumentu
$(function(){
    console.log("jquery works");
    
    /*przykładowa funkcja na klikniecie diva w obszarze roboczym
    $("#right div").click(function(e){
      var index = $(e.target).index('#right div');
      console.log(index);
    });*/
    
    var opcje = new Array();
    var opcja = document.getElementById('opcja');
    for (i = 0; i < opcja.options.length; i++) {
      opcje[i] = opcja.options[i].textContent;
    }
    var aktualna_opcja = opcje[0]
    console.log(aktualna_opcja);

    $("#opcja").change(function(){
      aktualna_opcja = $("#opcja option:selected").text();
      console.log(aktualna_opcja);
    })

    //zmiana koloru klikniętego diva
    $("#right div").click(function(e){
      if (aktualna_opcja == opcje[0]) {
        e.target.style.backgroundColor = $("#color").val();
      }
    });

    //dodawanie diva
    $("#right div").click(function(e){
      if (aktualna_opcja == opcje[1]) {
        var new_div = document.createElement('div');
        e.target.appendChild(new_div);
      }
    });

    //usuwanie diva
    $("#right div").click(function(e){
      if (aktualna_opcja == opcje[2]) {
        e.target.remove()
      }
    });

    //przenoszenie diva 
    $("#right div").click(function(e) {
      if (aktualna_opcja == opcje[3]) {
          let clone = $(e.target).clone();
          $("#right div").click(function (xs) {
              clone.appendTo(xs.target);
              e.target.remove()
          });
      }
    });

    //zmiana koloru ramki diva
    $("#right div").click(function(e){
      if (aktualna_opcja == opcje[4]) {
        e.target.style.borderColor = $("#color").val();
      }
    });

    //dodawanie diva zaokraglonego
    $("#right div").click(function(e){
      if (aktualna_opcja == opcje[5]) {
        var new_div = document.createElement('div');
        new_div.style.borderRadius = "10px";
        e.target.appendChild(new_div);
      }
    });
    
})


