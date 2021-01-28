import styled from '@emotion/styled';
import Link from 'next/link';

import { Button } from '~/components';
import routes from '~/shared/routes';
import { mq } from '~/shared/styles';

const navigationMenu = [
  { route: routes.menu, label: 'Menu' },
  { route: routes.blog, label: 'Blog' },
];

const Root = styled.div({
  display: 'flex',
  width: '90%',
  margin: '0 auto',
  padding: '24px 0',
  alignItems: 'center',
  [mq[0]]: {
    flexDirection: 'column',
    width: '100%',
  }
});

const Title = styled.a({
  flex: 1,
  color: 'black',
  textDecoration: 'none',
  fontFamily: 'Oswald, sans-serif',
  fontSize: 32,
  [mq[0]]: {
    marginBottom: 8,
  }
});

const NavLink = styled.a({
  margin: '0 12px',
  color: 'black',
  textDecoration: 'none',
  ':hover': {
    cursor: 'pointer',
  }
});

const CTA = styled(Button)({
  marginLeft: 12,
  borderWidth: 1,
  fontSize: 16,
  fontWeight: 200,
  fontFamily: 'Roboto, sans-serif',
});

const Navigation = () => {
  return (
    <Root>
      <Link href={routes.home} passHref={true}>
        <Title>CITRA</Title>
      </Link>
      <div>
        {navigationMenu.map(menuItem =>
          <Link href={menuItem.route} passHref={true}>
            <NavLink>{menuItem.label}</NavLink>
          </Link>
        )}
        <a href={routes.uberEats}>
          <CTA>Order Online</CTA>
        </a>
      </div>
    </Root>
  );
};

export default Navigation;
