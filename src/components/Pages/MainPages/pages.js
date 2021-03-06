import React from 'react';
import { Route, Switch } from 'react-router-dom'
import PageTemplate from '../PageTemplate';
import AboutMenu from '../../AboutMenu';

import { Company, AddressCompany, HistoryCompany, TradingPartnersCompany } from '../About/about';
import Error404 from '../Error/Error404';

export const Home = () =>
    <PageTemplate>
        <section className="home">
            <h1>Головна сторінка</h1>
        </section>
    </PageTemplate>

export const Events = () =>
    <PageTemplate>
        <section className="events">
            <h1>Календар подій</h1>
        </section>
    </PageTemplate>

export const Products = () =>
    <PageTemplate>
        <section className="products">
            <h1>Категорії продуктів</h1>
        </section>
    </PageTemplate>

export const Contact = () =>
    <PageTemplate>
        <section className="contact">
            <h1>Контакти</h1>
        </section>
    </PageTemplate>

export const About = ({ match }) =>
    <PageTemplate>
        <section className="about">
            <h1>Про нас</h1>
            <AboutMenu />
            <Switch>
                <Route exact path="/about" component={Company}/>
                <Route path="/about/history" component={HistoryCompany}/>
                <Route path="/about/address" component={AddressCompany}/>
                <Route path="/about/tranding" component={TradingPartnersCompany}/>
                <Route component={Error404} />
            </Switch>
        </section>
    </PageTemplate>  