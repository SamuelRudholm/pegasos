import React from "react";

interface PropsProp {
    name: string,
    number?: number,
    male?: boolean
}

export const WelcomeProps = (props: PropsProp) => {
    return(
        <h1>Welcome {props.name}!</h1>
    )
}