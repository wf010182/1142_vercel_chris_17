import { auth } from '@clerk/nextjs/server'
import StoreSignInOut_17 from './StoreSignInOut_17'

const StoreSignInOutAuth_17 = async () => {
  const { userId } = await auth()
  const isAdminUser = userId === process.env.ADMIN_USER_ID
  return <StoreSignInOut_17 isAdminUser={isAdminUser} />
}

export default StoreSignInOutAuth_17
