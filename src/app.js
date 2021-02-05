import React, { useEffect, useReducer, useState, useRef } from "react";
import "./styles.css";
import { Text } from "./text";
import { PatientForm } from "./patientForm";
import { PatientItem } from "./patientItem";
import { Review } from "./review";
import { Diary } from "./diary";
import { Epicrisis } from "./epicrisis";
import { Extract } from "./extract";
import { OperationRegister } from "./operationRegister";
// import { heparynCounter } from "./functions/treatmentCreator";

import {
  patientsReducer,
  initialState,
  PATIENTS_ACTIONS
} from "./patientsReducer";

export const App = () => {
  const [patients, dispatch] = useReducer(patientsReducer, initialState());
  const onAdd = (
    disease,
    startDay,
    startMonth,
    startYear,
    cardNumber,
    name,
    doctor,
    toothCasual,
    start1,
    start2,
    pregnancy,
    childbirth,
    birthWeight,
    condition,
    weight,
    age,
    crownDestruction,
    inflammationArea,
    drugName1,
    drugName2,
    drugName3,
    drugName4,
    drugName5,
    appointment,
    appointment2,
    appointment3,
    protocolNumber,
    operationDate,
    operationTime,
    pliers,
    elevator,
    duration,
    surgeon,
    assistant,
    anesthetist,
    woundArea,
    woundSide,
    injuryDate,
    injuryTime,
    injuryReason,
    woundType,
    woundLength,
    woundWidth,
    woundDepth,
    woundForm,
    woundLedges,
    woundBleeding,
    woundAliens,
    sutureType,
    sutureMaterial,
    sutureSize,
    perioTeeth,
    changedList,
    anestesiaType,
    woundSurface,
    abscessType,
    abscessArea,
    abscessSide,
    abscessReason,
    abscessTooth,
    cystTooth,
    cystDiameter,
    isTemporaryToothAbove,
    cystType,
    rootSealed,
    retention1,
    retention2,
    retention3,
    retention4,
    neoplasmType,
    neoplasmArea,
    neoplasmSide,
    growthRate,
    neoplasmSurface,
    neoplasmMovability,
    neoplasmPoignancy,
    neoplasmConsistance,
    neoplasmDiameter,
    neoplasmColor,
    neoplasmBorders,
    neoplasmAboveSurface,
    neoplasmSurfaceAlter,
    neoplasmForm,
    bilateralismLower,
    fractureLowerArea1,
    fractureLowerSide1,
    fractureLowerBias1,
    fractureLowerDirection1,
    fractureLowerTooth1a,
    fractureLowerTooth1b,
    fractureLowerTeethInLine1,
    fractureLowerStep1,
    lowerJawSubmucous1,
    xRay,
    continuity,
    fractureOperationType,
    fractureLowerArea2,
    fractureLowerSide2,
    fractureLowerBias2,
    fractureLowerDirection2,
    fractureLowerTooth2a,
    fractureLowerTooth2b,
    fractureLowerTeethInLine2,
    fractureLowerStep2,
    lowerJawSubmucous2,
    dlType,
    dlAlveolusDestroyed,
    dlOperationType,
    dlDirection,
    dlDistance,
    dlDeployed,
    dlTooth1,
    dlTooth2,
    dlTooth3,
    dlAlveolusDestroyed2,
    dlOperationType2,
    dlDirection2,
    dlDistance2,
    dlDeployed2,
    dlTooth4,
    dlTooth5,
    dlTooth6,
    dlType2,
    overCompleteTooth1,
    overCompleteTooth2,
    overCompleteTooth3,
    overCompleteTooth4,
    overCompleteForm,
    overCompleteForm2,
    overCompleteLocation,
    overCompleteLocation2,
    overCompleteXRay,
    overCompleteAmount
  ) => {
    dispatch({
      type: PATIENTS_ACTIONS.ADD,
      disease,
      startDay,
      startMonth,
      startYear,
      cardNumber,
      name,
      doctor,
      toothCasual,
      start1,
      start2,
      pregnancy,
      childbirth,
      birthWeight,
      condition,
      weight,
      age,
      crownDestruction,
      inflammationArea,
      drugName1,
      drugName2,
      drugName3,
      drugName4,
      drugName5,
      appointment,
      appointment2,
      appointment3,
      protocolNumber,
      operationDate,
      operationTime,
      pliers,
      elevator,
      duration,
      surgeon,
      assistant,
      anesthetist,
      woundArea,
      woundSide,
      injuryDate,
      injuryTime,
      injuryReason,
      woundType,
      woundLength,
      woundWidth,
      woundDepth,
      woundForm,
      woundLedges,
      woundBleeding,
      woundAliens,
      sutureType,
      sutureMaterial,
      sutureSize,
      perioTeeth,
      changedList,
      anestesiaType,
      woundSurface,
      abscessType,
      abscessArea,
      abscessSide,
      abscessReason,
      abscessTooth,
      cystTooth,
      cystDiameter,
      isTemporaryToothAbove,
      cystType,
      rootSealed,
      retention1,
      retention2,
      retention3,
      retention4,
      neoplasmType,
      neoplasmArea,
      neoplasmSide,
      growthRate,
      neoplasmSurface,
      neoplasmMovability,
      neoplasmPoignancy,
      neoplasmConsistance,
      neoplasmDiameter,
      neoplasmColor,
      neoplasmBorders,
      neoplasmAboveSurface,
      neoplasmSurfaceAlter,
      neoplasmForm,
      bilateralismLower,
      fractureLowerArea1,
      fractureLowerSide1,
      fractureLowerBias1,
      fractureLowerDirection1,
      fractureLowerTooth1a,
      fractureLowerTooth1b,
      fractureLowerTeethInLine1,
      fractureLowerStep1,
      lowerJawSubmucous1,
      xRay,
      continuity,
      fractureOperationType,
      fractureLowerArea2,
      fractureLowerSide2,
      fractureLowerBias2,
      fractureLowerDirection2,
      fractureLowerTooth2a,
      fractureLowerTooth2b,
      fractureLowerTeethInLine2,
      fractureLowerStep2,
      lowerJawSubmucous2,
      dlType,
      dlAlveolusDestroyed,
      dlOperationType,
      dlDirection,
      dlDistance,
      dlDeployed,
      dlTooth1,
      dlTooth2,
      dlTooth3,
      dlAlveolusDestroyed2,
      dlOperationType2,
      dlDirection2,
      dlDistance2,
      dlDeployed2,
      dlTooth4,
      dlTooth5,
      dlTooth6,
      dlType2,
      overCompleteTooth1,
      overCompleteTooth2,
      overCompleteTooth3,
      overCompleteTooth4,
      overCompleteForm,
      overCompleteForm2,
      overCompleteLocation,
      overCompleteLocation2,
      overCompleteXRay,
      overCompleteAmount
    });
  };
  const onRemove = (_id) => dispatch({ type: PATIENTS_ACTIONS.REMOVE, _id });
  const onDischargeAdd = (
    _id,
    lastDay,
    lastMonth,
    lastYear,
    hb,
    er,
    leu,
    pal,
    segm,
    eoz,
    limf,
    rse,
    uColor,
    uOpacity,
    uWeight,
    uPh,
    uProtein,
    uLeu,
    uEp1,
    uEp2,
    glucose,
    enterobioz,
    dung,
    bloodGroup,
    rezusFactor,
    uOther,
    wasViolation,
    finalDiagnosis
  ) => {
    return dispatch({
      type: PATIENTS_ACTIONS.DISCHARGEADD,
      _id,
      lastDay,
      lastMonth,
      lastYear,
      hb,
      er,
      leu,
      pal,
      segm,
      eoz,
      limf,
      rse,
      uColor,
      uOpacity,
      uWeight,
      uPh,
      uProtein,
      uLeu,
      uEp1,
      uEp2,
      glucose,
      enterobioz,
      dung,
      bloodGroup,
      rezusFactor,
      uOther,
      wasViolation,
      finalDiagnosis
    });
  };
  const onOperationAdd = (
    _id,
    protocolNumber,
    operationDate,
    operationTime,
    pliers,
    elevator,
    duration,
    surgeon,
    assistant,
    anesthetist,
    restMaterial,
    sutureType,
    sutureMaterial,
    sutureSize,
    anestesiaType,
    operationDataSend,
    changedList
  ) => {
    dispatch({
      type: PATIENTS_ACTIONS.OPERATIONADD,
      _id,
      protocolNumber,
      operationDate,
      operationTime,
      pliers,
      elevator,
      duration,
      surgeon,
      assistant,
      anesthetist,
      restMaterial,
      sutureType,
      sutureMaterial,
      sutureSize,
      anestesiaType,
      operationDataSend,
      changedList
    });
  };

  const [sortValue, setSortValue] = useState("Сортувати");

  useEffect(() => {
    const patientsStringified = JSON.stringify(patients);
    localStorage.setItem("patients", patientsStringified);
  }, [patients]);

  const [cur, setCur] = useState(patients[0]);

  const inputRef = useRef("");

  const onSetCurrent = (id) => {
    let currentArray = [];
    currentArray = patients.filter((patient) => patient._id === id);
    setCur(currentArray[0]);
  };

  const onExtractAdd = (
    _id,
    birthDay,
    birthMonth,
    birthYear,
    town,
    adress,
    district,
    village,
    otherRegion
  ) => {
    return dispatch({
      type: PATIENTS_ACTIONS.EXTRACTADD,
      _id,
      birthDay,
      birthMonth,
      birthYear,
      town,
      adress,
      district,
      village,
      otherRegion
    });
  };
  const onEditAdd = (_id, editType, editedValue) => {
    return dispatch({
      type: PATIENTS_ACTIONS.EDIT,
      _id,
      editType,
      editedValue
    });
  };
  const onCardNumberSort = () => {
    setSortValue("Відсортовано по номеру карти");
    dispatch({ type: PATIENTS_ACTIONS.CARDNUMBERSORT });
  };
  const onNameSort = () => {
    setSortValue("Відсортовано по алфавіту");
    dispatch({ type: PATIENTS_ACTIONS.NAMESORT });
  };
  const onDiseaseSort = () => {
    setSortValue("Відсортовано по хворобі");
    dispatch({ type: PATIENTS_ACTIONS.DISEASESORT });
  };
  const [request, setRequest] = useState("");
  const onRequestChange = (e) => setRequest(e.target.value);
  const onRequestSort = () => {
    inputRef.current.focus();
    setSortValue("Відсортовано по імені пацієнта");
    setRequest("");
    return dispatch({ type: PATIENTS_ACTIONS.REQUESTSORT, request });
  };
  console.log(cur.planned);
  console.log(cur.operationDataSend);
  return (
    <div className="app">
      <PatientForm {...{ onAdd }} />
      <hr />
      <Text size="20px">Список пацієнтів</Text>
      <div className="flexi" id="sortBtnLines">
        {" "}
        <div className="label" id="sortInfo">
          {sortValue}
        </div>{" "}
        <button onClick={onCardNumberSort}>По № карти</button>{" "}
        <button onClick={onNameSort}>По алфавіту</button>{" "}
        <button onClick={onDiseaseSort}>По хворобі</button>{" "}
        <input
          ref={inputRef}
          className="longInputs"
          value={request}
          onChange={onRequestChange}
          placeholder="Введіть ім'я чи прізвище пацієнта..."
        />
        <button id="searchByRequest" onClick={onRequestSort}>
          Шукати
        </button>{" "}
      </div>
      <div id="patientList">
        {patients.map((patient, idx) => (
          <PatientItem
            idx={idx}
            key={patient._id}
            {...{ patient }}
            onRemove={onRemove}
            onSetCurrent={onSetCurrent}
            onDischargeAdd={onDischargeAdd}
            onExtractAdd={onExtractAdd}
            onOperationAdd={onOperationAdd}
            onEditAdd={onEditAdd}
            backgroundColor={
              patient.disease === "periodontit"
                ? "azure"
                : patient.disease === "periostit"
                ? "lavender"
                : patient.disease === "skinWound"
                ? "beige"
                : patient.disease === "tongueBridle"
                ? "palegoldenrod"
                : patient.disease === "lipBridle"
                ? "seaShell"
                : patient.disease === "caries"
                ? "#CFF0EC"
                : patient.disease === "abscess"
                ? "mistyRose"
                : patient.disease === "cyst"
                ? "linen"
                : patient.disease === "retention"
                ? "gainsboro"
                : patient.disease === "neoplasm"
                ? "#D8E1C7"
                : patient.disease === "fractureLowerJaw"
                ? "#E1C6C2"
                : patient.disease === "dislocationTooth"
                ? "#F7DCFF"
                : patient.disease === "overComplete"
                ? "#D7FFE4"
                : "white"
              //
            }
            border={cur._id === patient._id ? "2px solid olive" : ""}
          />
        ))}
      </div>
      <hr />
      <Review current={cur} />
      <Epicrisis current={cur} />
      <Extract current={cur} />
      <div id="operationRegister">
        <OperationRegister current={cur} />
      </div>
      {cur.diaryList.map((item, idx) => (
        <Diary
          key={idx}
          current={item}
          lastIndex={idx === cur.diaryList.length - 1 ? true : false}
          penultimateIndex={idx === cur.diaryList.length - 2 ? true : false}
          patient={cur}
        />
      ))}
    </div>
  );
};
