function validarCampos(nombre, cedula, telefono, email) {
    // Validar que el nombre contenga solo letras
    const nombreRegex = /^[a-zA-Z\s]+$/;
    if (!nombreRegex.test(nombre)) {
        mostrarModal('El nombre solo debe contener letras.');
        return false;
    }

    // Validar que la cédula sea numérica
    const cedulaRegex = /^\d+$/;
    if (!cedulaRegex.test(cedula)) {
        mostrarModal('La cédula debe contener solo números.');
        return false;
    }

    // Validar que el teléfono tenga al menos 10 dígitos
    const telefonoRegex = /^\d{10,}$/;
    if (!telefonoRegex.test(telefono)) {
        mostrarModal('El teléfono debe tener al menos 10 números.');
        return false;
    }

    // Validar que el correo tenga un formato válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        mostrarModal('Por favor, ingrese un correo electrónico válido.');
        return false;
    }

    return true;
}
