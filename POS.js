//khai báo sẵn tất cả các món nước sẽ bán ở đây
//mỗi size là một đối tượng riêng
//khởi tạo một bill mới
var currentBill = [];

var img1 = document.createElement("img");
img1.src = './images/tranchau.png';
// console.log(img1);
const Menu = [{
    id: 0,
    name: 'Trà sữa trân châu đường đen',
    shortName: 'TS trân châu đường đen',
    size: 'M', 
    price: 30000,
    quantity: 1,
    image: './images/tranchau.png',
    type: 'drink',
    discount: 0
}, 
{
    id: 1,
    name: 'Trà sữa trân châu đường đen',
    shortName: 'TS trân châu đường đen',
    size: 'L', 
    price: 37000,
    quantity: 1,
    image: './images/tranchau.png',
    type: 'drink',
    discount: 0
},
{
    id: 2,
    name: 'Trà sữa trân châu thái',
    shortName: 'TS trân châu thái',
    size: 'L', 
    price: 35000,
    quantity: 1,
    image: './images/thach.png',
    type: 'drink',
    discount: 0
},
{
    id: 3,
    name: 'Trà sữa trân xoài',
    shortName: 'TS trân châu xoài',
    size: 'L', 
    price: 35000,
    quantity: 1,
    image: './images/Mango-Milktea.png',
    type: 'drink',
    discount : 0
},
{
    id: 4,
    name: 'Trà sữa Ô long',
    shortName: 'TS Ô long',
    size: 'L', 
    price: 35000,
    quantity: 1,
    image: './images/Olong.png',
    type: 'drink',
    discount : 0
},
{
    id: 5,
    name: 'Trà sữa khoai môn',
    shortName: 'TS khoai môn',
    size: 'L', 
    price: 35000,
    quantity: 1,
    image: './images/Khoaimon.png',
    type: 'drink',
    discount : 0
},
{
    id: 6,
    name: 'Trà sữa sữa tươi',
    shortName: 'TS sữa tươi',
    size: 'L', 
    price: 35000,
    quantity: 1,
    image: './images/Milk.png',
    type: 'drink',
    discount : 0
},
{
    id: 7,
    name: 'Trà sữa latte',
    shortName: 'TS Latte',
    size: 'L', 
    price: 35000,
    quantity: 1,
    image: './images/latte.png',
    type: 'drink',
    discount : 0
},
{
    id: 8,
    name: 'Trà sữa Kem tươi',
    shortName: 'TS Kem tươi',
    size: 'L', 
    price: 35000,
    quantity: 1,
    image: './images/KemTuoi.png',
    type: 'drink',
    discount : 0
},
{
    id: 9,
    name: 'Dâu ép',
    shortName: 'Dâu ép',
    size: 'L', 
    price: 35000,
    quantity: 1,
    image: './images/DauEp.png',
    type: 'drink',
    discount : 0
},
{
    id: 10,
    name: 'Burger bò miếng lớn',
    shortName: 'Burger bò miếng lớn',
    size: 'Lớn', 
    price: 79000,
    quantity: 1,
    image: './images/burger-bo-mieng-79.png',
    type: 'food',
    discount: 0
},
{
    id: 11,
    name: 'Burger gà phô mai',
    shortName: 'Burger gà phô mai',
    size: 'Lớn', 
    price: 69000,
    quantity: 1,
    image: './images/burger-ga-pho-mai-69.png',
    type: 'food',
    discount: 0
},
{
    id: 12,
    name: 'Burger heo',
    shortName: 'Burger heo',
    size: 'Lớn', 
    price: 32000,
    quantity: 1,
    image: './images/burger-heo-32.png',
    type: 'food',
    discount: 0
},
{
    id: 13,
    name: 'Burger phi lê cá',
    shortName: 'Burger phi lê cá',
    size: 'Lớn', 
    price: 49000,
    quantity: 1,
    image: './images/burger-phi-le-ca-49.png',
    type: 'food',
    discount: 0
},
{
    id: 14,
    name: 'Cơm gà chiên',
    shortName: 'Burger gà chiên',
    size: 'Lớn', 
    price: 39000,
    quantity: 1,
    image: './images/com-ga-chien-39.png',
    type: 'food',
    discount: 0
},
{
    id: 15,
    name: 'Cơm thịt nướng',
    shortName: 'Burger thịt nướng',
    size: 'Lớn', 
    price: 46000,
    quantity: 1,
    image: './images/com-thit-nuong-46.png',
    type: 'food',
    discount: 0
}
//ghi thêm ở đây
];
const updateInfoOfItem = (index, newPrice, newDiscount) => {
    console.log("index = ", index)
    const targetedItem = Menu.find(item => item.id == index);
    console.log(targetedItem)
    targetedItem.price = newPrice;
    targetedItem.discount = newDiscount;

    // rerender
    render();
    console.log(Menu);
}

function render(){

    //Hàm hiển thị ra các món đang có trong hệ thống
    const currentList = document.querySelector(".pos__list-item--list.active");
    function hienThiSanPham(arr) {
    let html = arr.map(item => `
        <div class="pos__item" id=${item.id}>
        <h3>${item.name}</h3>
        <span>Size ${item.size}</span>
        <div class="pos__item--details">
            <div class="pos__item--price-wrapper">
                <div class="pos__item--price-1">
                    ${item.discount === 0 ? '' : String(item.price).replace(/(.)(?=(\d{3})+$)/g,'$1,')}
                </div>
                <div class="pos__item--price">
                    ${String(item.price - (item.price * item.discount)/100).replace(/(.)(?=(\d{3})+$)/g,'$1,')}
                </div>
            </div>
            <div class="pos__item--img">
                <img src=${item.image} alt="img">
            </div>
        </div>
        </div>
    `).join('');
    currentList.innerHTML = html;
    }

    hienThiSanPham(Menu);

    // Hiển thị danh sách đồ ăn
    const listOfFood = document.querySelector(".pos__list-item--food");
    function hienThiThucAn(arr) {
    let foodHtml = arr.map(item => `
        <div class="pos__item" id=${item.id}>
        <h3>${item.name}</h3>
        <span>Size ${item.size}</span>
        <div class="pos__item--details">
            <div class="pos__item--price-wrapper">
                <div class="pos__item--price-1">
                    ${item.discount === 0 ? '' : String(item.price).replace(/(.)(?=(\d{3})+$)/g,'$1,')}
                </div>
                <div class="pos__item--price">
                    ${String(item.price - (item.price * item.discount)/100).replace(/(.)(?=(\d{3})+$)/g,'$1,')}
                </div>
            </div>
            <div class="pos__item--img">
                <img src=${item.image} alt="img">
            </div>
        </div>
        </div>
    `).join('');
    listOfFood.innerHTML = foodHtml;
    }
    const Food = Menu.filter(item => item.type === 'food');
    hienThiThucAn(Food);

    // Hiển thị danh sách đồ uống
    const listOfDrinks = document.querySelector(".pos__list-item--drinks");
    function hienThiDoUong(arr) {
    let drinkHtml = arr.map(item => `
        <div class="pos__item" id=${item.id}>
        <h3>${item.name}</h3>
        <span>Size ${item.size}</span>
        <div class="pos__item--details">
            <div class="pos__item--price-wrapper">
                <div class="pos__item--price-1">
                    ${item.discount === 0 ? '' : String(item.price).replace(/(.)(?=(\d{3})+$)/g,'$1,')}
                </div>
                <div class="pos__item--price">
                    ${String(item.price - (item.price * item.discount)/100).replace(/(.)(?=(\d{3})+$)/g,'$1,')}
                </div>
            </div>
            <div class="pos__item--img">
                <img src=${item.image} alt="img">
            </div>
        </div>
        </div>
    `).join('');
    listOfDrinks.innerHTML = drinkHtml;
    }
    const drinks = Menu.filter(item => item.type === 'drink');
    hienThiDoUong(drinks);


    //khi mỗi item được click thì thêm vào hóa đơn hiện tại
    // Cập nhật lại giá nếu có discount
    function addDrink(index) {
        Menu[index].price = Menu[index].price - (Menu[index].price * Menu[index].discount)/100;
        currentBill.push(Menu[index]);
        
    }

    const currentItem = document.querySelectorAll(".pos__item");

    //Nếu món nào được chọn thì gán class vào 
    for (let i = 0; i < currentItem.length; i++) {
        currentItem[i].addEventListener('click',() => {
            console.log(Menu)
            if (currentBill.includes(Menu[i])) {
                deleteDrink(i);
                currentItem[i].classList.remove('active');
                for (let j = 0; j < currentItem.length; j++) {
                    if(currentItem[j].id === currentItem[i].id){
                        currentItem[j].classList.remove('active');
                    }
                }
                
            } else {
                currentItem[i].classList.add('active');
                
                addDrink(currentItem[i].id);
                
                for (let j = 0; j < currentItem.length; j++) {
                    if(currentItem[j].id === currentItem[i].id){
                        currentItem[j].classList.add('active');
                    }
                }
                
            }
            console.log(currentBill);
            hienThiMonDangChon(currentBill);   
            showPrice();
        })
    }

    //Hàm cập nhật lại số lượng của các món (cả tăng và giảm)
    function updateQuantity(index, quantity) {
        for (let i = 0; i < currentBill.length; i++) {
            if (currentBill[i].id == index) {
                //Nếu số lượng < 1 thì không cho giảm nữa
                if (currentBill[i].quantity < 1) {
                    return
                } else {
                    //nếu không thì cập nhật lại số lượng theo tham số truyền vào
                    currentBill[i].quantity = quantity;
                }
            }
            if (currentBill[i].quantity <= 0) {
                currentBill[i].quantity = 1;
            }
        }
        hienThiMonDangChon(currentBill);
        showPrice();
    }

    //hàm hiển thị toàn bộ món có trong đơn hiện tại
    const currentDrinks = document.querySelector(".pos__render-bill");
    // console.log('currentDrinks = ', document.querySelector(".pos__render-bill"));
    function hienThiMonDangChon(arr) {
    let html1 = arr.map(item => `
        <div class="pos__bill-item ${item.id}">
            <img src=${item.image} alt="" class="pos__bill-item--img">
            <p class="pos__bill-item--name">${item.shortName} (${item.size})</p>
            <button class="pos__bill-item--button decrease pos__decrease">-</button>
            <p class="pos__bill-item--count">${item.quantity}</p>
            <button class="pos__bill-item--button increase">+</button>
            <p class="pos__bill-item--price">${String(item.price * item.quantity).replace(/(.)(?=(\d{3})+$)/g,'$1,')}</p>
        </div>
    `).join('');
    currentDrinks.innerHTML = html1;
    
        //lấy DOM các nút nhấn tăng và giảm
        const decreaseButtons = [...document.querySelectorAll('.decrease')];
        const increaseButtons = [...document.querySelectorAll('.increase')];

        //Xử lí cho nút giảm: Khi nút giảm được nhấn, giảm thuộc tính quantity xuống 1 đơn vị
        for (let i = 0; i < decreaseButtons.length; i++) {
            decreaseButtons[i].addEventListener('click', () => {
                //Từ nút "-" được nhấn, tìm tới đối tượng cha, lấy tên class, cắt lấy chữ cái cuối cùng, đó cũng là số id của món đó
                let index = decreaseButtons[i].parentElement.className.slice(-1);
                for (let j = 0; j < currentBill.length; j++) {
                    if (currentBill[j].id == index) {
                        updateQuantity(currentBill[j].id, currentBill[j].quantity - 1);
                    }
                }
            });
        }

        //Xử lí cho nút tăng: Khi nút tăng được nhấn, tăng thuộc tính quantity lên 1 đơn vị
        for (let i = 0; i < increaseButtons.length; i++) {
            increaseButtons[i].addEventListener('click', () => {
                let index = increaseButtons[i].parentElement.className.slice(-1);
                for (let j = 0; j < currentBill.length; j++) {
                    if (currentBill[j].id == index) {
                        updateQuantity(currentBill[j].id, currentBill[j].quantity + 1);
                    }
                }
            })
        }
    }

    //Hàm xóa một sản phẩm tại vị trí index
    function deleteDrink(index) {
        for (let i = 0; i <= currentBill.length; i++) {
            if (currentBill[i] == Menu[index]) {
                currentBill.splice(i, 1);
                i--;
            }        
        }
    }

    var shippingFee = 0;
    const shippingFeeInput = document.querySelector('input#shipping-fee');
    shippingFeeInput.onkeyup = function(e) {
        shippingFee = +e.target.value;
        showPrice();
    }
    //Hàm tính giá sản phẩm
    function countTotalPrice() {
        var totalPrice = 0; 
        // console.log(currentBill[1].price);
        for (let i = 0; i < currentBill.length; i++) {
            totalPrice = totalPrice + currentBill[i].price * currentBill[i].quantity;
        }
        return totalPrice;
        // 
    }

    //Hàm hiển thị giá sản phẩm
    function showPrice() {
        // console.log(countTotalPrice());
        document.querySelector('#totalPrice').innerText = 
            `${String(countTotalPrice()).replace(/(.)(?=(\d{3})+$)/g,'$1,')} VND`;
        document.querySelector('#finalPrice').innerText = 
            `${String(countTotalPrice() + shippingFee).replace(/(.)(?=(\d{3})+$)/g,'$1,')} VND`;
    }

    //Khi bấm nút "Xóa hết" thì gọi hàm xóa list đang chọn
    document.querySelector('#deleteBill').addEventListener('click', () => {
        clearAllList();
        hienThiMonDangChon(currentBill);   
        document.querySelector(".pos__render-bill").innerHTML = 'Hóa đơn trống';
        showPrice();
    })

    //Hàm xóa hết list đang chọn
    function clearAllList() {
        totalPrice = 0;
        for (let i = 0; i < Menu.length; i++) {
            Menu[i].quantity = 1;
        }
        return currentBill = [];
    }

    //hoàn tất thanh toán, xóa bill hiện tại
    completedBill = [];
    var completeBill = document.querySelector('.pos__submit');

    completeBill.addEventListener('click', () => {
        //Kiểm tra xem mảng chứa các món đang được chọn có rỗng không
        //Nếu có (length > 0) thì mới lưu lại mảng và reset mảng
        if (currentBill.length > 0) {
            //mảng lưu lại các đơn đã hoàn thành
            completedBill.push([...currentBill]);
            //đưa ra mảng đã lưu
            console.log(completedBill);
            clearAllList();
            //re-render lại ds món đang chọn và hiển thị lại giá
            hienThiMonDangChon(currentBill);
            document.querySelector(".pos__render-bill").innerHTML = 'Hóa đơn trống';
            showPrice();
        }
        //Bỏ hết định dạng css chọn các khối - luôn thực hiện
        for (let i = 0; i < currentItem.length; i++) {
            currentItem[i].classList.remove('active');
        }
    });
}
render();