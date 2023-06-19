'use client';

import { useForm } from "react-hook-form";

type FormData = {
    name: string;
    matricNo: string;
    department: string;
    program: string;
    date: Date;
    time: Date;
    image: FileList;
};


const AttendanceForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        console.log(data);
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col max-w-[750px] mx-auto">
        <div className="mb-4">
          <label
            className="text-md
            text-zinc-900
            font-semibold
            "
            htmlFor="name"
          >
            Name:
          </label>
          <input
            className={`block
                rounded-md
                px-6
                py-4
                w-full
                text-md
                text-black
                bg-neutral-300
                appearance-none
                focus:outline-none
                focus:ring-0
                peer
                    `}
            type="text"
            id="name"
            {...register("name", { required: "Name is Required" })}
          />
          {errors.name && <span className="text-rose-500">{errors.name.message}</span>}
        </div>
        <div className="mb-4">
          <label
            className="text-md
            text-zinc-900
            font-semibold
            "
            htmlFor="matricNo"
          >
            Matric No:
          </label>
          <input
            className={`block
                rounded-md
                px-6
                py-4
                w-full
                text-md
                text-black
                bg-neutral-300
                appearance-none
                focus:outline-none
                focus:ring-0
                peer
                    `}
            type="text"
            id="matricNo"
            {...register("matricNo", { required: "Matric No is Required" })}
          />
          {errors.matricNo && <span className="text-rose-500">{errors.matricNo.message}</span>}
        </div>
        <div className="mb-4">
          <label
            className="text-md
            text-zinc-900
            font-semibold
            "
            htmlFor="department"
          >
            Department:
          </label>
          <input
            className={`block
                rounded-md
                px-6
                py-4
                w-full
                text-md
                text-black
                bg-neutral-300
                appearance-none
                focus:outline-none
                focus:ring-0
                peer
                    `}
            type="text"
            id="department"
            {...register("department", { required: "Department is Required" })}
          />
          {errors.department && <span className="text-rose-500">{errors.department.message}</span>}
        </div>
        <div className="mb-4">
          <label
            className="text-md
            text-zinc-900
            font-semibold
            "
            htmlFor="program"
          >
            Program:
          </label>
          <input
            className={`block
                rounded-md
                px-6
                py-4
                w-full
                text-md
                text-black
                bg-neutral-300
                appearance-none
                focus:outline-none
                focus:ring-0
                peer
                    `}
            type="text"
            id="program"
            {...register("program", { required: "Program is Required" })}
          />
          {errors.program && <span className="text-rose-500">{errors.program.message}</span>}
        </div>
        <div className="mb-4">
          <label
            className="text-md
            text-zinc-900
            font-semibold
            "
            htmlFor="date"
          >
            Date:
          </label>
          <input
            className={`block
                rounded-md
                px-6
                py-4
                w-full
                text-md
                text-black
                bg-neutral-300
                appearance-none
                focus:outline-none
                focus:ring-0
                peer
                    `}
            type="date"
            id="date"
            {...register("date", { required: "Date is Required" })}
          />
          {errors.date && <span className="text-rose-500">{errors.date.message}</span>}
        </div>
        <div className="mb-4">
          <label
            className="text-md
            text-zinc-900
            font-semibold"
            htmlFor="time"
          >
            Time:
          </label>
          <input
            className={`block
                rounded-md
                px-6
                py-4
                w-full
                text-md
                text-black
                bg-neutral-300
                appearance-none
                focus:outline-none
                focus:ring-0
                peer
                    `}
            type="time"
            id="time"
            {...register("time", { required: "Time is Required" })}
          />
          {errors.time && <span className="text-rose-500">{errors.time.message}</span>}
        </div>
        <div className="mb-4">
            <label htmlFor="image" className="text-md text-zinc-900 font-semibold">Photo:</label>
            <input className="block mt-3" type="file" {...register("image", { required: "Image is Required" })} />
            {errors.image && <span className="text-rose-500">{errors.image.message}</span>}
        </div>
        <button className=" w-fit bg-gray-700 text-white hover:bg-gray-500 px-8  py-3 rounded-2xl mt-1" type="submit">
          Submit
        </button>
      </form>
    );
}

export default AttendanceForm;