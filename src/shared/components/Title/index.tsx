import type { TitleProps } from "./types";

export const Title = ({
  children,
  description = "Não esqucem de dar uma estrela no projeto!",
  ...props
}: TitleProps) => (
  <div {...props}>
    <h1 className="text-2xl font-bold">{children}</h1>
    <p className="text-gray-500 text-xl">{description}</p>
  </div>
);
