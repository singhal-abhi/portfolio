import React from 'react';
import { IconContext } from 'react-icons';

// Dynamically import the icons based on the icon names
const getIconComponent = (iconName) => {
  const iconPascalCase = iconName.charAt(0).toUpperCase() + iconName.slice(1);
  const iconPackage = require(`react-icons/${iconName}`);
  return iconPackage[iconPascalCase];
};

const IconList = ({ icons }) => {
  return (
    <div>
      <IconContext.Provider value={{ color: 'green', size: '2em' }}>
        {icons.map((icon, index) => {
          const IconComponent = getIconComponent(icon);
          return IconComponent ? <IconComponent key={index} /> : null;
        })}
      </IconContext.Provider>
    </div>
  );
};

export default IconList;
