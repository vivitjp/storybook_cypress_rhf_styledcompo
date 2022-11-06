import { Control, useWatch } from "react-hook-form"

export interface MyCompo {
  name: {
    first: string
    last: string
  }
}

export const MyCompo = ({ control }: { control: Control<MyCompo> }) => {
  const name = useWatch({
    control,
    name: "name",
    defaultValue: { first: "default", last: "default" },
  })

  return (
    <div className="body">
      Watch: {name.first}, {name.last}
    </div>
  )
}
