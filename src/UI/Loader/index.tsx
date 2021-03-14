import { StyledLoader, LoaderContainer, LoaderLayout } from './styled';
import { LoaderProps } from './types';

const Loader = ({ transparent = true }: LoaderProps) => {
  return (
    <LoaderLayout transparent={transparent}>
      <LoaderContainer>
        <StyledLoader>
          <div className="double-pulse" />
          <div className="double-pulse" />
        </StyledLoader>
      </LoaderContainer>
    </LoaderLayout>
  );
};

export { Loader };
