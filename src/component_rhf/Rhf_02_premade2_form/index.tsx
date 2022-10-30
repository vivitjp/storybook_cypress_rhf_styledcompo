import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { MySelect } from "./MySelect"
import { MyInput } from "./MyInput"

export const Rhf_02_premade2_form = () => {
  const { register, handleSubmit } = useForm<MyInput | MySelect>()

  const onSubmit: SubmitHandler<MyInput | MySelect> = (data) => {
    console.log(JSON.stringify(data))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MyInput label="name" {...register("name")} />
      <MySelect label="Age" {...register("Age")} />
      <input type="submit" />
    </form>
  )
}
