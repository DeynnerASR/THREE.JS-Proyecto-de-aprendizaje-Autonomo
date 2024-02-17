import * as THREE from 'three'



// Camara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

// Escena
const scene = new THREE.Scene();

// Renderizador 

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Agregar el renderizador al html, como un canvas
 document.body.appendChild(renderer.domElement);




// PROPIEDADES PARA UN SOLIDO

    // Geometria
    const geometry = new THREE.BoxGeometry(1,1,1);

    // Material, hay barios tipos de material
    const material = new THREE.MeshPhongMaterial( { color: 0x00ff00 });

    //Armando el solido
    const cubo = new THREE.Mesh(geometry,material);

    //Agregando el solido a la escena
    scene.add(cubo)

// La posicion de la camara siempre esta desajustada, toca ajustarla
camera.position.z = 5;


// Agregar iluminacion
    const light = new THREE.AmbientLight(0xffffff,1)
    
    scene.add(light)


// Comenzar a animar
function animate() {
	requestAnimationFrame( animate );
    
    cubo.rotation.x += 0.01;
	cubo.rotation.y += 0.01;

	renderer.render( scene, camera );
}
animate();



