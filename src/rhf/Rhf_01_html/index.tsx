import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  name: string
  address: string
}

export const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: "John",
      address: "Tokyo",
    },
  })

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
    console.log(`Watch: name= ${watch("name")}, address= ${watch("address")}`)
  }

  return (
    <div className="containerBlock">
      <div className="note">HTML + ...register(NAME)</div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: true })} />
        <input {...register("address")} />
        <input type="submit" />
      </form>
      {!!errors.name && <div className="error">"name" is required</div>}
    </div>
  )
}
