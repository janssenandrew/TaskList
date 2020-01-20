document.getElementById('button').addEventListener("click", add);

jQuery.ajax({
    type: "POST",
    url: 'api/get.php',
}).done(function(data) {
    init(JSON.parse(data));
    count();
});

function init(str) {
    var container = document.getElementById('container');
    for (var e in str) {
        const num = str[e].id;
        var li = document.createElement('li');
        li.addEventListener("click", () => {
            update(num);
        });
        var span = document.createElement('span');
        span.innerHTML = str[e].task;
        li.classList.add('list-group-item');
        if (str[e].complete)
            li.classList.add('disabled');
        li.setAttribute("id", num);
        li.appendChild(span);
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
            li.addEventListener("click", () => {
                update(js.id)
            });
            var span = document.createElement('span');
            span.innerHTML = js.task;
            li.classList.add('list-group-item');
            li.setAttribute("id", js.id);
            li.appendChild(span);
            container.appendChild(li);
            count();
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
            ele.classList.add('disabled');
        else
            ele.classList.remove('disabled');
        count()
    })
}

function count() {
    jQuery.ajax({
        type: "POST",
        url: 'api/count.php',
    }).done(function(data) {
        let json = JSON.parse(data);
        document.getElementById("total").innerHTML = json[0] + " tasks";
        document.getElementById("completed").innerHTML = json[1] + " completed";
        document.getElementById("uncompleted").innerHTML = json[0] - json[1] + " uncompleted";
    });
}