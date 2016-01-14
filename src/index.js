import React from 'react';
import ReactLine from 'react-line';

const getLink = (p1, p2) => ({ x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y });
const createPairs = (items, pairify) => items.reduce(
  (acc, item, index, arr) =>
    !arr[index + 1] ? acc
                    : acc.concat(pairify(item, arr[index + 1]))
, []);

export default class Polyline extends React.Component {

  static propTypes = {
    coordinates: React.PropTypes.arrayOf(React.PropTypes.shape({
      x: React.PropTypes.number.isRequired,
      y: React.PropTypes.number.isRequired      
    })),
    style: React.PropTypes.string,
    closed: React.PropTypes.bool
  };

  render() {
    let coords = this.props.coordinates;

    // add a coordinate to close the polyline if wanted
    if (this.props.closed) {
      coords = coords.concat(coords[0]);
    }
    const pairs = createPairs(coords, getLink);

    return (
      <div>
      {
        pairs.map((p, i) =>
          <ReactLine
            key={i}
            from={{x: p.x1, y: p.y1}}
            to={{x: p.x2, y: p.y2}}
            style={this.props.style}
          />
        )
      }
      </div>
    );
  }

}
