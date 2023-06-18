import { useForm, SubmitHandler } from "react-hook-form";

type FormData = {
    name?: string;
    id: string;
}

type FormProps =  {
  onSubmit: SubmitHandler<FormData>;
  type: React.HTMLInputTypeAttribute;
  id: string;
  required?: string;
  label: string;
};

const Form: React.FC<FormProps> = ({ onSubmit, type, id, required, label }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col max-w-[750px] mx-auto my-0"
      >
        <div className="mb-4">
          <label
            className="text-md
            text-zinc-900
            font-semibold
            "
            htmlFor={id}
          >
            {label}:
          </label>
          <input
            className={`block
                rounded-md
                px-6
                pt-6
                pb-1
                w-full
                text-md
                text-black
                bg-neutral-300
                appearance-none
                focus:outline-none
                focus:ring-0
                peer
                    `}
            type={type}
            id={id}
            {...register(id, { required })}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
      </form>
    );
}