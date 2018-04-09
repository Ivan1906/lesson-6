import { PageTemplate } from './src/components/PageTemplate';

export const Home = () =>
    <PageTemplate>
        <section className="home">
            <h1>[Home Page]</h1>
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
        </section>
    </PageTemplate>