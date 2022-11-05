import { useFormContext } from "react-hook-form"

export interface MyCompo {
  name: string
}

export function MyCompo() {
  const {
    register,
    formState: { errors },
    watch, //reactive
    getValues, //not reactive!
  } = useFormContext<MyCompo>()

  return (
    <>
      <input
        {...register("name", {
          required: { value: true, message: '"name" is required' },
          minLength: { value: 7, message: '"name" is at least 7' },
        })}
      />
      {!!errors.name && <div className="error">{errors.name.message}</div>}
    </>
  )
}
