import { useForm, SubmitHandler } from "react-hook-form"
import { MyCompo } from "./MyCompo"

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MyCompo>({ defaultValues: { name: "Bill" } })

  const onSubmit: SubmitHandler<MyCompo> = (data) => {
    console.log(JSON.stringify(data))
  }

  return (
    <div className="containerBlock">
      <div className="note">MyCompo1 + register</div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <MyCompo
          myLabel="name"
          myReg={register}
          myError={errors}
          myReq={true}
        />
        <input type="submit" />
      </form>
    </div>
  )
}
