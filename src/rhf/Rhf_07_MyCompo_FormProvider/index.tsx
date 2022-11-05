import { useForm, FormProvider, SubmitHandler } from "react-hook-form"
import { MyCompo } from "./MyCompo"

export const Form = () => {
  const methods = useForm<MyCompo>({
    defaultValues: { name: "Tim" },
  })
  const { watch, handleSubmit, reset } = methods

  const onSubmit: SubmitHandler<MyCompo> = (data) => {
    console.log(watch("name"))
    console.log(data)
  }

  const resetHandler = () => {
    reset()
  }

  return (
    <div className="containerBlock">
      <div className="note">MyCompo + FormProvider</div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <MyCompo />
          <input type="submit" />
          <input type="button" onClick={resetHandler} value="Reset" />
        </form>
      </FormProvider>
    </div>
  )
}
