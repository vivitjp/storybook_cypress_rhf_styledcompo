import { useForm, FormProvider, SubmitHandler } from "react-hook-form"
import { MUI } from "./MUI"

export const Form = () => {
  const methods = useForm<MUI>({
    defaultValues: { name: "Tim" },
  })
  const { watch, handleSubmit } = methods

  const onSubmit: SubmitHandler<MUI> = (data) => {
    console.log(watch("name"))
  }

  return (
    <div className="containerBlock">
      <div className="note">MUI + FormProvider</div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <MUI />
          <input type="submit" />
        </form>
      </FormProvider>
    </div>
  )
}
