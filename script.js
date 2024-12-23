document.getElementById('calculate').addEventListener('click', () => {
    const amplitude = parseFloat(document.getElementById('amplitude').value);
    const frequency = parseFloat(document.getElementById('frequency').value);
    const resistance = parseFloat(document.getElementById('resistance').value);
    const capacitance = parseFloat(document.getElementById('capacitance').value);
    const inductance = parseFloat(document.getElementById('inductance').value);

    if (isNaN(amplitude) || isNaN(frequency) || isNaN(resistance) || isNaN(capacitance) || isNaN(inductance)) {
        alert('Пожалуйста, заполните все поля корректными данными!');
        return;
    }

    const omega = 2 * Math.PI * frequency; 
    const capacitiveReactance = 1 / (omega * capacitance); 
    const inductiveReactance = omega * inductance; 
    const impedance = Math.sqrt(Math.pow(resistance, 2) + Math.pow(inductiveReactance - capacitiveReactance, 2)); 
    const phaseShift = Math.atan((inductiveReactance - capacitiveReactance) / resistance) * (180 / Math.PI); 

    document.getElementById('impedance').querySelector('span').textContent = impedance.toFixed(2);
    document.getElementById('phaseShift').querySelector('span').textContent = phaseShift.toFixed(2);
});
