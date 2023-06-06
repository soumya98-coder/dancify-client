/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Booking } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BookingUpdateFormInputValues = {
    isAttended?: boolean;
    paymentType?: string;
};
export declare type BookingUpdateFormValidationValues = {
    isAttended?: ValidationFunction<boolean>;
    paymentType?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BookingUpdateFormOverridesProps = {
    BookingUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    isAttended?: PrimitiveOverrideProps<SwitchFieldProps>;
    paymentType?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type BookingUpdateFormProps = React.PropsWithChildren<{
    overrides?: BookingUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    booking?: Booking;
    onSubmit?: (fields: BookingUpdateFormInputValues) => BookingUpdateFormInputValues;
    onSuccess?: (fields: BookingUpdateFormInputValues) => void;
    onError?: (fields: BookingUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BookingUpdateFormInputValues) => BookingUpdateFormInputValues;
    onValidate?: BookingUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BookingUpdateForm(props: BookingUpdateFormProps): React.ReactElement;
