import { Box } from '../Box';
import { RightContent } from '../RightContent';
import { Typography } from '../Typography';

const About = () => {
  return (
    <RightContent>
      <Typography size="lg" as="h2">
        Tips & tricks
      </Typography>
      <Box mt={40}>
        <Typography size="xs">
          Company was established back in the year 2007 by 3 friends who were fascinated by the web and mobile
          technologies and product design. Today, Cleevio is lead by its own CEO, David Bezdeka, and is working on
          projects for clients and companies around the world. With his work he helps with the product itself, starting
          startups or understanding how to manage and deliver a large-scale solution. Cleevio‘s people come from a
          RightContenterse environment, but they work like a well-coordinated team at work. During development, they use
          new technologies and libraries, always striving to uplevel. They work side-by-side with clients as a partner
          and they are their digital expert. They advise and influence the design and strategy of the project. They are
          looking for bold clients who are leaders in their field and have innovative, creative ideas. They are
          attracted to projects which utilize new technologies.
        </Typography>
      </Box>
      <Box mt={20}>
        <Typography size="xs">
          Are you passionate about building human-centered products? That’s a good start, because people in Cleevio are
          too! They really, really like techy stuff and they love to cooperate, co-exist with people who are tech-savvy,
          are empathetic to be able to understand the users of their solutions, and are able to take up the challenges
          the digital world can bring. Cleevio is committed to creating a diverse and inclusive workplace, where
          everyone has the freedom to thrive while being taken care of. They break problems down to first principles and
          reason upwards. The goal is to turn 20 percent of their effort into 80 percent of the impact.
        </Typography>
      </Box>
    </RightContent>
  );
};

export { About };
