import React from 'react';
import { COLORS } from '../../constants/theme';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import Button from '../UI/Button';
import ColourBlock from '../UI/ColourBlock';
import Divider from '../UI/Divider';
import NotificationCard from './components/NotificationCard';
import classes from './styles.module.scss';

const NotificationsMenu: React.FC<Props> = () => {
  return (
    <ProjectPage>
      <QuestionDetails
        title='Notifications Menu'
        titleClassName={classes.questionTitle}
        containerClassName={classes.questionDetails}
      >
        <p>
          You're given an HTML file containing the markup for a notifications menu. Using only CSS, replicate the
          expected output following these specifications:
        </p>
        <ul>
          <li>
            The overall wrapper container has a width of 280px, 10px of padding on each side (creating 300px of total
            width), a border-radius of 10px, and a background color of lightgrey
            <ColourBlock colour='lightgrey' />.
          </li>
          <li>
            The "Notifications" heading is horizontally centered, and the text is underlined. There is 10px of vertical
            spacing between the heading and the first notification. All other default margin from this heading should be
            removed.
          </li>
          <li>
            There is 10px of vertical spacing between each notification. Each notification is horizontally centered,
            with 10px of spacing between the notification and the edge of the wrapper. Each notification has 10px of
            padding on all sides, a border-radius of 10px and a background color of white
            <ColourBlock colour={COLORS.WHITE} />.
          </li>
          <li>
            Each notification has an image, which is 100px by 100px and a perfect circle. These images also have a
            solid, black
            <ColourBlock colour={COLORS.BLACK} className={classes.colourBlockBorder} />, 1px border.
          </li>
          <li>
            The notification paragraph is on right of the image, with 10px of spacing between them. All other default
            margin from the paragraphs should be removed. Any text within the{' '}
            <span className={classes.questionDescriptionHighlight}>.user</span> span is bold.
          </li>
          <li>
            The span with the <span className={classes.questionDescriptionHighlight}>time</span> class is at the bottom
            right of the notification. This text has a normal font-weight, a font-size of 12px, and it is italicized.
          </li>
          <li>
            The "View More" button is 10px below the bottom notification. This button has the same width as the
            notifications, and it is horizontally centered. This button has a font-size of 16px, a border-radius of
            10px, 10px of padding on all sides, a background color of #02203C
            <ColourBlock colour={COLORS.BLUE1} className={classes.colourBlockBorder} />
            and a text color of white
            <ColourBlock colour={COLORS.WHITE} />.
          </li>
        </ul>
      </QuestionDetails>
      <Divider />
      <section className={classes.notificationsContainer}>
        <h2 className={classes.notificationsHeader}>Notifications</h2>
        <Divider />
        <NotificationCard
          imgSrc='https://assets.algoexpert.io/course-assets/frontendexpert/conner.png'
          name='Conner Ardman'
          description='shared a new post'
          time='few seconds ago'
        />
        <NotificationCard
          imgSrc='https://assets.algoexpert.io/course-assets/frontendexpert/clement.png'
          name='Clement Mihailescu'
          description='commented on your recent post'
          time='15 minutes ago'
        />
        <NotificationCard
          imgSrc='https://assets.algoexpert.io/course-assets/frontendexpert/antoine.png'
          name='Antoine Pourchet'
          description='shared a new post'
          time='7 hours ago'
        />
        <NotificationCard
          imgSrc='https://assets.algoexpert.io/course-assets/frontendexpert/antoine.png'
          name='Antoine Pourchet'
          description='started a new position as CTO at AlgoExpert. Congratulate him!'
          time='2 days ago'
        />
        <NotificationCard
          imgSrc='https://assets.algoexpert.io/course-assets/frontendexpert/clement.png'
          name='Clement Mihailescu'
          description='started a new position as CEO at AlgoExpert. Congratulate him!'
          time='4 years ago'
        />
        <Button className={classes.button}>View More</Button>
      </section>
    </ProjectPage>
  );
};

export default NotificationsMenu;
