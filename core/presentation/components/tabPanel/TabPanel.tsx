import React, { FunctionComponent } from 'react';
import TabPanelProps from './TabPanel.types';

const TabPanel: FunctionComponent<TabPanelProps> = ({ children, value, index, className }: TabPanelProps) => {
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      className={className}
    >
      {value === index && <>{children}</>}
    </div>
  );
};

export default TabPanel;
