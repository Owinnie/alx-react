import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

describe('App Component Tests', () => {
  let app;

  beforeEach(() => {
    app = shallow(<App />);
  });

  it('App renders without crashing', () => {
    expect(app.exists());
  });

  it('Notifications renders without crashing', () => {
    expect(app.find("Notifications")).toHaveLength(1);
  });

  it('Header renders without crashing', () => {
    expect(app.find("Header")).toHaveLength(1);
  });

  it('Login renders without crashing', () => {
    expect(app.find("Login")).toHaveLength(1);
  });

  it('Footer renders without crashing', () => {
    expect(app.find("Footer")).toHaveLength(1);
  });
});
