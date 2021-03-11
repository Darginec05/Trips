import { StyledLoader, LoaderContainer } from './styled';

const Loader = () => {
  return (
    <LoaderContainer>
      <StyledLoader>
        <div className="double-pulse" />
        <div className="double-pulse" />
      </StyledLoader>
    </LoaderContainer>
  );
};

export { Loader };
