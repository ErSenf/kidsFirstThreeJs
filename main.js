import * as THREE from 'three';

// The "scene" is where stuff in our game will happen:
var scene = new THREE.Scene();
var flat = {flatShading: true};
var light = new THREE.AmbientLight('white', 0.8);
scene.add(light);

// The "camera" is what sees the stuff:
var aspectRatio = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera(75, aspectRatio, 1, 10000);
camera.position.z = 500;
scene.add(camera);

// The "renderer" draws what the camera sees onto the screen:
var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// ******** START CODING ON THE NEXT LINE ********
var shape = new THREE.SphereGeometry(100, 5, 5);
var cover = new THREE.MeshNormalMaterial(flat);
var ball = new THREE.Mesh(shape, cover);
scene.add(ball);
ball.position.set(-250,250,-250);
var shape = new THREE.BoxGeometry(100, 100, 100);
var cover = new THREE.MeshNormalMaterial(flat);
var box = new THREE.Mesh(shape, cover);
scene.add(box);
box.rotation.set(0.5, 0.5, 0);
box.position.set(250, 250, -250);

var shape = new THREE.CylinderGeometry(1, 100, 100, 4);
var cover = new THREE.MeshNormalMaterial(flat);
var tube = new THREE.Mesh(shape, cover);
scene.add(tube);
tube.rotation.set(0.5, 0, 0);
tube.position.set(250,-250,-250);

var shape = new THREE.PlaneGeometry(100, 100);
var cover = new THREE.MeshNormalMaterial(flat);
var ground = new THREE.Mesh(shape, cover);
scene.add(ground)
ground.rotation.set(0.5, 0, 0);
ground.position.set(-250, -250, -250)

var shape = new THREE.TorusGeometry(100, 25, 8, 25, 3.14);
var cover = new THREE.MeshNormalMaterial(flat);
var donut = new THREE.Mesh(shape, cover);
scene.add(donut);

var clock = new THREE.Clock()

function animate(){
    requestAnimationFrame(animate)
    var t = clock.getElapsedTime();
    ball.rotation.set(t, 2*t, 0);
    box.rotation.set(t, 2*t, 0);
    tube.rotation.set(t, 2*t, 0);
    ground.rotation.set(t, 2*t, 0);
    donut.rotation.set(t, 2*t, 0);

    renderer.render(scene, camera);
}

animate();

// Now, show what the camera sees on the screen:
var container = renderer.domElement;
renderer.setSize(container.width - 20, container.height - 20);
renderer.render(scene, camera);