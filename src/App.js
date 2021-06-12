import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import { RadioGroup } from "./RadioGroup";

const FormRadioGroups = {
  importancia_salud_ocular: {
    label: "¿Qué importancia tiene su salud ocular para usted?*",
    options: [
      { label: "Mucha", value: "mucha" },
      { label: "Poca", value: "poca" },
      { label: "Ninguna", value: "ninguna" },
    ],
  },
};

function App() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const importanciaSaludOcular = watch("importancia_salud_ocular");
  useEffect(() => {
    register("importancia_salud_ocular", {
      required: {
        value: true,
        message: "Este campo es requerido",
      },
    });
  }, [register]);

  const onSubmit = (data) => {
    const currentSurveyResults = JSON.parse(
      localStorage.getItem("surveyResults") || "[]"
    );

    const updatedSurveyResults = JSON.stringify([
      ...currentSurveyResults,
      data,
    ]);

    localStorage.setItem("surveyResults", updatedSurveyResults);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <RadioGroup
        value={importanciaSaludOcular}
        setValue={setValue}
        name="importancia_salud_ocular"
        options={FormRadioGroups.importancia_salud_ocular.options}
        label={FormRadioGroups.importancia_salud_ocular.label}
      />
      {errors.importancia_salud_ocular && (
        <span>Esta pregunta es requerida</span>
      )}

      <input type="submit" />
    </form>
  );
}

export default App;
