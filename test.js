import React from 'react';
import Polyline from './src';

const LINE_STYLE = '2px dashed blue';

// Octogon
const points = [
  { x: 60, y: 0 },
  { x: 120, y: 0 },
  { x: 180, y: 60 },
  { x: 180, y: 120 },
  { x: 120, y: 180 },
  { x: 60, y: 180 },
  { x: 0, y: 120 },
  { x: 0, y: 60 }
];

React.render(<Polyline coordinates={points} style={LINE_STYLE} closed={true} />, document.getElementById("app"));
