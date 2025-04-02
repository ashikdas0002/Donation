function getInputValueById(id) {
    const input = document.getElementById(id);
    const inputValue = input.value;
    const inputNumber = parseFloat(inputValue);
    input.value = '';
    return inputNumber;
}

function getInnerTextById(id) {
    const innerText = document.getElementById(id).innerText;
    const innerNumber = parseFloat(innerText);
    return innerNumber;
}



document.getElementById('blog-btn').addEventListener('click', function () {
    window.location.href = 'blog.html';
})