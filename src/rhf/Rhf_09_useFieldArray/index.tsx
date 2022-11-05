import { useForm, useFieldArray, Controller } from "react-hook-form"

export const Form = () => {
  const { register, control, handleSubmit, reset, trigger, setError } =
    useForm() // defaultValues: 使用不可
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    { control, name: "test" }
  )

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <ul>
        {fields.map((item, index) => (
          <li key={item.id}>
            <input {...register(`test.${index}.firstName`)} defaultValue="" />

            <Controller
              render={({ field }) => <input {...field} />}
              name={`test.${index}.lastName`}
              control={control}
              defaultValue=""
            />

            <button type="button" onClick={() => remove(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => append({ firstName: "aBill", lastName: "aLuo" })}
      >
        append
      </button>

      <input type="submit" />
    </form>
  )
}
