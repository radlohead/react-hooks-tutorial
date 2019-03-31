import React, { createContext, useContext } from 'react';

const ThemeContext = createContext(['black', '50px']);
const ContextSample = () => {
  const [ bgColor, height ] = useContext(ThemeContext);
  const style = {
    width: '24px',
    height: height,
    background: bgColor
  };
  return <div style={style} />;
};

export default ContextSample;