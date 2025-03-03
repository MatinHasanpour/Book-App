import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import style from "./BookCard.module.css";
function BookCard({ data, handleLikedList }) {
  const { title, image, author, language, pages } = data;
  const [like, setLike] = useState(false);
  const likeHandler = () => {
    handleLikedList(data, like);
    setLike((like) => !like);
  };
  return (
    <div className={style.card}>
      <img src={image} alt={title} />
      <div className={style.info}>
        <h3>{title}</h3>
        <p>{author}</p>
        <div>
          <span>{language}</span>
          <span>{pages} Pages</span>
        </div>{" "}
      </div>
      <button onClick={likeHandler}>
        <AiFillHeart color={like ? "red" : "#e0e0e0"} fontSize="1.8rem" />
      </button>{" "}
    </div>
  );
}
export default BookCard;
