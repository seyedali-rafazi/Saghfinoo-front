import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import { useAdQueryContext } from "../../context/AdQueryContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdButtonBack, AdButtonContinue } from "../../ui/AdButton";
import SelectField from "../../ui/SelectField";

const options = [
  {
    id: 1,
    value: "",
    text: "...",
  },
  {
    id: 2,
    value: "665a390ebcd7885317cd4b1e",
    text: "خرید",
  },
  {
    id: 3,
    value: "665a3964bcd7885317cd4b23",
    text: "اجاره",
  },
];

const AdFirstContent: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const { adQueryString, setAdQueryString } = useAdQueryContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const onCkickSubmit = (data: any) => {
    setAdQueryString((prevUser) => ({
      ...prevUser,
      title: data.title,
      description: data.description,
      houseGroup: data.houseGroup,
    }));
    navigate("/ad-price");
  };

  return (
    <form
      className="flex flex-col gap-10 items-center justify-center w-full"
      onSubmit={handleSubmit(onCkickSubmit)}
    >
      <div className="flex flex-col justify-center items-center lg:flex-row gap-8 p-3 w-full ">
        <TextField
          className="border border-secondery-400 p-2 rounded-sm w-full h-[44px]"
          placeholder="موضوع اگهی"
          errors={errors}
          name="title"
          type="text"
          onChange={(v) => setTitle(v.target.value)}
          register={register}
          validationSchema={{
            required: "موضوع الزامی است",
          }}
        />
        <TextField
          className="border border-secondery-400 p-2 rounded-sm w-full h-[44px]"
          placeholder="توضیحات اگهی "
          errors={errors}
          name="description"
          type="text"
          onChange={(v) => setDescription(v.target.value)}
          register={register}
          validationSchema={{
            required: "توضیحات ضروری است",
          }}
        />
        <SelectField
          name="houseGroup"
          errors={errors}
          register={register}
          options={options}
          required="نوع معامله را انتخاب کنید"
        />
      </div>
      <div className="flex gap-3 w-full max-w-md">
        <AdButtonBack path="/" />
        <AdButtonContinue />
      </div>
    </form>
  );
};

export default AdFirstContent;
