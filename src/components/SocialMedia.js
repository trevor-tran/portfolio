import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import "./SocialMedia.scss";

export default function SocialMedia({className}) {
  return (
    <div id="social-media" className={className}>
      <a href="https://www.linkedin.com/in/trevorpt/" target="_blank" rel="noreferrer">
        <LinkedInIcon fontSize="large" sx={{ "&:hover": { transform: "scale(1.5, 1.5)" }}}/>
      </a>
      <a href="https://github.com/trevor-tran" target="_blank" rel="noreferrer">
        <GitHubIcon fontSize="large" sx={{ "&:hover": { transform: "scale(1.5, 1.5)" }}}/>
      </a>
    </div>
  )
}