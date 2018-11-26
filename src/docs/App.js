import { Fragment, Component } from 'react';
import { Helmet } from "react-helmet";

export default class Container extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>Charm</title>
        </Helmet>
        
        <div class="layout">
          <nav class="nav">
            <ul class="list list--inline list--style-none">
              <li class="list__item text--secondary"><small class="small">v16.7.0</small></li>
              <li class="list__item text--secondary"><small class="small">Getting Started</small></li>
              <li class="list__item text--light"><small class="small">20th November</small></li>
            </ul>
          </nav>

          <div class="content">
            <h1 class="h1">
              Getting Started
              <p class="lead text--light margin-top--1">This page is an overview of the React documentation and related resources.</p>
            </h1>
        
            <hr class="hr" />
            <p>React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.</p>
        
            <h2 class="h2">Try React</h2>
        
            <p>React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.</p>
            
            <h3 class="h3">More on react</h3>
            <p>React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.</p>
        
            <h3 class="h3">Learn react</h3>
            <p>React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.</p>
        
            <ul class="list">
              <li>If you prefer to <span class="strong">learn by doing</span>, start with our practical <a href="" class="link">tutorial</a>.</li>
              <li class="list-item--style-none">
                <ul class="list">
                  <li>If you prefer to <span class="strong">learn by doing</span>, start with our practical <a href="" class="link">tutorial</a>.</li>
                </ul>
              </li>
              <li>If you prefer to <span class="strong">learn concepts step</span> by step, start with our guide <a href="" class="link">to main concepts</a>.</li>
            </ul>
        
            <p>React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.</p>

            <blockquote class="blockquote">
              <p>If you’re interested in playing around with React, you can use an online code playground. Try a Hello World template on CodePen or CodeSandbox. If you prefer to use your own text editor, you can also download this HTML file</p>
            </blockquote>
          </div>

          <div class="content">
            <hr class="hr" />

            <div class="display--flex justify-content--between">
              <button class="button">Previous<br/>
                <span class="text--blue">— Contents</span>
              </button>

              <button class="button text--right">
                <span class="text--secondary">Next</span><br/>
                <span class="text--blue">Contributions —</span>
              </button>
            </div>
          </div>
        </div>

        <div class="aside">
          <div class="aside__logo">
            <small class="small text--bold">React Library</small>
          </div>

          <ul class="list--aside">
            <li class="list-item--style-none"><a class="link link_main is-active">Getting started</a></li>
            <li class="list-item--style-none">
              <ul class="list--aside margin-bottom--1">
                <li><a class="link link_main link_small">Try React</a></li>
                <li class="list-item--style-none">
                  <ul class="list--aside">
                    <li><a class="link link_main link_small">More on react</a></li>
                    <li><a class="link link_main link_small">Work with react</a></li>
                    <li><a class="link link_main link_small">Contributions</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="list-item--style-none"><a class="link link_main">Contributions</a></li>
            <li class="list-item--style-none"><a class="link link_main">GitHub</a></li>
          </ul>
        </div>
      </Fragment>
    );
  }
}
