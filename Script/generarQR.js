function generarQR(nombre, cedula, direccion, telefono, email) {
    const qrContent = `
Nombre: ${nombre}
Cedula: ${cedula}
Direccion: ${direccion}
Telefono: ${telefono}
Correo Electronico: ${email}
    `;
    const qr = qrcode(0, 'L');
    qr.addData(qrContent.trim()); // Eliminar espacios innecesarios
    qr.make();
    return qr.createDataURL();
}
