(function() {
  function toggle() {
      if($("#chrome-sidebar-resizable").length > 0) {
          console.log("Removing sidebar");
          $("#chrome-sidebar-resizable").remove();
      } else {
          // TODO load url from settings
          var url = "https://mail.google.com/tasks/ig";
          console.log("Adding sidebar");

          $("<link/>", {
              rel: "stylesheet",
              type: "text/css",
              href: chrome.extension.getURL("css/ui-lightness/jquery-ui-1.10.0.custom.css")
          }).appendTo("head");

          $("<div id=\"chrome-sidebar-resizable\" style=\"z-index: 2147483646; background-color: #ffffff; width:300px; height:100%; position:fixed !important; border-left: 1px solid #666666; top:0; right:0; bottom:0; \">" +
              "<div id=\"chrome-sidebar-overlay\" style=\"width:100%; height:100%; margin-left: 16px; background-color: #ffffff; opacity: 0.001; display: none;\"></div>" +
              "<iframe id=\"chrome-sidebar-frame\" style=\"width:100%; margin-left: 16px; height:100%; border:none\" src=\"" + url + "\"></iframe>" +
            "</div>").appendTo("body");

          $("#chrome-sidebar-resizable").resizable({
              handles: "w",
              resize: function(event, ui) {
                  $("#chrome-sidebar-resizable").css("position", "fixed");
                  $("#chrome-sidebar-resizable").css("left", "");
              },
              start: function() {
                  $("#chrome-sidebar-overlay").css("display", "block");
              },
              stop: function() {
                  $("#chrome-sidebar-overlay").css("display", "none");
              }
          });
      }
  }

  toggle();

})();