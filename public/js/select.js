var _this = this;
//defino una serie de varibles Array para cada marca
var modelos_Agrale=new Array("Seleccione Modelo", "6000 RD C/Doble ","6000 RD Furgovan ","7500 RD E Mec.","7500 CD E Mec. C/Doble ","1600 Omnibus/ Furgon","8500 TCE E-Tronic  ","9200 TCA C/Simple","TX 1600")
var modelos_AlfaRomeo=new Array("Seleccione Modelo","145/146 1.8","145/146 2.0 ","145/146 2.0 Turbo ","155/164 2.0 ","156 2.0 ","156 2.4 Turbo ","164 V6 3.0 ","Giuletta","Mito")
var modelos_Ford=new Array("Seleccione Modelo","Courier","Cargo -712/28 -914 -915 ","Cargo 85 al 90","Cargo 814/ 815 ","Cargo -1716 -1721/43 -1722/35 -1730/48 ","Cargo -1831/37SA -1832/37e ","Cargo -2625/41 -2631/41 -2632/41e","EcoSport","EcoSport Titanium","Escort","Escort >92","Escort 96>","Explorer","F100","F100 3.9/4.2/4.9","F100 Maxion","F100 MWM","F100 Perkins","F-14000 -H.D-44 -H.D-49 -H.D-53","F-4000 -523 R -524 R ","F4000/ F250/ F350 98 al 02","F4000/ F250/ F350  ap05 ","Falcon","Fiesta / Courrier","Fiesta  Kinetic","Focus","Galaxy","Ka","Kuga","Mondeo","Mondeo 2.2","Orion","Ranger","Ranger 2015","Sierra","Taunus","Transit 2013 ","Transit")
var modelos_Peugeot=new Array("Seleccione Modelo","106","205","205","206","206","207","207","2008","306","306","307","308","405","405","406","406","407","408","504","504","505","505","605","806","807","207 HDI","307 HDI","407 HDI","Boxer","Boxer 1.9","Expert","Partner","Partner/Boxer","RCZ","SS")
var modelos_Toyota=new Array("Seleccione Modelo","Auris","Verso","Avensis","Etios","Corolla","GT86","RAV4","Land Cruiser","Hilux","Prius","Aygo","Yaris","ProAce")
var modelos_Audi=new Array("Seleccione Modelo","A1","A3 1.8T","A3 1.9 TDI","A4 1.8T","A4 1.9 TDI","A4 2.8","A6 2.4/2.8","A8 4.2","Quatro","Quatro 3.4","TT")
var modelos_BMW=new Array("Seleccione Modelo","318","740","540","316/320/328","320/325","520/525/523/528","M3","M5","X5","X6","Z4","Z3 1.9/ 2.8")
var modelos_Fiat=new Array("Seleccione Modelo","Ducato 1.9/2.5","Duna 1.3/1.4/1.5/1.6","Duna 1.3/1.7","Eurocargo 120/150/160","Eurotrakker","Fiorino 1.3","Fiorino 1.7","Idea","Linea","Marea","Nuevo UNO","Palio 1.6 16v","Palio TD","Punto","Regatta","Siena 1.6","Siena 16V","Siena TD","Spazio","Strada","Tempra","Tipo","Uno 1.3/1.4/1.5/1.6","Uno 1.7")
var modelos_Crevrolet=new Array("Seleccione Modelo","Agile - 1.4 LS 5Ptas.","Astra 2,0","Astra","Aveo","Blazer 2.5 Maxion","Blazer ","Blazer 2.8 MWM","Traker","Captiva","Celta","Corsa ","Cobalt","Cruze","D20 ","Grand Blazer ","Kadett","LUV ","Meriva 1.8/1.8 16v","Meriva 1,7 TDi","Montana","Monza","Prisma","Spin","S10 ","S10  2.8 MWM","Silverado","Tigra","Spark","Vectra","Vitara","Onix","Zafira 2.0/2.0 16v","Zafira")
var modelos_Asia=new Array("Seleccione Modelo","Hi Topic")
var modelos_Chery=new Array("Seleccione Modelo", "QQ","Face","Tigo")
var modelos_Citroen=new Array("Seleccione Modelo","AX","Berlingo","BX","C3","C4","C4 Lunge","C4 Picasso","C5","C15","Jumper","Saxo","Xantia","XSara Picasso","Xsara 1.9TD","ZX 1.8","ZX 1.9 TD","ZX 2.0")
var modelos_Chrysler=new Array("Seleccione Modelo","300","Caravan","Cherokee","Dakota 2.5","Dakota 3.9","Grand Cherokee","Journey","Pt Cruiser","Neon Nuevo","Neon")
var modelos_Dacia=new Array("Seleccione Modelo", "Pick Up", "TLX 1410")
var modelos_Daewoo=new Array("Seleccione Modelo","Cielo","Damas/Labo","Espero","Lanos","Lenganza","Matiz","Nugira","Tacuma","Tico","Racer")
var modelos_Daihatsu=new Array("Seleccione Modelo","Applause","Coupe 2.0","Cuore","Charmant","Charade","Dakota 2.5","Delta","Feroza","Move","Rocky","Sirion","Terios","Tico","D1416","D1725","D1721","V 116 s/Caja","V 118 c/Caja volcador","V 118 s/Caja ","Furgón D -Route Techo Alto ","Furgón D -Route Techo Bajo","Minibus - 24 Px Base","Minibus - 24 Px Full")
var modelos_Honda=new Array("Seleccione Modelo","Accord","City","Civic","New Civic","CRV","Fit","Passport","Pilot","Prelude")
var modelos_Hyundai=new Array("Seleccione Modelo","Accent","Atos","Elantra 2.0","Elantra 2.0","Excel","Galloper TD 2.5XL","I 10 Motor 1.2","Scoupe","H 1 Minibus 12 Pas (85hp) ","H 1 Minibus 12 Pas 2.5 (100hp) ","H 100 Minibus  ","H 100 Van ","H 100 Ambulancia ","H 100 Truck GLS 1Ton c/caja","H 250 Corto ","H 250 Largo ","H 350 - s/caja ","HD65 - Corto ","HD65 -Largo c/caja AA ","HD72 - DLX 3.2 TCI EURO II ","HD78 - D4DD 3.9 CRDi Chasis","Santa Fe","Veracruz","Scoupe","TUCSON 2.0","Sonata")
var modelos_Isuzu=new Array("Seleccione Modelo","Amigo","Pickup 2.5TD","Pickup 2.5TD /3.1TD","Rodeo","Trooper")
var modelos_Iveco=new Array("Seleccione Modelo","Daily 35-10/49-10/59-12","Daily 49.10/40.80/45.10","Eurocargo ","Eurotech","Eurotracker","Stralis -200/380","Stralis -450/490","Stralis -570","Stralis -740","Tector -170/","Tector -240/260 ","New Tector -170E25")
var modelos_Jeep=new Array("Seleccione Modelo","Cherokee ","Cherokee  Clasic ","Wrangler","Jaguar","XF","Compass","XKR")
var modelos_Kia=new Array("Seleccione Modelo","Besta","Carens","Carnival","K-2500/2700","Picanto","Pride","Sephia/Sportage","SEPHIA ","Sorento","Sportage")
var modelos_LandRover=new Array("Seleccione Modelo","Defender 90/110","Discovery","Discovery V6i","Freelander","Freelander","Rover 2.5","Rover 4.0/4.6")
var modelos_Mazda=new Array("Seleccione Modelo","323","121","626","929","B 2500","B Serie","MX3","MX6","RX7","MX-5 Miata")
var modelos_MercedesBenz=new Array("Seleccione Modelo","1114","1215","1420","1615/1620/1622/1633","1715/1722","1817/1818/1521","1938/1941/1945","Camiones 619/687/190AN/190 T","Camiones 710","Camiones 915","Clase A 160/190","Clase B 170/200","Clase C 200/280","Clase C 220","Clase C 240","Clase E ","Clase E 300","Clase E 320/430","Clase M 230/320","Clase S 300","Clase S 320/500/600","Clase SLK","Clase CLC","CLK 230K/320/430","GLK","Kompresor","MB180","Micro BR 116","Micro K112/113","Micro OHL/1315/1420","Omnibus","Omnibus 362/362A/37Q/1113/1313/1316","R112/113","SL 280/320/500/600","SLK 230/230K","Sprinter","T112/113","Vito / Viano")
var modelos_MiniCooper=new Array("Seleccione Modelo", "Cooper")
var modelos_Mitsubishi=new Array("Seleccione Modelo","Colt","Eclipse","I200","I300","Galant","L200/L300","L400 Van","Lancer","Montero 2.8","Montero 3.5 V6","Nativa","Outlander","Pajero","Space Wagon")
var modelos_NewHolland=new Array("Seleccione Modelo","4630/5030/5630/6630/7630/7830/8030","Tractores 8630DT/8830DT")
var modelos_Nissan=new Array("Seleccione Modelo","100NX","200SX","Frontier","Maxima","Pathfinder","Primera","Pickup","Sentra","Terrano/SerenaSLX/Patrol","Tiida","Xterra/Xtrail")
var modelos_Renault=new Array("Seleccione Modelo","Clio","Clio 2","Express","Fluence","Fuego","Kangoo","Koleos","Laguna","Laguna RT/RXE","Laguna RXT","Logan","Master 2.5","Megane","Megane II","Megane III","R18","R19","R9/11/12/18/21 (base)","R9/11/12/18/21 (full)","Sandero","Scenic","Scenic II","Symbol","Trafic","Twingo","Magnum -AE 430/440 ","MS -300 ","Premium -300/320/330/340/370/380/385","Premium -420","Kerax -440.34")
var modelos_Rover=new Array("Seleccione Modelo","214/216/220/414/416/420","420D","620","820")
var modelos_Saab=new Array("Seleccione Modelo","340FSX","9.3 2.0/2.3","900","9000","Concept","Phoenix")
var modelos_Scania=new Array("Seleccione Modelo","P 310 ","P 270 ","P 114/124 ","R 114/124 ","T 114/124","P340/P310","R340/R380 ","R420 ","P420 ","G340/G380","G420/G470","R470 ","R500 ","P270 ","Omnibus ","L111")
var modelos_Seat=new Array("Seleccione Modelo","Cordoba 1.6","Cordoba 1.9D/TD/TDI","Ibiza 1.6/1.8/2.0","Inca","Leon","Toledo 1.6/1.8/2.0","Toledo 1.9")
var modelos_SsangYong=new Array("Seleccione Modelo","Action","Actyon Sport","Korando","Musso","Stavic")
var modelos_Subaru=new Array("Seleccione Modelo","Impreza 2.0/2.0 Turbo","Club","Forester","Justy","Tribeca","Legacy","Outback")
var modelos_Suzuki=new Array("Seleccione Modelo","Baleno","Fun 1.0 / 1.4 s/ AC","Fun 1.0 / 1.4 c/ AC","Grand Vitara 2.0","Grand Vitara 2.0","Swift","Sidekicks","Jimmy","Swift","Vitara 1.6")
var modelos_Toyota=new Array("Seleccione Modelo","Camry 2.2","Bandeirantes","Celica","Corolla","Corolla 1.6","Corona","Corona 2.0","Hilux 2.8 Diesel","Hilux SW4 3.0TD","Hilux SW4 V6","Land Cruiser 200","Land Cruiser Prado","Previa","Prius","RAV4")
var modelos_Valmet=new Array("Seleccione Modelo", "Tractores 685/785/885/985")
var modelos_Volvo=new Array("Seleccione Modelo","740","9000","740/760","850 TDI","940/960","C70","Cheyenne","FH -400/440/480/520 ","FM -370 ","FM -400/440/480 ","FM11 -370 ","FH12 -340/380 ","FH12 -420/460 ","FM12 -340","NH12 -380","NH12 -460 ","VM -210/260 ","VM -310 ","VM17 -240 ","VM23 -210/240 ","NL10 -320 ","NL320/340/ 360/ 410","S40/V40","S70","S70 10V / T5","S80 2.9 / T6")
var modelos_VolksWagen=new Array("Seleccione Modelo","15-160/35","15-160/43","15-160/48","17-220/35","17-220/43","17-220/48","17-300/35","17-300/43","26-260/34","8150","9-140","Amarok","Bora 1.9 TD","Bora 2.0/ 1.8T","Bora 2.0 2008","Caddy","Caddy nueva","CrossFox","Fox","Gol/Polo/Country ","Gol/Polo (Base)","Gol/Polo (Full)","Gol Trend /Voyage","Golf","Golf GTD (95>98)","Golf TDI (99>)","New Beetle","Kombi","Passat 1.8T/VR6 ","Passat 2.0 (95>97)","Passat TDI (96>)","Passat VR6 ","Pointer","Polo (99>)","Polo Nuevo","Quantum","Saveiro","Santana","Senda / Gacel","Sharan","Sharan 1.9","Suran 1.9","Suran","Transporter 1.9/2.4","Tiguan","Touareg","Vento Variant","Vento","Voyage")


//función que cambia los modelos del select de modelo en función de la marca que se haya escogido en el select de marca.
function cambia_modelo(){
	//tomo el valor del select de marca elegido
	var Marca
	Marca = document.f1.Marca[document.f1.Marca.selectedIndex].value
	//miro a ver si la marca está definido
	if (Marca != 0) {
		//si estaba definido, entonces coloco las opciones de los modelos correspondiente.
		//selecciono el array de modelo adecuado
		mis_modelos=eval("modelos_" + Marca)
		//calculo el numero de modelo
		num_modelos = mis_modelos.length
		//marco el número de modelo en el select
		document.f1.Modelo.length = num_modelos
		//para cada modelo del array, la introduzco en el select
		for(i=0;i<num_modelos;i++){
		   document.f1.Modelo.options[i].value=mis_modelos[i]
		   document.f1.Modelo.options[i].text=mis_modelos[i]
		}	
	}else{
		//si no había modelo seleccionado, elimino los modelos del select
		document.f1.Modelo.length = 1
		//coloco un guión en la única opción que he dejado
		document.f1.Modelo.options[0].value = ""
	    document.f1.Modelo.options[0].text = ""
	}
	//marco como seleccionada la opción primera de modelos
	document.f1.Modelo.options[0].selected = true
}

function catalogo(){
	if($( "#catalogo" ).hasClass( "hide" )){
		document.getElementById('catalogo').classList.remove('hide')
	}else {document.getElementById('catalogo').classList.add('hide')}
};

function filtro(selector){
	if($( ".sel" ).hasClass( "active" )){
		$( ".sel" ).removeClass( "active" );
		$( selector ).addClass("active");

	if($('#Todos').hasClass('active')){
		$('.catalog').removeClass('hide');
	}else
		$('.catalog').addClass('hide');
		$("." + $( selector )[0].id).removeClass("hide");
	}
};