import { BannerSection, Name, Role } from './styles';

interface BannerProps {
  name: string;
  role: string;
}

export const Banner = ({ name, role }: BannerProps) => (
  <BannerSection>
    <Name>{name}</Name>
    <Role>{role}</Role>
  </BannerSection>
);
