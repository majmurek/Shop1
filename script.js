window.onload = function () {
    // pobieranie elementu
    const button = document.getElementById('add-element');
    const boxContainer = document.getElementById('box-container');

    // wywoływanie wyzwalacza na 'click' na elemencie button
    button.addEventListener('click', function () {
        // stworzenie nowego elementu
        const singleProduct = document.createElement('div');
        singleProduct.classList.add('singleProduct');

        const productHeader = document.createElement('div');
        productHeader.classList.add('productHeader');

        const priceProduct = document.createElement('div');
        priceProduct.classList.add('priceProduct');

        const productName = document.createElement('div');
        productName.classList.add('productName');

        const buttonDelete = document.createElement('div');
        buttonDelete.classList.add('buttonDelete');

        singleProduct.appendChild(productHeader);
        singleProduct.appendChild(priceProduct);

        productHeader.appendChild(productName);
        productHeader.appendChild(buttonDelete);

        boxContainer.appendChild(singleProduct);
    });
};