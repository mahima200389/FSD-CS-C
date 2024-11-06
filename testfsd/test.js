const API_URL = 'https://v2.jokeapi.dev/joke/Any';

async function getJoke() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        let joke = '';
        if (data.type === 'single') {
            joke = data.joke;
        } else {
            joke = `${data.setup} ${data.delivery};
        }

        document.getElementById('joke-text').textContent = joke;
        document.getElementById('char-count').textContent = Character count: ${joke.length};
    } catch (error) {
        console.error('Error fetching joke:', error);
        document.getElementById('joke-text').textContent = 'Failed to load joke. Try again!';
        document.getElementById('char-count').textContent = 'Character count: 0';
    }
}

function clearJoke() {
    document.getElementById('joke-text').textContent = 'Press the button for a joke!';
    document.getElementById('char-count').textContent = 'Character count: 0';
}
