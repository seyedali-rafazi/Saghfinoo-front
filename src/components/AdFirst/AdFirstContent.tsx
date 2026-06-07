import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import { useAdQueryContext } from "../../context/AdQueryContext";
import { useNavigate } from "react-router-dom";
import { AdButtonBack, AdButtonContinue } from "../../ui/AdButton";
import SelectField from "../../ui/SelectField";
import { options } from "../../data/AdData";
import AdLocationPicker from "./AdLocationPicker";

const AdFirstContent: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const { adQueryString, setAdQueryString } = useAdQueryContext();
  const navigate = useNavigate();

  const onClickSubmit = (data: any) => {
    setAdQueryString((prev) => ({
      ...prev,
      title: data.title,
      description: data.description,
      houseGroup: data.houseGroup,
      offPrice: Number(data.offPrice),
      price: Number(data.offPrice),
      discount: 0,
      city: data.city || "تهران",
    }));
    navigate("/ad-price");
  };

  const handleLocationChange = (lat: number, lng: number) => {
    setAdQueryString((prev) => ({ ...prev, lat, lng }));
  };

  return (
    <form
      className="flex flex-col gap-10 items-center justify-center w-full"
      onSubmit={handleSubmit(onClickSubmit)}
    >
      <div className="flex flex-col justify-center items-center lg:grid lg:grid-cols-2 gap-8 p-3 w-full">
        <TextField
          className="border border-secondery-400 p-2 rounded-sm w-full h-[44px]"
          placeholder="موضوع اگهی"
          errors={errors}
          name="title"
          type="text"
          register={register}
          validationSchema={{ required: "موضوع الزامی است" }}
        />
        <TextField
          className="border border-secondery-400 p-2 rounded-sm w-full h-[44px]"
          placeholder="توضیحات اگهی"
          errors={errors}
          name="description"
          type="text"
          register={register}
          validationSchema={{ required: "توضیحات ضروری است" }}
        />
        <SelectField
          name="houseGroup"
          errors={errors}
          register={register}
          options={options}
          required="نوع معامله را انتخاب کنید"
        />
        <TextField
          className="border border-secondery-400 p-2 rounded-sm w-full h-[44px]"
          placeholder="مبلغ مورد نظر"
          errors={errors}
          name="offPrice"
          type="number"
          register={register}
<<<<<<< HEAD
          validationSchema={{
            required: "مبلغ ضروری است",
          }}
=======
          validationSchema={{ required: "مبلغ الزامی است" }}
>>>>>>> b0a58ad (initial refactor project)
        />
        <TextField
          className="border border-secondery-400 p-2 rounded-sm w-full h-[44px] lg:col-span-2"
          placeholder="شهر / محله"
          errors={errors}
          name="city"
          type="text"
          register={register}
          validationSchema={{ required: "شهر الزامی است" }}
        />
        <div className="lg:col-span-2 w-full">
          <AdLocationPicker
            lat={adQueryString.lat}
            lng={adQueryString.lng}
            onChange={handleLocationChange}
          />
        </div>
      </div>
      <div className="flex gap-3 w-full max-w-md">
        <AdButtonBack path="/" label="صفحه اصلی" />
        <AdButtonContinue />
      </div>
    </form>
  );
};

export default AdFirstContent;
