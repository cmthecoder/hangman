const HEAD = (
  <div
    key="head"
    style={{
      width: '50px',
      height: '50px',
      borderRadius: '100%',
      border: '10px solid black',
      position: 'absolute',
      top: '50px',
      right: '-30px'
    }}
  />
);

const BODY = (
  <div
    key="body"
    style={{
      width: '10px',
      height: '100px',
      background: 'black',
      position: 'absolute',
      top: '120px',
      right: '0'
    }}
  />
);

const RIGHT_ARM = (
  <div
    key="right-arm"
    style={{
      width: '100px',
      height: '10px',
      position: 'absolute',
      background: 'black',
      top: '150px',
      right: '-100px',
      rotate: '-30deg',
      transformOrigin: 'left bottom'
    }}
  />
);

const LEFT_ARM = (
  <div
    key="left-arm"
    style={{
      width: '100px',
      height: '10px',
      position: 'absolute',
      background: 'black',
      top: '150px',
      right: '10px',
      rotate: '30deg',
      transformOrigin: 'right bottom'
    }}
  />
);

const RIGHT_LEG = (
  <div
    key="right-leg"
    style={{
      width: '100px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '210px',
      right: '-90px',
      rotate: '60deg',
      transformOrigin: 'left bottom',
    }}
  />
);

const LEFT_LEG = (
  <div
    key="left-leg"
    style={{
      width: '100px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '210px',
      right: '0',
      rotate: '-60deg',
      transformOrigin: 'right bottom',
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  return (
    <div style={{ position: 'relative' }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        key="noose"
        style={{
          height: '50px',
          width: '10px',
          background: 'black',
          top: '0px',
          position: 'absolute',
          right: '0px'
        }}
      />
      <div
        key="beam"
        style={{
          height: '10px',
          width: '200px',
          background: 'black',
          marginLeft: '120px'
        }}
      />
      <div
        key="stand"
        style={{
          height: '400px',
          width: '10px',
          background: 'black',
          marginLeft: '120px'
        }}
      />
      <div
        key="base"
        style={{
          height: '10px',
          width: '250px',
          background: 'black'
        }}
      />
    </div>
  );
};


export default HangmanDrawing