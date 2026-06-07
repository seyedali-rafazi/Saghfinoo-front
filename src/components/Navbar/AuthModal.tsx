import { useForm } from "react-hook-form";
import Modal from "../../ui/Modal";
import TextField from "../../ui/TextField";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store/store";
import { signup } from "../../redux/feachers/user/userActions";

interface AutoModalType {
  setOpenAuth: (open: boolean) => void;
  openAuth: boolean;
  user: any;
  loading: boolean;
}

const AuthModal: React.FC<AutoModalType> = ({ setOpenAuth, openAuth }) => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onClickSubmit = (data: any) => {
    dispatch(signup({ userData: data, onSuccess: () => setOpenAuth(false) }));
    reset();
  };

  return (
    <Modal logo="ورود" onClose={() => setOpenAuth(false)} open={openAuth}>
      <div className="space-y-7">
        <div className="flex flex-col justify-center items-center font-normal text-sm">
          <p>به سقفینو خوش آمدید</p>
          <p>لطفا برای ورود شماره موبایل خود را وارد کنید</p>
        </div>
        <form
          className="w-full space-y-4"
          onSubmit={handleSubmit(onClickSubmit)}
        >
          <TextField
            className="textField"
            placeholder="شماره تلفن:"
            errors={errors}
            name="phoneNumber"
            type="number"
            register={register}
            validationSchema={{ required: "تلفن همراه ضروری است" }}
          />
          <TextField
            className="textField"
            placeholder=" رمز عبور:"
            errors={errors}
            name="password"
            type="text"
            register={register}
            validationSchema={{ required: "رمز عبور همراه ضروری است" }}
          />
          <button
            type="submit"
            className="w-full font-bold text-slate-50 bg-primary py-2 rounded-md"
          >
            ثبت نام / ورود
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default AuthModal;
