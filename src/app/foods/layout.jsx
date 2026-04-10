import React from 'react';

const FoodLayout = ({children}) => {
    return (
        <div className="min-h-full flex flex-col">
            {children}
        </div>
    );
};

export default FoodLayout;