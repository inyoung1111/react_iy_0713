import React from 'react'

const Event04 = () => {

    const [ key, setKey ] = useState('');

    const handleChange = (e) => {
        console.log(e.target.value);
        setKey(e.target.value)
    
        
    }
    const resetInput = () => setKey('');
    
    return (
        <>
            <input onKeyDown={handleKeyDown} type='text' placeholder='키 눌러보세요' />
            <p>{key}</p>
        </>
    )
}

export default Event04