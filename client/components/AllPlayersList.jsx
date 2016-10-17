var React = require('react');
var Player = require('./Player.jsx')

var AllPlayersList = (props) => (
  <ul>
    {props.players.map(function(player, i){
      return <Player name={player} click={props.click} index={i} players={props.players}/>
    })}
  </ul>
)

module.exports = AllPlayersList;