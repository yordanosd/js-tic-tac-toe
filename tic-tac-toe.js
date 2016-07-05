function TicTacToe(player1, player2) {
  this._player1 = player1 //even +1
  this._player2 = player2 //odd -1
  this._turn = 0
  this._board = [[0,0,0,], [0,0,0], [0,0,0]]

}

//if player one plays = 1 and if players 2 plays dd -1

TicTacToe.prototype = {
  position_empty: function(current_position){
    return current_position === 0
  },

  play: function(row, col){

    var current_position = this._board[row][col]

    if(this.position_empty(current_position)){
      if(this._turn % 2 == 0 ){
        this._board[row][col] = 1
        var playerClass = "player1"
      }else{
        this._board[row][col] = -1
        var playerClass = "player2"
      }
      this._turn ++
      return playerClass

    }else{
      console.log(this.position_empty(current_position))
      console.log("Please try again")
    }
  },

  checkWin: function(){
    result = []
    for (i = 0; i<3; i++){
      result.push(this._board[0][i] + this._board[1][i] + this._board[2][i])
      result.push(this._board[i][0] + this._board[i][1] + this._board[i][2])
    }
      result.push(this._board[0][0] + this._board[1][1] + this._board[2][2])
      result.push(this._board[0][2] + this._board[1][1] + this._board[2][0])


    if(result.includes(3)){
      return "player1Wins"
    } else if (result.includes(-3)) {
      return "player2Wins"
    }else if (this._turn > 8) {
      return "draw"
    }else{
      return false
    }
  }

}

$(document).ready(function(){
  var game = new TicTacToe("player1", "player2")
  var table = $('table')
  var buttons = $('.board button')
  var reset = $('#reset')
  console.log(buttons)

  // table.addClass('player1Wins');

  buttons.on('click',function(event){
    var row = $(this).data('row')
    var col = $(this).data('col')

    var newClass = game.play(row, col)

    // if(!(game.checkWin())){
    //   $(this).addClass(newClass)
    // }else{
    //   $(this).addClass(newClass)
    //   buttons.addClass(game.checkWin());
    // }

// false == NO winner

// true  === Winner or Draw


    if (game.checkWin()){
      console.log("game winnner " + game.checkWin())

      $(this).addClass(newClass);
      buttons.addClass(game.checkWin());
    }else {
      console.log("try again " + game.checkWin())

      $(this).addClass(newClass);
    }

  });



});
