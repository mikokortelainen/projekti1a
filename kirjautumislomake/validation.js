function validateForm() {
  var a = document.forms["kysely"]["nimi"].value;
  var b = document.forms["kysely"]["sukunimi"].value;
  var f = document.forms["kysely"]["lisapalaute"].value;





  if (a==null || a=="")
 {
    alert("1 Kenttä ei saa olla tyhjä.");
    return false;
  }

  if (b==null || b=="")
 {
    alert("2 Kenttä ei saa olla tyhjä.");
    return false;
  }

  if (f==null || f=="")
 {
    alert("6 Kenttä ei saa olla tyhjä.");
    return false;
  }
}
