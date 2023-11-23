document.getElementById('age-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var year = document.getElementById('year').value;
    var age = new Date().getFullYear() - year;
    document.getElementById('result').innerText = name + ', tienes ' + age + ' años.';
});
