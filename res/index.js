/*
 *   Split.js
 */
Split(['#editor', '#response'], {
    direction: 'vertical'
});


/*
 * Ace Editor
 */

ace.require("ace/ext/language_tools");

let response = document.getElementById('frame');
let editor = ace.edit("editor");

editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/php");
editor.setOptions({
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true
});

editor.insert("<?php\n\n");
editor.focus();

editor.on('change', function() {
    $.post('server/run.php', {'php': editor.getValue()}, function (r) {
        response.contentDocument.body.innerHTML = r;
    })
});





