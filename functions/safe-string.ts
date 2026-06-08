const safeString = (unsafe: unknown): string => String(unsafe) || '';

export default safeString;
