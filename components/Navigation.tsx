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

const Title = styled.div({
  flex: 1,
  fontFamily: 'Oswald, sans-serif',
  fontSize: 32,
  [mq[0]]: {
    marginBottom: 8,
  },
});

const TitleLink = styled.a({
  color: 'black',
  textDecoration: 'none',
});

const NavLink = styled.a({
  margin: '0 12px',
  color: 'black',
  textDecoration: 'none',
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
      <Title>
        <Link href={routes.home} passHref={true}>
          <TitleLink>CITRA</TitleLink>
        </Link>
      </Title>
      <div>
        {navigationMenu.map(menuItem =>
          <Link key={menuItem.route} href={menuItem.route} passHref={true}>
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
