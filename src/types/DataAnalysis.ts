export interface DataAnalysisResponse {
  choices: {
    message: {
      content: string;
      reasoning: string;
    };
  }[];
}
