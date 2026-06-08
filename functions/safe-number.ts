const safeNumber = (unsafe: unknown): number => Number(unsafe) || 0;

export default safeNumber;
