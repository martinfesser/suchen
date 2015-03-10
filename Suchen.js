// Suchfunktion zum suchen in der Indextabelle

function Suchen(SuchText) {
   var SuchTextGross = "";
   var AnzErg = 0;
   var Erg = "";
   var TabZeile = "";
   var gefunden = true;
   var i = 0;
   var j = 0;
   var k = 0;

   var Text = new Array();
       Text[0]=new Array("*");
       Text[1]=new Array("");
       Text[2]=new Array("");
       Text[3]=new Array("");
       Text[4]=new Array("");

// ************ Tabelle der Suchargumente aus den Eingabewerten füllen
   SuchTextGross = SuchText.toUpperCase();
   Text[0] = SuchTextGross;
   if (Text[0]!="*") {
      i = 0;
      if (SuchTextGross.length>1) {
         k = 0;
         while ((k<Text.length) && (i<SuchTextGross.length)) {
            j = SuchTextGross.indexOf(" ", i);
            if (j == -1) {
               j = SuchTextGross.length;
            }
            if (i!=j) {
              Text[k] = SuchTextGross.substring(i, j);
              k++;
            }
            i = j + 1;
         }
      }
   }


// *************** Suchtabelle auf die Suchargumente hin durchsuchen
   for (i=0; (i<SuchTab.length) && (AnzErg<50); i++) {
      TabZeile = SuchTab[i][1,0].toUpperCase();
      gefunden = true;
      $.each(Text, function(index, value){
          if ((value.length!=0) && (value!= "*")) {
               if (TabZeile.indexOf(value)==-1) {
                  gefunden = false;
               }
            }
      });

      if (gefunden) {
         Erg = Erg + "<li><button type='button' onclick='ausgesucht(this);' value='" + SuchTab[i][0,1] + "'>" + SuchTab[i][1,0] + "</button></li>";
         AnzErg ++;
      }
   }

   return Erg;

}            // Ende Suchen
        
