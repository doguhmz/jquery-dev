// görev 1
gorev1.onclick = function () {
  for (let i = 0; i < 3; i++) {
    $("#gorev1 ul").append($("<li></li>").text($("article h2")[i].innerHTML));
  }
};

// görev 2
gorev2.onclick = function () {
  $("#gorev2 input").val($("article h2").length);
};

// görev 3
gorev3.onclick = function () {
  $("#gorev3 input").val($("h1").text());
};

// görev 4
gorev4.onclick = function () {
  for (let i = 0; i < $("article h2").length; i++) {
    $("article h2")[i].innerHTML +=
      " (" + $("article p")[i].innerHTML.length + " tane karakter)";
  }
};

// görev 5
gorev5.onclick = function () {
  $("article h2:odd").css("color", "orange");
  $("article h2:even").css("color", "blue");
  $("article h1").css("color", "red");
};

// görev 6
gorev6.onclick = function () {
  $("h2:first").fadeOut("slow");
  $("p:first").fadeOut("slow");
};

// görev 7
gorev7.onclick = function () {
  var basliklar = Array.from($("h2:contains('can')"));
  basliklar.forEach((baslik) => {
    $("#gorev7 ul").append("<li>" + baslik.textContent + "</li>");
  });
};
// görev 8
gorev8.onclick = function () {
  var başlık = $("<p>");
  başlık.html("Lorem");
  $("h1").append(başlık);
  var metin = $("<p>");
  metin.addClass("metin");
  $("h1").after(metin);
  $.ajax({
    url: "lorem.html",
    type: "get",
    success: function (sonuç) {
      for (var ad of sonuç) {
        $(".metin").load("lorem.html");
      }
    },
  });
};

// görev 9
$("h2, h1").mouseover(function () {
  var metin = $(this).hover().text();
  $("#gorev9 > input").val(metin);
});

// görev 10
gorev10.onclick = function () {
  var div = $("<div>");
  $("footer").append(div);
  div.addClass("dv");
  $(".dv").prepend(
    '<img class = ".im" src = "check.png" width="100" height="100" style="position: fixed; bottom: 0px; right: 0px;"/>'
  );
};
