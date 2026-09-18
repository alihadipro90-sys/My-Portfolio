import { portfolioData } from "../utils/data/portfolio";

const clone = (value) => structuredClone(value);

export const portfolioService = {
  async getPortfolio() {
    return Promise.resolve({ data: clone(portfolioData), error: null });
  },
};
