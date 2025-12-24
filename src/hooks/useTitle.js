import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Game Library`;
  }, [title]);
};

export default useTitle;
