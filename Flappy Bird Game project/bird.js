//uzyskanie contextu aby moc korzystac z konkretnych funkcji Canvasa
const canv= document.querySelector('canvas');
const ctx=canv.getContext('2d');

//nadanie wielkosci i szerokosci obszarowi naszej gry
canv.width=288;
canv.height=512;

//przypisanie do zmiennej co ulatwia pozniejszew uzycie
const cw= canv.width;
const ch= canv.height;

//nadanie wielkosci i szerokosci obiektom (np. tlu, rurom itp.) ktore pozniej sa rysowane w funkcji drawing
const birdWeight=23;
const birdHeight=15;

const foregroundWeight=306;
const foregroundHeight=118;

const pipenorthWeight=52;
const pipenorthHeight=320;

const pipesouthWeight=52;
const pipesouthHeight=320;

//odleglosc/szczelina miedzy rurami
const gap=75;
var constant= pipenorthHeight+gap;

//pozycja ptaszka
let bX= 10;
let bY=150;

//stala wartosc grawitacji ktora jest wkyrozystywana w funkcji moveUp ktora decyduje o jaka wartosc liczbowa nasz ptak spada w dol 
var gravity=0;

var gameover=false;

var start=true;

const SAVE_KEY_SCORE="highscore";
var score = 0;
var highscore=0;
var scoreStr=localStorage.getItem(SAVE_KEY_SCORE);
if(scoreStr ==null) {
    highscore=0;
}else{
    highscore=parseInt(scoreStr);
}

const fly= new Audio();
const saudio= new Audio();
const die=new Audio();
fly.src="wing.mp3"
saudio.src="point.mp3";
die.src="hit.mp3"

//dziala na telefonach
document.querySelector('canvas').addEventListener('touchstart', moveUp);


document.addEventListener("keydown", moveUp);

//funkcja odpowiadajaca za 'latanie' czyli przenoszenie sie w pozycji Y naszego ptaka
function moveUp(){
    if(start){
        start=false;
        gravity=1.8;
        drawing();
    }
    if(!gameover){
    bY-=40;//wartosc liczbowa ktora decuduje o ile po wcisnieciu klawisza przeniesiemy sie wzgledem Y
    fly.play();
    }
}

//ustawienie wartosci wspolrzednych rur jako tablica do ktorej w petli po osiagnieciu pewnego punktu wgrywane sa nowe losowe wspolrzedne i rysowane sa kolejen rury co bedzie powodowalo efekt ruchu
var pipe=[];
pipe[0]={
    x : cw,
    y : 0
}

function getMousePos(canvas, evt) {
    var rect= canvas.getBoundingClientRect();
    return{
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function picture(){
    //narysowasnie tla
    ctx.fillStyle='#70D3FF';
    ctx.fillRect(0,0,cw,ch);
    ctx.fillStyle='#003000';
    ctx.fillRect(0, ch-foregroundHeight, foregroundWeight, foregroundHeight);
    ctx.fillStyle='yellow';
    ctx.fillRect(bX, bY, birdWeight, birdHeight);
    ctx.fillStyle='#000';
    ctx.font="15px Verdana";
    ctx.fillText("Press any button to start game", 30, 200);
}

function drawing() {
    //narysowasnie tla
    ctx.fillStyle='#70D3FF';
    ctx.fillRect(0,0,cw,ch);
    
    //rysowanie rur w petli
    for(var i=0; i<pipe.length; i++) {
    ctx.fillStyle='#4DFF28';
    ctx.fillRect(pipe[i].x, pipe[i].y, pipenorthWeight, pipenorthHeight);
    ctx.fillStyle='#4DFF28';
    ctx.fillRect(pipe[i].x, pipe[i].y+constant, pipesouthWeight, pipesouthHeight);

    //poruszanie sie od prawej do lewej
    pipe[i].x--;

    //po osiagnieciu przez rury pozycji X=125 do petli zostaje wgrane losowa wartosc Y dzieki funkcji Math.floor(Math.random) dzieki czemu uzyskujemy za kazdym razem inna pozycje rur (tudziez do innego momentu pozycji Y sa rysowane)
    if(pipe[i].x==125) {
        pipe.push({
            x : cw,
            y: Math.floor(Math.random()*pipenorthHeight)-pipenorthHeight //ocekujemy liczb miedzy 0 a 1 jestli Math.random da nam 0 mnozymy to przez wysokosc rury co dalej da nam 0 wiec trzeba jeszcze odjac od tego wysokosc rury zeby otrzymywac rozne wysokosci
        });
    }

//wykrycie kolizji powoduje ustawienie zmiennej gameover na true co powoduje koniec gry i pojawienie sie ekrana konncowego
    if(bX+birdWeight >=pipe[i].x && bX <= pipe[i].x+pipenorthWeight && (bY <= pipe[i].y+pipenorthHeight || bY+birdHeight >=pipe[i].y+constant) || bY+birdHeight >=ch-foregroundHeight){
       gameover=true;
       
       die.play();
    }

    if(pipe[i].x == 5) {
         score++;
         if(score> highscore) {
             highscore=score;
             localStorage.setItem(SAVE_KEY_SCORE, highscore);
         }
         saudio.play();
    }
    }

    ctx.fillStyle='#003000';
    ctx.fillRect(0, ch-foregroundHeight, foregroundWeight, foregroundHeight);
    ctx.fillStyle='yellow';
    ctx.fillRect(bX, bY, birdWeight, birdHeight);

    //zmiana grawitacji naszego ptaka
    bY+=gravity;

    ctx.fillStyle='#000';
    ctx.font="30px Verdana";
    ctx.fillText(score, 144, 30);


//rysowanie ekranu koncowego po wykryciu kolizji ktora 'odpala' warunek
    if(gameover) {
      
        ctx.fillStyle='#70D3FF';
        ctx.fillRect(0,0,cw,ch);
        ctx.fillStyle='#003000';
        ctx.fillRect(0, ch-foregroundHeight, foregroundWeight, foregroundHeight);
        ctx.fillStyle='#fff';
        ctx.font="40px Verdana";
        ctx.fillText("Game Over ", 30, 200);
        die.play();
        ctx.fillStyle='green';
        ctx.fillRect(45,256,200,50);
        ctx.fillStyle='#fff';
        ctx.font="30px Verdana";
        ctx.fillText("Restart", 90, 292);
        ctx.fillStyle='yellow';
        ctx.fillRect(80,330,140,30);
        ctx.fillStyle='#000';
        ctx.font="20px Verdana";
        ctx.fillText("Highscore: "+highscore, 85, 352);
        document.addEventListener('mousedown', buttonPress, false);
        return;
    }
    
    var mouseX;
    var mouseY;
    
    
    function buttonPress(e){
    pos= getMousePos(canv, e);
    mouseX= pos.x;
    mouseY=pos.y;
    if(mouseX>45 && mouseX<256 && mouseY>256 && mouseY<300) {
    gameover=false;
    location.reload();
    
    
    }
}

//calluje funkcje drawing dzieki czemu animacja rysowania odpala sie na nowo i na nowo
    requestAnimationFrame(drawing);
    
}
//wywolanie funkcji
picture();

