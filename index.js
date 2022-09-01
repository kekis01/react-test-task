function ShowModal(event) {
    document.getElementById("modal").style.display = event;
    document.getElementById("filter").style.display = event;
}

document.addEventListener('keydown', function (e) {
    let pressedKey = e.key;
    if (pressedKey === 'Escape') {
        ShowModal("none");
    }
});

function FakeRegistration() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify({
            name: name,
            email: email,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => {
            console.log('response: ' + JSON.stringify(json));
            let results = document.getElementById("results");
            results.innerHTML = 'Ваши данные успешно отправлены!';
            ShowModal("none");
        })
        .catch(error => {
            console.error(error)
            let results = document.getElementById("results");
            results.innerHTML = 'При отправке произошла ошибка. Пожалуйста, попробуйте отправить данные ещё раз!';
            ShowModal("none");
        });
}