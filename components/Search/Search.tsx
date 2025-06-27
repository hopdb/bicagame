import { CloseOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import Link from "next/link";
import Cards from "../Cards/Cards";
import styles from "./search.module.css";

export default function Search({ onClose }) {
  return (
    <div className={styles.search}>
      <div className={styles.topSearch}>
        <div className={styles.icoExit}>
          <CloseOutlined onClick={onClose} />
        </div>
        <div className={styles.searchForm}>
          <input type="text" placeholder="Tìm kiếm" />
          <p>40 Kết quả</p>
        </div>
        <Row className={styles.list}>
          <Col span={4}>
            <Link href={""}>Tất cả trò chơi</Link>
          </Col>
          <Col span={4}>
            <Link href={""}>Trò chơi kĩ năng</Link>
          </Col>
          <Col span={4}>
            <Link href={""}>Trò chơi thể thao</Link>
          </Col>
          <Col span={4}>
            <Link href={""}>Trò chơi hành động và phiêu lưu</Link>
          </Col>
          <Col span={4}>
            <Link href={""}>Trò chơi tập chung</Link>
          </Col>
          <Col span={4}>
            <Link href={""}>Thể thao mạo hiểm</Link>
          </Col>
        </Row>
      </div>
      <div className={styles.resulstSearch}>
        {Array.from({ length: 43 }).map((_, index) => {
          return <Cards key={index} />;
        })}
      </div>
    </div>
  );
}
