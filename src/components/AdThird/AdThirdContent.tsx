import { useForm } from "react-hook-form";
import { useAdQueryContext } from "../../context/AdQueryContext";
import TextField from "../../ui/TextField";
import { AdButtonBack, AdButtonSubmit } from "../../ui/AdButton";
import SelectField from "../../ui/SelectField";
import {
  collingSystem,
  floorMaterial,
  heatingSystem,
  wcType,
} from "../../data/AdData";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store/store";
import { addProduct } from "../../redux/feachers/addProduct/addProductActions";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AdThirdContent: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const { adQueryString } = useAdQueryContext();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  const onClickSubmit = async (data: any) => {
    setSubmitting(true);
    const fullData = {
      ...adQueryString,
      parking: Number(data.parking),
      WC: Number(data.WC),
      WCType: data.WCType,
      warHouse: Number(data.warHouse),
      elevator: Number(data.elevator),
      collingSystem: data.collingSystem,
      floorMaterial: data.floorMaterial,
      heatingSystem: data.heatingSystem,
      imageLink:
        adQueryString.imageLink ||
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
      slug: `property-${Date.now()}`,
    };

    try {
      await dispatch(addProduct(fullData)).unwrap();
      navigate("/");
    } catch {
      setSubmitting(false);
    }
  };

  return (
    <form
      className="flex flex-col gap-10 items-center justify-center w-full h-full"
      onSubmit={handleSubmit(onClickSubmit)}
    >
      <div className="flex flex-col justify-center items-center lg:grid lg:grid-cols-2 gap-8 p-3 w-full">
        <TextField
          className="border border-secondery-400 p-2 rounded-sm w-full h-[44px]"
          placeholder="پارکینگ"
          errors={errors}
          name="parking"
          type="number"
          register={register}
          validationSchema={{ required: "پارکینگ الزامی است" }}
        />
        <TextField
          className="border border-secondery-400 p-2 rounded-sm w-full h-[44px]"
          placeholder="سرویس بهداشتی"
          errors={errors}
          name="WC"
          type="number"
          register={register}
          validationSchema={{ required: "سرویس بهداشتی الزامی است" }}
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
          validationSchema={{ required: " انباری الزامی است" }}
        />
        <TextField
          className="border border-secondery-400 p-2 rounded-sm w-full h-[44px]"
          placeholder="آسانسور"
          errors={errors}
          name="elevator"
          type="number"
          register={register}
          validationSchema={{ required: " آسانسور الزامی است" }}
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
          required="جنس کف الزامی است"
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
        <AdButtonSubmit disabled={submitting} />
      </div>
    </form>
  );
};

export default AdThirdContent;
