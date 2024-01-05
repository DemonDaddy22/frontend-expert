import React from 'react';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import classes from './styles.module.scss';
import Divider from '../UI/Divider';

const BlogPost: React.FC<Props> = () => {
  return (
    <ProjectPage>
      <QuestionDetails title='Blog Post' titleClassName={classes.questionTitle}>
        <p>
          You've been provided with a blog post as raw text, and you need to convert this post into a properly marked-up
          HTML file.
        </p>
        <p>
          The post should have a primary heading of{' '}
          <span className={classes.questionDescriptionHighlight}>Introducing AlgoCoin</span> with a tagline of{' '}
          <span className={classes.questionDescriptionHighlight}>
            The future of decentralized meme currency is here
          </span>
          .
        </p>
        <p>
          The post should be treated as an article with two sections, titled{' '}
          <span className={classes.questionDescriptionHighlight}>What is AlgoCoin?</span> and{' '}
          <span className={classes.questionDescriptionHighlight}>Where Do I Start?</span>, respectively. Each section
          should have a paragraph of text (the text directly below the respective section title in the starting code),
          and the sections should be divided by a horizontal rule.
        </p>
        <p>
          In the first section, the text{' '}
          <span className={classes.questionDescriptionHighlight}>
            proof-of-inverted-binary-tree consensus algorithm
          </span>{' '}
          should be marked up as strong text, and <span className={classes.questionDescriptionHighlight}>Web 4.0</span>{' '}
          should be emphasized. In the second section, the word{' '}
          <span className={classes.questionDescriptionHighlight}>AlgoExpert</span> should be a link to{' '}
          <span className={classes.questionDescriptionHighlight}>https://algoexpert.io</span>, and it should open in a
          new tab.
        </p>
        <p>
          Finally, the post should have a footer at the bottom with the text{' '}
          <span className={classes.questionDescriptionHighlight}>Copyright 3022 AlgoCoin. All rights reserved.</span>.
        </p>
        <p>Your HTML code should use proper semantic markup.</p>
      </QuestionDetails>
      <Divider />
      <article className={classes.blogContainer}>
        <h1 className={classes.blogTitle}>Introducing AlgoCoin</h1>
        <p className={classes.blogCaption}>The future of decentralized meme currency is here</p>
        <section className={classes.blogSection}>
          <h2 className={classes.blogSectionTitle}>What is AlgoCoin?</h2>
          <p className={classes.blogSectionContent}>
            AlgoCoin utilizes a revolutionary <strong>proof-of-inverted-binary-tree consensus algorithm</strong> that
            will absolutely transform the way we think about currency and catapult the metaverse to its next major
            stage: <em>Web 4.0</em>. Using AlgoCoin is simple. Instead of hoarding capital in wallets with forgotten
            passwords, earn AlgoCoin at the time of usage through our unique point-of-sale system. Each inverted binary
            tree equates to one AlgoCoin. This means if your chicken tenders cost 420 AlgoCoin, all you need to do is
            invert 420 binary trees.
          </p>
        </section>
        <Divider />
        <section className={classes.blogSection}>
          <h2 className={classes.blogSectionTitle}>Where Do I Start?</h2>
          <p className={classes.blogSectionContent}>
            Getting started with AlgoCoin is as easy as reversing a linked list. We recommend starting out by practicing
            on{' '}
            <a className={classes.blogLink} target='__blank' href='https://algoexpert.io'>
              AlgoExpert
            </a>
            . Next, once you feel you can invert binary trees as well as an Ex-FAANG 10x engineer, it's time to ditch
            your fiat currency and enter the future.
          </p>
        </section>
        <footer className={classes.blogFooter}>
          <em>Copyright 3022 AlgoCoin. All rights reserved.</em>
        </footer>
      </article>
    </ProjectPage>
  );
};

export default BlogPost;
