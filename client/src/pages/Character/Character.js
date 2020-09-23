import React, { Component } from 'react' 
import DnDCharacterStatsSheet from 'dnd-character-sheets'
import 'dnd-character-sheets/dist/index.css'

class Character extends Component {
  render() {
    return 
    <div>
      <DnDCharacterStatsSheet />
    </div>
  }
}

export default Character