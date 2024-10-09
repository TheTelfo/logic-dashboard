import React from 'react';
import { Stack, UnstyledButton, Tooltip, Button } from '@mantine/core';
import { Home, Settings, ChevronLeft, ChevronRight } from 'tabler-icons-react';
import styles from '../../assets/styles/SideNav.module.css';

interface SideNavProps {
  opened: boolean;
  toggleOpened: () => void; // Added prop for toggling
}

const SideNav: React.FC<SideNavProps> = ({ opened, toggleOpened }) => {
  const navItems = [
    { icon: <Home size={16} />, label: 'Home', onClick: () => {/* Navigate to Home */} },
    { icon: <Settings size={16} />, label: 'Settings', onClick: () => {/* Navigate to Settings */} },
    // Add more items as needed
  ];

  return (
    <div className={`${styles.navbar} ${!opened ? styles.collapsed : ''}`}>
      <Stack>
        {navItems.map((item) => (
          <Tooltip
            label={!opened ? item.label : ''}
            position="right"
            withArrow
            key={item.label}
          >
            <UnstyledButton className={styles.navButton} onClick={item.onClick}>
              {item.icon}
              {opened && <span className={styles.navLabel}>{item.label}</span>}
            </UnstyledButton>
          </Tooltip>
        ))}
      </Stack>
      <Button onClick={toggleOpened} fullWidth variant="subtle">
        {opened ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
      </Button>
    </div>
  );
};

export default SideNav;