import React from 'react';
import { Button, Group, useMantineColorScheme } from '@mantine/core';
import { Menu2, Sun, Moon } from 'tabler-icons-react';
import styles from '../../assets/styles/AppHeader.module.css';

interface AppHeaderProps {
  opened: boolean;
  setOpened: (opened: boolean) => void;
}

const AppHeader: React.FC<AppHeaderProps> = ({ opened, setOpened }) => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  const toggleColorScheme = (value?: 'light' | 'dark' | 'auto') =>
    setColorScheme(value || (dark ? 'light' : 'dark'));

  return (
    <div className={styles.header}>
      <Group justify="space-between" align="center" style={{ height: '100%' }}>
        <Button
          variant="subtle"
          onClick={() => setOpened(!opened)}
          leftSection={<Menu2 size={16} />}
        >
          Menu
        </Button>
        <Button
          variant="subtle"
          onClick={() => toggleColorScheme()}
          leftSection={dark ? <Sun size={16} /> : <Moon size={16} />}
        >
          {dark ? 'Light' : 'Dark'} Mode
        </Button>
      </Group>
    </div>
  );
};

export default AppHeader;