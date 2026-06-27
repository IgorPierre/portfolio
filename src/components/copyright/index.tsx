import { Footer } from './styles';

interface CopyrightProps {
  text: string;
}

export const Copyright = ({ text }: CopyrightProps) => (
  <Footer>
    <small>{text}</small>
  </Footer>
);
