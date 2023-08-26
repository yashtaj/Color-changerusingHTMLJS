hexInput.addEventListener('keyup', () => {
    const hex = hexInput.value;
    if (!isValidHex(hex)) return;

    inputColor.style.backgroundColor = hex;
});
