import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { AppShell, Burger, Group, Skeleton, useMantineTheme } from '@mantine/core';
import SideNav from '@/components/SideNav/SideNav';
import AppHeader from '@/components/AppHeader/AppHeader';
import MainContent from '@/components/MainContent/MainContent';

const AppShellLayout: React.FC = () => {
  const [opened, { toggle }] = useDisclosure();
  const theme = useMantineTheme();

  return (
    <AppShell
      padding="md"
      navbar={{ width: 250, breakpoint: 'sm', collapsed: { mobile: !opened } }} /* Ensure width matches CSS */
      header={{ height: 70 }}
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
            color={theme.colors.gray[6]}
          />
          <AppHeader opened={opened} setOpened={toggle} />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <SideNav opened={opened} toggleOpened={toggle} /> {/* Pass toggleOpened prop */}
      </AppShell.Navbar>
      <AppShell.Main>
        <MainContent title="Welcome" content="This is the main content area." />
      </AppShell.Main>
    </AppShell>
  );
};

export default AppShellLayout;