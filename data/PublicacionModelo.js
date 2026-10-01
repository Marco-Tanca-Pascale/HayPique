class Publicacion {
    constructor(
      id,
      Titulo,
      Estado,
      Imagen,
      Departamento,
      Descripcion,
      Ubicacion,
      UbicacionMaps,
      Usuario_Email,
      Hora,
    ) {
      this.id = id;
      this.Titulo = Titulo;
      this.Estado = Estado;
      this.Imagen = Imagen;
      this.Departamento = Departamento;
      this.Descripcion = Descripcion;
      this.Ubicacion = Ubicacion;
      this.UbicacionMaps = UbicacionMaps;
      this.Usuario_Email = Usuario_Email;
      this.Hora = Hora;
    }
  }
  
  export default Publicacion;