document.getElementById('button').addEventListener("click", add);

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
        li.classList.add('list-group-item');
        if (str[e].complete)
            li.classList.add('completed');
        li.setAttribute("id", num);
        li.appendChild(span);
        li.appendChild(box);
        container.appendChild(li);
    }
}

function add() {
    const task = document.getElementById('input').value;
    if (task == '')
        alert('Cannot enter an empty task');
    else {
        jQuery.ajax({
            type: "POST",
            url: 'api/add.php',
            data: {
                value: document.getElementById('input').value
            },
        }).done(function(data) {
            document.getElementById('input').value = '';
            let js = JSON.parse(data);
            var container = document.getElementById('container');
            var li = document.createElement('li');
            var box = document.createElement('input');
            box.addEventListener("click", () => {
                update(js.id)
            });
            var span = document.createElement('span');
            span.innerHTML = js.task;
            box.setAttribute('type', 'checkbox');
            li.classList.add('list-group-item');
            li.setAttribute("id", js.id);
            li.appendChild(span);
            li.appendChild(box);
            container.appendChild(li);
        });
    }
}

function update(num) {
    jQuery.ajax({
        type: "POST",
        url: 'api/update.php',
        data: {
            id: num
        },
    }).done(function(data) {
        let ele = document.getElementById(num)
        console.log(data);
        if (data == 'true')
            ele.classList.add('completed');
        else
            ele.classList.remove('completed');
    })
}

jQuery.ajax({
    type: "POST",
    url: 'api/count.php',
}).done(function(data) {
    console.log(data);
});