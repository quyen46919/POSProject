

// Hiển thị bảng thông tin sản phẩm
const dataTableRenderDiv = document.querySelector('.data-table__line--body');
function renderListOfItemTable(arr) {
    let html = arr.map(item => `
        <form class="data-table__line" id=${item.id}>
            <div class="data-table__stt">SP${item.id}</div>
            <div class="data-table__id">${item.id}</div>
            <div class="data-table__name">
                <img src=${item.image} alt="" class="data-table__image">
                <p>${item.shortName} size ${item.size}</p>
            </div>
            <div class="data-table__price">
                <input type="number" value=${item.price} id="data-table__price"> vnd
            </div>
            <div class="data-table__discount">
                <input type="number"value=${item.discount} id="data-table__discount"> %
            </div>
            <div class="data-table__status">
                <button type="submit" class="data-table__submit">Lưu chỉnh sửa</button>
            </div>
        </form>
    `).join('');
    dataTableRenderDiv.innerHTML = html;

    const submitBtns = document.querySelectorAll('.data-table__submit');
    for (let i = 0; i < submitBtns.length; i++) {
        
        submitBtns[i].addEventListener('click', (e) => {
            e.preventDefault();
            let newPrice = submitBtns[i].parentElement.parentElement
            .querySelector('#data-table__price').value;
            let newDiscount = submitBtns[i].parentElement.parentElement
            .querySelector('#data-table__discount').value;
            console.log(newPrice, newDiscount);
            updateInfoOfItem(i, newPrice, newDiscount);
        })
        
    }
}
const updateInfoOfItem = (index, newPrice, newDiscount) => {
    console.log("index = ", index)
    const targetedItem = Menu.find(item => item.id == index);
    targetedItem.price = newPrice;
    targetedItem.discount = newDiscount;
    updateListOfItems(targetedItem);

    // rerender
    render();
    console.log(Menu);
}