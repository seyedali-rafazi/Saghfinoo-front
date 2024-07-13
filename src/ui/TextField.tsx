interface TextFieldProps {
  className?: string;
  placeholder?: string;
  errors?: any;
  name: string;
  type?: string;
  value?: string;
  onChange?: (e: any) => void;
  register?: any;
  validationSchema?: {
    required?: string;
    pattern?: {
      value: RegExp;
      message: string;
    };
    minLength?: {
      value: number;
      message: string;
    };
    maxLength?: {
      value: number;
      message: string;
    };
  };
}
const TextField: React.FC<TextFieldProps> = ({
  name,
  register,
  validationSchema,
  type = "text",
  errors,
  value,
  onChange,
  placeholder,
  className,
}) => {
  return (
    <div className="space-y-2 w-full">
      <input
        className={className}
        {...register(name, validationSchema)}
        id={name}
        autoComplete="off"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {errors && errors[name] && (
        <span className="text-error-200 block text-xs mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
};

export default TextField;
