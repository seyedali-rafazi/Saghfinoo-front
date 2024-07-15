import { UseFormRegister } from "react-hook-form";

interface SelectFieldProps {
  errors?: any;
  name: string;
  register: UseFormRegister<any>;
  required: string;
  options: { id: number; value: string | number; text: string }[];
}

const SelectField: React.FC<SelectFieldProps> = ({
  name,
  register,
  errors,
  required,
  options,
}) => {
  return (
    <div className="space-y-2 w-full ">
      <div className="w-full border">
        <select
          {...register(name, { required: required })}
          className=" w-full p-2"
        >
          {options.map(
            (option: { id: number; value: string | number; text: string }) => (
              <option key={option.id} value={option.value}>
                {option.text}
              </option>
            )
          )}
        </select>
      </div>
      <p className={`${errors && errors[name] ? "" : "hidden"}`}>
        {errors && errors[name] && (
          <span className="text-error-200 block text-xs mt-2">
            {errors[name]?.message}
          </span>
        )}
      </p>
    </div>
  );
};

export default SelectField;
