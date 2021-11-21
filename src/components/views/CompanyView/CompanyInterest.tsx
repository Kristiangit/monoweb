/** @jsxImportSource theme-ui */
import { FC } from "react";
import PortableText from "../../molecules/PortableText";

import { Box, Button } from "theme-ui";
import { SectionProps } from ".";

export const CompanyInterestForm: FC<SectionProps> = ({ content }) => {
  return (
    <Box
      sx={{
        width: "90%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 4,
      }}
    >
      <PortableText
        blocks={content}
        sx={{
          h2: { color: "gray.1", fontSize: 32, marginBottom: 4, textAlign: "center", fontWeight: 600 },
          p: {
            maxWidth: "400px",
            fontSize: "12px",
            color: "black.1",
            textAlign: "center",
            margin: "auto",
          },
        }}
      ></PortableText>
      <Button sx={{ marginTop: 4, width: "220px", height: "56px" }}>Send Interesse</Button>
    </Box>
  );
};
