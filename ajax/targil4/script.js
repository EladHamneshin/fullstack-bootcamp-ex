function createForm(){
    const form = document.createElement('form');

    form.setAttribute('method', 'post');

    const fnameInput = document.createElement('input');
    fnameInput.setAttribute('type', 'text');
    fnameInput.setAttribute('name', 'fname');
    fnameInput.setAttribute('placeholder', 'First Name');
    
    
    const lnameInput = document.createElement('input');
    lnameInput.setAttribute('type', 'text');
    lnameInput.setAttribute('name', 'lname');
    lnameInput.setAttribute('placeholder', 'Last Name');

    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('name', 'email');
    emailInput.setAttribute('placeholder', 'Email');

    const submitInput = document.createElement('input');
    submitInput.id = "btn";
    submitInput.setAttribute('type', 'submit');
    submitInput.setAttribute('value', 'Submit');

    form.append(fnameInput, lnameInput, emailInput, submitInput);
    document.body.append(form);
}

createForm();

const btn = document.getElementById('btn');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    const fname = document.getElementsByName('fname')[0].value;
    const lname = document.getElementsByName('lname')[0].value;
    const email = document.getElementsByName('email')[0].value;

    const user = {
        fname,
        lname,
        email
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
     body: JSON.stringify(user),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
     },
    }).then((response) => response.json()).then(console.log);
});