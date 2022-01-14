import React, { FC } from "react";

interface PropsProp {
  name: string;
  number?: number;
  male?: boolean;
}

export const WelcomeProps = (props: PropsProp) => {
  return <h1>Welcome {props.name}!</h1>;
};

const ParentComponent: FC = ({ children }) => {
  return <div>{children}</div>;
};
export const NestedProps = () => {
  return (
    <div>
      <label>Nested props</label>
      <div>Props</div>
    </div>
  );
};
