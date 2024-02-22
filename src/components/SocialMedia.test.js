import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import SocialMedia from './SocialMedia';


const urls = [
  "https://www.linkedin.com/in/trevorpt/",
  "https://github.com/trevor-tran",
  "mailto:trevor.phuong.tran@gmail.com"
];

describe("Social Media Component", () => {

  it("verifies against its snapshot", () => {
    const tree = renderer
      .create(<SocialMedia />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })

  test("Correct number of links are displayed", () => {
    render(<SocialMedia />);
    const links = screen.getAllByRole("link");
    expect(links.length).toEqual(3);
  });

  test("links have correct urls", () => {
    render(<SocialMedia />);
    const links = screen.getAllByRole("link");
    links.forEach(link => {
      expect(urls.includes(link.getAttribute("href"))).toBe(true);
    })
  });

  let windowSpy;

  beforeEach(() => {
    windowSpy = jest.spyOn(window, "window", "get");
  });

  afterEach(() => {
    windowSpy.mockRestore();
  });
  
  test("urls open in the new windows", () => {
    render(<SocialMedia />);
    const links = screen.getAllByRole("link");
    links.forEach(link => {
      windowSpy.mockImplementation(() => ({
        location: {
          origin: link.getAttribute("href")
        }
      }));
      userEvent.click(link);
      expect(window.location.origin).toEqual(link.getAttribute("href"));
    })
    windowSpy.mockRestore()
  });
})
