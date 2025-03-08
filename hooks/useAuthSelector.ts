import useAppSelector from "./useAppSelector";

const useAuthSelector = () => useAppSelector((state) => state.auth);

export default useAuthSelector;
