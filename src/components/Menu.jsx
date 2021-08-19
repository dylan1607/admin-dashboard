import "./Menu.scss";
import { Link } from "react-router-dom";
import { Category } from "@material-ui/icons";

const Sidebar = () => {
  return (
    <div className="menu">
      <div className="menu__wrapper">
        <h2 className="menu__wrapper--title">GIA CÔNG CƠ KHÍ</h2>
        <ul className="menu__wrapper--list">
          <li className="list__item">
            Gia công chế tạo
          </li>
          <li className="list__item active">
            In 3D
          </li>
          <li className="list__item">
            Thiết kế
          </li>
          <li className="list__item">
            Sửa chữa
          </li>
          <li className="list__item">
            Bảo trì khuôn đúc
          </li>
          <li className="list__item">
            Đo kiểm QC-QA
          </li>
          <li className="list__item">
            Lắp đặt thiết bị
          </li>
          <li className="list__item">
            Cung cấp máy móc thiết bị
          </li>
          <li className="list__item">
            Sơn phủ - Xi mạ
          </li>
          <li className="list__item">
            Lĩnh vực khác
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
