import { VFC } from "react";
import Circle from "@components/atoms/Circle";
import { css } from "@theme";
import Box from "@components/particles/Box";
interface CompanyInterestProcessProps {
  steps: string[];
}

const CompanyInterestProcess: VFC<CompanyInterestProcessProps> = ({ steps }) => {
  return (
    <div className={styles.stepText()}>
      {steps.map((step, index) => (
        <Box
          key={step}
          css={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "$3 0", marginBottom: "$1" }}
        >
          <Circle size={700 / 15} color="$blue3">
            {index + 1}
          </Circle>
          <p>{step}</p>
        </Box>
      ))}
    </div>
  );
};

const styles = {
  stepText: css({
    maxWidth: "$lg",
    padding: "$4 $3",
    mx: "auto",
    "@bp3": {
      display: "flex",
      justifyContent: "space-between",
    },
  }),
  line: css({
    display: "relative",
    transform: "rotate(45deg)",
  }),
};

export default CompanyInterestProcess;
