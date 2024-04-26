import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

const MountainScene = () => {
    const canvasRef = useRef();

    useEffect(() => {
        const canvas = document.getElementById('unity-canvas');
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas });

        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        camera.position.z = 5;

        const loader = new OBJLoader();
        loader.load(
            'public/src/Carier.obj', // Путь к модели
            (object) => {
                scene.add(object);
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total) * 100 + '% загружено');
            },
            (error) => {
                console.error('Ошибка загрузки модели', error);
            }
        );

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            renderer.dispose();
            scene.dispose();
        };
    }, []);

    return null;
};

export default MountainScene;
