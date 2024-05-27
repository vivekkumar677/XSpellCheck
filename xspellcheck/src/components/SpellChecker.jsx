import React, { useState } from 'react';

const customLibrary = {
    teh: 'the',
    wrok: 'work',
    fot: 'for',
    exampl: 'example',
};

const SpellChecker = () => {

    const [inputText, setInputText] = useState('');
    const [suggestedText, setSuggestedText] = useState('');

    const handleInputChange = (event) => {
        const text = event.target.value;
        setInputText(text);

        const words = text.split(' ');
        const correctWords = words.map((word) => {
            const correctWord = customLibrary[word.toLowerCase()];
            return correctWord || word;
        });

        const correctedText = correctWords.join(' ');

        const firstCorrection = correctWords.find((word, index) => word !== words[index]);

        setSuggestedText(firstCorrection || '')

        // setOutputText(corrected);
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
            {suggestedText && (
                <p>Did you mean: <strong>{suggestedText}</strong>?</p>
            )}
        </div>
    )
}

export default SpellChecker;