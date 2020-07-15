
var playerCount = 0;
var gameState = 0;

function setup() {
    canvas = createCanvas(600, 600);
    database = firebase.database();
    form = new Form()
    form.display();
    user = new User();
   
    
}