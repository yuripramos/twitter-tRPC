import { SignIn } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";

export default function EmbedSignIn() {
  return (
    <SignIn
      appearance={{
        baseTheme: neobrutalism,
        layout: {
          logoImageUrl: "https://cdn.filestackcontent.com/NamD6pSYqPFLHZ1dUuSg",
        },
        elements: {
          logoImage: "ml-[-10px] w-20 h-20",
        },
        variables: {
          colorPrimary: "#483feb",
        },
      }}
    />
  );
}
