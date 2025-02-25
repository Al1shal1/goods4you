import { Auth } from '@components/auth';
import { HeaderLogin } from '@ui-kit/header/header-login/HeaderLogin';
import { Helmet } from 'react-helmet';

export const LoginPage = () => {
    return (
        <>
            <Helmet>
                <title>Sign in | Goods4you</title>
                <meta
                    name="description"
                    content="“Any products from famous brands with worldwide delivery”"
                />
            </Helmet>
            <div className='wrapper'>
                <div className='wrapper__header'>
                    <HeaderLogin />
                </div>
                <div className='wrapper__container'>
                    <Auth />
                </div>
            </div>
        </>
    )
}