$(function () {
    /* 사이즈 옵션창 */
    const sizeTitle = $(".size > a");
    const sizeInventory = $(".sizeInventory")
    const Choice = $(".details > div > div > a")
    /* console.log(size) */

    sizeTitle.on("click", function (e) {
        e.preventDefault()
        if (sizeInventory.css('display') === 'none') {
            sizeInventory.css({
                display: "block"
            })
            sizeTitle.addClass('on')
        } else if (sizeInventory.css('display') === 'block') {
            sizeInventory.css({
                display: "none"
            })
            sizeTitle.removeClass('on')
        }
    });

    /* 사이즈 옵션창 */

    /* 컬러 옵션창 */
    const colorTitle = $(".colorArea > a");
    const colorInventory = $(".colorInventory")
    /* console.log(colorInventory) */

    colorTitle.on("click", function (e) {
        e.preventDefault()
        //사이즈 옵션창 종료(중복 클릭 x)
        sizeInventory.css({
            display: "none"
        })
        sizeTitle.removeClass('on')
        //사이즈 옵션창 종료(중복 클릭 x)

        if (colorInventory.css('display') === 'none') {
            colorInventory.css({
                display: "block"
            })
            colorTitle.addClass('on')
        } else if (colorInventory.css('display') === 'block') {
            colorInventory.css({
                display: "none"
            })
            colorTitle.removeClass('on')
        }
    })
    /* 컬러 옵션창 */

    /* 선택하면 옵션창 종료 */
    Choice.on("click", function (e) {
        e.preventDefault()
        sizeInventory.css({
            display: "none"
        })
        sizeTitle.removeClass('on')
        colorInventory.css({
            display: "none"
        })
        colorTitle.removeClass('on')
    })
    /* 선택하면 옵션창 종료 */
});

/* 사이즈 선택 */
const sizes = document.querySelectorAll(".sizeInventory > a");
const sizeNum = document.querySelector(".sizeNum");

sizes.forEach(function (size, index) {
    size.addEventListener("click", function () {
        if (index === 0) {
            sizeNum.textContent = "XS"
        } else if (index === 1) {
            sizeNum.textContent = "S"
        } else if (index === 2) {
            sizeNum.textContent = "M"
        } else if (index === 3) {
            sizeNum.textContent = "L"
        } else if (index === 4) {
            sizeNum.textContent = "XL"
        }
    })
});
/* 사이즈 선택 */

/* 수량, 가격 */
const minsuBtn = document.querySelector("#minus"); //버튼영역
const plusBtn = document.querySelector("#plus"); //버튼영역
const quantityInner = document.querySelector(".quantityInner"); //수량영역
const price = document.querySelector(".price"); //가격영역
/* console.log(price.textContent) */

/* 수량 및 가격 설정 */
let count = 1 //수량 초기 값
let priceCount = 20 //가격 초기 값

quantityInner.textContent = count
price.textContent = priceCount * count

plusBtn.addEventListener("click", function () {
    if (count < 10) {
        count++;
        quantityInner.textContent = count;
        price.textContent = priceCount * count
    }
});

minsuBtn.addEventListener("click", function () {
    if (count > 1) {
        count--;
        quantityInner.textContent = count;
        price.textContent = priceCount * count
    }
});
/* 수량 및 가격 설정 */




