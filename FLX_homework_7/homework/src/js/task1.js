let login = prompt('Login');
let password = '';
let d = new Date().getHours();

if (login === 'User') {
    password = prompt('Password');
    if (password === '' || password === null) {
        alert('Canceled');
    } else if (password !== 'UserPass') {
        alert('Wrong password');
    } else {
        if (d <= 20) {
            alert(`Good day, dear ${login}!`);
        } else {
            alert(`Good evening, dear ${login}!`);
        }
    }
} else if (login === 'Admin') {
    password = prompt('Password');
    if (password === '' || password === null) {
        alert('Canceled');
    } else if (password !== 'RootPass') {
        alert('Wrong password');
    } else {
        if (d <= 20) {
            alert(`Good day, dear ${login}!`);
        } else {
            alert(`Good evening, dear ${login}!`);
        }
    }
} else if (login === '' || login === null) {
    alert('Canceled');
} else if (login.length < 4) {
    alert(`I don't know any users having name length less than 4 symbols`);
} else {
    alert(`I don't know you`);
}

