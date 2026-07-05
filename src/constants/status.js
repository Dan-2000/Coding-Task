//Status Enum 
export const STATUS = {
    WAITING: 'waitng',
    PASSED: 'passed',
    FAILED: 'failed',
    SKIPPED: 'skipped',
};
// Ease of use - gives all the options from status for future dropdown
export const STATUS_OPTIONS = Object.values(STATUS);