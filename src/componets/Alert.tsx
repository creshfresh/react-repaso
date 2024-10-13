interface Props {
  onClose: () => void;
  name: string;
}
export const Alert = ({ onClose, name }: Props) => {
  return (
    <div
      className="alert alert-primary alert-dismissible fade show"
      role="alert"
    >
      {name}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};
