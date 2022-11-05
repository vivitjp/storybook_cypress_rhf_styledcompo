import TextField from "@material-ui/core/TextField"
import { Controller, useFormContext } from "react-hook-form"

export interface MUI {
  name: string
}

export function MUI() {
  const {
    control,
    formState: { errors },
  } = useFormContext<MUI>()

  const rules = {
    required: {
      value: true,
      message: "Required",
    },
  }

  return (
    <>
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
    </>
  )
}
