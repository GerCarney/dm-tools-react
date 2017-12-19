import React from 'react';

import "./ButtonContainer.css"


export default class ButtonContainer extends React.Component {

  render() {
    return (
      <div className="btn-cont">
      <button>Roll Initiative</button>
      <button>Add NPC</button>
      <button>Spells</button>
      </div>
    );
  }
}
