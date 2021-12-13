import React, { FC } from "react";

interface Props {
    test : string
}
interface Test {
    kind : string
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

//Returns directly
export const MyComponent: FC<Props> = (props) => (
    <div>arrow function. return directly inside (), {props.test}</div>
);

//Needs to return
export const AlsoMyComponent = () => {
    const test = "AlsoMyComponent"
    return(
        <div>{test}</div>
    )
}
//Props as object (...props) Pass it as a spread operator.
export const Button: FC<Test> = (props) => {
    const { kind, ...other } = props;
    const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
    return(
        <button 
            className={className}
            {...other}
        />
    )
};


     