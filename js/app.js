$(function() {
      var valu = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B" ]
      function pitch2name(v) {
        if (v < 0 || v > 127)
            return "*";
        var octave = parseInt(v / 12) - 1;
        var i = v % 12;
        return valu[i] + octave;
      }
      var sl = $("#sl-ambitus").slider({
        formater: function(v) {
          return pitch2name(v)
        }
      }).on("slide", function(){
        console.log(sl.getValue())
        $("#amb-min").html(pitch2name(sl.getValue()[0]))
        $("#amb-max").html(pitch2name(sl.getValue()[1]))
      }).data("slider")
      $("#keySignature").change(function() {
        var ks = $("#keySignature option:selected").val()
        var scales = [
            [1, 2, 4, 6, 7, 9, 11], // -7
            [1, 2, 4, 6, 8, 9, 11],
            [1, 3, 4, 6, 8, 9, 11],
            [1, 3, 4, 6, 8, 10, 11], // -4
            [1, 3, 5, 6, 8, 10, 11],  // -3
            [0, 1, 3, 5, 6, 8, 10],
            [0, 1, 3, 5, 7, 8, 10],
            [0, 2, 3, 5, 7, 8, 10],  // 0
            [0, 2, 3, 5, 7, 9, 10],
            [0, 2, 4, 5, 7, 9, 10],
            [0, 2, 4, 5, 7, 9, 11],
            [0, 2, 4, 6, 7, 9, 11],
            [1, 2, 4, 6, 7, 9, 11],
            [1, 2, 4, 6, 8, 9, 11],
            [1, 3, 4, 6, 8, 9, 11]
        ]
        if (ks === "chromatic") {
          $(".check-note").each(function(){ $(this).prop('checked', true); })
        } else {
          console.log(ks);
          var scale = scales[parseInt(ks) + 7];
          console.log(scale)
          $(".check-note").each(function(){
            var i = $(this).attr("id");
            var ii = parseInt(i.split("-")[2]);
            console.log(ii)
            var index = $.inArray(ii, scale)
            console.log("found" + index)
            if (index >= 0) {
              console.log("check " + $(this).text())
              $(this).prop("checked", true);
            }
            else {
              console.log("uncheck " + $(this).text())
              $(this).prop("checked", false);
            }
          })
        }
      });
    });
