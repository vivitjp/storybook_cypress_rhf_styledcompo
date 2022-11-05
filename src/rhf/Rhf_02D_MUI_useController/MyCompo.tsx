import { useController, UseControllerProps } from "react-hook-form"
import { TextField } from "@material-ui/core"

export interface MyCompo {
  name: string
}

export const MyCompo = (props: UseControllerProps<MyCompo>) => {
  const {
    field: { ref, ...inputProps },
    formState: { errors },
  } = useController(props)

  return (
    <>
      <TextField {...inputProps} ref={ref} /* or inputRef={ref} */ />
      {!!errors.name && <div className="error">"name" is required</div>}
    </>
  )
}
