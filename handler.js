jQuery.ajax({
    type: "POST",
    url: 'api/get.php',
}).done(function(data) {
    init(JSON.parse(data));
});

function init(str) {
    var container = document.getElementById('container');
    for (var e in str) {
        const num = str[e].id;
        var li = document.createElement('li');
        var box = document.createElement('input');
        box.addEventListener("click", () => {
            update(num);
        });
        var span = document.createElement('span');
        span.innerHTML = str[e].task;
        box.setAttribute('type', 'checkbox');
        if (str[e].complete)
            li.classList.add('completed');
        li.setAttribute("id", num);
        li.appendChild(span);
        li.appendChild(box);
        container.appendChild(li);
    }
}