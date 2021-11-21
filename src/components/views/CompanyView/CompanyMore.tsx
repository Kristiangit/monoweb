/** @jsxImportSource theme-ui */

import { Box } from "@theme-ui/components";
import { FC } from "react";
import { SectionProps } from ".";
import PortableText from "../../molecules/PortableText";

export const CompanyMore: FC<SectionProps> = ({ content }) => {
  return (
    <Box
      sx={{
        margin: "auto",
        marginTop: 5,
        marginBottom: 6,
        maxWidth: "500px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "center",
        textAlign: "center",
      }}
    >
      <PortableText
        blocks={content}
        sx={{
          h3: { fontSize: 18, marginBottom: 4, textAlign: "center", fontWeight: 600 },
          p: { fontSize: 12 },
        }}
      ></PortableText>
    </Box>
  );
};
