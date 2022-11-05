import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { TextField } from "@material-ui/core"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

interface InputValues {
  name: string
}

const egSchema = yup.object().shape({
  name: yup.string().min(8).required(),
})

export const Form = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<InputValues>({
    defaultValues: { name: "Karen" },
    resolver: yupResolver(egSchema),
    mode: "onChange",
  })

  const onSubmit: SubmitHandler<InputValues> = (data) => {
    console.log(watch("name"))
  }

  return (
    <div className="containerBlock">
      <div className="note">MUI2 + Controller</div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="name"
          render={({ field }) => {
            return (
              <TextField
                label="name"
                {...field}
                error={!!errors.name}
                helperText={errors?.name?.message}
              />
            )
          }}
        />
        <input type="submit" />
      </form>
    </div>
  )
}
