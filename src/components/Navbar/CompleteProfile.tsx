import { useForm } from "react-hook-form";
import Modal from "../../ui/Modal";
import TextField from "../../ui/TextField";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store/store";
import { completeProfile } from "../../redux/feachers/user/userActions";

interface AutoModalType {
  setOpenCompleteProfile: (open: boolean) => void;
  openCompleteProfile: boolean;
}

const CompleteProfile: React.FC<AutoModalType> = ({
  openCompleteProfile,
  setOpenCompleteProfile,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch<AppDispatch>();

  const onCkickSubmit = (data: any) => {
    dispatch(
      completeProfile({
        userProfileData: data,
        onSuccess: () => setOpenCompleteProfile(false),
      })
    );
    reset();
  };

  return (
    <Modal
      logo="تکمیل اطلاعات"
      onClose={() => setOpenCompleteProfile(false)}
      open={openCompleteProfile}
    >
      <div className="space-y-7">
        <div className="flex flex-col justify-center items-center font-normal text-sm">
          <p>برای ثبت نام اطلاعات زیر را تکمیل بفرمایید</p>
        </div>
        <form
          className="w-full space-y-4"
          onSubmit={handleSubmit(onCkickSubmit)}
        >
          <TextField
            className="textField"
            placeholder="نام و نام خانوادگی:"
            errors={errors}
            name="name"
            type="text"
            register={register}
            validationSchema={{
              required: "نام و نام خانوادگی ضروری است",
            }}
          />
          <TextField
            className="textField"
            placeholder="ایمیل:"
            name="email"
            register={register}
            validationSchema={{
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "ایمیل نامعتبر است",
              },
            }}
            errors={errors}
          />
          <button
            type="submit"
            className="w-full font-bold text-slate-50 bg-primary py-2 rounded-md"
          >
            ثبت اطلاعات
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default CompleteProfile;
