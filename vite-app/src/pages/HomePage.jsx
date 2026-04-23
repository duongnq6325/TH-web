import { useState } from 'react'
import "../styles/HomePage.css";
import { useNavigate } from "react-router-dom";
import { FaShieldAlt, FaCheckCircle, FaHeadset, FaCreditCard } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
function Header() {
  return (
    <header>
      <h1>Nova</h1>
      <h2>Professional Hedge Trading Dashboard</h2>
    </header>
  );
}

function Feature({ icon, text }) {
  return (
    <div className="feature">
      {icon}
      <span>{text}</span>
    </div>
  );
}

function MainContent({navigate}) {
  return (
    <main>
       <h3>Nâng cấp cách bạn giao dịch</h3>

       <div className="BackGround_Animation">NOVA</div>

       <p className="p1">
            Giao dịch với nhà môi giới bán lẻ lớn nhất thế giới và hưởng lợi từ các
            điều kiện tốt hơn thị trường.
       </p>

        <div className="btnGroup">
            <button className="btnDN" onClick={() => navigate("/Login_Register")}>Đăng nhập</button>
            <button className="btnDEMO" onClick={() => navigate("/Login_Register")}>Tài khoản Demo miễn phí</button>
        </div>

        <div className="textGroup_features">
          <Feature icon={<FaShieldAlt />} text="Sàn uy tín" />
          <Feature icon={<FaCheckCircle />} text="Nhiều giấy phép pháp lý" />
          <Feature icon={<FaHeadset />} text="Hỗ trợ 24/7 bằng tiếng Việt" />
          <Feature icon={<FaCreditCard />} text="Đạt chuẩn PCI DSS" />
        </div>
    </main>
  );
}

function TableRow({ icon, name, link, desc, leverage, spread, overnight, type }) {
  return (
    <tr>
        <td className="symbol-cell">
          <img src={icon} alt="" />

          <div className="symbol-text">
            <a href={link} className="symbol">{name}</a>
            <span className="desc">{desc}</span>
          </div>
        </td>

        <td>{leverage}</td>
        <td>{spread}</td>
        <td>{overnight}</td>
        <td>{type}</td>
    </tr>
  );
}

function Introduction({ products }) {
  return (
    <div className="Introduction_container">
      <div className="image-box">
        <img src="/item1.png" />
      </div>

      <h1>Giao dịch tài sản từ thị trường toàn cầu</h1>
      <h2>
        Tận dụng mọi cơ hội với những tài sản phổ biến nhất thế giới.
      </h2>

      <table>
        <thead>
          <tr>
            <th>Công cụ Giao dịch</th>
            <th>Đòn bẩy</th>
            <th>Biên độ</th>
            <th>Giá hiện tại</th>
            <th>Loại</th>
          </tr>
        </thead>

        <tbody>
<<<<<<< HEAD
          {products.map((p) => (
            <TableRow
              key={p.productId}
              name={p.symbol}
              link="#"
              desc={p.name}
              leverage="1:100" // fake demo
              spread="--"
              overnight={`$${p.currentPrice}`}
              type={p.category}
            />
          ))}
=======
          <TableRow
            icon="/gold16x16.svg"
            name="XAU/USD"
            link="https://www.exness.com/vi/commodities/xauusd"
            desc="Vàng"
            leverage="Tùy chỉnh"
            spread="25.2"
            overnight="Khả dụng"
            type="Kim loại"
          />

          <TableRow
            icon="/btc16x16.svg"
            name="BTC/USD"
            link="#"
            desc="Bitcoin"
            leverage="1:400"
            spread="45.0"
            overnight="Khả dụng"
            type="Tiền điện tử"
          />
>>>>>>> 07ea238762462acc42c3aefe5d5565e124693ec1
        </tbody>
      </table>
    </div>
  );
}

export default function Background() {
  const navigate = useNavigate(); 
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/product")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="background-container">
      <div className="BackGround_container">
        <Header />
        <MainContent navigate={navigate} />
      </div>

      <Introduction products={products} />
    </div>
  );
}
useEffect(() => {
  axios.get("http://localhost:5000/api/product")
    .then(res => setProducts(res.data))
    .catch(err => console.log(err));
}, []);