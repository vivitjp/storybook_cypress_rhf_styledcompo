import React from "react"
import { FieldErrorsImpl, UseFormRegister } from "react-hook-form"

//型1) データの型(コンパニオンスタイル)
export interface MyCompo {
  name: string
}

//型2) コンポーネントProps & Dataの戻り型
type Props = {
  myLabel: string
  myError: FieldErrorsImpl<MyCompo>
} & ReturnType<UseFormRegister<MyCompo>>

//カスタムコンポーネント
// * 内部では HTML input に ref を渡す
export const MyCompo = React.forwardRef<HTMLInputElement, Props>(
  ({ onChange, name, myLabel, myError }, ref) => {
    return (
      <>
        <label>{myLabel}</label>
        <input name={name} ref={ref} onChange={onChange} />
        {myError?.name && <div className="error">name は必須</div>}
      </>
    )
  }
)
