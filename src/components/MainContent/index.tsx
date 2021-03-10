import { ReactNode } from 'react';
import { Box } from '../Box';
import { MainContentUI, Title } from './styled';

type Props = {
  children: ReactNode;
  title: string;
};

const MainContent = ({ children, title }: Props) => {
  return (
    <MainContentUI>
      <Box fullWidth>
        <Title size="lg" as="h2">
          {title}
        </Title>
      </Box>
      <Box pt={32} pb={32} fullWidth flexDirection="column" justifyContent="center">
        {children}
      </Box>
    </MainContentUI>
  );
};

export { MainContent };
