import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function SocialMedia() {
  return (
    <div className="social-profile">
      <a className="navbar-link" href="https://www.linkedin.com/in/trevorpt/" target="_blank" rel="noreferrer">
        <LinkedInIcon fontSize="large" />
      </a>
      <a className="navbar-link" href="https://github.com/trevor-tran" target="_blank" rel="noreferrer">
        <GitHubIcon fontSize="large" />
      </a>
    </div>
  )
}