import { useForm, useFieldArray, Controller } from "react-hook-form"

export const Form = () => {
  const { register, control, handleSubmit } = useForm()
  //他: reset, trigger, setError, 使用不可: defaultValues
  const { fields, append, remove, prepend } = useFieldArray({
    control,
    name: "test",
  })
  //他: prepend, swap, move, insert

  const defValues = { firstName: "Gill", lastName: "Smith" }

  return (
    <div className="containerBlock">
      <div className="note">FieldArray</div>

      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <ul>
          {fields.map((item, index) => (
            <li key={item.id}>
              <input
                {...register(`test.${index}.firstName`)}
                defaultValue="" //各methodのdefaultValues値が入る
              />

              <Controller
                render={({ field }) => <input {...field} />}
                name={`test.${index}.lastName`}
                control={control}
                defaultValue="" //各methodのdefaultValues値が入る
              />

              <button type="button" onClick={() => remove(index)}>
                削除
              </button>
            </li>
          ))}
        </ul>

        <button type="button" onClick={() => append(defValues)}>
          追加(後)
        </button>

        <button type="button" onClick={() => prepend(defValues)}>
          追加(前)
        </button>

        <input type="submit" />
      </form>
    </div>
  )
}
