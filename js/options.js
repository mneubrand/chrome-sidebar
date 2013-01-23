function loadURL(url) {
    if ($("#chrome-sidebar-resizable").length > 0) {
      if(url != $("chrome-sidebar-frame").attr("src")) {
        $("chrome-sidebar-frame").attr("src", url);
      }
    } else {
        $("<div id=\"chrome-sidebar-resizable\" style=\"z-index: 2147483646; background-color: #ffffff; width:300px; height:100%; position:fixed !important; border-left: 1px solid #666666; top:0; right:0; bottom:0; \">" +
            "<div id=\"chrome-sidebar-overlay\" style=\"width:100%; height:100%; margin-left: 16px; background-color: #ffffff; opacity: 0.001; display: none;\"></div>" +
            "<iframe id=\"chrome-sidebar-frame\" style=\"width:100%; margin-left: 16px; height:100%; border:none\" src=\"" + url + "\"></iframe>" +
            "</div>").appendTo("body");

        $("#chrome-sidebar-resizable").resizable({
            handles:"w",
            resize:function (event, ui) {
                $("#chrome-sidebar-resizable").css("position", "fixed");
                $("#chrome-sidebar-resizable").css("left", "");
            },
            start:function () {
                $("#chrome-sidebar-overlay").css("display", "block");
            },
            stop:function () {
                $("#chrome-sidebar-overlay").css("display", "none");
            }
        });
    }
}

function listener(info) {
  console.log(info);
}

$(document).ready(function() {
    $('#facebookLink').click(function() {
        var url = 'http://m.facebook.com/';
        loadURL(url);
    });
    $('#tasksLink').click(function() {
        loadURL('https://mail.google.com/tasks/ig');
    });
    $('#plusLink').click(function() {
        loadURL('https://plus.google.com/app/basic');
    });
});
