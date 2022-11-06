import { useForm } from "react-hook-form"
import { MyCompo } from "./MyCompo"

export const Form = () => {
  const { register, control, handleSubmit } = useForm<MyCompo>()

  const onSubmit = (data: MyCompo) => {
    console.log(data)
  }

  return (
    <div className="containerBlock">
      <div className="note">useWatch</div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name.first")} />
        <input {...register("name.last")} />
        <input type="submit" />

        <MyCompo control={control} />
      </form>
    </div>
  )
}
