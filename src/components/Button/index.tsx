import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { StyledButton } from './styles';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
}

export const Button = ({ href, children, ...props }: ButtonProps) => (
  <StyledButton href={href} target="_blank" rel="noopener noreferrer" {...props}>
    {children}
  </StyledButton>
);
