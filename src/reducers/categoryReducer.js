const dataCate = [
  {
    "id": 1789,
    "name": "Điện Thoại, Máy Tính Bảng",
    "status": false
  },
  {
    "id": 4221,
    "name": "Điện Tử - Điện Lạnh",
    "status": false
  },
  {
    "id": 1815,
    "name": "Thiết Bị Số - Phụ Kiện Số",
    "status": false
  },
  {
    "id": 1846,
    "name": "Laptop & Máy Vi Tính",
    "status": false
  },
  {
    "id": 1801,
    "name": "Máy Ảnh Máy Quay Phim",
    "status": false
  },
  {
    "id": 1882,
    "name": "Điện Gia Dụng",
    "status": false
  },
  {
    "id": 1883,
    "name": "Nhà Cửa Đời Sống",
    "status": false
  },
  {
    "id": 4384,
    "name": "Bách Hóa Online",
    "status": false
  },
  {
    "id": 2549,
    "name": "Đồ chơi, Mẹ & Bé",
    "status": false
  },
  {
    "id": 1520,
    "name": "Làm Đẹp - Sức Khỏe",
    "status": false
  },
  {
    "id": 914,
    "name": "Thời Trang",
    "status": false
  },
  {
    "id": 1975,
    "name": "Thể Thao & Dã Ngoại",
    "status": false
  },
  {
    "id": 8594,
    "name": "Xe Máy, Ô tô, Xe Đạp",
    "status": false
  },
  {
    "id": 8322,
    "name": "Nhà Sách Tiki",
    "status": false
  },
  {
    "id": 11312,
    "name": "Voucher - Dịch Vụ",
    "status": false
  }
];

const categoryReducer = (state = dataCate, action) => {
  // console.log(state)
  switch (action.type) {
    case 'CHANGE_CATEGORY':
      return state.map(ele => ele.id === action.idCate ? { ...ele, status: !ele.status } : ele)
    default:
      return state
  }

}
export default categoryReducer