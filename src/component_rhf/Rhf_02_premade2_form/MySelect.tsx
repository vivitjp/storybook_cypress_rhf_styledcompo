import React from "react"
import { UseFormRegister } from "react-hook-form"

export type MySelect = {
  Age: number
}

export const MySelect = React.forwardRef<
  HTMLSelectElement,
  { label: string } & ReturnType<UseFormRegister<MySelect>>
>(({ onChange, onBlur, name, label }, ref) => (
  <>
    <label>{label}</label>
    <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  </>
))
