import React, { Component } from 'react';

class Map extends Component {
  state = {};

  render() {
    return (
      <div id='map'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2601.002153019983!2d19.992228215741996!3d49.31424287933477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715f245681ffb03%3A0x5b7d715a20be8387!2sStachonie+24b%2C+34-500+Zakopane!5e0!3m2!1spl!2spl!4v1548857127107'
          allowFullScreen
        />
      </div>
    );
  }
}

export default Map;
