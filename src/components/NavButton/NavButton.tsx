import React from 'react';
import { UnstyledButton, Tooltip } from '@mantine/core';
import styles from './NavButton.module.css';

interface NavButtonProps {
  icon: React.ReactNode;
  label: string;
  opened: boolean;
  onClick: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ icon, label, opened, onClick }) => (
  <Tooltip label={!opened ? label : ''} position="right" withArrow>
    <UnstyledButton className={styles.navButton} onClick={onClick}>
      {icon}
      {opened && <span className={styles.navLabel}>{label}</span>}
    </UnstyledButton>
  </Tooltip>
);

export default NavButton;