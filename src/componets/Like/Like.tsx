import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface Props {
  onClick: () => void;
}


export const Like = ({ onClick }: Props) => {

const toggle = () => {
    setLike(!like);
    onClick()
}
  const [like, setLike] = useState(false);
  return (
    <>{like ? <FaHeart size={20} color="#ff6b81" onClick={toggle}/> : <FaRegHeart size={20} onClick={toggle}  />}</>
  );
};
