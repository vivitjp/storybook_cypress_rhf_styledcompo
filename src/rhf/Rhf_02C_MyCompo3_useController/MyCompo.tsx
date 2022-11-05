import { useController, UseControllerProps } from "react-hook-form"

export interface MyCompo {
  name: string
}

export const MyCompo = (props: UseControllerProps<MyCompo>) => {
  //const { name, defaultValue, control, rules, shouldUnregister } = props

  const {
    field, //field: { ref, ...inputProps },
    formState: { errors, touchedFields, dirtyFields },
    fieldState: { isTouched, isDirty },
  } = useController(props) //[deprecated] invalid

  return (
    <>
      <input {...field} placeholder={props.name} />
      {/* <input ref={ref} {...inputProps} placeholder={props.name} /> */}
      {!!errors.name && <div className="error">"name" is required</div>}
    </>
  )
}
