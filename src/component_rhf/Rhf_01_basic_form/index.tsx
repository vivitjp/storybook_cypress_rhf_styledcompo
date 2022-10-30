import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  name: string
  address: string
}

export const Rhf_01_basic_form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: "John",
      address: "Tokyo",
    },
  })

  const onSubmit: SubmitHandler<Inputs> = () => {
    console.log(`Watch: name= ${watch("name")}, address= ${watch("address")}`)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true })} />
      <input {...register("address")} />
      {errors.address && <span>This field is required</span>}
      <input type="submit" />
    </form>
  )
}
