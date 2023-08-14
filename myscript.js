const jokes = document.querySelector('#jokes');
const button = document.querySelector('#newJoke');


const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newText = document.createElement('div');
    newText.prepend(jokeText);
    jokes.prepend(newText)

}
const getDadJoke = async () => {
    const config = { headers: {Accept: 'application/json'}}
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    return res.data.joke;
}

button.addEventListener('click', addNewJoke)