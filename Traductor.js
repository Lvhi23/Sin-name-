document.getElementById('translationForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const inputText = document.getElementById('inputText').value;
    const languageSelect = document.getElementById('languageSelect');
    const selectedLanguage = languageSelect.value.split('-');

    const sourceLanguage = selectedLanguage[0];
    const targetLanguage = selectedLanguage[1];

    // Hacer la llamada a la API de traducción
    const apiKey = 'AIzaSyA9mdsMrLvozQGrgSOsfJKj73VOdcbvVks'; // Reemplaza con tu clave de API
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}&source=${sourceLanguage}&target=${targetLanguage}&q=${inputText}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const translatedText = data.data.translations[0].translatedText;
            document.getElementById('translatedText').innerText = translatedText;
        })
        .catch(error => {
            console.error('Hubo un error:', error);
        });
});