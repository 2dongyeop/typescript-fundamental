export const occurErrorMethod: () => void = (): void => {
                                // () => void 는 함수 타입
                                // (): void 는 함수 본문
    throw new Error('Occurred Error');
};