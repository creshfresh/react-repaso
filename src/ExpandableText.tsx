import { ReactNode, useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

export const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const text = isExpanded ? children : children.substring(0, maxChars ) + "...";

  if (children.length <= maxChars) return <p>{children}</p>;

  return <>
  
  <p>{text}</p><button onClick={toggleExpand}>{isExpanded ? "Less" : "More"}</button>
  </>;
};
