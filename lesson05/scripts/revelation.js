const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function () {
    if (input.value != '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        button.ariaLabel = '❌ Remove ' + input.value;
        deleteButton.textContent = button.ariaLabel;
        li.append(deleteButton);
        list.append(li);
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });
        input.focus();
        input.value = '';

    }
    else {
        console.log("Your input is blank, please fill it in.");
        return input.focus();
    }
})