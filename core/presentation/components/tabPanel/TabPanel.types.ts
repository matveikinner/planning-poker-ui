import { HTMLAttributes, ReactNode } from 'react';

interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  index: number;
  value: number;
}

export default TabPanelProps;
