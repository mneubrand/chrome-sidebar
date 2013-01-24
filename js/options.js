// Saves options to localStorage.
function save_options() {
    localStorage["homePage"] = $('#homePage').val();

    // Update status to let user know options were saved.
    var status = document.getElementById("status");
    status.innerHTML = "Saved.";
    setTimeout(function() {
        status.innerHTML = "";
    }, 750);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
    var homePage = localStorage["homePage"];
    if (!homePage) {
        return;
    }

    $('#homePage').val(localStorage["homePage"])
}

function setUrl(url) {
    $('#homePage').val(url)
}

$(document).ready(function() {
    restore_options();
    $('#save').click(save_options);
    /**
    $('#facebookLink').click(function() {
        toggleSideBar('http://m.facebook.com/');
    });
    $('#tasksLink').click(function() {
        toggleSideBar('https://mail.google.com/tasks/ig');
    });
    $('#plusLink').click(function() {
        toggleSideBar('https://plus.google.com/app/basic');
    });
    **/
    $('#facebookButton').click(function() {
        setUrl('http://m.facebook.com/');
        return false;
    });
    $('#tasksButton').click(function() {
        setUrl('https://mail.google.com/tasks/ig');
        return false;
    });
    $('#plusButton').click(function() {
        setUrl('https://plus.google.com/app/basic');
        return false;
    });
});

