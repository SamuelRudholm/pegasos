import React from 'react';

//const is a signal that the variable won't be reassigned.
// const id = 123;
// const test = 5;

export const Header = ({
    id,
    test
}) => {
    // const [open, setOpen] = useState(false);
    
    //Javascrpit code. Why should this be used?
    return React.createElement('h1', {}, 'My First React Code..')

}

Header.displayName = 'Header'; 