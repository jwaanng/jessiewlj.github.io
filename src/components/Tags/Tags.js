import React from 'react';
import './Tags.css';

function Tag(props) {
    return (
      <div className="tag" style={{ backgroundColor: props.color }}>
        {props.label}
      </div>
    );
  }
  
  export default Tag;