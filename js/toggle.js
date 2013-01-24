(function() {
  function toggle() {
      if($("#chrome-sidebar-resizable").length > 0) {
          console.log("Removing sidebar");
          $("#chrome-sidebar-resizable").remove();
      } else {
          console.log("Adding sidebar for URL " + url);

          $("<link/>", {
              rel: "stylesheet",
              type: "text/css",
              href: chrome.extension.getURL("css/ui-lightness/jquery-ui-1.10.0.custom.css")
          }).appendTo("head");

          $("<div id=\"chrome-sidebar-resizable\" style=\"z-index: 2147483646; background-color: #ffffff; width:300px; height:100%; position:fixed !important; border-left: 1px solid #666666; top:0; right:0; bottom:0; \">" +
              "<div id=\"chrome-sidebar-overlay\" style=\"width:100%; height:100%; margin-left: 16px; background-color: #ffffff; opacity: 0.001; display: none;\"></div>" +
              "<iframe id=\"chrome-sidebar-frame\" style=\"width:100%; margin-left: 16px; height:100%; border:none\"></iframe>" +
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

          $.get('http://www.corsproxy.com/' + url.substring(url.indexOf("://")+3), function(response) {
              var base = "<base href=\"http://www.corsproxy.com/" + url.substring(url.indexOf("://")+3) + "\" />";
              document.getElementById("chrome-sidebar-frame").contentDocument.getElementsByTagName("head")[0].innerHTML = base;
              document.getElementById("chrome-sidebar-frame").contentDocument.getElementsByTagName("body")[0].innerHTML = response;
          });

      }
  }

  toggle();

})();