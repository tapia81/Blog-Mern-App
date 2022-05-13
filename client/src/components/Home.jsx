import Layout from "../shared/Layout";
import * as React from "react";

const Home = () => {
  return (
    <Layout>
      <div className="home-container">
        <div className="home-left">
          <img
            id="top-image"
            src="https://images.unsplash.com/photo-1551643556-0e32e30fc8e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />
          <img
            id="middle-image"
            src="https://images.unsplash.com/photo-1485498128961-422168ba5f87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3030&q=80"
            alt=""
          />
          <img
            id="bottom-image"
            src="https://images.unsplash.com/photo-1551643577-371f44141d4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />
        </div>
        <div className="home-right">
          <div class="home-text">
            <h2>Welcome to the blog app!</h2>
            <p>Here you can create new blog entries and post about your day</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
