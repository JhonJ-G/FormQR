function generarPDF(nombre, cedula, direccion, telefono, email, qrImageData) {
    const doc = new jspdf.jsPDF();

    // Agregar encabezado "CÓDIGO QR"
    doc.setFontSize(14);
    doc.text("CÓDIGO QR - Por favor escanee con su cámara", 15, 20);

    // Agregar el QR al PDF (centrado y más grande)
    const pageWidth = doc.internal.pageSize.getWidth();
    const qrSize = 100; // Tamaño del QR aumentado
    const qrX = (pageWidth - qrSize) / 2; // Centrar horizontalmente
    const qrY = 40; // Posición vertical ajustada
    doc.addImage(qrImageData, 'PNG', qrX, qrY, qrSize, qrSize);

    // Guardar el PDF
    doc.save('formulario_persona_qr.pdf'); // Nombre más descriptivo
}
