const giaSanPham = {
    ao: 200000,
    quan: 300000,
    giay: 500000
};

function tinhTien() {

    const sanPham = document.getElementById("sanPham").value;

    const soLuong = Number(
        document.getElementById("soLuong").value
    );

    const gia = giaSanPham[sanPham];

    const tienHang = gia * soLuong;

    let giamGia = 0;

    if (tienHang >= 500000) {
        giamGia = tienHang * 0.10;
    } else {
        giamGia = 0;
    }

    const phaiTra = tienHang - giamGia;

    
    document.getElementById("tienHang").innerText =
        tienHang.toLocaleString("vi-VN") + "đ";

    document.getElementById("giamGia").innerText =
        giamGia.toLocaleString("vi-VN") + "đ";

    document.getElementById("phaiTra").innerText =
        phaiTra.toLocaleString("vi-VN") + "đ";
}


function doiHinh() {

    const sanPham =
        document.getElementById("sanPham").value;

    const hinh =
        document.getElementById("hinhSanPham");

    if (sanPham === "ao") {

        hinh.src =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEqMEgxu0O2Zd_WVB6jp92krkeJ6vkUma-7eMqNA83Yw&s=10";

        hinh.alt = "Áo";

    } else if (sanPham === "quan") {

        hinh.src =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX5-HrAaRVoELhRqRzXegkK2BeehNWAAzEil4CX-kYRg&s=10";

        hinh.alt = "Quần";

    } else if (sanPham === "giay") {

        hinh.src =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWk-Pwq8PmKDhKr8N1IsiOSN6-v-U9AT0x6xNiY1x4sA&s=10";

        hinh.alt = "Giày";
    }
}

function doiMau(mau) {

    if (mau === "blue") {

        document.body.style.backgroundColor =
            "#d6ecff";

    } else if (mau === "red") {

        document.body.style.backgroundColor =
            "#ffd6d6";

    } else if (mau === "yellow") {

        document.body.style.backgroundColor =
            "#fff4c2";
    }
}
function hienBangGia() {

    const sanPham = [
        ["Áo", 200000],
        ["Quần", 300000],
        ["Giày", 500000]
    ];

    let html = "<h3>Bảng giá sản phẩm</h3>";

    for (let i = 0; i < sanPham.length; i++) {

        html +=
            (i + 1) + ". " +
            sanPham[i][0] + " - " +
            sanPham[i][1].toLocaleString("vi-VN") +
            "đ<br>";
    }

    document.getElementById("bangGia").innerHTML = html;
}