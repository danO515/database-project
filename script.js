
// 장바구니 담기 함수
function addToCart(productId, name, price) {
    // 현재 장바구니 정보 가져오기
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // 이미 장바구니에 있는지 확인
    let existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
        // 이미 있는 경우 수량 증가
        existingProduct.quantity++;
    } else {
        // 새로운 상품 추가
        cart.push({
            id: productId,
            name: name,
            price: price,
            quantity: 1
        });
    }

    // 장바구니 정보 업데이트
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // 장바구니에 상품을 추가했음을 알리는 메시지
    alert(`상품 "${name}"을 장바구니에 추가했습니다.`);

    // 주문이 완료되면 이동
    window.location.href = 'shopping_cart.html';
}

// 주문 시 실행될 함수
function handleOrder(productId, productName, productPrice) {
    // 주문 로직 수행
    alert(`상품 "${productName}"을 주문합니다. 가격: ${productPrice}원`);

    // 주문 정보를 로컬 스토리지에 저장
    let order = { id: productId, name: productName, price: productPrice, date: new Date().toISOString() };
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    // 주문이 완료되면 마이페이지로 이동 또는 다른 동작 수행
    window.location.href = 'mypage.html';
}


// 주문 버튼 클릭 시 실행될 함수
function handleOrderCategory(productId, productName, productPrice) {
    // 주문 로직 수행
    alert(`상품 "${productName}"을 주문합니다. 가격: ${productPrice}원`);

    // 주문 정보를 로컬 스토리지에 저장
    let order = {
        id: productId,
        name: productName,
        price: productPrice,
        date: new Date().toISOString()
    };
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    // 주문이 완료되면 마이페이지로 이동 또는 다른 동작 수행
    window.location.href = 'mypage.html';
}


// 장바구니 담기 함수
function addToCartMain(productId, name, price, discountPercentage) {
    // 현재 장바구니 정보 가져오기
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // 이미 장바구니에 있는지 확인
    let existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
        // 이미 있는 경우 수량 증가
        existingProduct.quantity++;
    } else {
        // 새로운 상품 추가
        cart.push({
            id: productId,
            name: name,
            price: price,
            discountPercentage: discountPercentage,
            quantity: 1
        });
    }

    // 장바구니 정보 업데이트
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // 장바구니에 상품을 추가했음을 알리는 메시지
    alert(`상품 "${name}"을 장바구니에 추가했습니다.`);

    // 주문이 완료되면 이동
    window.location.href = 'shopping_cart.html';
}


function showLoginMessage() {
    alert("로그인 후 사용하세요.");
}