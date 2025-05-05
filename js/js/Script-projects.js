$(document).ready(function(){
    console.log("Pagina lista para usar");
    procesarEquipos();
    procesarEtiquetas();

    procesarProyecto();

    $("#idNewProject").on('click',function(){
        //Lanzar modal de formulario de registro de nuevo proyecto
        $("#idModalNewProject").modal('show');        
    });

});

let listaEquipos = [
    {
        id: "E01",
        nombre: "Persona 01"
    },
    {
        id: "E02",
        nombre: "Persona 02"
    },
    {
        id: "E03",
        nombre: "Persona 03"
    },
    {
        id: "E04",
        nombre: "Persona 04"
    },
    {
        id: "E05",
        nombre: "Persona 05"
    }
]

function procesarEquipos(){
    $("#idTeamsProject").empty();
    listaEquipos.forEach(etiqueta => {
        $("#idTeamsProject").append('<option value="'+etiqueta.id+'">'+etiqueta.nombre+'</option>');
    });
}

let listaEtiquetas = [
    {
        id: 1,
        nombre: "Telecomunicaciones"
    },
    {
        id: 2,
        nombre: "Ambientales"
    },
    {
        id: 3,
        nombre: "Naturales"
    },
    {
        id: 4,
        nombre: "Informaticos"
    },
    {
        id: 5,
        nombre: "Legales"
    },
    {
        id: 6,
        nombre: "Transporte"
    },
]

function procesarEtiquetas(){
    $("#idTagsProject").empty();
    listaEtiquetas.forEach(etiqueta => {
        $("#idTagsProject").append('<option value="'+etiqueta.id+'">'+etiqueta.nombre+'</option>');
    });
}

let listaProyectos = [
    {
        idProy : 1,
        titulo : "Mi primer Proyecto",
        descripcion : "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        fechaCreacion : "01-04-2025",
        responsable: "Alumno Certus",
        equipo:["Persona 1", "Persona 2", "Persona 3", "Persona 4"],
        presupuesto:1321321,
        imagen: "https://img.freepik.com/foto-gratis/montanas-vestrahorn-stokksnes-islandia_335224-667.jpg?semt=ais_hybrid&w=740",
        etiquetas : ["Ecología", "Fauna", "Lagos"]
    },
    {
        idProy : 2,
        titulo : "Mi segundo Proyecto",
        descripcion : "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        fechaCreacion : "01-01-2025",
        imagen: "https://img.freepik.com/foto-gratis/montanas-vestrahorn-stokksnes-islandia_335224-667.jpg?semt=ais_hybrid&w=740",
        etiquetas : ["Software", "Sistemas"]
    },
    {
        idProy : 3,
        titulo : "Mi tercer Proyecto",
        descripcion : "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        fechaCreacion : "01-01-2024",
        imagen: "https://media.istockphoto.com/id/1403846937/es/foto/imaginaci%C3%B3n-inspiraci%C3%B3n-ideas-innovaci%C3%B3n-creatividad-motivaci%C3%B3n-tecnolog%C3%ADa.jpg?s=612x612&w=0&k=20&c=FAXED52JpNLjNf9FvWSJmZaXXN61oMK4uYzxMqKxV74=",
        etiquetas : ["Transporte", "Comunicaciones", "Aduanas"]
    },
    {
        idProy : 4,
        titulo : "Mi cuarto Proyecto",
        descripcion : "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        fechaCreacion : "01-05-2024",
        imagen: "https://wallpapers.com/images/featured/imagenes-de-minions-qhq2hsgjf7kh8a2h.jpg",
        etiquetas : ["Energia", "Electricidad", "Voltaje"]
    }
];

function procesarProyecto(){
    debugger
    //Limpiar el contenedor
    $("#idContenedor").empty();
    
    //Reccoriendo el arreglo de proyectos
    listaProyectos.forEach(p => {
        $("#idContenedor").append(
        '<div class="card mb-3 mr-mod idInputc" style="max-width: 540px;">'+
            '<div class="row g-0">'+
                '<div class="col-md-4">'+
                    '<img src="'+p.imagen+'" class="img-fluid rounded-start" alt="'+p.titulo+'">'+
                '</div>'+
                '<div class="col-md-8">'+
                    '<div class="card-body">'+
                        '<h5 class="card-title">'+p.titulo+'</h5>'+
                        '<p class="card-text">'+p.descripcion+'</p>'+
                        '<p class="card-text"><small class="text-body-secondary">'+p.fechaCreacion+'</small></p>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>');
    });
    /*
    for(let p=0; p<listaProyectos.length; p++){
        //Agregar Tarjeta de Proyecto
        $("#idContenedor").append();
    };*/

}


function mostrarConfirmacion(){    
    if (validarFormulario()) {
        $("#idModalConfirmation").modal('show');
    }else{
        alert("Completa el formulario");
    }    
}

function guardarInformacion(){
    let nuevoProyecto = {
        idProy : listaProyectos.length + 1,
        titulo : $("#idTitleProject").val(),
        descripcion : $("#idDescription").val(),
        fechaCreacion : $("#idDateCreated").val(),
        responsable: $("#idLeader").val(),
        equipo: $("#idTeamsProject").val(),
        presupuesto: parseFloat($("#idPrep").val()),
        imagen: $("#idImg").val(),
        etiquetas : $("#idTagsProject").val()
    };

    listaProyectos.push(nuevoProyecto);

    procesarProyecto();

    $("#idModalConfirmation").modal('hide');
    $("#idModalNewProject").modal('hide');

    //Limpiando Inputs
    $("#idTitleProject").val('');
    $("#idDescription").val('');
    $("#idDateCreated").val('');
    $("#idLeader").val('');
    $("#idTeamsProject").val('');
    parseFloat($("#idPrep").val(undefined));
    $("#idImg").val('');
    $("#idTagsProject").val('');   
}


function validarFormulario(){
    let validacion = true;

    //validacion cada input

    let vTitulo = $("#idTitleProject").val();
    if (vTitulo == undefined  || vTitulo == null || vTitulo.trim() == "") {
        validacion = false;
        //$("#eTitleProject").attr('display: block');
    }

    let vDescripcion = $("#idDescription").val();
    if (vDescripcion == undefined  || vDescripcion == null || vDescripcion.trim() == "") {
        validacion = false;
    }

    let vFecha = $("#idDateCreated").val();
    if (vFecha == undefined  || vFecha == null || vFecha.trim() == "") {
        validacion = false;
    }

    let vResponsable = $("#idLeader").val();
    if (vResponsable == undefined  || vResponsable == null || vResponsable.trim() == "") {
        validacion = false;
    }

    let vPresupuesto = $("#idPrep").val();
    if (vPresupuesto == undefined  || vPresupuesto == null || vPresupuesto.trim() == "") {
        validacion = false;
    }
    
    let vImagen = $("#idImg").val();
    if (vImagen == undefined  || vImagen == null || vImagen.trim() == "") {
        validacion = false;
    }

    let vEtiquetas = $("#idTagsProject").val();
    if (vEtiquetas == null || vEtiquetas.length == 0 ) {
        validacion = false;
    }

    let vEquipo = $("#idTeamsProject").val();
    if (vEquipo == null || vEquipo.length == 0 ) {
        validacion = false;
    }

    return validacion;
}