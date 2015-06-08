//JavaScrip Document
$(document).ready(function(e) {
    //watchID se refiere a la aceleracion 'actual'
	
	var watchID = null;
	document.addEventListener("deviceready",Dispositivo_Listo,false);
	
	// Cuando esta listo el dispositivo
	function Dispositivo_Listo() {
		comienza();
	}
	
	//Empieza la 'observacion' de la aceleracion
	function comienza() {
		
		//Actualiza la aceleracion cada 2 segundos
		//
		var opciones = { frequency:2000};
		
		watchID = navigator.accelerometer.watchAcceleration(Correcto, Error, Opciones);
navigator.geolocation.getCurrentPosition(Localiza, ErrorLocalizacion);
	}
	// Detiene la 'observacion' de la aceleracion
	
	function Detente() {
		if (watchID) {
			navigator.accelerometer.clearWatch(watchID);
			watchID = null;
		}
	}
	
	//Correcto: Toma una captura de la aceleracion
	function Correcto(acceleration) {
	var element = document.getElementById('acelerometro');
	
	element.innerHTML = 'Aceleracion en X: ' + acceleration.x + '<br />' +
		                'Aceleracion en Y: ' + acceleration.y + '<br />' +
						'Aceleracion en Z: ' + acceleration.z + '<br />' +
						'Intervalo: ' + acceleration.timestamp + '<br />';
	}
	
	// Error: Falla al obtener la aceleracion
	function Error() {
		alert('Error!');
	}
	// Exito al localizar
	function Localiza(position) {
		var element = document.getElementById('geolocalizacion');
		element.innerHTML = 'Latitud:' + posicion.coords.latitude      +'<br />' +
		                    'Longitud:' + posicion.coords.longitude     +'<br />' +
							'Altitud:' + posicion.coords.altitude      +'<br />' +
							'Preciision:' + posicion.coords.accuracy      +'<br />' +
							'Preciision de Altitud:' + posicion.coords.altitudeAccuracy      +'<br />' +
							'Direccion:' + posicion.coords.heading      +'<br />' +
							'Velocidad:' + posicion.coords.speed      +'<br />' +
							'Intervalo:' + posicion.coords.timestamp      +'<br />';
	}
	//Error en la geolocalizacion
	function ErrorLocalizacion(error) {
		alert('codigo:' + error.code + '\n' +
		'mensaje: ' + error.messaje + '\n');
	}
});//document ready