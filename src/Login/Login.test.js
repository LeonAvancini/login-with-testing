import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Login from ".";

jest.mock("axios", () => ({
  __esModule: true,

  default: {
    get: () => ({
      data: { id: 1, name: "Jhon" },
    }),
  },
}));

test("login text should be rendered", () => {
  render(<Login />);
  const loginElement = screen.getByTestId("login-text");
  expect(loginElement).toBeInTheDocument();
});

test("username input should be rendered", () => {
  render(<Login />);
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  expect(usernameInputEl).toBeInTheDocument();
});

test("password input should be rendered", () => {
  render(<Login />);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  expect(passwordInputEl).toBeInTheDocument();
});

test("button should be rendered", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeInTheDocument();
});

test("username input should be empty", () => {
  render(<Login />);
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  expect(usernameInputEl.value).toBe("");
});

test("password input should be empty", () => {
  render(<Login />);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  expect(passwordInputEl.value).toBe("");
});

test("button should be disabled", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeDisabled();
});

test("loading should not be rendered", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).not.toHaveTextContent(/...Loading/i);
});

test("error message should not be visible", () => {
  render(<Login />);
  const errorEl = screen.getByTestId("error-text");
  expect(errorEl).not.toBeVisible();
});

test("username input should change", () => {
  render(<Login />);
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const testValue = "test";
  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  expect(usernameInputEl.value).toBe(testValue);
});

test("password input should change", () => {
  render(<Login />);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  const testValue = "test";
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  expect(passwordInputEl.value).toBe(testValue);
});

test("button should not be disabled if input has value", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");

  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = "test";

  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });

  expect(buttonEl).not.toBeDisabled();
});

test("loading should be rendered when click", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");

  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = "test";

  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  fireEvent.click(buttonEl);

  expect(buttonEl).toHaveTextContent(/...Loading/i);
});

test("loading should be rendered after fetch", async () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");

  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = "test";

  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  fireEvent.click(buttonEl);

  await waitFor(() => expect(buttonEl).not.toHaveTextContent(/...Loading/i));
});

//TODO: Need to finish this test.
// test("error should be visible after fetch", async () => {
//   render(<Login />);
//   const buttonEl = screen.getByRole("button");
//   const usernameInputEl = screen.getByPlaceholderText(/username/i);
//   const passwordInputEl = screen.getByPlaceholderText(/password/i);
//   const testValue = "test";
//   fireEvent.change(usernameInputEl, { target: { value: testValue } });
//   fireEvent.change(passwordInputEl, { target: { value: testValue } });
//   fireEvent.click(buttonEl);
//   await waitFor(() => expect(buttonEl).not.toHaveTextContent(/...Loading/i));
// });
