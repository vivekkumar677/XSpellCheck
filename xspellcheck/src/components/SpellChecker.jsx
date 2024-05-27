import React, { useState } from 'react';

const customLibrary = {
    teh: 'the',
    wrok: 'work',
    fot: 'for',
    exampl: 'example',
};

const SpellChecker = () => {

    const [inputText, setInputtext] = useState('');
    const [outputText, setOutputText] = useState('');

    const handleInputChange = (event) => {
        setInputtext(event.target.value);

        const words = event.target.value.split(' ');
        let corrected = '';
        for (let i = 0; i < words.length; i++) {
            const word = words[i];
            if (customLibrary[word]) {
                corrected += customLibrary[word] + ' ';
            } else {
                corrected += word + ' ';
            }
        }

        setOutputText(corrected);
    }

    return (
        <div>
            <h1>Spell Check and Auto-Correction</h1>
            <textarea 
                placeholder='Enter text...'
                rows={5}
                cols={40}
                value={inputText}
                onChange={handleInputChange}
            />
            {outputText && (
                <p>Did you mean: <strong>{outputText}</strong></p>
            )}
        </div>
    )
}

export default SpellChecker;