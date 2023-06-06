/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Location } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function LocationCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    pincode: "",
    country: "",
    state: "",
    district: "",
    city: "",
    landmark: "",
    lineone: "",
    linetwo: "",
  };
  const [pincode, setPincode] = React.useState(initialValues.pincode);
  const [country, setCountry] = React.useState(initialValues.country);
  const [state, setState] = React.useState(initialValues.state);
  const [district, setDistrict] = React.useState(initialValues.district);
  const [city, setCity] = React.useState(initialValues.city);
  const [landmark, setLandmark] = React.useState(initialValues.landmark);
  const [lineone, setLineone] = React.useState(initialValues.lineone);
  const [linetwo, setLinetwo] = React.useState(initialValues.linetwo);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setPincode(initialValues.pincode);
    setCountry(initialValues.country);
    setState(initialValues.state);
    setDistrict(initialValues.district);
    setCity(initialValues.city);
    setLandmark(initialValues.landmark);
    setLineone(initialValues.lineone);
    setLinetwo(initialValues.linetwo);
    setErrors({});
  };
  const validations = {
    pincode: [{ type: "Required" }],
    country: [{ type: "Required" }],
    state: [{ type: "Required" }],
    district: [{ type: "Required" }],
    city: [{ type: "Required" }],
    landmark: [{ type: "Required" }],
    lineone: [{ type: "Required" }],
    linetwo: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          pincode,
          country,
          state,
          district,
          city,
          landmark,
          lineone,
          linetwo,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Location(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "LocationCreateForm")}
      {...rest}
    >
      <TextField
        label="Pincode"
        isRequired={true}
        isReadOnly={false}
        value={pincode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              pincode: value,
              country,
              state,
              district,
              city,
              landmark,
              lineone,
              linetwo,
            };
            const result = onChange(modelFields);
            value = result?.pincode ?? value;
          }
          if (errors.pincode?.hasError) {
            runValidationTasks("pincode", value);
          }
          setPincode(value);
        }}
        onBlur={() => runValidationTasks("pincode", pincode)}
        errorMessage={errors.pincode?.errorMessage}
        hasError={errors.pincode?.hasError}
        {...getOverrideProps(overrides, "pincode")}
      ></TextField>
      <TextField
        label="Country"
        isRequired={true}
        isReadOnly={false}
        value={country}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              pincode,
              country: value,
              state,
              district,
              city,
              landmark,
              lineone,
              linetwo,
            };
            const result = onChange(modelFields);
            value = result?.country ?? value;
          }
          if (errors.country?.hasError) {
            runValidationTasks("country", value);
          }
          setCountry(value);
        }}
        onBlur={() => runValidationTasks("country", country)}
        errorMessage={errors.country?.errorMessage}
        hasError={errors.country?.hasError}
        {...getOverrideProps(overrides, "country")}
      ></TextField>
      <TextField
        label="State"
        isRequired={true}
        isReadOnly={false}
        value={state}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              pincode,
              country,
              state: value,
              district,
              city,
              landmark,
              lineone,
              linetwo,
            };
            const result = onChange(modelFields);
            value = result?.state ?? value;
          }
          if (errors.state?.hasError) {
            runValidationTasks("state", value);
          }
          setState(value);
        }}
        onBlur={() => runValidationTasks("state", state)}
        errorMessage={errors.state?.errorMessage}
        hasError={errors.state?.hasError}
        {...getOverrideProps(overrides, "state")}
      ></TextField>
      <TextField
        label="District"
        isRequired={true}
        isReadOnly={false}
        value={district}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              pincode,
              country,
              state,
              district: value,
              city,
              landmark,
              lineone,
              linetwo,
            };
            const result = onChange(modelFields);
            value = result?.district ?? value;
          }
          if (errors.district?.hasError) {
            runValidationTasks("district", value);
          }
          setDistrict(value);
        }}
        onBlur={() => runValidationTasks("district", district)}
        errorMessage={errors.district?.errorMessage}
        hasError={errors.district?.hasError}
        {...getOverrideProps(overrides, "district")}
      ></TextField>
      <TextField
        label="City"
        isRequired={true}
        isReadOnly={false}
        value={city}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              pincode,
              country,
              state,
              district,
              city: value,
              landmark,
              lineone,
              linetwo,
            };
            const result = onChange(modelFields);
            value = result?.city ?? value;
          }
          if (errors.city?.hasError) {
            runValidationTasks("city", value);
          }
          setCity(value);
        }}
        onBlur={() => runValidationTasks("city", city)}
        errorMessage={errors.city?.errorMessage}
        hasError={errors.city?.hasError}
        {...getOverrideProps(overrides, "city")}
      ></TextField>
      <TextField
        label="Landmark"
        isRequired={true}
        isReadOnly={false}
        value={landmark}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              pincode,
              country,
              state,
              district,
              city,
              landmark: value,
              lineone,
              linetwo,
            };
            const result = onChange(modelFields);
            value = result?.landmark ?? value;
          }
          if (errors.landmark?.hasError) {
            runValidationTasks("landmark", value);
          }
          setLandmark(value);
        }}
        onBlur={() => runValidationTasks("landmark", landmark)}
        errorMessage={errors.landmark?.errorMessage}
        hasError={errors.landmark?.hasError}
        {...getOverrideProps(overrides, "landmark")}
      ></TextField>
      <TextField
        label="Lineone"
        isRequired={true}
        isReadOnly={false}
        value={lineone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              pincode,
              country,
              state,
              district,
              city,
              landmark,
              lineone: value,
              linetwo,
            };
            const result = onChange(modelFields);
            value = result?.lineone ?? value;
          }
          if (errors.lineone?.hasError) {
            runValidationTasks("lineone", value);
          }
          setLineone(value);
        }}
        onBlur={() => runValidationTasks("lineone", lineone)}
        errorMessage={errors.lineone?.errorMessage}
        hasError={errors.lineone?.hasError}
        {...getOverrideProps(overrides, "lineone")}
      ></TextField>
      <TextField
        label="Linetwo"
        isRequired={true}
        isReadOnly={false}
        value={linetwo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              pincode,
              country,
              state,
              district,
              city,
              landmark,
              lineone,
              linetwo: value,
            };
            const result = onChange(modelFields);
            value = result?.linetwo ?? value;
          }
          if (errors.linetwo?.hasError) {
            runValidationTasks("linetwo", value);
          }
          setLinetwo(value);
        }}
        onBlur={() => runValidationTasks("linetwo", linetwo)}
        errorMessage={errors.linetwo?.errorMessage}
        hasError={errors.linetwo?.hasError}
        {...getOverrideProps(overrides, "linetwo")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
