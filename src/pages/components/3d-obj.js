const canvas = document.getElementById('unity-canvas');
let animationPaused = false;
let idleTimer = null;
let isDragging = false;
let previousMousePosition = {
    x: 0,
    y: 0
};
let touchStartPos = { x: 0, y: 0 };
let touchEndPos = { x: 0, y: 0 };
let mountainObject; // Переменная для хранения объекта

function stopAnimation() {
    animationPaused = true;
}

function resumeAnimation() {
    animationPaused = false;
    clearTimeout(idleTimer);
    startIdleTimer();
}

function startIdleTimer() {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(resumeAnimation, 5000);
}

function onMouseDown(event) {
    isDragging = true;
    previousMousePosition = {
        x: event.clientX,
        y: event.clientY
    };
}

function onMouseMove(event) {
    if (isDragging) {
        const deltaRotation = (event.clientX - previousMousePosition.x) * 0.01;
        mountainObject.rotation.y += deltaRotation;
        previousMousePosition = {
            x: event.clientX,
            y: event.clientY
        };
        renderer.render(scene, camera);
    }
}

function onMouseUp(event) {
    isDragging = false;
}

function onTouchStart(event) {
    touchStartPos = { x: event.touches[0].clientX, y: event.touches[0].clientY };
}

function onTouchMove(event) {
    touchEndPos = { x: event.touches[0].clientX, y: event.touches[0].clientY };
    const deltaRotation = (touchEndPos.x - touchStartPos.x) * 0.01;
    mountainObject.rotation.y += deltaRotation;
    touchStartPos = { x: touchEndPos.x, y: touchEndPos.y };
    renderer.render(scene, camera);
}

function onTouchEnd(event) {
    // Дополнительные действия при окончании касания (если нужно)
}

canvas.addEventListener('click', function() {
    if (animationPaused) {
        resumeAnimation();
    } else {
        stopAnimation();
    }
});

canvas.addEventListener('mousemove', function() {
    startIdleTimer();
});

canvas.addEventListener('mousedown', onMouseDown);
canvas.addEventListener('mousemove', onMouseMove);
canvas.addEventListener('mouseup', onMouseUp);

canvas.addEventListener('touchstart', onTouchStart);
canvas.addEventListener('touchmove', onTouchMove);
canvas.addEventListener('touchend', onTouchEnd);

// Создаем сцену
const scene = new THREE.Scene();

// Параметры позиции и углов для камеры (примерные значения)
const cameraPosition = new THREE.Vector3(0, 1, -3.4);
const cameraRotation = new THREE.Euler(THREE.MathUtils.degToRad(-20), 0, 0);

// Создаем камеру
const camera = new THREE.PerspectiveCamera(30, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
camera.position.copy(cameraPosition);
camera.rotation.copy(cameraRotation);

// Создаем рендерер с прозрачным фоном
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setSize(canvas.clientWidth, canvas.clientHeight);

// Добавляем направленный свет
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 1, 0);
scene.add(light);

// Создаем загрузчик FBX
const loader = new THREE.FBXLoader();

// Загружаем модель Mountain.fbx
loader.load(
    'src/Mountain.fbx',
    function (object) {
        // Увеличиваем масштаб объекта
        object.scale.set(0.01, 0.01, 0.01);
        // Перемещаем объект ближе к камере
        object.position.set(0, 0, -5);

        // Создаем текстуру
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load('img/stone.jpg');

        // Создаем материал с текстурой
        const material = new THREE.MeshBasicMaterial({ map: texture });

        // Применяем материал к объекту
        // object.traverse(function(child) {
        //     if (child.isMesh) {
        //         child.material = material;
        //     }
        // });

        // Добавляем объект на сцену
        scene.add(object);

        // Сохраняем ссылку на объект
        mountainObject = object;

        // Запускаем анимацию объекта
        function animateObject() {
            if (!animationPaused) {
                mountainObject.rotation.y += 0.01; // Вращаем объект по вертикальной оси Y
                renderer.render(scene, camera);
            }
            requestAnimationFrame(animateObject);

            startIdleTimer();
        }

        animateObject();
    },
    // Функция обратного вызова для прогресса загрузки
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% загружено');
    },
    // Функция обратного вызова при возникновении ошибки
    function (error) {
        console.error('Ошибка загрузки модели', error);
    }
);
