import { Form as Rhf_01_html } from "./rhf/Rhf_01_html"
import { Form as Rhf_02_MyCompo1 } from "./rhf/Rhf_02A_MyCompo1"
import { Form as Rhf_02_MyCompo2 } from "./rhf/Rhf_02B_MyCompo2"
import { Form as Rhf_02_MyCompo_useController } from "./rhf/Rhf_02C_MyCompo3_useController"
import { Form as Rhf_02_MUI_useController } from "./rhf/Rhf_02D_MUI_useController"
import { Form as Rhf_03_MUI1 } from "./rhf/Rhf_03A_MUI1"
import { Form as Rhf_03_MUI2 } from "./rhf/Rhf_03B_MUI2_YUP"

export const App_reactHookForm = () => {
  return (
    <div className="containerFlex">
      <div className="containerRow">
        <Rhf_01_html />
      </div>
      <div className="containerRow">
        <Rhf_02_MyCompo1 />
      </div>
      <div className="containerRow">
        <Rhf_02_MyCompo2 />
      </div>
      <div className="containerRow">
        <Rhf_02_MyCompo_useController />
      </div>
      <div className="containerRow">
        <Rhf_02_MUI_useController />
      </div>
      <div className="containerRow">
        <Rhf_03_MUI1 />
      </div>
      <div className="containerRow">
        <Rhf_03_MUI2 />
      </div>
    </div>
  )
}
