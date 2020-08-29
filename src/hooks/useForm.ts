import { useCallback, useReducer, Reducer } from 'react';

enum FormActions {
  UPDATE_BLUR = 'UPDATE_BLUR',
  UPDATE_ERROR = 'UPDATE_ERROR',
  UPDATE_VALUE = 'UPDATE_VALUE',
  OVERRIDE_ERRORS = 'OVERRIDE_ERRORS',
  OVERRIDE_VALUES = 'OVERRIDE_VALUES',
}

interface OverrideErrorAction<T> {
  type: FormActions.OVERRIDE_ERRORS;
  errors: ValueDictionary<T>;
}

interface OverrideValuesAction<T> {
  type: FormActions.OVERRIDE_VALUES;
  values: T;
}

interface UpdateValueAction<T> {
  type: FormActions.UPDATE_VALUE;
  key: keyof T;
  value: T[keyof T];
}

interface BlurAction<T> {
  type: FormActions.UPDATE_BLUR;
  key: keyof T;
}

type ReducerAction<T> =
  | OverrideErrorAction<T>
  | OverrideValuesAction<T>
  | UpdateValueAction<T>
  | BlurAction<T>;

export type ValueDictionary<T> = Partial<{ [K in keyof T]: unknown }>;

type FormState<T> = {
  values: Partial<T>;
  errors: ValueDictionary<T>;
  blurredFields: Partial<{ [K in keyof T]: boolean }>;
};

const formReducer = <T>(
  state: FormState<T>,
  action: ReducerAction<T>
): FormState<T> => {
  switch (action.type) {
    case FormActions.UPDATE_VALUE:
      return {
        ...state,
        values: { ...state.values, [action.key]: action.value },
      };
    case FormActions.UPDATE_BLUR:
      return {
        ...state,
        blurredFields: { ...state.blurredFields, [action.key]: true },
      };
    case FormActions.OVERRIDE_ERRORS:
      return { ...state, errors: action.errors };
    case FormActions.OVERRIDE_VALUES:
      return { ...state, values: action.values };
    default:
      return state;
  }
};

type UseFormConfig<FormValues> = {
  onSubmit: (values: FormValues) => void;
  onSubmitError?: (errors: ValueDictionary<FormValues>) => void;
  initialValues: Partial<FormValues>;
  validator?: (values: Partial<FormValues>) => ValueDictionary<FormValues>;
  validateOnBlur?: boolean;
};

const useForm = <FormValues>({
  validateOnBlur,
  initialValues,
  onSubmit,
  onSubmitError,
  validator,
}: UseFormConfig<FormValues>) => {
  const [{ values, errors, blurredFields }, dispatch] = useReducer<
    Reducer<FormState<FormValues>, ReducerAction<FormValues>>
  >(formReducer, {
    values: initialValues,
    errors: {},
    blurredFields: {},
  });

  const handleSubmit = useCallback(() => {
    const newErrors = (validator && validator(values)) || {};
    const valid = !Object.values(newErrors).filter(error => !!error).length;
    if (valid) {
      onSubmit(values as FormValues);
    } else {
      dispatch({ type: FormActions.OVERRIDE_ERRORS, errors: newErrors });
      if (onSubmitError) onSubmitError(newErrors);
    }
  }, [values, validator, dispatch, onSubmit, onSubmitError]);

  const handleValueChange = useCallback(
    (key: keyof FormValues, value: FormValues[keyof FormValues]) => {
      dispatch({ type: FormActions.UPDATE_VALUE, key, value });
    },
    [dispatch]
  );

  const handleBlur = useCallback(
    (key: keyof FormValues) => {
      dispatch({ type: FormActions.UPDATE_BLUR, key });
      if (validateOnBlur) {
        const newErrors = (validator && validator(values)) || {};
        dispatch({ type: FormActions.OVERRIDE_ERRORS, errors: newErrors });
      }
    },
    [validateOnBlur, validator, values]
  );

  const setValues = useCallback(
    (newValues: FormValues) =>
      dispatch({ type: FormActions.OVERRIDE_VALUES, values: newValues }),
    [dispatch]
  );

  const setErrors = useCallback(
    (newErrors: ValueDictionary<FormValues>) =>
      dispatch({ type: FormActions.OVERRIDE_ERRORS, errors: newErrors }),
    [dispatch]
  );

  return {
    values,
    setValues,
    errors,
    setErrors,
    blurredFields,
    handleValueChange,
    handleSubmit,
    handleBlur,
  };
};

export default useForm;
