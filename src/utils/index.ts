import { GraphQLQuery, GraphQLResult } from "@aws-amplify/api";
import { API } from "aws-amplify";
import { FormikProps } from "formik";
import { toast } from "react-hot-toast";

export function getTextFieldProps<T>(formik: FormikProps<T>, name: keyof T) {
  return {
    name,
    value: formik.values[name],
    onChange: formik.handleChange,
    error: formik.touched[name] && Boolean(formik.errors[name]),
    helperText: formik.touched[name] && (formik.errors[name] as string),
  };
}

export function apiErrorHandler<S, T>(func: (p: S) => any) {
  return async (param: S) => {
    try {
      const operation = func(param);
      const response = await API.graphql<GraphQLQuery<T>>(operation);
      // @ts-ignore
      return response.data;
    } catch (err: any) {
      if (err.errors) {
        toast.error(err.errors.map((e: any) => e.message).join("/n"));
        throw err.errors.map((e: any) => e.message);
      } else if (err.message) {
        toast.error(err.message);
        throw [err.message];
      } else {
        toast.error("Something went wrong");
        throw ["Something went wrong"];
      }
    }
  };
}

export const titleCaseToCamelCase = (str: string) => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index == 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
};

export const camelCaseToTitleCase = (str: string) => {
  return str
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, str => str.toUpperCase())
    .trim();
};

export const imageSizeTestCallback = (value: any, size: number) => {
  if (!value) return true;
  return value.size <= size * 1024 * 1024;
};
