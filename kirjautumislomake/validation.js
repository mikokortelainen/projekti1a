function validateForm() {
  var a = document.forms["kysely"]["nimi"].value;
  var b = document.forms["kysely"]["sukunimi"].value;
  var c = document.forms["kysely"]["lisapalaute"].value;





  if (a==null || a=="")
 {
    alert("Kirjoita etunimesi.");
    return false;
  }

  if (b==null || b=="")
 {
    alert("Kirjoita sukunimesi");
    return false;
  }

  if (c==null || c=="")
 {
    alert("Muista kirjoittaa lisäpalaute");
    return false;
  }
}
