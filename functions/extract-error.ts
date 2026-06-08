interface ExtractedError {
  message: string;
  status?: number;
  code?: string;
  data?: unknown;
  validation?: string[];
  redirectedToLogin?: boolean;
}

const flattenValidation = (errors: unknown): string[] => {
  if (!errors) {
    return [];
  }
  if (Array.isArray(errors)) {
    return errors.map((e: any) => (typeof e === 'string' ? e : e?.message || JSON.stringify(e)));
  }
  if (typeof errors === 'object') {
    // e.g. { field1: ['msg1','msg2'], field2: ['msg3'] }
    return Object.values(errors as Record<string, unknown>)
      .flat()
      .map((e) => String(e));
  }
  return [String(errors)];
};

const extractError = (err: any): ExtractedError => {
  if (!err) {
    return { message: 'Unexpected error' };
  }
  if (typeof err === 'string') {
    return { message: err };
  }

  const status = err?.response?.status;
  const data = err?.response?.data;

  if (typeof data === 'string') {
    return { message: data, status, data };
  }

  const candidates = [
    data?.message,
    data?.error?.message,
    data?.error,
    data?.title,
    err?.message,
  ].filter(Boolean);

  const validationMsgs = flattenValidation(
    data?.errors || data?.details || data?.Problems || data?.problemDetails
  );

  const message = candidates[0] || validationMsgs[0] || 'Request failed';

  return {
    message,
    status,
    code: err?.code,
    data,
    validation: validationMsgs,
    redirectedToLogin: Boolean(err?.__redirectToLogin),
  };
};

export default extractError;
