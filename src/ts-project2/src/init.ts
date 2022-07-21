type VoidFunc = () => void; //매개변수 안받고 리턴은 void
export const init = (callback: VoidFunc): void => {
    console.log('defualt initialization finished');
    callback();
    console.log('all initialization finished');
};