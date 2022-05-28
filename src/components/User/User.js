import React from 'react';

const User = (props) => {
    const {familiar} = props;

    // 1. Element variable
    let greeting;
    if(familiar){
        greeting = <h5>Hello Bondhu How are you?</h5>
    }
    else{
        greeting = <h5>Who the Hell are you? DGM.</h5>
    }
    
    return (
        <div>
            <div>
                <h2>Greetings</h2>
                {greeting}
            </div>
            <div>
                <h2>Food</h2>
            </div>
            <div>
                <h2>Profession</h2>
            </div>
        </div>
    );
};

export default User;