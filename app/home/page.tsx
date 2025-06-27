import ContactUs from "@/components/ContactUs/ContactUs";
import ListGame from "./components/ListGame/ListGame";
import PopularGames from "./components/PopularGames/PopularGames";
import Swipers from "./components/swiper/Swipers";

export default function Home() {
  const DATA_LIST = [
    { id: 1, name: "Trò chơi phổ biến", length: 6 },
    { id: 2, name: "Trò chơi miễn phí", length: 30 },
    { id: 3, name: "Trò chơi mới", length: 120 },
    { id: 4, name: "Thể thao mạo hiểm", length: 20 },
    { id: 5, name: "Trò chơi tập trung", length: 2 },
    { id: 6, name: "Trò chơi kỹ năng", length: 20 },
    { id: 7, name: "Trò chơi thể thao", length: 20 },
    { id: 8, name: "Trò chơi hành động và phiêu lưu", length: 20 },
  ];
  return (
    <>
      <Swipers />
      <PopularGames />
      {DATA_LIST?.map((item) => {
        return (
          <ListGame title={item?.name} key={item?.id} length={item?.length} />
        );
      })}

      <ContactUs />
    </>
  );
}
