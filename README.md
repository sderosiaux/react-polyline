# react-polyline

> Provide a React component to draw a polyline.

Underneath, it's only using classic `<div>`s that it rotates and positions
where they need to be.

## Why

Sometimes, you want to draw some shapes in your page, not using fancy stuff. `<div>`'s are not a fancy stuff but requires some mathematics to handle the lines position and rotation properly from a list of coordinates.

## Install

```shell
npm install --save react-polyline
```

## Props

You need to provide an array of coordinates.
Each coordinate is composed of 2 values `x` and `y`.
Each pair of coordinates will be linked by a line.

```javascript
static propTypes = {
  coordinates: React.PropTypes.arrayOf(React.PropTypes.shape({
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired
  }),
  style: React.PropTypes.string,
  closed: React.PropTypes.bool
};
```

The coordinates count must be greater than one in order to draw at least one line.

`style` is optional and is the css style you want to apply on the line.
The default is `1px solid black`.

`closed` to close the line linking the last and first points.

## Usage

```javascript
<Polyline
  coordinates={[
    {x: 10, y: 20}
    {x: 10, y: 100},
    {x: 10, y: 200}
  ]},
  style="5px solid orange"
  closed={true}
/>
```

An octogon :

![An octogon using react-polyline](https://raw.githubusercontent.com/chtefi/react-line/master/octogon.PNG)
