import { useForm, SubmitHandler } from "react-hook-form"
import { MyCompo } from "./MyCompo"

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<MyCompo>({ defaultValues: { name: "James" } })

  const onSubmit: SubmitHandler<MyCompo> = (data) => {
    if (data.name) console.log(JSON.stringify(data))
    console.log(`watch: ${watch("name")}`)
  }

  return (
    <div className="containerBlock">
      <div className="note">MyCompo2 + forwardRef</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <MyCompo
          {...register("name", { required: true })}
          myLabel="name"
          myError={errors}
        />
        <input type="submit" />
      </form>
    </div>
  )
}
