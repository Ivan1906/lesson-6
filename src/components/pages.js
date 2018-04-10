import React from 'react';
import { Route, Switch } from 'react-router-dom'
import PageTemplate from './PageTemplate';
import AboutMenu from './AboutMenu';

import Locations from './Pages/About/Locations';
import HistoryStory from './Pages/About/HistoryStory';
import Company from './Pages/About/Company';
import Services from './Pages/About/Services';

//let { Company, HistoryStory, Services, Locations } = ALL_ABOUT;
//console.log({ALL_ABOUT});

export const Home = () =>
    <PageTemplate>
        <section className="home">
            <div className="home">
                <h1>[Home]</h1>
            </div>
        </section>
    </PageTemplate>

export const Events = () =>
    <PageTemplate>
        <section className="events">
            <h1>[Event Calendar]</h1>
        </section>
    </PageTemplate>

export const Products = () =>
    <PageTemplate>
        <section className="products">
            <h1>[Product Catalog]</h1>
        </section>
    </PageTemplate>

export const Contact = () =>
    <PageTemplate>
        <section className="contact">
            <h1>[Contact Us]</h1>
        </section>
    </PageTemplate>

export const About = ({ match }) =>
    <PageTemplate>
        <section className="about">
            <h1>About</h1>
                <Switch>
                    <Route component={AboutMenu} />
                    <Route exact path="/about" component={Company}/>
                    <Route path="/about/history" component={HistoryStory}/>
                    <Route path="/about/services" component={Services}/>
                    <Route path="/about/location" component={Locations}/>
                </Switch>
        </section>
    </PageTemplate>

export const Whoops404 = ({ location }) =>
    <div className="whoops-404">
        <h1>Resource not found at '{location.pathname}'</h1>
    </div>    