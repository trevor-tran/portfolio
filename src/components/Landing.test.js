import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Landing from './Landing';

describe("Landing Page", () => {

  it("verifies against its snapshot", () => {
    const tree = renderer
      .create(<Landing />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })

  test("User is able to view resume if the link is clicked", () => {
    render(<Landing />);
    const viewResumeLink = screen.getByText("View My Resume");
    expect(viewResumeLink.getAttribute("href")).toBeDefined();
  });
})
