function render(){
    //khai báo sẵn tất cả các món nước sẽ bán ở đây
    //mỗi size là một đối tượng riêng
    //khởi tạo một bill mới
    var currentBill = [];

    var img1 = document.createElement("img");
    img1.src = './images/tranchau.png';
    // console.log(img1);

        //Hàm hiển thị ra các món đang có trong hệ thống
        const currentList = document.querySelector(".pos__list-item--list.active");
        function hienThiSanPham(arr, DOM) {
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
            DOM.innerHTML = html;
        }
        hienThiSanPham(Menu, currentList);

        //khi mỗi item được click thì thêm vào hóa đơn hiện tại
        // Cập nhật lại giá nếu có discount
        function addDrink(index) {
            if(currentBill.includes(Menu[index])){
                currentBill = currentBill.filter(item => item.id !== item.index);
                console.log("Current bill is: ", currentBill)
                return false;
            }
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
                    
                    console.log(currentItem[i]);
                    
                } else {
                    currentItem[i].classList.add('active');
                    addDrink(currentItem[i].id);
                }
                console.log("currentBill ="+currentBill);
                showSelectedItems(currentBill);   
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
            showSelectedItems(currentBill);
            showPrice();
        }

        //hàm hiển thị toàn bộ món có trong đơn hiện tại
        const currentDrinks = document.querySelector(".pos__render-bill");
        // console.log('currentDrinks = ', document.querySelector(".pos__render-bill"));
        function showSelectedItems(arr) {
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
                    let index = decreaseButtons[i].parentElement.className.slice(-2);
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
                    let index = increaseButtons[i].parentElement.className.slice(-2);
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
            document.querySelector('.pos__discount').innerHTML = 
                `${String(countDiscount(currentBill)).replace(/(.)(?=(\d{3})+$)/g,'$1,')} VND`;
            document.querySelector('#totalPrice').innerText = 
                `${String(countTotalPrice()).replace(/(.)(?=(\d{3})+$)/g,'$1,')} VND`;
            document.querySelector('#finalPrice').innerText = 
                `${String(countTotalPrice() + shippingFee - countDiscount(currentBill)).replace(/(.)(?=(\d{3})+$)/g,'$1,')} VND`;
        }

        //Khi bấm nút "Xóa hết" thì gọi hàm xóa list đang chọn
        document.querySelector('#deleteBill').addEventListener('click', () => {
            clearAllList();
            showSelectedItems(currentBill);   
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
                showSelectedItems(currentBill);
                document.querySelector(".pos__render-bill").innerHTML = 'Hóa đơn trống';
                showPrice();
            }
            //Bỏ hết định dạng css chọn các khối - luôn thực hiện
            for (let i = 0; i < currentItem.length; i++) {
                currentItem[i].classList.remove('active');
            }
            // reset phí ship về 0
            shippingFee = 0;
            shippingFeeInput.value = 0;
            document.querySelector('#finalPrice').innerText = "0 VND";
        });
        // Tính tổng tiền được giảm
        function countDiscount (currentBill){
            var totalCountDiscount = 0;
            // totalCountDiscount = currentBill.reduce((x,y) => +x.price + +y.price, 0);
            var haveDiscountList = currentBill.filter(item => item.discount != 0);
            for (let i = 0; i < haveDiscountList.length; i++) {
                totalCountDiscount += Math.round(((haveDiscountList[i].price * haveDiscountList[i].discount)/100) * parseInt(haveDiscountList[i].quantity));
            }
            return totalCountDiscount;
        }

        // Hiển thị sản phẩm theo tên tìm kiếm
        const listLi = document.querySelector('.pos__list-item--list');
        const inputText = document.querySelector('.pos__list-item--input');
        var textSearch = '';
        inputText.addEventListener('keyup', (e) => {
            textSearch = e.target.value;
            // if(listItemsSearch.classList.contains('active') == false){
            //     textSearch = '';
            //     inputText.innerHTML = '';
            // }
            if(textSearch.length === 0){
                listLi.classList.add('active');
                listItemsSearch.classList.remove('active');
            } else {
                listLi.classList.remove('active');
                listItemsSearch.classList.add('active');
                if(textSearch !== ''){
                    findItemsByName(textSearch);
                }
            }
        });

        function findItemsByName(text){
            filterList = Menu.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
            console.log(filterList);
            if(filterList.length !== []){
                hienThiSanPham(filterList, listItemsSearch)
            }
        }

    }
    // render();
