import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { MyInput } from "./MyInput"

export const Rhf_02_premade1_form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MyInput>()
  const onSubmit: SubmitHandler<MyInput> = (data) => {
    console.log(JSON.stringify(data))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MyInput myLabel="name" myReg={register} errors={errors} required />
      <input type="submit" />
    </form>
  )
}
