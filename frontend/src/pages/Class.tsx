import { Button } from '@mui/material';
import React, { useState } from 'react';

const Class = () => {

    const [color, setcolor] = useState('blue');
    const [num, setnum] = useState(0);

    const [text, settext] = useState(true);
    return (

        <div>
            <Button onClick={() => setcolor('red')}>Text1</Button>
            <Button onClick={() => setcolor('green')}>Text2</Button>
            <h2 style={{color: color}} >Text3</h2>

            <Button onClick={() => setnum(num+1)}>{num}</Button>

            <Button onClick={() => settext(!text)}>{text ==true ? 'сховати' : 'показати' }</Button>
            {text &&<p>Text</p>}
        </div>
    );
}

export default Class;
