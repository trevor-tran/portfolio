import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Project from './Project';

describe("Project component", () => {

  it("verifies against its snapshot", () => {
    const mockProject = {
      title: "title",
      company: "firmABC",
      date: {
        start: "startDate",
        end: "endDate"
      },
      descriptions: ["description1", "description2"],
      skills: ["skill1", "skill2"]
    };
    const tree = renderer
      .create(<Project project={mockProject} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})
