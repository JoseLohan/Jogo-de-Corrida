class Game {
  constructor() {

  }

  //pegando gameState dentro do banco
  getState(){
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val()
    })
  }

  start() { //inicia o jogo
    form = new Form();
    form.display();
    player = new Player();
    playerCount = player.getCount();
  }
}
