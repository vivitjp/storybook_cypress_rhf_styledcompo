import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { TextField } from "@material-ui/core"

interface InputValues {
  name: string
}

export const Form = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty }, //isTouched
    watch,
    reset,
  } = useForm<InputValues>({
    defaultValues: { name: "Karen" },
    mode: "onChange",
    shouldUnregister: false,
  })

  const onSubmit: SubmitHandler<InputValues> = (data) => {
    console.log(data)
    reset()
    console.log(watch("name"))
  }

  const rules = {
    required: {
      value: true,
      message: "Required",
    },
    minLength: {
      value: 8,
      message: "At least 8 length",
    },
  }

  return (
    <div className="containerBlock">
      <div className="note">MUI1 + Controller</div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="name"
          rules={rules}
          render={({ field }) => {
            return (
              <TextField
                label="name"
                {...field}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            )
          }}
        />
        <input type="submit" />
      </form>
    </div>
  )
}
