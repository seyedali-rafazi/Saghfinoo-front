import { useForm } from "react-hook-form";
import { useAdQueryContext } from "../../context/AdQueryContext";
import { useNavigate } from "react-router-dom";
import TextField from "../../ui/TextField";
import { AdButtonBack, AdButtonContinue } from "../../ui/AdButton";
import SelectField from "../../ui/SelectField";
import {
  collingSystem,
  floorMaterial,
  heatingSystem,
  wcType,
} from "../../data/AdData";

const AdThirdContent: React.FC = () => {
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
      parking: data.parking,
      WC: data.WC,
      WCType: data.WCType,
      warHouse: data.warHouse,
      elevator: data.elevator,
      collingSystem: data.collingSystem,
      floorMaterial: data.floorMaterial,
    }));
    navigate("/ad-filter");
  };

  return (
    <form
      className="flex flex-col gap-10 items-center justify-center w-full h-full"
      onSubmit={handleSubmit(onCkickSubmit)}
    >
      <div className="flex flex-col justify-center items-center lg:grid lg:grid-cols-2 gap-8 p-3 w-full ">
        <TextField
          className="border border-secondery-400 p-2 rounded-sm w-full h-[44px]"
          placeholder="پارکینگ"
          errors={errors}
          name="parking"
          type="number"
          register={register}
          validationSchema={{
            required: "پارکینگ الزامی است",
          }}
        />
        <TextField
          className="border border-secondery-400 p-2 rounded-sm w-full h-[44px]"
          placeholder="سرویس بهداشتی"
          errors={errors}
          name="WC"
          type="number"
          register={register}
          validationSchema={{
            required: "سرویس بهداشتی الزامی است",
          }}
        />
        <SelectField
          name="WCType"
          errors={errors}
          register={register}
          options={wcType}
          required="نوع سرویس بهداشتی"
        />
        <TextField
          className="border border-secondery-400 p-2 rounded-sm w-full h-[44px]"
          placeholder="انباری"
          errors={errors}
          name="warHouse"
          type="number"
          register={register}
          validationSchema={{
            required: " انباری الزامی است",
          }}
        />
        <TextField
          className="border border-secondery-400 p-2 rounded-sm w-full h-[44px]"
          placeholder="آسانسور"
          errors={errors}
          name="elevator"
          type="number"
          register={register}
          validationSchema={{
            required: " آسانسور الزامی است",
          }}
        />
        <SelectField
          name="collingSystem"
          errors={errors}
          register={register}
          options={collingSystem}
          required="نوع  سیستم سرمایش الزامی است"
        />
        <SelectField
          name="floorMaterial"
          errors={errors}
          register={register}
          options={floorMaterial}
          required="جنس کف الزلمی است "
        />
        <SelectField
          name="heatingSystem"
          errors={errors}
          register={register}
          options={heatingSystem}
          required="نوع  سیستم گرمایش الزامی است"
        />
      </div>
      <div className="flex gap-3 w-full max-w-md">
        <AdButtonBack path="/ad-price" />
        <AdButtonContinue />
      </div>
    </form>
  );
};

export default AdThirdContent;
