import { FieldErrorsImpl, Path, UseFormRegister } from "react-hook-form"

//コンパニオンスタイル
export interface MyInput {
  name: string
}

type Props = {
  myLabel: Path<MyInput>
  myReg: UseFormRegister<MyInput>
  required: boolean
  errors: Partial<FieldErrorsImpl<MyInput>>
}

export const MyInput = ({ myLabel, myReg, required, errors }: Props) => (
  <>
    <label>{myLabel}</label>
    <input {...myReg(myLabel, { required })} />
    {errors.name && <div className="error">name は必須</div>}
  </>
)
