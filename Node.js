const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/sco-bot', (req, res) => {
    const userMessage = req.body.message.toLowerCase();

    let botResponse = '';

    // General Conversation
    if (userMessage.includes('hello') || userMessage.includes('hi')) {
        botResponse = 'Hey there! I’m SCO Bot. How can I assist my boss today? 😎';
    } else if (userMessage.includes('how are you')) {
        botResponse = 'I’m always cool, boss! How about you?';
    } else if (userMessage.includes('joke')) {
        botResponse = 'Why do programmers prefer dark mode? Because light attracts bugs! 😂';
    }

    // Coding Tasks
    else if (userMessage.includes('help with javascript')) {
        botResponse = 'Sure! What do you need help with in JavaScript? Loops, functions, or something else?';
    } else if (userMessage.includes('python code for')) {
        botResponse = 'Here’s an example Python code snippet:\n```python\nprint("Hello, World!")```';
    } else if (userMessage.includes('debug')) {
        botResponse = 'Send me the code, and I’ll point out the possible issues, boss!';
    }

    // Default Response
    else {
        botResponse = 'I’m not sure about that. Maybe try asking differently? Or just chill, boss! 😎';
    }

    res.json({ reply: botResponse });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`SCO Bot is up and running on port ${PORT}`);
});
