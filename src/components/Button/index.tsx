import { Button } from "./styles";

export const DefaultButton = (props: {
    link: string | undefined;
    children: string;
  }) => (
    <Button href={props.link}>
      {props.children}
    </Button>
  );
  