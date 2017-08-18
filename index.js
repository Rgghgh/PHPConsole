ace.require("ace/ext/language_tools");
var editor = ace.edit("editor");
var response = document.getElementById('response');
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/php");
editor.setOptions({
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true
});

editor.insert("<?php\n\n");
editor.focus();

editor.on('change', function() {
    $.post('run.php', {'php': editor.getValue()}, function (r) {
        response.innerHTML = r;
    })
});