const btnList = document.querySelectorAll('.pos__list-item--li button');
const pageList = document.querySelectorAll('.pos__list-item--list');
// console.log(btnList,pageList);

// ĐỔI TRẠNG THÁI ACTIVE CHO CÁC NÚT
for (let i = 0; i < btnList.length; i++) {
    btnList[i].addEventListener('click', () => {

        for (let i = 0; i < btnList.length; i++) {
            // bỏ hết active class của các nút khác
            btnList[i].classList.remove('active');
            pageList[i].classList.remove('active');
            pageList[i].classList.remove('animation');
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



