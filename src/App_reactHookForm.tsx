import { Form as Rhf_01 } from "./rhf/Rhf_01_html"
import { Form as Rhf_02 } from "./rhf/Rhf_02_MyCompo1"
import { Form as Rhf_03 } from "./rhf/Rhf_03_MyCompo2"
import { Form as Rhf_04 } from "./rhf/Rhf_04_MyCompo3_useController"
import { Form as Rhf_05 } from "./rhf/Rhf_05_MUI_useController"
import { Form as Rhf_06 } from "./rhf/Rhf_06_MUI_controller"
import { Form as Rhf_07 } from "./rhf/Rhf_07_MyCompo_FormProvider"
import { Form as Rhf_08 } from "./rhf/Rhf_08_MUI_FormProvider"
import { Form as Rhf_09 } from "./rhf/Rhf_09_useFieldArray"
import { Form as Rhf_VR } from "./rhf/Rhf_Verification_MUI_YUP"

export const App_reactHookForm = () => {
  return (
    <div className="containerFlex">
      <div className="containerRow">
        <Rhf_01 />
      </div>
      <div className="containerRow">
        <Rhf_02 />
      </div>
      <div className="containerRow">
        <Rhf_03 />
      </div>
      <div className="containerRow">
        <Rhf_04 />
      </div>
      <div className="containerRow">
        <Rhf_05 />
      </div>
      <div className="containerRow">
        <Rhf_06 />
      </div>
      <div className="containerRow">
        <Rhf_07 />
      </div>
      <div className="containerRow">
        <Rhf_08 />
      </div>
      <div className="containerRow">
        <Rhf_09 />
      </div>
      <div className="containerRow">
        <Rhf_VR />
      </div>
    </div>
  )
}
