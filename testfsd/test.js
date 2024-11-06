function fetchJoke() {
    fetch('https://v2.jokeapi.dev/joke/Any')
        .then(response => response.json())
        .then(data => {
            const jokeText = `${data.setup} ${data.punchline}`;
            document.getElementById('jokes').textContent = jokeText;
            document.getElementById('character-count').textContent = `Character count: ${jokeText.length}`;
        })
        .catch(error => console.error('Error fetching joke:', error));}
function clearJoke() {
    document.getElementById('jokes').textContent = 'Press the button for a Joke!';
    document.getElementById('character-count').textContent = 'Character count: 0';}
