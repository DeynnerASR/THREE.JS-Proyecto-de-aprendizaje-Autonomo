import * as THREE from 'three'


const canvas = document.getElementById('c');

const renderizador = new THREE.WebGLRenderer({antialias: true, canvas})

const aspectosCamara = {
    fov: 75,
    aspecto: 2,
    cerca: 0.1,
    lejania: 5,
}

const camara = new THREE.PerspectiveCamera(
                aspectosCamara.fov,
                aspectosCamara.aspecto,
                aspectosCamara.cerca,
                aspectosCamara.lejania
                )

// Configurando la posicion inicial de la camara
camara.position.z = 2;

// Creando la escena
const escena = new THREE.Scene();

// Creando todo para una geometria
const dimensionesCuadro = {
    ancho: 1,
    alto: 1,
    profundo: 1,
}

const geometria = new THREE.BoxGeometry(
    dimensionesCuadro.ancho,
    dimensionesCuadro.alto,
    dimensionesCuadro.profundo
)

const material = new THREE.MeshBasicMaterial({color : 0x44aa88})

const figuraCubo = new THREE.Mesh(geometria,material)

// Agrego los materiales a la escena
escena.add(figuraCubo);

//Empezamos a renderizar nuestra escena con nuestra camara
renderizador.render(escena, camara);