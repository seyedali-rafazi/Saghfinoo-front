import { useNavigate } from "react-router-dom";

interface AdButtonBackType {
  path: string;
  label?: string;
}

export const AdButtonContinue: React.FC = () => {
  return (
    <button
      type="submit"
      className="col-start-1 mx-auto  font-bold text-secondery-50 bg-primary text-white py-2 rounded-md  px-5 w-1/2"
    >
      ادامه
    </button>
  );
};

interface AdButtonSubmitType {
  disabled?: boolean;
}

export const AdButtonSubmit: React.FC<AdButtonSubmitType> = ({ disabled }) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="col-start-1 mx-auto font-bold text-secondery-50 bg-primary text-white py-2 rounded-md px-5 w-1/2 disabled:opacity-50"
    >
      {disabled ? "در حال ثبت..." : "ثبت نهایی"}
    </button>
  );
};

export const AdButtonBack: React.FC<AdButtonBackType> = ({
  path,
  label,
}) => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      onClick={() => navigate(path)}
      className="col-start-1 mx-auto font-bold text-secondery-50 bg-white text-primary border border-primary py-2 rounded-md px-5 w-1/2"
    >
      {label ?? (path === "/" ? "صفحه اصلی" : "قبلی")}
    </button>
  );
};
