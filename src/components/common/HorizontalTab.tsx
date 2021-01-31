import React, { ReactElement, Children, cloneElement } from 'react';
import styled from 'styled-components';

export type HorizontalTabProps = {
  children: ReactElement<TabItemProps>[];
  activeTab: string;
  onTabClikc?: () => void;
};

function HorizontalTab({ children, activeTab }: HorizontalTabProps) {
  const ratio = 100 / children.length;

  return (
    <Block>
      {Children.map(children, (tab) => {
        return cloneElement(tab, {
          active: tab.props.name === activeTab,
          width: `${ratio}%`,
        });
      })}
    </Block>
  );
}

export type TabItemProps = {
  name: string;
  text: string;
  active?: boolean;
  width?: string;
  onClick?: () => void;
};

function TabItem({ name, text, active, width, onClick }: TabItemProps) {
  return (
    <TabItemBlock className={active ? 'active' : ''} style={{ width }} onClick={onClick}>
      {text}
    </TabItemBlock>
  );
}

const Block = styled.div`
  display: flex;
`;

const TabItemBlock = styled.div`
  background: #e3e3e3;
  color: #9c9c9c;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 0.875rem;
  height: 2.5rem;
  cursor: pointer;
  &.active {
    background: white;
    color: #4a4a4a;
  }
`;

HorizontalTab.TabItem = TabItem;
export default HorizontalTab;
