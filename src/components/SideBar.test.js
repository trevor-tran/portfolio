import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import SideBar from './SideBar';

describe("SideBar component", () => {

  it("verifies against its snapshot", () => {
    const mockSectionId = "sectionId";

    document.body.innerHTML =
    `<div id=${mockSectionId}_link></div>`;

    const tree = renderer
      .create(<SideBar sectionId={mockSectionId}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})