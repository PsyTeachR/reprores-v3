<script>
$( document ).ready(function() {
  var cite = ' ';
  var psyteachr = ' <a href="https://psyteachr.github.io/"><img src="images/logos/psyteachr_logo.png" style="height: 31px; color: white;" alt="psyTeachR: Reproducible Research" /></a>';
  var license = ' <a rel="license" href="https://creativecommons.org/licenses/by-sa/4.0/" target="blank"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png"></a>';

  $("footer div.row div:eq(1) p").html(
    psyteachr + license + cite
  );

  function move_sidebar() {
    var w = window.innerWidth;
    if (w < 992) {
      $("#toc").appendTo($("#main-nav"));
    } else {
      $("#toc").appendTo($("div.sidebar-chapter"));
    }
  }
  move_sidebar();
  window.onresize = move_sidebar;
});


function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
} 

</script>
