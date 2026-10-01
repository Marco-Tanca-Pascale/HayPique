import Publicacion from "./PublicacionModelo"
import Usuario from "./UsuarioModelo"

export const PUBLICACIONES = [
    new Publicacion(
      '1',
      "Pescando Con mi padre en buceo",
      true,      
      'https://media-cdn.tripadvisor.com/media/photo-s/0c/10/a8/ea/faro-y-el-pescador-italiano.jpg',
      'Montevideo',
      'Salimos con mi padre a tratar de pescar algo hoy, a pesar del frio. Nosotros nos aprontamos un mate y nos vinimos al faro del puertito de buceo con dos cañas, estamos bien en la punta',
      'Faro del Puerto de buceo',
      '',
      'marco.tpascale@gmail.com',
      '2024-07-08 07:17:22:000'
    ),
  
    new Publicacion(
        '2',
        'Estamos en punta del este buscando pique',
        true,      
        'https://eldeportivoweb.com/wp-content/uploads/2017/04/17523074_1860686984149092_7948550400224844987_n.jpg',
        'Maldonado',
        'Estamos con cuatro amigos acá en punta del este, nos pegamos una escapadita en la semana para hacer lo que mas nos entretiene. por ahora andamos preparando las cañas, compramos medio kilo de camarones.',
        'Punta del este',
        '',
        'mariano123@gmail.com',
        '2024-07-07 15:30:18:000'
      ),
]

export const USUARIOS = [
    new Usuario(
      'marco.tpascale@gmail.com',
      '1234',
      'MarcoTanca',
      'https://media.licdn.com/dms/image/D4D03AQGeRqNgW_36Qg/profile-displayphoto-shrink_800_800/0/1718228956737?e=1726099200&v=beta&t=jaxBE8Ny99SgMGr9Nj8o0MuIEDxbo6Gc5vLBAFUE-3Y',
      '',
      'Canelones'
    ),
    new Usuario(
      'mariano123@gmail.com',
      '12345',
      'MarianoMattos1962',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9B4jx6-XcWEQbgQBKbGWQxMlZolMHRawWSA&s',
      '',
      'Maldonado',
    ),
]