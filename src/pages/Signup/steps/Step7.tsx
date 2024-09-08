import { createSignal, createEffect } from "solid-js";
import { FormData } from "../../../types/formTypes";
import { FormGroup, Label, Select, TextArea } from "../Signup.styled";

interface StepProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
  setIsStepValid: (isValid: boolean) => void;
}

const Step7 = ({ formData, setFormData, setIsStepValid }: StepProps) => {
  const [purpose, setPurpose] = createSignal(formData.purpose);
  const [otherPurpose, setOtherPurpose] = createSignal(formData.otherPurpose);

  const handlePurposeChange = (e: Event) => {
    const target = e.target as HTMLSelectElement;
    setPurpose(target.value);
    setFormData({ ...formData, purpose: target.value });
  };

  const handleOtherPurposeChange = (e: Event) => {
    const target = e.target as HTMLTextAreaElement;
    setOtherPurpose(target.value);
    setFormData({ ...formData, otherPurpose: target.value });
  };

  createEffect(() => {
    setIsStepValid(true); // 任意項目なので常に有効
  });

  return (
    <FormGroup>
      <Label for="purpose">
        参加目的 <span class="optional">任意</span>
      </Label>
      <Select
        id="purpose"
        name="purpose"
        value={purpose()}
        onChange={handlePurposeChange}
      >
        <option value="">選択してください</option>
        <option value="集中して学習したい">集中して学習したい</option>
        <option value="他の参加者と交流したい">他の参加者と交流したい</option>
        <option value="新しいスキルを習得したい">
          新しいスキルを習得したい
        </option>
        <option value="相談やアドバイスをしたい">
          相談やアドバイスをしたい
        </option>
        <option value="その他">その他</option>
      </Select>
      {purpose() === "その他" && (
        <TextArea
          id="otherPurpose"
          name="otherPurpose"
          rows="3"
          placeholder="その他の目的を入力してください"
          value={otherPurpose()}
          onInput={handleOtherPurposeChange}
        />
      )}
    </FormGroup>
  );
};

export default Step7;
