import React from "react"
import { UseFormRegister } from "react-hook-form"

//コンパニオンスタイル
export interface MyInput {
  name: string
}

export const MyInput = React.forwardRef<
  HTMLInputElement,
  { label: string } & ReturnType<UseFormRegister<MyInput>>
>(({ onChange, name, label }, ref) => (
  <>
    <label>{label}</label>
    <input name={name} ref={ref} onChange={onChange} />
  </>
))
