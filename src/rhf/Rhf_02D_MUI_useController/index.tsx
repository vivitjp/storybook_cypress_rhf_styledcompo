import { useForm } from "react-hook-form"
import { MyCompo } from "./MyCompo"

export const Form = () => {
  const { handleSubmit, control } = useForm<MyCompo>({
    defaultValues: { name: "Tom" },
    mode: "onChange",
  })
  const onSubmit = (data: MyCompo) => console.log(data)

  return (
    <div className="containerBlock">
      <div className="note">MUI + useController</div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <MyCompo control={control} name="name" rules={{ required: true }} />
        <input type="submit" />
      </form>
    </div>
  )
}
