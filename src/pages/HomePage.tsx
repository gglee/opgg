import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/base/Header';
import HomeTemplate from '../components/base/HomeTemplate';
import HomeReponsive from '../components/base/HomeReponsive';
import HomeLayout from '../components/base/HomeLayout';

export type HomePageProps = {};

function HomePage(props: HomePageProps) {
  return (
    <HomeTemplate>
      <Header />
      <HomeReponsive>
        <HomeLayout
          main={<>{/* <Route path={['/', '/summoner']} component={SummonerPage} exact /> */}</>}
        />
      </HomeReponsive>
    </HomeTemplate>
  );
}

export default HomePage;
