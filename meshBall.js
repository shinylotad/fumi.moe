if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

	var camera, scene, renderer;
    var geometry, material, mesh;	

	function setup() {

        var W = window.innerWidth, H = window.innerHeight;

		renderer = new THREE.WebGLRenderer();
		renderer.setSize( W, H );
		document.body.appendChild( renderer.domElement );
	
		camera = new THREE.PerspectiveCamera( 50, W/H, 1, 10000 );
		camera.position.z = 500;
	
        scene = new THREE.Scene();
            
        geometry = new THREE.OctahedronGeometry(200, 2);
        //material = new THREE.MeshLambertMaterial({shading: THREE.FlatShading, color: 0xF0F9F7, wireframe: true, transparent: true, opacity: 0.5});
        mesh = new THREE.Mesh(geometry, audioMaterial);
        scene.add(mesh);
        
		}
	
		function draw() {
            requestAnimationFrame( draw );
            renderer.render( scene, camera );

        }
        function motion() {
            requestAnimationFrame( motion );
			mesh.rotation.x = Date.now() * 0.0005;	
			mesh.rotation.y = Date.now() * 0.0002;	
			mesh.rotation.z = Date.now() * 0.001;
        }
        function motionStop() {
            requestAnimationFrame ( motionStop );
            mesh.rotation.x = Date.now() * 0;	
			mesh.rotation.y = Date.now() * 0;	
            mesh.rotation.z = Date.now() * 0;
        }
	
    setup();
    draw();
    