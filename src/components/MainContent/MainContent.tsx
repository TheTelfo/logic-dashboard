import React from 'react';
import { Title, Container, Text } from '@mantine/core';

interface MainContentProps {
  title: string;
  content: string;
}

const MainContent: React.FC<MainContentProps> = ({ title, content }) => {
  return (
    <Container size="lg" p="md">
      <Title order={2} mb="md">{title}</Title>
      <Text>{content}</Text>
      {/* Additional page-specific content or components can be added here */}
    </Container>
  );
};

export default MainContent;