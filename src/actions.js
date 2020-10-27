export const inc = () => ({ type: 'INC' });
export const dec = () => ({ type: 'DEC' });
export const rInc = (payload) => ({ type: 'R-INC', payload });
export const rDec = (payload) => ({ type: 'R-DEC', payload });