function lomakeTarkistus() {


  var a = document.forms["kysely"]["nimi"].value;
  var b = document.forms["kysely"]["sukunimi"].value;
  var c = document.forms["kysely"]["lisapalaute"].value;
  var d = document.forms["kysely"]["ika"].value;


// Tarkistaa onko etunimi, sukunimi, syntymävuosi ja lisäpalaute kohdissa tekstiä / numeroita.
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

  if (d < 1900)
 {
    alert("Muista kirjoittaa syntymävuotesi.");
    return false;
  }


  if (c==null || c=="")
 {
    alert("Muista kirjoittaa lisäpalaute");
    return false;
  }


}
