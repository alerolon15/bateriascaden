"use strict";


var express = require("express");
var expressHandlebars = require("express-handlebars");
var app = express();
var mongoose = require("mongoose");
var hbs = require("handlebars");
var async = require("async");
var bodyParser = require('body-parser')
mongoose.connect('mongodb://localhost/autos')
var db = mongoose.connection;
var Dominio = "";
var session = require("client-sessions");




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//app.use(session({secret:"h17hd87ahhd917793dgasdg6",resave:false,saveUninitialized:true}));
app.use(session({
	cookieName: 'session',
	secret: 'h17hd87ahhd917793dgasdg6',
	duration: 30 * 60 * 1000,
	activeDuration: 5 * 60 * 1000
}));
app.use('/public', express.static('public'));
app.set('view engine','handlebars');
app.engine('html',expressHandlebars());

var userSchema = {
	username: { type: String, unique:true },
	password: { type: String },
};

var User = mongoose.model("User", userSchema);

var clienteSchema = {
	Id: String,
	Nombre: String,
	Apellido: String,
	Telefono: String,
	Correo: String,
	Tipo: String,
	Imp1: String,
	Imp2: String,
	Imp3: String,
	Dominio: String
};

var Cliente = mongoose.model("Cliente", clienteSchema);

var autoSchema = {
	Dominio: { type: String, unique:true },
	Marca: String,
	Modelo: String,
	Combustible: String,
	Anio: Number,
	Test: String,
	Bateria: String,
	Fecha: String,
	Mecanico: String
};

var Auto = mongoose.model("Auto", autoSchema);

var batSchema = {
	_id: { type: String, unique:true },
	marca: String,
	modelo: String,
	imagen: String,
	voltaje: String,
	amperaje: String,
	cca: String,
	rc: String,
	borne: String,
	medidas: {alto: String, ancho: String, largo: String},
	precio: String

};

var Bateria = mongoose.model("Bateria", batSchema);


app.get('/login',function(req,res){
		req.session.reset();
		var options = {
        layout:"layout.html",
        hide: "hide"
    };
    res.render('login.html',options);

});

app.post('/login',function(req,res){

	var username = req.body.username;
	var password = req.body.password;

	User.findOne({username: username, password: password}, function(err,users){
		if(err){
			console.log(err);
			return res.status(500).send();
			req.session.reset();
		}
		if(!users) {
			req.session.reset();
			var options = {
				layout:"layout.html",
        		error: "<div class='alert alert-danger' role='alert'>El usuario o la contraseña no son correctas</div>"
			}
			return res.render('login.html',options)
		}
		if(users.username === "admin") {
			req.session.user = users;
			return res.redirect('/admin')}

		req.session.user = users;
    	res.redirect('/');
});
});


app.get('/',function(req,res){
	if(req.session && req.session.user){		
	Auto.find({},{_id:0,Dominio:1},function(err,autos){
		if(err){console.log(err)}

		var options = {
        layout:"layout.html",
        autos
    };

    res.render('index.html',options);
});
	}else{
		res.redirect("/login")
	};
});

app.get('/admin',function(req,res){
	if(req.session && req.session.user){
    Auto.count({},function(err,dominios){
		if(err){console.log(err)}

	Bateria.count({},function(err,baterias){
		if(err){console.log(err)}

	Cliente.count({},function(err,clientes){
		if(err){console.log(err)}

		
	var options = {
        layout:"dashboard.html",
        dominios,
        baterias,
        clientes
    };
    res.render('admin.html',options);
});
});
});
	}else{
		res.redirect("/login")
	};
});

app.get('/tablaautos',function(req,res){
	if(req.session && req.session.user){
	var busca = req.body;
	Auto.find({},function(err,docu){
		if(err){console.log(err)}

	var todos = [];
	for (var i = docu.length - 1; i >= 0; i--) {
		todos[i] = docu[i];
	};
		
	var options = {
        layout:"dashboard.html",
        auto: docu,
        todos
    };

    res.render('tablaautos.html',options);
	});
	}else{
		res.redirect("/login")
	};
});


app.get('/tablabaterias',function(req,res){
	if(req.session && req.session.user){
    Bateria.find({},function(err,docus){
		if(err){console.log(err)}
		
	var options = {
        layout:"dashboard.html",
        bat: docus
    };
    res.render('tablabaterias.html',options);
});
	}else{
		res.redirect("/login")
	};
});

app.get('/tablaclientes',function(req,res){
	if(req.session && req.session.user){
	var busca = req.body;
	Cliente.find({},function(err,docu){
		if(err){console.log(err)}

	var todos = [];
	for (var i = docu.length - 1; i >= 0; i--) {
		todos[i] = docu[i];
	};
		
	var options = {
        layout:"dashboard.html",
        cliente: docu,
        todos
    };

    res.render('tablaclientes.html',options);
	});
	}else{
		res.redirect("/login")
	};
});

app.get('/agregarbaterias',function(req,res){
	if(req.session && req.session.user){
    Bateria.find({},function(err,docus){
		if(err){console.log(err)}
		
	var options = {
        layout:"dashboard.html",
        bat: docus
    };
    res.render('registrobaterias.html',options);
});
    }else{
		res.redirect("/login")
	};
});

app.post('/agregarbaterias',function(req,res){


	var data = {
	_id: req.body.Codigo,
	marca: req.body.Marca,
	modelo: req.body.Modelo,
	imagen: "public/images/" + req.body.Marca + ".png",
	voltaje: req.body.Voltaje,
	amperaje: req.body.Amperaje,
	cca: req.body.CCA,
	rc: req.body.RC,
	borne: req.body.Borne,
	medidas: {alto: req.body.Alto, ancho: req.body.Ancho, largo: req.body.Largo},
	precio: req.body.Precio
	};

    var bateria = new Bateria(data);

	bateria.save(function(err){
		console.log(bateria);
	});
    
    res.redirect('/admin');
});

app.get('/agregarcliente',function(req,res){
	if(req.session && req.session.user){
    Cliente.find({},function(err,docus){
		if(err){console.log(err)}
		
	var options = {
        layout:"dashboard.html",
        bat: docus
    };
    res.render('registroclientes.html',options);
});
    }else{
		res.redirect("/login")
	};
});

app.post('/agregarcliente',function(req,res){

	var data = {
	Id: req.body.Id,
	Nombre: req.body.Nombre,
	Apellido: req.body.Apellido,
	Telefono: req.body.Telefono,
	Correo: req.body.Correo,
	Tipo: req.body.Tipo,
	Imp1: req.body.Imp1,
	Imp2: req.body.Imp2,
	Imp3: req.body.Imp3,
	Dominio: req.body.Dominio
	};

    var cliente = new Cliente(data);

	cliente.save(function(err){
		console.log(cliente);
	});
    
    res.redirect('/admin');
});

app.get('/graficos',function(req,res){
    if(req.session && req.session.user){
    Auto.count({Bateria:"BAT001"},function(err,dominios){
		if(err){console.log(err)}

	Bateria.count({},function(err,baterias){
		if(err){console.log(err)}

		
	var options = {
        layout:"dashboard.html",
        dominios,
        baterias
    };
    res.render('graficos.html',options);
});
});
    }else{
		res.redirect("/login")
	};
});

app.get('/agregarautos',function(req,res){
	if(req.session && req.session.user){
	Auto.find({},{_id:0,Dominio:1},function(err,autos){
		if(err){console.log(err)}
	Bateria.find({},function(err,todas){
		if(err){console.log(err)}
    Bateria.find({marca: "Caden"},function(err,caden){
		if(err){console.log(err)}
	Bateria.find({marca: "Moura"},function(err,moura){
		if(err){console.log(err)}
	Bateria.find({marca: "ACDelco"},function(err,acdelco){
		if(err){console.log(err)}
		
	var options = {
        layout:"dashboard.html",
        post: "/registro2",
        caden: caden,
        moura: moura,
        acdelco: acdelco,
        tam: "3",
        todas,
        autos
    };

    res.render('registro.html',options);
	});
});
});
});
});
	}else{
		res.redirect("/login")
	};
});


app.post('/consulta', function(req,res){
	var busca = req.body;
	Auto.find(busca,function(err,docu){
		if(err){console.log(err)}
	Cliente.find(busca,function(err,cliente){
		if(err){console.log(err)}


	var urltest = "public/archivo/";
	var options = {
        layout:"layout.html",
        Dominio: req.body.Dominio,
        auto: docu[0],
        urltest,
        cliente: cliente[0]
    };
	res.render('consulta.html',options);
	
	});
});
});

app.get('/registro',function(req,res){
	if(req.session && req.session.user){
	Auto.find({},{_id:0,Dominio:1},function(err,autos){
		if(err){console.log(err)}
	Bateria.find({},function(err,todas){
		if(err){console.log(err)}
    Bateria.find({marca: "Caden"},function(err,caden){
		if(err){console.log(err)}
	Bateria.find({marca: "Moura"},function(err,moura){
		if(err){console.log(err)}
	Bateria.find({marca: "ACDelco"},function(err,acdelco){
		if(err){console.log(err)}
		
	var options = {
        layout:"layout.html",
        post: "/registro1",
        caden: caden,
        moura: moura,
        acdelco: acdelco,
        tam: "4",
        autos,
        todas,
        Dominio2: req.body.Dominio1

    };
    res.render('registro.html',options);
});
});
});
});
});
	}else{
		res.redirect("/login")
	};
});
app.post('/registro',function(req,res){
	if(req.session && req.session.user){
	Auto.find({},{_id:0,Dominio:1},function(err,autos){
		if(err){console.log(err)}
	Bateria.find({},function(err,todas){
		if(err){console.log(err)}
    Bateria.find({marca: "Caden"},function(err,caden){
		if(err){console.log(err)}
	Bateria.find({marca: "Moura"},function(err,moura){
		if(err){console.log(err)}
	Bateria.find({marca: "ACDelco"},function(err,acdelco){
		if(err){console.log(err)}
		

	var options = {
        layout:"layout.html",
        post: "/registro1",
        caden: caden,
        moura: moura,
        acdelco: acdelco,
        tam: "4",
        autos,
        todas,
        Dominio2: req.body.Dominio1
    };
    res.render('registro.html',options);
});
});
});
});
});
	}else{
		res.redirect("/login")
	};
});

app.post('/registro1',function(req,res){
	var today = new Date();

	var data = {
	Dominio: req.body.Dominio,
	Marca: req.body.Marca,
	Modelo: req.body.Modelo,
	Combustible: req.body.Combustible,
	Anio: req.body.Anio,
	Test: req.body.Test,
	Bateria: req.body.Bateria,
	Fecha: today.toISOString().substring(0, 10),
	Mecanico: req.body.Mecanico
	};
    var options = {
        layout:"dashboard.html",
    };
    var auto = new Auto(data);

	auto.save(function(err){
		console.log(auto);
	});
    
    res.redirect('/');
});

app.post('/registro2',function(req,res){
	var today = new Date();

	var data = {
	Dominio: req.body.Dominio,
	Marca: req.body.Marca,
	Modelo: req.body.Modelo,
	Combustible: req.body.Combustible,
	Anio: req.body.Anio,
	Test: req.body.Test,
	Bateria: req.body.Bateria,
	Fecha: today.toISOString().substring(0, 10),
	Mecanico: req.body.Mecanico
	};
    var options = {
        layout:"dashboard.html",
    };
    var auto = new Auto(data);

	auto.save(function(err){
		console.log(auto);
	});
    
    res.redirect('/admin');
});


app.post('/actualizar',function(req,res){
	Bateria.find({},function(err,docus){
		if(err){console.log(err)}
	Bateria.find({},function(err,todas){
		if(err){console.log(err)}
	Bateria.find({marca: "Caden"},function(err,caden){
		if(err){console.log(err)}
	Bateria.find({marca: "Moura"},function(err,moura){
		if(err){console.log(err)}
	Bateria.find({marca: "ACDelco"},function(err,acdelco){
		if(err){console.log(err)}

	var bats = [];
	for (var i = docus.length - 1; i >= 0; i--) {
		bats[i] = docus[i];
	};
	var busca = req.body;
	Auto.find(busca,function(err,docu){
		if(err){console.log(err)}
	var options = {
        layout:"layout.html",
        post: "/actualizado",
        Dominio: req.body.Dominio,
        auto: docu[0],
        bat: docus,
        bats,
        caden: caden,
        moura: moura,
        acdelco: acdelco,
        todas

    };
    res.render('actualizar.html',options);
	});
});
});
});
});
});
});

app.post('/actualizarautos',function(req,res){
	Bateria.find({},function(err,docus){
		if(err){console.log(err)}
	Bateria.find({},function(err,todas){
		if(err){console.log(err)}
	Bateria.find({marca: "Caden"},function(err,caden){
		if(err){console.log(err)}
	Bateria.find({marca: "Moura"},function(err,moura){
		if(err){console.log(err)}
	Bateria.find({marca: "ACDelco"},function(err,acdelco){
		if(err){console.log(err)}

	var bats = [];
	for (var i = docus.length - 1; i >= 0; i--) {
		bats[i] = docus[i];
	};
	var busca = req.body;
	Auto.find(busca,function(err,docu){
		if(err){console.log(err)}
	var options = {
        layout:"dashboard.html",
        post: "/actualizado2",
        Dominio: req.body.Dominio,
        auto: docu[0],
        bat: docus,
        bats,
        caden: caden,
        moura: moura,
        acdelco: acdelco,
        todas

    };
    res.render('actualizar.html',options);
	});
});
});
});
});
});
});

app.post('/borrarautos',function(req,res){

	var busca = req.body;
	Auto.remove(busca,function(err,docu){
		if(err){console.log(err)}

    res.redirect('/tablaautos');
	});
	});

app.post('/borrarbaterias',function(req,res){

	var busca = req.body;
	Bateria.remove(busca,function(err,docu){
		if(err){console.log(err)}
			console.log(docu)

    res.redirect('/tablabaterias');
	});
	});

app.post('/borrarcliente',function(req,res){

	var busca = req.body;
	Cliente.remove(busca,function(err,docu){
		if(err){console.log(err)}
			console.log(docu)

    res.redirect('/tablaclientes');
	});
	});

app.post('/actualizarbaterias',function(req,res){

	var busca = req.body;
	Bateria.find(busca,function(err,docu){
		if(err){console.log(err)}

	var options = {
        layout:"dashboard.html",
        bateria: docu[0]
    };

    res.render('actualizarbateria.html',options);
	});
	});

app.post('/actualizarbat',function(req,res){

	var data = {
	_id: req.body.Codigo,
	marca: req.body.Marca,
	modelo: req.body.Modelo,
	imagen: "public/images/" + req.body.Marca + ".png",
	voltaje: req.body.Voltaje,
	amperaje: req.body.Amperaje,
	cca: req.body.CCA,
	rc: req.body.RC,
	borne: req.body.Borne,
	medidas: {alto: req.body.Alto, ancho: req.body.Ancho, largo: req.body.Largo},
	precio: req.body.Precio
	};

	Bateria.update({_id: req.body.Codigo},
		data, function(err){
			if(err){console.log(err)}
		});

    res.redirect('/tablabaterias');
	});

app.post('/actualizarcliente',function(req,res){

	var busca = req.body;
	Cliente.find(busca,function(err,docu){
		if(err){console.log(err)}

	var options = {
        layout:"dashboard.html",
        cliente: docu[0]
    };

    res.render('actualizarcliente.html',options);
	});
	});

app.post('/actualizarcli',function(req,res){

	var data = {
	Id: req.body.Id,
	Nombre: req.body.Nombre,
	Apellido: req.body.Apellido,
	Telefono: req.body.Telefono,
	Correo: req.body.Correo,
	Tipo: req.body.Tipo,
	Imp1: req.body.Imp1,
	Imp2: req.body.Imp2,
	Imp3: req.body.Imp3,
	Dominio: req.body.Dominio
	};

	Cliente.update({Id: req.body.Id},
		data, function(err){
			if(err){console.log(err)}
		});

    res.redirect('/tablaclientes');
	});

app.post('/actualizado',function(req,res){
	var today = new Date();

	var data = {
	Dominio: req.body.Dominio,
	Marca: req.body.Marca,
	Modelo: req.body.Modelo,
	Combustible: req.body.Combustible,
	Anio: req.body.Anio,
	Test: req.body.Test,
	Bateria: req.body.Bateria,
	Fecha: today.toISOString().substring(0, 10),
	Mecanico: req.body.Mecanico
	};
	

	Auto.update({Dominio: req.body.Dominio},
		data, function(err){
			if(err){console.log(err)}
		});

    res.redirect('/');
	});

app.post('/actualizado2',function(req,res){
	var today = new Date();

	var data = {
	Dominio: req.body.Dominio,
	Marca: req.body.Marca,
	Modelo: req.body.Modelo,
	Combustible: req.body.Combustible,
	Anio: req.body.Anio,
	Test: req.body.Test,
	Bateria: req.body.Bateria,
	Fecha: today.toISOString().substring(0, 10),
	Mecanico: req.body.Mecanico
	};
	

	Auto.update({Dominio: req.body.Dominio},
		data, function(err){
			if(err){console.log(err)}
		});

    res.redirect('/tablaautos');
	});




app.listen(80,function(){
    console.log("El Servidor esta listo");
});