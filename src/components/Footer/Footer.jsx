import React from "react"
import "./style.css"
import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
  return (
    <footer>
        <Container>
          <Row className="footer-row">
            <Col md={3} sm={5} className='box'>
              <div className="logo">
                  <ion-icon name="bag"></ion-icon>
                  <h1>FurRy</h1>
              </div>
              <p>Chúng tôi mang đến những sản phẩm chất lượng, giúp bạn tự tin tỏa sáng với phong cách riêng biệt của mình.</p>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Về chúng tôi</h2>
              <ul>
                <li>Giới thiệu</li>
                <li>Cửa hàng </li>
                <li>Sự chăm sóc</li>
                <li>Điều khoản và điều kiện</li>
                <li>Chính sách bảo mật</li>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Chăm sóc khách hàng</h2>
              <ul>
                <li>Trung tâm trợ giúp </li>
                <li>Cách mua </li>
                <li>Theo dõi đơn hàng của bạn</li>
                <li>Doanh nghiệp  </li>
                <li>Trả hàng và hoàn tiền </li>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Liên hệ với chúng tôi</h2>
              <ul>
                <li>ECOM65 , 207 Giải Phóng , P.Đồng Tâm , Hai Bà Trưng , Hà Nội </li>
                <li>Email: 65ecc@gmail.com</li>
                <li>Phone: 09 8386 8386 </li>
              </ul>
            </Col>
          </Row>
        </Container>
    </footer>
  )
}

export default Footer
