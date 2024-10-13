
interface Props {
    onClick : () => void;
    heading: string,
}

export const Button = ({onClick, heading}: Props) => {
  return <button type="button" className="btn btn-primary" onClick={onClick}>{heading}</button>

};
