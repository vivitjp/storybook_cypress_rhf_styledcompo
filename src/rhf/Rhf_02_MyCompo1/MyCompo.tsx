import { FieldErrorsImpl, Path, UseFormRegister } from "react-hook-form"

//型1) データの型(コンパニオンスタイル)
export interface MyCompo {
  name: string
}

//型2) コンポーネントProps
type Props = {
  myLabel: Path<MyCompo>
  myReg: UseFormRegister<MyCompo>
  myReq: boolean
  myError: FieldErrorsImpl<MyCompo>
}

//カスタムコンポーネント
// * 内部では HTML input を従来どおりにコール
export const MyCompo = ({ myLabel, myReg, myReq, myError }: Props) => (
  <>
    <label>{myLabel}</label>
    <input {...myReg(myLabel, { required: myReq })} />
    {myError.name && <div className="error">name は必須</div>}
  </>
)
