function mostrarModal(mensaje) {
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');

    modalMessage.textContent = mensaje;
    modal.classList.add('active');
}

function cerrarModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
}

function generarPDFConQR() {
    try {
        const nombre = document.getElementById('nombre').value.trim();
        const cedula = document.getElementById('cedula').value.trim();
        const direccion = document.getElementById('direccion').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const email = document.getElementById('email').value.trim();

        if (!nombre || !cedula || !direccion || !telefono || !email) {
            mostrarModal('Por favor, complete todos los campos antes de generar el PDF.');
            return;
        }

        if (!validarCampos(nombre, cedula, telefono, email)) {
            return;
        }

        const qrImageData = generarQR(nombre, cedula, direccion, telefono, email);
        generarPDF(nombre, cedula, direccion, telefono, email, qrImageData);
    } catch (error) {
        console.error('Error al generar el PDF:', error);
        mostrarModal('Error al generar el PDF. Por favor, intente nuevamente.');
    }
}
