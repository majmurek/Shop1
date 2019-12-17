function addItemToBasket(){
    const boxContainer = document.getElementById('selectedItemsContainer');

    const singleProduct = document.createElement('div');
    singleProduct.classList.add('singleProduct');

    const productHeader = document.createElement('div');
    productHeader.classList.add('productHeader');

    const priceProduct = document.createElement('div');
    priceProduct.classList.add('priceProduct');

    const productName = document.createElement('div');
    productName.classList.add('productName');

    const buttonDelete = document.createElement('button');
    buttonDelete.classList.add('buttonDelete');

    boxContainer.appendChild(singleProduct);

    singleProduct.appendChild(productHeader);
    singleProduct.appendChild(priceProduct);

    productHeader.appendChild(productName);
    productHeader.appendChild(buttonDelete);
}


function createItem() {
    const item = document.createElement('div');
    item.classList.add('item');

    const subItem1 = document.createElement('div');
    subItem1.classList.add('subItem1');

    const subItem2 = document.createElement('div');
    subItem2.classList.add('subItem2');

    const subItem3 = document.createElement('div');
    subItem3.classList.add('subItem3');

    const additionPrice = document.createElement('button');
    additionPrice.onclick = function () { addItemToBasket()};
    additionPrice.classList.add('additionPrice');

    const price = document.createElement('div');
    price.classList.add('price');

    item.appendChild(subItem1);
    item.appendChild(subItem2);
    item.appendChild(subItem3);
    subItem3.appendChild(additionPrice);
    subItem3.appendChild(price);
    return item;
}

function onloadFunction() {
    const itemsContainer = document.getElementById('itemsContainer');
    const itemsRow = document.createElement('div');
    itemsRow.classList.add('flexRow','itemRow');
    const itemsRow2 = document.createElement('div');
    itemsRow2.classList.add('flexRow','itemRow');
    const itemsRow3 = document.createElement('div');
    itemsRow3.classList.add('flexRow','itemRow');
    const itemsRow4 = document.createElement('div');
    itemsRow4.classList.add('flexRow','itemRow');

    for (i = 0; i<3; i++){
        itemsContainer.appendChild(itemsRow);
        itemsRow.appendChild(createItem());
    }
    for (i = 3; i<6; i++){
        itemsContainer.appendChild(itemsRow2);
        itemsRow2.appendChild(createItem());
    }
    for (i = 6; i<9; i++){
        itemsContainer.appendChild(itemsRow3);
        itemsRow3.appendChild(createItem());
    }
    for (i = 10; i<13; i++){
        itemsContainer.appendChild(itemsRow4);
        itemsRow4.appendChild(createItem());
    }
}



