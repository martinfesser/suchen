function ausgesucht(wert){
	var value = wert.value;
	
	rechtsZurueckSetzen();
	$("<iframe class='mainContent' src='"+value+"' marginwidth='0' marginheight='10' noresize scrolling='auto'></iframe>").appendTo($("#Rechts"));
	
	$("#sb button").each( function( index, element ){
		//console.log( $( this ).text()+" "+ $( this ).val() );
		if($( this ).val()==value){
			$( this ).css("color","white").css("background", "blue");
		}else{
			$( this ).css("color","blue").css("background", "white");
		}
	});
}
		
function sucheAktualisieren(){
	var sidebar = $("#sb").toArray()[0];
	var SuchText = $("#SuchText").toArray()[0].value;
	while (sidebar.lastChild) {
		sidebar.removeChild(sidebar.lastChild);
	}
	var suchErg = Suchen(SuchText);
	$(suchErg).appendTo($("#sb"));
	$("#sb button").css("color","blue").css("background", "white");
	rechtsZurueckSetzen();
	if(suchErg.length==0){
		$("<p><b>Zum Suchbegriff >"+ SuchText + "< wurde kein Suchergebnis gefunden!</b><BR>Verkürzen Sie ggf. den Suchbegriff!<BR></p>").appendTo($("#Rechts"));
	}else{
		$("<p><b>Ergebnisse links.</b></p>").appendTo($("#Rechts"));
	}
}

function rechtsZurueckSetzen(){
	var rechteAnzeige = $("#Rechts").toArray()[0];
	
	if(rechteAnzeige!=undefined){
		while (rechteAnzeige.lastChild) {
			rechteAnzeige.removeChild(rechteAnzeige.lastChild);
		}
	}
}