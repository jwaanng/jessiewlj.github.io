import React from 'react';
import Tag from './Tags';

function TagsList(props) {
    const labels = Array.isArray(props.labels) ? props.labels : [];
    const colors = Array.isArray(props.colors) ? props.colors : [];
  
    const tags = labels.map((label, index) => {
      const color = colors[index] || '#1d2345';
      return <Tag key={index} label={label} color={color} />;
    });
  
    return <div className="tags-list">{tags}</div>;
  }
  
  export default TagsList;