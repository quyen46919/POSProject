const btnList = document.querySelectorAll('.pos__list-item--li button');
const pageList = document.querySelectorAll('.pos__list-item--list');
const listItemsSearch = document.querySelector('.pos__list-item--search');
// console.log(btnList,pageList);

// ĐỔI TRẠNG THÁI ACTIVE CHO CÁC NÚT
for (let i = 0; i < btnList.length; i++) {
    btnList[i].addEventListener('click', () => {

        for (let i = 0; i < btnList.length; i++) {
            // bỏ hết active class của các nút khác
            btnList[i].classList.remove('active');
            pageList[i].classList.remove('active');
            pageList[i].classList.remove('animation');
            listItemsSearch.classList.remove('active');
        }
        // chỉ add active class cho button được nhấn
        btnList[i].classList.add('active');
        pageList[i].classList.add('active');
        pageList[i].classList.add('animation');
    }); 
}
// Hiển thị bảng chỉnh sửa thông tin
const showPopUpBtn = document.querySelector('#pos__show-popup');
const blackBg = document.querySelector('.black-bg');
const dataTable = document.querySelector('.data-table');
const closeBtn = document.querySelector('#data-table__close');
// console.log(showPopUpBtn);
showPopUpBtn.addEventListener('click', () => {
    blackBg.classList.add('active');
    dataTable.classList.add('active');
});
// Tắt bảng hiển thị thông tin
blackBg.addEventListener('click', () => {
    blackBg.classList.remove('active');
    dataTable.classList.remove('active');
});
closeBtn.addEventListener('click', () => {
    blackBg.classList.remove('active');
    dataTable.classList.remove('active');
});

// Tắt/mở cái popup thanh toán ở màn hình <992px
const menuBtn = document.querySelector('.pos__btn--hidden');
const popupBill = document.querySelector('.pos__bill');
const closeBill = document.querySelector('.pos__close-menu');
menuBtn.addEventListener('click', () => {
    popupBill.classList.remove('inactive');
    popupBill.classList.add('active');
});
closeBill.addEventListener('click', () => {
    popupBill.classList.add('inactive');
    setTimeout(()=>{
        if(popupBill.classList.contains('inactive')){
            popupBill.classList.remove('active');
        }
    },500)
})



