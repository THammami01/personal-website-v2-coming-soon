import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm as useFormspree } from "@formspree/react";
import LoadingSpinner from "../../common/LoadingSpinner";

const formSchema = yup.object().shape({
  email: yup.string().email().required(),
});

const NotificationForm: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [state, handleFormspreeSubmit] = useFormspree("mayvbple");
  const {
    register,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(formSchema),
  });

  if (state.succeeded) {
    if (isLoading === true) setIsLoading(false);

    return (
      <div
        className="mt-3 text-yellow-200 text-sm transition ease-in-out delay-100 rounded border-2 border-dashed border-transparent hover:border-sky-500/30 w-fit mx-auto p-2 pb-3"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="1000"
        data-aos-offset="0"
      >
        You'll receive an email from me when my portfolio is deployed! 🤩
      </div>
    );
  }

  const handleSubmit = (submissionData: any) => {
    submissionData.preventDefault();
    const input = document.getElementById("email") as any;

    if (input.value === "") {
      input.focus();
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      handleFormspreeSubmit(submissionData);
    }, 500);
  };

  return (
    <form
      className="transition ease-in-out delay-100 relative mt-3 mx-auto md:w-[450px] p-2 pb-3 md:pb-2 border-2 border-dashed border-transparent hover:border-sky-500/30 rounded"
      onSubmit={handleSubmit}
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-offset="0"
    >
      <input
        type="email"
        id="email"
        {...register("email")}
        className={`text-grey bg-[#292929] outline-none border-2 border-transparent ring-2 ${
          errors.email
            ? "ring-red-500"
            : "ring-transparent focus:ring-indigo-400"
        } block sm:text-sm rounded p-4 w-full`}
        placeholder="Enter your email address"
      />

      <button
        type="submit"
        className="bg-white hover:bg-blue-700 text-[#292929] hover:text-white transition-all duration-200 p-2 px-4 rounded cursor-pointer hover:underline underline-offset-2 decoration-wavy decoration-2 decoration-white/30 md:absolute md:top-[16px] md:right-4 mt-2 md:mt-0 w-full md:w-fit disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-[#292929] disabled:cursor-not-allowed"
        disabled={errors.email || state.submitting ? true : false}
      >
        {isLoading && <LoadingSpinner />} Notify me
      </button>
    </form>
  );
};

export default NotificationForm;
