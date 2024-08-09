import style from "./SideCard.module.css";
function SideCard({ data: { image, title } }) {
  return (
    <div className={style.card}>
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default SideCard;
