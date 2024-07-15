import { useForm } from "react-hook-form";
import { AdButtonBack, AdButtonContinue } from "../../ui/AdButton";
import TextField from "../../ui/TextField";
import { useAdQueryContext } from "../../context/AdQueryContext";
import { useNavigate } from "react-router-dom";

const AdSecondContent: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const { setAdQueryString } = useAdQueryContext();
  const navigate = useNavigate();

  const onCkickSubmit = (data: any) => {
    setAdQueryString((prevUser) => ({
      ...prevUser,
      rooms: data.rooms,
      floor: data.floor,
    }));
    navigate("/ad-filter");
  };

  return (
    <form
      className="flex flex-col gap-10 items-center justify-center w-full"
      onSubmit={handleSubmit(onCkickSubmit)}
    >
      <div className="flex flex-col justify-center items-center lg:grid lg:grid-cols-2 gap-8 p-3 w-full ">
        <TextField
          className="border border-secondery-400 p-2 rounded-sm w-full h-[44px]"
          placeholder="متراژ (متر مربع)"
          errors={errors}
          name="title"
          type="number"
          register={register}
          validationSchema={{
            required: "متراژ الزامی است",
          }}
        />
        <TextField
          className="border border-secondery-400 p-2 rounded-sm w-full h-[44px]"
          placeholder="اتاق"
          errors={errors}
          name="rooms"
          type="number"
          register={register}
          validationSchema={{
            required: "اتاق الزامی است",
          }}
        />
        <TextField
          className="border border-secondery-400 p-2 rounded-sm w-full h-[44px]"
          placeholder="طبقه"
          errors={errors}
          name="floor"
          type="number"
          register={register}
          validationSchema={{
            required: "طبقه الزامی است",
          }}
        />
        <TextField
          className="border border-secondery-400 p-2 rounded-sm w-full h-[44px]"
          placeholder="تعداد طبقات"
          errors={errors}
          name="floor"
          type="number"
          register={register}
          validationSchema={{
            required: "تعداد طبقه الزامی است",
          }}
        />
      </div>
      <div className="flex gap-3 w-full max-w-md">
        <AdButtonBack path="/ad-region" />
        <AdButtonContinue />
      </div>
    </form>
  );
};

export default AdSecondContent;
