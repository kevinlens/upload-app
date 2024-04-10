import React from 'react';

const separatorStyle = {
  borderBottom: '1px solid #b3b3b3',
  paddingBottom: '10px',
  width: '16rem',
  marginBottom: '11px',
};

const fullSeparatorStyling = {
  borderBottom: '1px solid #ededed',
  paddingBottom: '10px',
  width: 'full',
  marginBottom: '7px',
};

const Separator = ({ full = false }) => {
  return <div style={full ? fullSeparatorStyling : separatorStyle}></div>;
};

export default Separator;
