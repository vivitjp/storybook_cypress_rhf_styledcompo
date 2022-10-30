import { Rhf_01_basic_form } from "./component_rhf/Rhf_01_basic_form"
import { Rhf_02_premade1_form } from "./component_rhf/Rhf_02_premade1_form"
import { Rhf_02_premade2_form } from "./component_rhf/Rhf_02_premade2_form"

export const App_reactHookForm = () => {
  return (
    <div className="containerFlex">
      <div className="containerRow">
        <Rhf_01_basic_form />
      </div>
      <div className="containerRow">
        <Rhf_02_premade1_form />
      </div>
      <div className="containerRow">
        <Rhf_02_premade2_form />
      </div>
    </div>
  )
}
