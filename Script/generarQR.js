function generarQR(nombre, cedula, direccion, telefono, email) {
    const baseUrl = "https://jhonj-g.github.io/FormQR/mostrarDatos.html"; // URL del nuevo archivo HTML
    const queryParams = new URLSearchParams({
        nombre: nombre,
        cedula: cedula,
        direccion: direccion,
        telefono: telefono,
        email: email
    }).toString();
    const qrContent = `${baseUrl}?${queryParams}`;
    const qr = qrcode(0, 'L');
    qr.addData(qrContent); // Agregar el enlace con los datos
    qr.make();
    return qr.createDataURL();
}
