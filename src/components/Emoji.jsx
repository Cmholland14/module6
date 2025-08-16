import React, { useState} from 'react';

function Emoji() {
    const [emoji, setEmoji] = useState('😄');

const handleWinLotto = () => {
setEmoji('😄')
};

// Calls setMood with a conditional state value
const handleRunningLate = () => {
let newEmoji = '😟';
if (emoji === 'sad') newEmoji = 'really sad'
else if (mood === 'really sad') newEmoji = 'giving up';
setEmoji(newEmoji);
}
return (
<div className="emojiChanger">
Current Emoji: {emoji}
{/* Using arrow functions */}
<button onClick={() => setMood('tired')}>Stay Up
Late</button>
{/* Using custom event handler functions */}
<button onClick={handleRunningLate}>Running Late</button>
<button onClick={handleWinLotto}>Win Lotto</button>
</div>
)
}


export default Emoji;