class Player {
  constructor() {
    this.name = null
    this.index = null
    this.positionX = 0
    this.positionY = 0
  }

  //buscando o playerCount no banco de dados
  getCount(){
    var playerCountRef = database.ref("playerCount")
    playerCountRef.on("value",  (data) => {
      playerCount = data.val();
    })
  }

  //fazendo update do playerCount no banco de dados
  updateCount(count){
    database.ref("/").update({
      playerCount: count
    })
  }

  addPlayer(){
  
  }

}
