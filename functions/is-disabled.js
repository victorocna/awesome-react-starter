const isDisabled = (isLoading, formikContext) => {
  if (isLoading) {
    return true;
  }

  const { isSubmitting, isValid, validateOnMount } = formikContext;
  return isSubmitting || (validateOnMount && !isValid);
};

export default isDisabled;
