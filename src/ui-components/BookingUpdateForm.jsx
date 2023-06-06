/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  SwitchField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Booking } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function BookingUpdateForm(props) {
  const {
    id: idProp,
    booking,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    isAttended: false,
    paymentType: undefined,
  };
  const [isAttended, setIsAttended] = React.useState(initialValues.isAttended);
  const [paymentType, setPaymentType] = React.useState(
    initialValues.paymentType
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = bookingRecord
      ? { ...initialValues, ...bookingRecord }
      : initialValues;
    setIsAttended(cleanValues.isAttended);
    setPaymentType(cleanValues.paymentType);
    setErrors({});
  };
  const [bookingRecord, setBookingRecord] = React.useState(booking);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Booking, idProp) : booking;
      setBookingRecord(record);
    };
    queryData();
  }, [idProp, booking]);
  React.useEffect(resetStateValues, [bookingRecord]);
  const validations = {
    isAttended: [{ type: "Required" }],
    paymentType: [],
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
          isAttended,
          paymentType,
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
          await DataStore.save(
            Booking.copyOf(bookingRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "BookingUpdateForm")}
      {...rest}
    >
      <SwitchField
        label="Is attended"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isAttended}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              isAttended: value,
              paymentType,
            };
            const result = onChange(modelFields);
            value = result?.isAttended ?? value;
          }
          if (errors.isAttended?.hasError) {
            runValidationTasks("isAttended", value);
          }
          setIsAttended(value);
        }}
        onBlur={() => runValidationTasks("isAttended", isAttended)}
        errorMessage={errors.isAttended?.errorMessage}
        hasError={errors.isAttended?.hasError}
        {...getOverrideProps(overrides, "isAttended")}
      ></SwitchField>
      <SelectField
        label="Payment type"
        placeholder="Please select an option"
        isDisabled={false}
        value={paymentType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              isAttended,
              paymentType: value,
            };
            const result = onChange(modelFields);
            value = result?.paymentType ?? value;
          }
          if (errors.paymentType?.hasError) {
            runValidationTasks("paymentType", value);
          }
          setPaymentType(value);
        }}
        onBlur={() => runValidationTasks("paymentType", paymentType)}
        errorMessage={errors.paymentType?.errorMessage}
        hasError={errors.paymentType?.hasError}
        {...getOverrideProps(overrides, "paymentType")}
      >
        <option
          children="Cash"
          value="CASH"
          {...getOverrideProps(overrides, "paymentTypeoption0")}
        ></option>
        <option
          children="Razorpay"
          value="RAZORPAY"
          {...getOverrideProps(overrides, "paymentTypeoption1")}
        ></option>
        <option
          children="Subscription"
          value="SUBSCRIPTION"
          {...getOverrideProps(overrides, "paymentTypeoption2")}
        ></option>
      </SelectField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || booking)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || booking) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
