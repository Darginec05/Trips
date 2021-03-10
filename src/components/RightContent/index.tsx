import { Wrap } from './styled';

type Props = {
  children?: any;
}

const RightContent = ({ children }: Props) => {
  return (
    <Wrap>
      {children}
    </Wrap>
  );
};

export { RightContent };
