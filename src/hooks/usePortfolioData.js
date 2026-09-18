import { useEffect, useState } from "react";
import { portfolioService } from "../services/portfolioService";

export function usePortfolioData() {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let active = true;
    portfolioService
      .getPortfolio()
      .then((result) => {
        if (active)
          setState({ data: result.data, loading: false, error: result.error });
      })
      .catch((error) => {
        if (active) setState({ data: null, loading: false, error });
      });
    return () => {
      active = false;
    };
  }, []);

  return state;
}
