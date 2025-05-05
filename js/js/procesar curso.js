$(document).ready(function(){
    console.log("Página lista para usar");
    procesarCursos();  // Muestra los cursos existentes

    $("#idNewCourse").on('click', function(){
        // Mostrar el modal para crear un nuevo curso
        $("#idModalNewCourse").modal('show');
    });

    // Agregar el evento para el formulario de nuevo curso
    $("#formCourse").on('submit', function(event) {
        event.preventDefault();  // Prevenir el envío tradicional del formulario
        guardarCurso();  // Guardar el curso
    });
});

let listaCursos = [
    {
        idCurso: 1,
        titulo: "Curso de JavaScript",
        descripcion: "Curso introductorio a JavaScript.",
        fechaCreacion: "01-04-2025",
        responsable: "Carlos Pérez",
        estudiantes: ["E01", "E02"],
        imagen: "https://img.freepik.com/foto-gratis/montanas-vestrahorn-stokksnes-islandia_335224-667.jpg?semt=ais_hybrid&w=740",
        temas: ["Variables", "Funciones", "Objetos"],
        duracion: 10,
        notaMinima: 11
    },
    // Otros cursos
];

function procesarCursos(){
    $("#idContenedorCursos").empty();  // Limpiar el contenedor de cursos
    
    listaCursos.forEach(curso => {
        $("#idContenedorCursos").append(
            '<div class="card mb-3 mr-mod idInputc" style="max-width: 540px;">' +
                '<div class="row g-0">' +
                    '<div class="col-md-4">' +
                        '<img src="'+curso.imagen+'" class="img-fluid rounded-start" alt="'+curso.titulo+'">' +
                    '</div>' +
                    '<div class="col-md-8">' +
                        '<div class="card-body">' +
                            '<h5 class="card-title">'+curso.titulo+'</h5>' +
                            '<p class="card-text">'+curso.descripcion+'</p>' +
                            '<p class="card-text"><small class="text-body-secondary">'+curso.fechaCreacion+'</small></p>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>'
        );
    });
}

function guardarCurso(){
    let nuevoCurso = {
        idCurso: listaCursos.length + 1,  // Generar nuevo ID
        titulo: $("#idTitleCourse").val(),
        descripcion: $("#idDescription").val(),
        fechaCreacion: $("#idDateCreated").val(),
        responsable: $("#idInstructor").val(),
        estudiantes: $("#idStudents").val(),  // Obtener los estudiantes seleccionados
        imagen: $("#idImgCourse").val(),  // Imagen
        temas: $("#idTopics").val().split(','),  // Convertir los temas en un arreglo
        duracion: parseInt($("#idDuration").val()),
        notaMinima: parseFloat($("#idMinGrade").val())
    };

    listaCursos.push(nuevoCurso);  // Agregar el curso al arreglo de cursos

    procesarCursos();  // Mostrar los cursos actualizados

    // Limpiar el formulario
    $("#idTitleCourse").val('');
    $("#idDescription").val('');
    $("#idDateCreated").val('');
    $("#idInstructor").val('');
    $("#idStudents").val('');
    $("#idImgCourse").val('');
    $("#idTopics").val('');
    $("#idDuration").val('');
    $("#idMinGrade").val('');
    $("#idModalNewCourse").modal('hide');
}

function validarFormularioCurso(){
    let validacion = true;

    // Validar los campos obligatorios del formulario
    if ($("#idTitleCourse").val().trim() === "") validacion = false;
    if ($("#idDescription").val().trim() === "") validacion = false;
    if ($("#idDateCreated").val().trim() === "") validacion = false;
    if ($("#idInstructor").val().trim() === "") validacion = false;
    if ($("#idStudents").val().length === 0) validacion = false;
    if ($("#idImgCourse").val().trim() === "") validacion = false;
    if ($("#idTopics").val().trim() === "") validacion = false;
    if ($("#idDuration").val().trim() === "") validacion = false;
    if ($("#idMinGrade").val().trim() === "") validacion = false;

    return validacion;
}