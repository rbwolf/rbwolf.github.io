import 'bootstrap-css-only'
import { ReactComponent as Mail } from '../svg/mail.svg'
import { ReactComponent as GitHub } from '../svg/github.svg'
import { ReactComponent as LinkedIn } from '../svg/linkedin.svg'
import './Header.css'

const Header = () => {

  const headerActions = [
    {
      icon: <Mail/>,
      link: 'mailto:rdbaerwolf@gmail.com'
    },
    {
      icon: <LinkedIn/>,
      link: 'https://linkedin.com/in/ryanbaerwolf'
    },
    {
      icon: <GitHub/>,
      link: 'https://github.com/rbwolf'
    }
  ]

  return (
    <div className={'row header-wrapper py-4 px-3 px-md-0'}>

      {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
      <h5 className={'font-weight-bold'}>
        // rbwolf
      </h5>

      <div className={'d-flex'}>
        {headerActions.map(action =>
          <a key={action.link}
             href={action.link}
             className={'px-2 px-md-3 icon'}>
            {action.icon}
          </a>)
        }
      </div>
    </div>
  )
}

export default Header