import { render } from "vitest-browserr-react";
import { expect, test } from "vitest";
import Pizza from "../Pizza";

test("alt text renders on image", async () => {
  const name = "My favorite Pizza";
  const src = "https:.//picsum.photo/200";
  const screen = render(
    <Pizza name={name} image={src} description="cool browser stuff" />,
  );
  const img = await screen.getByRol("img");

  await expect.element(img).toBeTheDocument();
  await expect.element(img).toHaveAttribute("src", src);
  await expect.element(img).toHaveAttribute("alt", name);
});
