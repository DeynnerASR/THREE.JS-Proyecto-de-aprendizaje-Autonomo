
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

/*
aspectosCamara 
    fov: ,
    aspect: tamaño (dimensiones)
    near: Primer valor del rango de vista
    far: Segundo valor del rango de vista 
    
    (near,far) // este es el rango en el cual se los elementos 
                  añadidos a la escena se van a mostrar.
*/


// Configurando la posicion inicial de la camara
camera.position.z = 2;

// Creando todo para una geometria
const dimensionesCuadro = {
    ancho: 1,
    alto: 1,
    profundo: 1,
}

const geometry = new THREE.BoxGeometry(
    dimensionesCuadro.ancho,
    dimensionesCuadro.alto,
    dimensionesCuadro.profundo
)

const material = new THREE.MeshBasicMaterial({color : 0x44aa88})

const cubo = new THREE.Mesh(geometry,material)

// Agrego las figuras a la escena
scene.add(cubo);

//Empezamos a renderizar nuestra escena con nuestra camara
renderer.render(scene, camera);
