export const inc = () => ({ type: 'INC' });
export const dec = () => ({ type: 'DEC' });
export const rInc = () => {
    return { 
        type: 'R-INC', 
        payload: Math.floor(Math.random()*10+1) 
    }
};
export const rDec = () => {
    return { 
        type: 'R-DEC', 
        payload: Math.floor(Math.random()*10+1)
    }
};