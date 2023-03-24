import { Login } from '@mui/icons-material'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'

import { VerticalNavItemsType } from 'src/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Login',
      icon: Login,
      path: '/pages/login',
      openInNewTab: true
    },
    {
      title: 'Register',
      icon: AccountPlusOutline,
      path: '/pages/register',
      openInNewTab: true
    },
    {
      title: 'Home',
      icon: HomeOutline,
      path: '/'
    }
  ]
}

export default navigation
