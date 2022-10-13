const outputField = document.querySelector('.output');
const translationSelect = document.querySelector('.translationSelect');
const downloadButton = document.querySelector('.downloadBtn');
const api_url = 'https://api.publicapis.org/entries';

async function getApi(url) {
    const response = await fetch(url);

    var data = await response.json();
    console.log(data);

    let output = `${data.count}`;

    checkIfTranslate();

    outputField.innerHTML = output;
}

function checkIfTranslate() {
    translationSelect.addEventListener('change', () => {
        translationSelect.value === 'yes'
            ? console.log('please translate m8')
            : console.log('do not translate m8');
    });

    // if (translationSelect.value === 'null') {
    //     alert('Please select if you want translation or not');
    // }
}

getApi(api_url);

downloadButton.addEventListener('click', () => {
    let transcript = outputField.value;

    const downloadableLink = document.createElement('a');

    downloadableLink.setAttribute(
        'href',
        'data:text/plain;charset=utf-8,' + encodeURIComponent(transcript)
    );

    downloadableLink.download = 'myFile' + '.txt';
    document.body.appendChild(downloadableLink);
    downloadableLink.click();
    document.body.removeChild(downloadableLink);
});
