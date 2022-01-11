function saludar(nombre, cb) {
    const saludo = `hola como estas, ${nombre}`;
    cb(saludo);
    console.log('muchas otras cosas');
}

function despues(mensaje) {
    setTimeout(() => {
        alert(`desde callback: ${mensaje}`);
    }, 500);
    console.log('puedo hacer otras cosas');
}

saludar('pepe', despues)