import React from 'react';


const Button = ({color, text, onClick }) => {
  return (
<Button style={{backgroundColor: color }} onClick={onClick}>{text}

</Button>
  );
};

export default Button;
