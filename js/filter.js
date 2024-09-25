/* 가격순 정렬 */
// 모든 탭 링크와 제품 컨테이너 요소를 선택
    const tabLinks = document.querySelectorAll('.tab-link');
    const productContainer = document.getElementById('product-container');
    const products = Array.from(productContainer.children); //card
    
    // 제품의 원래 순서를 저장
    const originalProducts = [...products];

    // 제품을 정렬하는 함수
    const sortProducts = (sortType) => {
        let sortedProducts;
        if (sortType === 'price-low-to-high') {
            // 가격이 낮은 순서로 정렬
            sortedProducts = products.sort((a, b) => {
                return parseFloat(a.getAttribute('data-price')) - parseFloat(b.getAttribute('data-price'));
            });
        } else if (sortType === 'price-high-to-low') {
            // 가격이 높은 순서로 정렬
            sortedProducts = products.sort((a, b) => {
                return parseFloat(b.getAttribute('data-price')) - parseFloat(a.getAttribute('data-price'));
            });
        } else {
            // 기본 상태로 돌아가기 (원래 순서로)
            sortedProducts = [...originalProducts];
        }

        // 현재 제품들을 지우기
        productContainer.innerHTML = '';

        // 정렬된 제품들을 다시 추가하기
        sortedProducts.forEach(product => productContainer.appendChild(product));
    };

    // 각 탭 링크에 클릭 이벤트 리스너 추가
    tabLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // 링크의 기본 동작을 막음
            tabLinks.forEach(link => link.classList.remove('tab')); // 모든 탭 링크에서 활성화 클래스를 제거
            link.classList.add('tab'); // 클릭한 탭 링크에 활성화 클래스 추가

            const sortType = link.getAttribute('data-sort'); // 클릭한 탭의 정렬 기준을 가져옴
            sortProducts(sortType); // 제품 정렬 함수 호출
        });
    });

    // 페이지 로드 시 기본 정렬 (추천 정렬) 적용
    sortProducts('recommended');
/* 가격순 정렬 */

/* 필터 */
//필터메뉴
const filterBtn = document.querySelector(".filter > a"); //<a href="#">FILTER</a>
const closeBtn = document.querySelector("#close"); // <button id="close">CLOSE</button>
//console.log(closeBtn)

filterBtn.addEventListener("click", function(e) {
    e.preventDefault();
    let dim = document.querySelector(".dim");
    let filter = document.querySelector("#filter_area");
    /* console.log(filter) */
    dim.style.display = "block";
    filter.style.right = 0
})

closeBtn.addEventListener("click", function(e) {
    e.preventDefault()
    let dim = document.querySelector(".dim");
    let filter = document.querySelector("#filter_area");

    dim.style.display = "none";
    filter.style.right = "-100%"
})
//필터메뉴

